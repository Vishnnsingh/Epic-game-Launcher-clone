import React, { useState } from 'react'
import Styles from "../Register/Register.module.css"
import Logo from "../../assets/Logo.jpg"
import { Link } from 'react-router-dom';

const Register = () => {

    const [formData, setFormData] = useState({
        country: "",
        email: "",
        firstName: "",
        lastName: "",
        displayName: "",
        password: "",
        agreeTerms: false,
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data: ", formData);
      };




  return (
    
    
    <div className={Styles.registercont}>

      <div className={Styles.constiners} >

        <img src={Logo} alt="" className={Styles.loggo} />

        <h2 className={Styles.h2hh} >Create Account</h2>

        <form className={Styles.forr} onSubmit={handleSubmit}>
          <div className={Styles.divv2} >

            <label className={Styles.lab} >Country</label>

            <select className={Styles.sell}
              name="country"
              value={formData.country}
              onChange={handleChange}
              
            >
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          <div className={Styles.divv3} >
            <label className={Styles.lab2} >Email Address</label>
            <input
              className={Styles.inp2}
              name="email"
              type="email"
            //   placeholder="Enter your email"
              required
              value={formData.email}
              onChange={handleChange}
              
            />
          </div>

          <div className={Styles.divv4} >

            <div className={Styles.divv5} >
              <label className={Styles.lab3} >First Name</label>
              <input
                name="firstName"
                // placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className={Styles.inp3}
              />
            </div>
            <div className={Styles.divv5}>

              <label className={Styles.lab3}>Last Name</label>
              <input
                name="lastName"
                // placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className={Styles.inp3}
              />
            </div>
          </div>

          <div className={Styles.divv3}>

            <label className={Styles.lab2}>Display Name</label>
            <div className={Styles.divv6} >
              <input
                name="displayName"
                // placeholder="Choose a display name"
                value={formData.displayName}
                onChange={handleChange}
                className={Styles.inp3}
              />
              <span
                className={Styles.spn}
                title="Your display name must be between 3 and 16 characters and may contain letters, numbers, and non-consecutive dashes, periods, underscores, and spaces."
              >
                &#9432;
              </span>
            </div>
          </div>

          <div className={Styles.divv3}>
            <label className={Styles.lab2}>Password</label>
            <div className={Styles.divv6}>
              <input
                name="password"
                type="password"
                // placeholder="Enter a secure password"
                value={formData.password}
                onChange={handleChange}
                className={Styles.inp3}
                
              />
              <span

              className={Styles.spn}
                title="Show Password"
              >
                &#128065;
              </span>
            </div>
          </div>

          <div className={Styles.divv7} >
            <input
              name="agreeTerms"
              type="checkbox"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className={Styles.inp4}
            />
            <label className={Styles.lab4} >
              I have read and agree to the
              <a
                href="#"  
                className={Styles.aa}
              >
                Terms of Service
              </a>
            </label>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              height:"2.8rem",
              padding: "10px",
              borderRadius: "10px",
              backgroundColor: formData.agreeTerms ? "#007bff" : "#434347",
              color: "#1d1d21",
              fontSize: "medium",
              border: "none",
              cursor: formData.agreeTerms ? "pointer" : "not-allowed",
            }}
            disabled={!formData.agreeTerms}
          >
            Continue
          </button>
        </form>

        <span className={Styles.acc}>Alredy have an account? <Link className={Styles.lin}>Sign in</Link></span>
       <Link className={Styles.lin}>Privacy Policy</Link>

       
      </div>

    </div>



    
  )
}

export default Register
