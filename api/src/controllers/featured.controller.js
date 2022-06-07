import PostModel from "../models/PostModel";


export const featured =  (req,res) =>{
    let searchString = req.body.search;

     PostModel.find({
        $or:[
            {title:{$regex:searchString,$options:'i'}},
            {content:{$regex:searchString,$options:'i'}}
        ],
    })
    .sort([['date','ascending']])
    .exec((error,post)=>{
        if(error){
            return res.status(500).send({
                status:'error',
                message:'error'
            })
        }
        if(!post || post.length <= 5){
            return res.status(500).send({
                status:'result',
                message:'No results'
            })
        }
       // console.log(error,post)
       return res.status(200).send({
        status: 'success',
        post
    });
    })

}
