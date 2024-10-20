// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'

// export default function Signup() {
//    const [credentials,setcredentials] = useState({name:"",email:"",password:"",geolocation:""})


//    const handleSubmit=async(e)=>{
//       e.preventDefault();
      
//       console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
//       const response= await fetch("http://localhost:5000/api/createuser",{
//         method:'POST',
//         headers:{
//             'Content-Type':'application/json'
//         },
//         body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
//       });
//       const json=await response.json()
//       console.log(json);
//       if(!json.success){
//         alert("Enter Valid Credentials")
//       }
//    }
//    const onChange=(event)=>{
//      setcredentials({...credentials,[event.target.name]:event.target.value})
//    }

//   return (
//     <>
//     <div className='container'>
//       <form onSubmit={handleSubmit}>
//   <div className="mb-3">
//     <label htmlFor="name" className="form-label">Name</label>
//     <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChange}/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
//     <input type="email" className="form-control" name='email' value={credentials.email} onChange={onChange} id="exampleInputEmail1" aria-describedby="emailHelp"/>
//     <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
//     <input type="password" className="form-control" name='password' value={credentials.password} onChange={onChange} id="exampleInputPassword1"/>
//   </div>
//   <div className="mb-3">
//     <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
//     <input type="text" className="form-control" name='geolocation' value={credentials.geolocation} onChange={onChange}  id="exampleInputPassword1"/>
//   </div>
//   <button type="submit" className="btn btn-success">Submit</button>
//   <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
// </form>
// </div>
//     </>
//   )
// }



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// export default function Signup() {
//   const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }));

//     const response = await fetch("http://localhost:5000/api/createuser", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
//     });

//     const json = await response.json();
//     console.log(json);
//     if (!json.success) {
//       alert("Enter Valid Credentials");
//     }
//   };

//   const onChange = (event) => {
//     setCredentials({ ...credentials, [event.target.name]: event.target.value });
//   };

//   return (
//     <div 
//       style={{
//         backgroundImage: 'url("https://images.unsplash.com/photo-1533777324565-a040eb52fac1?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")',
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
//           background: 'rgba(255, 255, 255, 0.85)',
//           padding: '20px',
//           borderRadius: '10px',
//           boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
//         }}
//       >
//         <form onSubmit={handleSubmit}>
//           <h2 className='text-center mb-4' style={{ color: '#28a745' }}>Sign Up</h2>
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label">Name</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               name='name' 
//               value={credentials.name} 
//               onChange={onChange} 
//               required 
//             />
//           </div>
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
//           <div className="mb-3">
//             <label htmlFor="geolocation" className="form-label">Address</label>
//             <input 
//               type="text" 
//               className="form-control" 
//               name='geolocation' 
//               value={credentials.geolocation} 
//               onChange={onChange} 
//               id="geolocation" 
//               required 
//             />
//           </div>
//           <button 
//             type="submit" 
//             className="btn w-100" 
//             style={{ backgroundColor: '#007BFF', color: '#FFF', marginBottom: '10px', borderRadius: '5px' }}
//           >
//             Sign Up
//           </button>
//           <Link 
//             to="/login" 
//             className='btn w-100' 
//             style={{ backgroundColor: '#DC3545', color: '#FFF', borderRadius: '5px' }}
//           >
//             Already a user
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }



import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Signup() {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation }));

    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: credentials.name, email: credentials.email, password: credentials.password, location: credentials.geolocation })
    });

    const json = await response.json();
    console.log(json);
    
    if (!json.success) {
      alert("Enter Valid Credentials");
    } else {
      alert("You can login now!");
    }
  };

  const onChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  return (
    <div 
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1533777324565-a040eb52fac1?ixlib=rb-4.0.3&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80")',
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
          background: 'rgba(255, 255, 255, 0.85)',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2 className='text-center mb-4' style={{ color: '#28a745' }}>Sign Up</h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input 
              type="text" 
              className="form-control" 
              name='name' 
              value={credentials.name} 
              onChange={onChange} 
              required 
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="geolocation" className="form-label">Address</label>
            <input 
              type="text" 
              className="form-control" 
              name='geolocation' 
              value={credentials.geolocation} 
              onChange={onChange} 
              id="geolocation" 
              required 
            />
          </div>
          <button 
            type="submit" 
            className="btn w-100" 
            style={{ backgroundColor: '#007BFF', color: '#FFF', marginBottom: '10px', borderRadius: '5px' }}
          >
            Sign Up
          </button>
          <Link 
            to="/login" 
            className='btn w-100' 
            style={{ backgroundColor: '#DC3545', color: '#FFF', borderRadius: '5px' }}
          >
            Already a user
          </Link>
        </form>
      </div>
    </div>
  );
}
