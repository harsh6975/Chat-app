import RightBox from "./RightBox";

import style from './LoginPage.module.css';

import login_img from "../../images/codebook_login_image.png";

function LoginPage() {
    return (
        <body>
            <div className={style.outer}>
                <div className={style.left_box}>
                    <img className={style.left_img} src= {login_img} alt="login_page_img" />
                </div>
                <RightBox />
            </div>
        </body>
    );
}


export default LoginPage;