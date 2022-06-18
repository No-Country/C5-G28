import UserModel from "../models/UserModel";
import RoleModel from "../models/RoleModel";
import "dotenv/config";
import jwt from "jsonwebtoken";
import { transporter } from "../libs/mailer";

// Sign Up
export const signUp = async (req, res) => {
  try {
    const { username, email, password, roles, bornDate, urlProfile } = req.body;

    const userExists = await UserModel.findOne({ email });

    if (userExists)
      return res.status(409).json({ message: "User aready exists" });

    const newUser = new UserModel({
      username,
      email,
      password: await UserModel.encryptPassword(password),
      urlProfile,
    });

    // Evaluo si el usuario tiene al menos 12 años
    const parsedBornDate = new Date(bornDate);

    const userAge = new Date().getFullYear() - parsedBornDate.getFullYear();
    if (userAge < 12)
      return res
        .status(400)
        .json({ message: "User must be over 12 years old" });

    // Inserto edad en la base
    newUser.bornDate = parsedBornDate.toISOString().split("T")[0];

    // Inserto roles (si no tiene niguno es user)
    if (roles) {
      const foundedRoles = await RoleModel.find({ name: { $in: roles } });
      newUser.roles = foundedRoles.map((role) => role._id);
    } else {
      const role = await RoleModel.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    // Creo token para confirmar correo
    const token = jwt.sign(
      {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: 86400,
      }
    );
    // Guardo el token en el usuario para despues comparar
    newUser.confirmToken = token;

    // Link de ruta front de confirm con el token
    const verificationLink = `${process.env.CONFIRM_USER_LINK}${token}`;

    const savedUser = await newUser.save();

    // Verification mail
    await transporter.sendMail({
      from: '"CONFIRM ACCOUNT" <juniorcoderbook@hotmail.com>', // sender address
      to: savedUser.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Have a good time with juniorcoderbook", // plain text body
      html: `<b>Please check the following link, or paste into your browser to complete the confirm process</b>
      <a href=${verificationLink}>${verificationLink}</a>`, // html body
    });

    return res.status(200).json({
      message: "Check your email for a link to confirm your account",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Somethin went wrong, try again" });
  }
};

// Sign In
export const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await UserModel.findOne({ email }).populate("roles");

    if (!userExists) return res.status(404).json({ message: "User not found" });

    if (!userExists.confirmedAccount)
      return res.status(400).json({ message: "No confirmed account" });
    console.log(userExists)
    const matchPassword = await UserModel.comparePassword(
      password,
      userExists.password
    );
    if (!matchPassword)
      return res
        .status(401)
        .json({ token: null, message: "Incorrect password" });

    const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });
    let urlProfile = userExists.urlProfile;
    let userName = userExists.username;
    let id = userExists.id;
    const bornDate = new Date(userExists.bornDate).toISOString().split('T')[0];
  

/*     return res.status(200).json({ token,userName,id,urlProfile,email,bornDate, message: "SignIn succesfully" }); */
    let preferences = userExists.preferences;
    
    return res.status(200).json({
      token,
      email,
      preferences,
      urlProfile,
      userName,
      id,
      bornDate,
      message: "SignIn succesfully",
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({ message: "Somethin went wrong, try again" });
  }
};

// Forgot password
export const forgotPassword = async (req, res) => {
  try {
    const { username } = req.body;

    // Solicitud de cambio de password
    if (!username)
      return res.status(400).json({ message: "Username is required" });

    const userExists = await UserModel.findOne({ username });

    if (!userExists)
      return res.status(404).json({ message: "User not exists" });

    const token = jwt.sign(
      {
        id: userExists._id,
        username: userExists.username,
        email: userExists.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "10m",
      }
    );

    // Generacion de ruta frontend para este usuario
    const verificationLink = `${process.env.RESET_PASSWORD_LINK}?confirm=${token}`;

    userExists.resetToken = token;

    await userExists.save();

    // Envio del email al usuario
    await transporter.sendMail({
      from: '"Forgot password 👻" <juniorcoderbook@hotmail.com>', // sender address
      to: userExists.email, // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Next time, write your password on paper or something like that jajaj", // plain text body
      html: `<b>Please check the following link, or paste into your browser to complete the process</b>
      <a href=${verificationLink}>${verificationLink}</a>`, // html body
    });

    return res.status(200).json({
      message: "Check your email for a link to reset your password",
    });
  } catch (error) {
    return res.status(400).json({ message: "Somethin went wrong, try again" });
  }
};

export const createNewPassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const resetToken = req.headers["reset-token"];

    if (!(newPassword && resetToken))
      return res.status(403).json({ message: "All the fields are required" });

    const decoded = jwt.verify(resetToken, process.env.JWT_SECRET);

    const userExists = await UserModel.findById(decoded.id);
    if (!userExists)
      return res.status(404).json({ message: "User not exists" });

    //Reviso que el token del usuario sea el mismo que me traen
    if (!(userExists.resetToken === resetToken))
      return res.status(400).json({
        message: "Wrong token",
      });

    // Elimino el token de la base de datos
    userExists.resetToken = undefined;

    // Reemplazo la contraseña
    userExists.password = await UserModel.encryptPassword(newPassword);

    await userExists.save();

    return res.status(200).json({ message: "Password changed succesfully" });
  } catch (error) {
    return res.status(400).json({ message: "Something went wrong, try again" });
  }
};

