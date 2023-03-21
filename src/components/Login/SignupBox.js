import style from "./LoginBox.module.css";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import EmailIcon from "@mui/icons-material/Email";

function SignUp() {
  return (
    <div className={style.login_box}>
      <p className={style.form_name}>Sign Up</p>
      <form className={style.login_form}>
        <div className={style.controls}>
          <div className={style.controls_input}>
            <PersonIcon className={style.icon} />
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className={style.controls_input}>
            <EmailIcon className={style.icon} />
            <input type="email" id="email" placeholder="Email" />
          </div>
          <div className={style.controls_input}>
            <LockIcon className={style.icon} />{" "}
            <input type="password" id="password" placeholder="Password" />
          </div>
          <div className={style.controls_input}>
            <LockIcon className={style.icon} />{" "}
            <input
              type="text"
              id="confirm_password"
              placeholder="Confirm Password"
            />
          </div>
        </div>
        <div className={style.actions}>
          <div className={style.actions_submit}>
            <p>Sign Up</p>
          </div>
          <div className={style.actions_fg_pass}>
            <p>Already Account?</p>
          </div>
        </div>
      </form>

      <div className={style.social_login_box}>
        <p className={style.social_acc_heading}>Sign Up via social accounts</p>
        <div className={`${style.social_login} ${style.google}`}>
          <p>Sign Up via Google</p>
        </div>
        <div className={`${style.social_login} ${style.fb}`}>
          <p>Sign Up via Facebook</p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
