

import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();
  
  if (data.length === 0) {
    return (
      <div>
        <div className='m-5 w-100 text-center fs-3' style={{ color: 'red' }}>The Cart is Empty!</div>
      </div>
    );
  }

  const handleCheckOut = async () => {
    try {
      let userEmail = localStorage.getItem("userEmail");
      let response = await fetch("http://localhost:5000/api/orderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          order_data: data,
          email: userEmail,
          order_date: new Date().toDateString()
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log("JSON RESPONSE:::::", response.status);

      // Clear the cart if the order is placed successfully
      if (response.status === 200 || response.status === 201) {
        dispatch({ type: "DROP" });
        alert('Order placed successfully!');
      }
    } catch (error) {
      console.error("Checkout error:", error);
      alert('Failed to place order. Please try again later.');
    }
  };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div>
      <div className='container m-auto mt-5 table-responsive table-responsive-sm table-responsive-md'>
        <table className='table table-hover'>
          <thead className='text-success fs-4'>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Name</th>
              <th scope='col'>Quantity</th>
              <th scope='col'>Option</th>
              <th scope='col'>Amount</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                <th scope='row' style={{ color: 'green' }}>{index + 1}</th>
                <td style={{ color: 'green' }}>{food.name}</td>
                <td style={{ color: 'green' }}>{food.qty}</td>
                <td style={{ color: 'green' }}>{food.size}</td>
                <td style={{ color: 'green' }}>{food.price}</td>
                <td>
                  <button type="button" className="btn p-0">
                    <DeleteIcon style={{ color: 'green' }} onClick={() => { dispatch({ type: "REMOVE", index }) }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          <h1 className='fs-2' style={{ color: 'blue' }}>Total Price: {totalPrice}/-</h1>
        </div>
        <div>
          <button className='btn bg-success mt-5' onClick={handleCheckOut}>
            {data.length === 0 ? 'Cart is Empty' : 'Check Out'}
          </button>
        </div>
      </div>
    </div>
  );
}


// import React from 'react'
// import DeleteIcon from '@mui/icons-material/Delete';

// import { useCart, useDispatchCart } from '../components/ContextReducer';
// export default function Cart() {
//   let data = useCart();
//   let dispatch = useDispatchCart();
//   if (data.length === 0) {
//     return (
//       <div>
//         <div className='m-5 w-100 text-center fs-3 ' style={{color:'red'}}>The Cart is Empty!</div>
//       </div>
//     )
//   }








//   // const handleRemove = (index)=>{
//   //   console.log(index)
//   //   dispatch({type:"REMOVE",index:index})
//   // }

//   // const handleCheckOut = async () => {
//   //   let userEmail = localStorage.getItem("userEmail");
//   //   // console.log(data,localStorage.getItem("userEmail"),new Date())
//   //   let response = await fetch("http://localhost:5000/api/orderData", {
//   //     // credentials: 'include',
//   //     // Origin:"http://localhost:3000/login",
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json'
//   //     },
//   //     body: JSON.stringify({
//   //       order_data: data,
//   //       email: userEmail,
//   //       order_date: new Date().toDateString()
//   //     })
//   //   });
//   //   console.log("JSON RESPONSE:::::", response.status)
//   //   if (response.status === 200) {
//   //     dispatch({ type: "DROP" })
//   //   }
//   // }
//   const handleCheckOut = async () => {
//     try {
//       let userEmail = localStorage.getItem("userEmail");
//       let response = await fetch("http://localhost:5000/api/orderData", {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//           order_data: data,
//           email: userEmail,
//           order_date: new Date().toDateString()
//         })
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
  
//       console.log("JSON RESPONSE:::::", response.status);
//       if (response.status === 200) {
//         dispatch({ type: "DROP" });
//         alert('Order placed successfully!');
//       }
//     } catch (error) {
//       console.error("Checkout error:", error);
//       alert('Failed to place order. Please try again later.');
//     }
//   };
  

//   let totalPrice = data.reduce((total, food) => total + food.price, 0)
//   return (
//     <div>

//       {console.log(data)}
//       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
//         <table className='table table-hover '>
//           <thead className=' text-success fs-4'>
//             <tr>
//               <th scope='col'  >#</th>
//               <th scope='col' >Name</th>
//               <th scope='col' >Quantity</th>
//               <th scope='col' >Option</th>
//               <th scope='col' >Amount</th>
//               <th scope='col' ></th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((food, index) => (
//               <tr>
//                 <th scope='row'style={{ color: 'green' }} >{index + 1}</th>
//                 <td  style={{ color: 'green' }}>{food.name}</td>
//                 <td style={{ color: 'green' }}>{food.qty}</td>
//                 <td style={{ color: 'green' }}>{food.size}</td>
//                 <td style={{ color: 'green' }}>{food.price}</td>
//                 <td ><button type="button" className="btn p-0"><DeleteIcon style={{ color: 'green' }} onClick={() => { dispatch({ type: "REMOVE", index: index }) }} /></button> </td></tr>
//             ))}
//           </tbody>
//         </table>
//         <div><h1 className='fs-2' style={{ color: 'blue' }}>Total Price: {totalPrice}/-</h1></div>
//         <div>
//           <button className='btn bg-success mt-5 ' onClick={handleCheckOut} > Check Out </button>
//         </div>
//       </div>



//     </div>
//   )
// }