export const confirmAccount = async (req, res) => {
  try {
    const { confirmToken } = req.params;

    if (!confirmToken)
      return res.status(403).json({ message: "No token provided" });

    const decoded = jwt.verify(confirmToken, process.env.JWT_SECRET);

    const userExists = await UserModel.findById(decoded.id);
    if (!userExists)
      return res.status(404).json({ message: "User not exists" });

    if (!(userExists.confirmToken === confirmToken))
      return res.status(400).json({
        message: "Wrong token",
      });

    // Elimino el token de la base de datos
    userExists.confirmToken = undefined;

    // Evaluo si la cuenta ya esta verificada
    if (userExists.confirmedAccount === true)
      return res.status(400).json({ message: "Account already confirmed" });

    // Cambio el estado de la cuenta a cofirmado
    userExists.confirmedAccount = true;

    const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
      expiresIn: 86400,
    });

    // Guardo los datos actualizados
    await userExists.save();

    return res.status(200).json({ message: `Account confirmed` });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ message: "Something went wrong, try again" });
  }
};

export const edit = async(req,res) =>{
  let { _id,username, email } = req.body;
  console.log(_id,username,email)
  try {
    if (!username || !email) {
      return res.status(400).json({
        status: "error",
        message: "Complet username,email",
      });
    }
    let params = req.body;
    if (email) {
      await UserModel.findByIdAndUpdate(
        { _id: _id },
        params,
        { new: true },
        (error, postUpdated) => {
          console.log(error);
          if (error) {
            return res.status(500).send({
              status: "error",
              message: "error after update",
            });
          }
          return res.status(200).json({
            status: "succed",
            post: postUpdated,
          });
        }
      );
    } else {
      return res.status(200).send({
        status: "error",
        message: "validation not succed",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export const editProfile = async(req,res) =>{
  let { token,username, email } = req.body;
  
  try {
    const {id} = jwt.verify(token, process.env.JWT_SECRET);

       if (!username || !email ) {
          return res.status(400).json({
              status: 'error',
              message: "Complet username,email"
          });
      }
      let params = req.body;
      if(email ){
           UserModel.findByIdAndUpdate(
              {_id:id},
              params,
              {new:true},
              (error,postUpdated)=>{
                  if(error){
                      return res.status(500).send({
                          status:'error',
                          message:'error after update'
                      })
                  }
                  
                  return res.status(200).json({
                       status: 'succed', 
                       user:postUpdated 
                      });
              }
          )
      }else{
          return res.status(200).send({
              status:'error',
              message:'validation not succed'
          })
      } 
  } catch (error) {
    console.log('entro error')
      console.log(error)
  }
}
