// import React,{useState} from 'react'
// import { Link,useNavigate } from 'react-router-dom'
// export default function Login() {
//   const [credentials,setcredentials] = useState({email:"",password:""})

//   let navigate=useNavigate()
//    const handleSubmit=async(e)=>{
//       e.preventDefault();
//       console.log(JSON.stringify({email:credentials.email,password:credentials.password}))
//       const response= await fetch("http://localhost:5000/api/loginuser",{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({email:credentials.email,password:credentials.password})
//       });
//       const json=await response.json()
//       console.log(json);
//       if(!json.success){
//         alert("Enter Valid Credentials")
//       }
//       if(json.success){
//         localStorage.setItem("userEmail",credentials.email);
//         localStorage.setItem("authToken",json.authToken);
//         console.log(localStorage.getItem("authToken"))
//         navigate("/");
//       }
//    }
//    const onChange=(event)=>{
//      setcredentials({...credentials,[event.target.name]:event.target.value})
//    }
//   return (
//     <div>
//        <div className='container'>
//       <form onSubmit={handleSubmit}>
  
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
//   </div>
//   <button type="submit" className="btn btn-success">Submit</button>
//   <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
// </form>
// </div>
//     </div>
//   )
// }



// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// export default function Login() {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });

//   let navigate = useNavigate();
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));
//     const response = await fetch("http://localhost:5000/api/loginuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ email: credentials.email, password: credentials.password })
//     });
//     const json = await response.json();
//     console.log(json);
//     if (!json.success) {
//       alert("Enter Valid Credentials");
//     }
//     if (json.success) {
//       localStorage.setItem("userEmail", credentials.email);
//       localStorage.setItem("authToken", json.authToken);
//       console.log(localStorage.getItem("authToken"));
//       navigate("/");
//     }
//   };
  
//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };
  
//   return (
//     <div 
//       style={{
//         backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center'
//       }}
//     >
//       <div className='container' 
//         style={{
//           maxWidth: '400px',
//           background: 'rgba(255, 255, 255, 0.8)',
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <h2 className='text-center mb-4' style={{ color: '#28a745' }}>Login</h2>
//           <div className="mb-3">
//             <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//             <input 
//               type="email" 
//               className="form-control" 
//               name='email' 
//               value={credentials.email} 
//               onChange={onChange} 
//               id="exampleInputEmail1" 
//               aria-describedby="emailHelp" 
//               required 
//             />
//             <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//           </div>
//           <div className="mb-3">
//             <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//             <input 
//               type="password" 
//               className="form-control" 
//               name='password' 
//               value={credentials.password} 
//               onChange={onChange} 
//               id="exampleInputPassword1" 
//               required 
//             />
//           </div>
//           <button type="submit" className="btn btn-success w-100">Login</button>
//           <Link to="/createuser" className='btn btn-danger w-100 mt-3'>I'm a new user</Link>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ email: credentials.email, password: credentials.password }));

    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);
    
    if (!json.success) {
      // If the backend returns a message, display it in the alert
      alert(json.message || "Enter Valid Credentials");
      return; // Early return to avoid further execution
    }

    // If login is successful
    localStorage.setItem("userEmail", credentials.email);
    localStorage.setItem("authToken", json.authToken);
    console.log(localStorage.getItem("authToken"));
    navigate("/"); // Redirect to home
  };
  
  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  
  return (
    <div 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <div className='container' 
        style={{
          maxWidth: '400px',
          background: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className='text-center mb-4' style={{ color: '#28a745' }}>Login</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control" 
              name='email' 
              value={credentials.email} 
              onChange={onChange} 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              required 
            />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control" 
              name='password' 
              value={credentials.password} 
              onChange={onChange} 
              id="exampleInputPassword1" 
              required 
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Login</button>
          <Link to="/createuser" className='btn btn-danger w-100 mt-3'>I'm a new user</Link>
        </form>
      </div>
    </div>
  );
}
