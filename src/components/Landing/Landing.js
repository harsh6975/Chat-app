import { Link } from 'react-router-dom';


import style from './Landing.module.css';
import chat_app_logo from '../../images/chat-app-logo.webp';
import landing_side_illustration from '../../images/landing-side-illustration.webp';


function Landing() {
    return (
        <body>
            <div className={style.outer}>
                <div className={style.left_box}>
                    <div className={style.logo}>
                        <img className={style.logo_img} src={chat_app_logo} alt="chat-app-logo"/>
                    </div>
                    <div className={style.headline}>
                        <h1>The ultimate communication platform.</h1>
                    </div>
                    <div className={style.description}>
                        <p>Simple, reliable, private messaging and calling for free, available all over the world.</p>
                    </div>
                </div>
                <div className={style.right_box}>
                    <div>
                        <img className={style.landing_side_image} src={landing_side_illustration} alt="landing-side-illustration" />
                    </div>
                    <div className={style.get_started}>
                        <Link to={'/login'}> <button>Get started </button></Link>
                    </div>
                </div>
            </div>
        </body>
    );
}


export default Landing;
