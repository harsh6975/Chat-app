import { useState } from 'react';

import style from './RightBox.module.css'
import Login from './LoginBox';
import SignUp from './SignupBox';


function RightBox() {

    const [toggleState, setToggleState] = useState(true);
    const [isLoginActive, setIsLoginActive] = useState(true);

    function changeToggleState(toggle) {
        setToggleState(toggle);
        setIsLoginActive(toggle);
    }

    return (
        <div className={style.right_box }>
            <div className={style.login_signup_toggle}>
                <div className={`${style.login_toggle} ${isLoginActive ? style.bg_red : style.bg_grey}`}>
                    <p onClick={()=>changeToggleState(true)} className={style.login_toggle_btn}>Sign In</p>
                </div>
                <div className={`${style.signup_toggle} ${!isLoginActive ? style.bg_red : style.bg_grey}`}>
                    <p onClick={()=>changeToggleState(false)} className={style.signup_toggle_btn}>Sign Up</p>
                </div>
            </div>
            {
                toggleState && <Login></Login>

            }
            {
                !toggleState && <SignUp></SignUp>
            }
        </div>
    );
}


export default RightBox;