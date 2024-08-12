import React, { useState } from 'react'
import "./Login.css"
import login_bg from "../assets/login_bg.png"
import login_bg_2 from "../assets/login_bg_2.png"

const Login = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleToggle = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className='main_login_div'>
            <img className="login_bg" src={login_bg}></img>
            <div className='login_box'>

                <div className='login_box_left' >
                    <img src={login_bg_2} className='login_bg_2'></img>

                </div>
                <div className='login_box_right'>
                    <div className='toggle_bar'>

                        <button onClick={handleToggle} className={isLogin ? 'active' : ''}>
                            Login
                        </button>
                        <button onClick={handleToggle} className={!isLogin ? 'active' : ''}>
                            Registration
                        </button>


                    </div>
                    {isLogin ? (
                        <>
                            <h1 className='wlc'>Welcome</h1>
                            <p className='pls'>Please login to your account</p>
                            <form>
                                <label for="email_id">Email</label>
                                <input type='email' id='email_id'></input>
                                <label for="pass_id">Password</label>
                                <input type='password' id='pass_id'></input>

                            </form>
                            <a href='#'>Forget Password?</a>
                            <button className='ok_btn'>Ok</button>
                        </>
                    ) : (
                        <>
                            <h1 className='wlc'>Register</h1>
                            <p className='pls'>Please create a new account</p>
                            <form>
                            <label for="username_id">Username</label>
                            <input type='text' id='username_id'></input>
                                <label for="email_id">Email</label>
                                <input type='email' id='email_id'></input>
                                <label for="pass_id">Password</label>
                                <input type='password' id='pass_id'></input>

                            </form>
                            <button className='reg_btn'>Register</button>
                        </>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Login