import React from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import "../styles/notification.module.css"

function Notification() {
    return (
        <>
            <section className="  my-containter" >
                <div className="container">
                    <div className="row justify-content-center d-flex ">
                        <ul className="col-md-12 col-lg-10 bg-color  mt-4 ">
                            <li className="p-6 p-md-3 justify-content-center">
                                {/* --- aca va map con axios ---*/}

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Notification;
