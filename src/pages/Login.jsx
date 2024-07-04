import "../sass/login.scss";
import { HiOutlineUserCircle, HiOutlineLogout } from "react-icons/hi"

const Login = () => {
    return (
        <div className="loginContainer">
            <div className="svgContainer">
                <img src="assets\images\undraw_people_re_8spw.svg" alt="people" />
            </div>
            <div className="formContainer">
                <div className="formBox">
                    <div className="formHeader">LOGIN
                    </div>
                    <form>
                        <div className="formGroup">
                            <div>
                                <div className="wrapContainer">
                                    <label className="textForm">USUARIO</label>
                                    <input className="inputField" placeholder="Email address" type="email" />
                                </div>
                                <div className="wrapContainer">
                                    <label className="textForm">CONTRASEÑA</label>
                                    <input className="inputField" placeholder="Password" type="password" />
                                </div>
                                <div className="buttonGroup">
                                    <button className="loginButton" type="submit">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="buttonIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                        </svg> LOGIN
                                    </button>
                                    <button className="signupButton">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="buttonIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                        </svg> SING-UP
                                    </button>
                                </div>
                                <div className="dividerGroup">
                                <div className="divider"></div>
                                <span className="dividerText">or</span>
                                    <div className="divider"></div>
                                </div>
                                <div className="socialButtonGroup">
                                    <button className="socialButtonBase googleButton" onClick={() => { window.open('https://accounts.google.com/', '_blank'); }}>
                                        <svg aria-hidden="true" role="img" className="buttonIconSocial" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><g fill="none"><path fillRule="evenodd" clipRule="evenodd" d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm.14 19.018c-3.868 0-7-3.14-7-7.018c0-3.878 3.132-7.018 7-7.018c1.89 0 3.47.697 4.682 1.829l-1.974 1.978v-.004c-.735-.702-1.667-1.062-2.708-1.062c-2.31 0-4.187 1.956-4.187 4.273c0 2.315 1.877 4.277 4.187 4.277c2.096 0 3.522-1.202 3.816-2.852H12.14v-2.737h6.585c.088.47.135.96.135 1.474c0 4.01-2.677 6.86-6.72 6.86z" fill="currentColor" /></g></svg>
                                        Sign-in with Google
                                    </button>
                                    <button className="socialButtonBase facebookButton" onClick={() => { window.open('https://www.facebook.com/', '_blank'); }}>
                                        <svg aria-hidden="true" role="img" className="buttonIconSocial" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024"><path d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-92.4 233.5h-63.9c-50.1 0-59.8 23.8-59.8 58.8v77.1h119.6l-15.6 120.7h-104V912H539.2V602.2H434.9V481.4h104.3v-89c0-103.3 63.1-159.6 155.3-159.6c44.2 0 82.1 3.3 93.2 4.8v107.9z" fill="currentColor" /></svg>
                                        Sign-in with Facebook
                                    </button>
                                </div>
                                <div className="forgotPassword">
                                    <a href="#">Forgot password</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="footerText">© AIRTRIP 2024</div>
            </div>
        </div>
    );
}

export default Login;
