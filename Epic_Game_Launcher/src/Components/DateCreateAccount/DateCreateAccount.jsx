import React, { useState } from 'react'
import Styles from "../DateCreateAccount/DateCreateAccount.module.css"
import { Link } from 'react-router-dom';
import Logo from "../../assets/Logo.jpg"

const DateCreateAccount = () => {


    const [dob, setDob] =  useState({ month: '', day: '', year: '' });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setDob((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const isFormValid = dob.month && dob.day && dob.year;
  
    const handleSubmit = () => {
    //   if (isFormValid) {
    //     // console.log(Date of Birth: ${dob.month}/${dob.day}/${dob.year});
    //     // Add your form submission logic here
    //   } else {
    //     alert('Please fill out all fields.');
    //   }
    };


  return (
    <div className={Styles.datecontainer}>
    
      <div className={Styles.contai}>
        <img src={Logo} alt="" className={Styles.imag} />
        <h1 className={Styles.hhh1}>Create Account</h1>
        <span className={Styles.parg}>Please enter your date of birth. This is to help you have a safe and fun experience whatever your age.</span>

        <label htmlFor="" className={Styles.dob}>Date of birth</label>


        <div className={Styles.selcontainer} >
        <select className={Styles.selectdob} name="month" value={dob.month} onChange={handleChange}>
          <option className={Styles.opt} value="">Month</option>
          {Array.from({ length: 12 }, (_, i) => (
            <option className={Styles.opt} key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select className={Styles.selectdob}  name="day" value={dob.day} onChange={handleChange}>
          <option value="">Day</option>
          {Array.from({ length: 31 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select className={Styles.selectdob}  name="year" value={dob.year} onChange={handleChange}>
          <option value="">Year</option>
          {Array.from({ length: 100 }, (_, i) => (
            <option key={i} value={2025 - i}>
              {2025 - i}
            </option>
          ))}
        </select>
      </div>

      <button className={Styles.continue} onClick={handleSubmit} >
        Continue
      </button>
       <span className={Styles.acc}>Alredy have an account? <Link className={Styles.lin}>Sign in</Link></span>
       <Link className={Styles.lin}>Privacy Policy</Link>
      </div>







    </div>
  )
}

export default DateCreateAccount



// import React, { useState } from 'react';

// function CreateAccount() {
//   const [dob, setDob] = useState({ month: '', day: '', year: '' });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDob((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const isFormValid = dob.month && dob.day && dob.year;

//   const handleSubmit = () => {
//     if (isFormValid) {
//       console.log(Date of Birth: ${dob.month}/${dob.day}/${dob.year});
//       // Add your form submission logic here
//     } else {
//       alert('Please fill out all fields.');
//     }
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
//       <h1>Create Account</h1>
//       <p>Please enter your date of birth. This is to help you have a safe and fun experience whatever your age.</p>
//       <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
//         <select name="month" value={dob.month} onChange={handleChange}>
//           <option value="">Month</option>
//           {Array.from({ length: 12 }, (_, i) => (
//             <option key={i + 1} value={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select>
//         <select name="day" value={dob.day} onChange={handleChange}>
//           <option value="">Day</option>
//           {Array.from({ length: 31 }, (_, i) => (
//             <option key={i + 1} value={i + 1}>
//               {i + 1}
//             </option>
//           ))}
//         </select>
//         <select name="year" value={dob.year} onChange={handleChange}>
//           <option value="">Year</option>
//           {Array.from({ length: 100 }, (_, i) => (
//             <option key={i} value={2025 - i}>
//               {2025 - i}
//             </option>
//           ))}
//         </select>
//       </div>
//       <button onClick={handleSubmit} disabled={!isFormValid}>
//         Continue
//       </button>
//       <p>
//         Already have an account? <a href="/signin">Sign in</a>
//       </p>
//       <p>
//         <a href="/privacy-policy">Privacy Policy</a>
//       </p>
//     </div>
//   );
// }

// export default CreateAccount;