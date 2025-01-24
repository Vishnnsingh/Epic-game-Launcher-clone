import React from 'react'
import Facebook from "../../../assets/Facebook.jpg"
import Logo from "../../../assets/Logo.jpg"
import Google from "../../../assets/Google.jpg"
import Xbox from "../../../assets/Xbox.png"
import Apple from "../../../assets/Apple.png"
import Lego from "../../../assets/Lego.png"
import Playstation from "../../../assets/Playstation.png"
import Steam from "../../../assets/Steam.jpg"
import Nintendo from "../../../assets/Nintendo.png"
import Style from "../Login/Login.module.css"
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
    <section className={Style.bodyconainer}>
     <div className={Style.conatiner}>
       <img className={Style.logo} src={Logo} alt="Logo"  />
       <h2 className={Style.Signin}>Sign In</h2>
       <form action="" className={Style.for}>
        <label htmlFor="" id='email'className={Style.lab}>Email Address</label>
        <input type="text" placeholder='@gamil.com' className={Style.inp}/>

        <label htmlFor="" id='password' className={Style.lab}>Password</label>
        <input type="password" placeholder='password' className={Style.inp}/>
         <Link className={Style.lin}>Forgot password?</Link>

         <button className={Style.sign}>Sign in</button>
       </form>

       <h4 className={Style.h4h}> <span className={Style.dot}></span> --------------------------- or sign in with ----------------------------<span className={Style.dot}></span></h4>
       <div>
        <ul className={Style.gridcontainer}>
          <li className={Style.gridiitem}><Link><img src={Xbox} alt="" /></Link></li>
          <li className={Style.gridiitem}><Link><img src={Playstation} alt="" /></Link></li>
          <li className={Style.gridiitem}><Link><img src={Nintendo} alt="" /></Link></li>
          <li className={Style.gridiitem}><Link><img src={Steam} alt="" /></Link></li>
          <li className={Style.gridiitem}><Link><img src={Facebook} alt="" /></Link></li>
          <li className={Style.gridiitem}><Link><img src={Google} alt="" /></Link></li>
          <li className={Style.gridiitem}><Link><img src={Apple} alt="" /></Link></li>
          <li className={Style.gridiitem}><Link><img src={Lego} alt="" /></Link></li>
        </ul>
       </div>
       <button className={Style.show}>Show more</button>

       <h5 className={Style.h5h}>Don't have an account?</h5>
       <div className={Style.createaccount}>
       <Link className={Style.lin}>Create account</Link>
        <span className={Style.or}>or</span>
        <Link className={Style.lin}>sign in later</Link>
       </div>

       <Link className={Style.privacy} >Privacy Policy</Link>
     </div>

     </section>
    </>
  )
}

export default Login
