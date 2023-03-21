import style from "./LoginBox.module.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login() {
  return (
    <div className={style.login_box}>
      <p className={style.form_name}>Sign In</p>
      <form className={style.login_form}>
        <div className={style.controls}>
          <div className={style.controls_input}>
            <PersonIcon className={style.icon}/>
            <input type="text" id="email" placeholder="Enter your email" />
          </div>
          <div className={style.controls_input}>
            <LockIcon className={style.icon} />{" "}
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className={style.actions}>
          <div className={style.actions_submit}>
            <p>Login</p>
          </div>
          <div className={style.actions_fg_pass}>
            <p>Forgot Password?</p>
          </div>
        </div>
      </form>

      <div className={style.social_login_box}>
        <p className={style.social_acc_heading}>Login via social accounts</p>
        <div className={`${style.social_login} ${style.google}`}>
          <p>Login via Google</p>
        </div>
        <div className={`${style.social_login} ${style.fb}`}>
          <p>Login via Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default Login;
