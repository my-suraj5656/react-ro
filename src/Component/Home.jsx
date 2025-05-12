// import React from 'react'
// import { useLocation, useNavigate } from 'react-router-dom'

// const Home = () => {
//   const navigate = useNavigate()
//   const location = useLocation()
//   console.log(location);

//   const gotopage = (path) =>{
//     navigate(path)
//   }
//   return (
//     <>
//     <h1>Home</h1>
//     <button onClick={()=> gotopage("/about")}>Go to about</button>
//     <button onClick={()=> gotopage("/filter")}>Go to Filter</button>
//     </>
//   )
// }

// export default Home
// import React, { useState } from "react";

// function FormWithValidation() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const [errors, setErrors] = useState({});
//   console.log(errors);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));

//     // Clear error on change
//     setErrors((prev) => ({
//       ...prev,
//       [name]: "",
//     }));
//   };

//   // Validation logic
//   const validate = () => {
//     const newErrors = {};
//     console.log(newErrors);

//     if (!formData.name.trim()) {
//       newErrors.name = "Name is required";
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!formData.age.trim()) {
//       newErrors.age = "Age is required";
//     } else if (isNaN(formData.age) || parseInt(formData.age) <= 0) {
//       newErrors.age = "Age must be a positive number";
//     }

//     return newErrors;
//   };

//   // Handle form submit
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate();

//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       alert("Form submitted successfully!");
//       console.log(formData);

//       // Optionally reset form
//       setFormData({ name: "", email: "", age: "" });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} noValidate>
//       <div>
//         <label>Name:</label>
//         <br />
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//         />
//         {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
//       </div>

//       <div>
//         <label>Email:</label>
//         <br />
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//         />
//         {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
//       </div>

//       <div>
//         <label>Age:</label>
//         <br />
//         <input
//           type="number"
//           name="age"
//           value={formData.age}
//           onChange={handleChange}
//         />
//         {errors.age && <span style={{ color: "red" }}>{errors.age}</span>}
//       </div>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default FormWithValidation;
import React, { useState } from "react";

function SimpleNameForm() {
  const [name, setName] = useState(""); // Store name input
  const [error, setError] = useState(""); // Store error message

  // When user types in input
  const handleChange = (event) => {
    setName(event.target.value);
    setError(""); // Clear error as user types
  };

  // When form is submitted
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh

    // Validation: check if name is empty
    if (name.trim() === "") {
      setError("Name is required");
    } else {
      alert("Form submitted successfully!");
      console.log("Name:", name);
      setName(""); // Reset input
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label><br />
      <input type="text" value={name} onChange={handleChange} />
      <br />
      {error && <span style={{ color: "red" }}>{error}</span>}
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default SimpleNameForm;
 

// import React, { useState } from 'react';

// function SimpleForm() {
//   // Step 1: State to store input values
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     age: ''
//   });

//   // Step 2: State to store error messages for each field
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//     age: ''
//   });

//   // Step 3: Handle input changes
//   const handleNameChange = (e) => {
//     setFormData({
//       ...formData,
//       name: e.target.value
//     });

//     // Clear the name error when user starts typing
//     setErrors({
//       ...errors,
//       name: ''
//     });
//   };

//   const handleEmailChange = (e) => {
//     setFormData({
//       ...formData,
//       email: e.target.value
//     });

//     // Clear the email error when user starts typing
//     setErrors({
//       ...errors,
//       email: ''
//     });
//   };

//   const handleAgeChange = (e) => {
//     setFormData({
//       ...formData,
//       age: e.target.value
//     });

//     // Clear the age error when user starts typing
//     setErrors({
//       ...errors,
//       age: ''
//     });
//   };

//   // Step 4: Validate input before submitting the form
//   const validateForm = () => {
//     let isValid = true;
//     let newErrors = { name: '', email: '', age: '' };

//     // Validate name
//     if (formData.name.trim() === '') {
//       newErrors.name = 'Name is required.';
//       isValid = false;
//     }

//     // Validate email
//     if (formData.email.trim() === '') {
//       newErrors.email = 'Email is required.';
//       isValid = false;
//     } else {
//       const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailPattern.test(formData.email)) {
//         newErrors.email = 'Email format is invalid.';
//         isValid = false;
//       }
//     }

//     // Validate age
//     if (formData.age.trim() === '') {
//       newErrors.age = 'Age is required.';
//       isValid = false;
//     } else {
//       const ageValue = parseInt(formData.age);
//       if (isNaN(ageValue) || ageValue <= 0) {
//         newErrors.age = 'Age must be a positive number.';
//         isValid = false;
//       }
//     }

//     // Set error messages
//     setErrors(newErrors);

//     return isValid;
//   };

//   // Step 5: Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent the default form submission behavior

//     const formIsValid = validateForm();

//     if (formIsValid) {
//       // If form is valid, show success message and clear inputs
//       alert('Form submitted successfully!');
//       console.log('Form Data:', formData);

//       // Clear the form fields
//       setFormData({ name: '', email: '', age: '' });
//       setErrors({ name: '', email: '', age: '' });
//     } else {
//       // If form is not valid, errors will be displayed
//       console.log('Form has errors. Fix them before submitting.');
//     }
//   };

//   // Step 6: Render the form
//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>User Form</h2>
//       <form onSubmit={handleSubmit}>
//         {/* Name Field */}
//         <div style={{ marginBottom: '10px' }}>
//           <label>Name:</label><br />
//           <input
//             type="text"
//             value={formData.name}
//             onChange={handleNameChange}
//           />
//           <div style={{ color: 'red' }}>{errors.name}</div>
//         </div>

//         {/* Email Field */}
//         <div style={{ marginBottom: '10px' }}>
//           <label>Email:</label><br />
//           <input
//             type="text"
//             value={formData.email}
//             onChange={handleEmailChange}
//           />
//           <div style={{ color: 'red' }}>{errors.email}</div>
//         </div>

//         {/* Age Field */}
//         <div style={{ marginBottom: '10px' }}>
//           <label>Age:</label><br />
//           <input
//             type="text"
//             value={formData.age}
//             onChange={handleAgeChange}
//           />
//           <div style={{ color: 'red' }}>{errors.age}</div>
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// }

// export default SimpleForm;
