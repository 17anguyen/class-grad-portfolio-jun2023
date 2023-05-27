import React from 'react';


export default function Contact() {
    return (
        //contact form with email and text area validation
        <div className="container-fluid mt-5 vh-100">

            <div className="row justify-content-center mt-5">
                <div className="col-sm-6 mb-3 mb-sm-0">
                    <div className="card card-size mb-2">
                        <div className="card-header">
                            <h3>Contact Me!</h3>
                        </div>
                        <div className="card-body">
                            <form action="" id="login-form" className="comment-form">
                                <input className="form-control mb-1" type="text" placeholder="email" id="login-username" />
                                <textarea className="form-control mb-1" type="password" placeholder="your text here" id="login-password" />
                                <button className="btn btn-secondary form-control mt-2 mb-1">Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}