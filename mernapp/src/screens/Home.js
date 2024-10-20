// import React, { useEffect, useState } from 'react'
// import Navbar from '../components/Navbar'
// import Footer from '../components/Footer'
// import Card from '../components/Card'
// import Carousal from '../components/Carousal'

// export default function Home() {

//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("http://localhost:5000/api/foodData", {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     });
//     response = await response.json();
//     setFoodItem(response[0]);
//     setFoodCat(response[1]);
//     // console.log(response[0],response[1]);
//   }

//   useEffect(() => {
//     loadData()
//   }, [])




//   return (
//     <div>
//       <div><Navbar /></div>
//       <div>
//         <Carousal />
//       </div>
//       <div className='container'>
//         {
//            foodCat  !==[]
//            ? foodCat.map((data)=>{
//              return(<div className='row mb-3'>
//              <div key={data._id} className="fs-3 m-3" >{data.CategoryName}</div>
//              <hr/>
//              {foodItem!==[]
//              ?
//              foodItem.filter((item)=>item.CategoryName===data.CategoryName)
//              .map(filterItems=>{
//               return(
//                 <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
//                    <Card foodName={filterItems.name}
// options={filterItems.options}
// imgSrc={filterItems.img}
// ></Card>
//                 </div>
//               )
//              })

//             :<div>No Such Data Found</div>}
//              </div>
//              )
//           })
//           : <div>""""""""""""""""</div>
//         }

//       </div>
//       <div><Footer /></div>
//     </div>
//   );
// }



// import React, { useEffect, useState } from 'react';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
// import Card from '../components/Card';

// export default function Home() {
//   const [search, setSearch] = useState('');
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     try {
//       let response = await fetch("http://localhost:5000/api/foodData", {
//         method: "POST",
//         headers: {
//           'Content-Type': 'application/json'
//         }
//       });
//       response = await response.json();
//       setFoodItem(response[0]);
//       setFoodCat(response[1]);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <Navbar />
//       <div>
//         <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
//           <div className="carousel-inner" id='carousel'>
//             <div className="carousel-caption" style={{ zIndex: "9" }}>
//               <div className="d-flex justify-content-center">
//                 <input
//                   className="form-control me-2 w-75 bg-white text-dark"
//                   type="search"
//                   placeholder="Type in..."
//                   aria-label="Search"
//                   value={search}
//                   onChange={(e) => setSearch(e.target.value)}
//                 />
//               </div>
//             </div>
//             <div className="carousel-item active">
//               <img src="https://static.vecteezy.com/system/resources/previews/003/690/403/large_2x/food-delivery-online-on-phone-orange-background-illustration-fastfood-design-concept-business-shop-promotion-transport-to-home-free-vector.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//             <div className="carousel-item">
//               <img src="https://wallpaperaccess.com/full/6221183.jpg" className="d-block w-100" style={{ filter: "brightness(30%)" }} alt="..." />
//             </div>
//           </div>
//           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className='container'>
//         {
//           foodCat.length > 0
//             ? foodCat.map((data) => (
//               <div key={data._id} className='row mb-3'>
//                 <div className="fs-3 m-3">{data.CategoryName}</div>
//                 <hr />
//                 {foodItem.length > 0
//                   ? foodItem
//                       .filter((item) => 
//                         item.CategoryName === data.CategoryName &&
//                         item.name.toLowerCase().includes(search.toLowerCase())
//                       )
//                       .map((filteredItem) => (
//                         <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3'>
//                           <Card
//                           foodItem={filteredItem}
//                             options={filteredItem.options[0]}
//                           />
//                         </div>
//                       ))
//                   : <div>No Such Data Found</div>
//                 }
//               </div>
//             ))
//             : <div>Loading...</div>
//         }
//       </div>
//       <Footer />
//     </div>
//   );
// }






import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Card from '../components/Card';

export default function Home() {
  const [search, setSearch] = useState('');
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);

  const loadData = async () => {
    try {
      let response = await fetch("http://localhost:5000/api/foodData", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        }
      });
      response = await response.json();
      setFoodItem(response[0]);
      setFoodCat(response[1]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div style={{ backgroundColor: '#f8f9fa' }}>
      <Navbar />
      <div>
        {/* Carousel */}
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "contain !important" }}>
          <div className="carousel-inner" id='carousel'>
            <div className="carousel-caption" style={{ zIndex: "9" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2 w-75 bg-white text-dark"
                  type="search"
                  placeholder="Search for delicious meals..."
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    borderRadius: '20px',
                    padding: '10px 20px',
                  }}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <img src="https://static.vecteezy.com/system/resources/previews/003/690/403/large_2x/food-delivery-online-on-phone-orange-background-illustration-fastfood-design-concept-business-shop-promotion-transport-to-home-free-vector.jpg" className="d-block w-100" style={{ filter: "brightness(40%)", height: '60vh', objectFit: 'cover' }} alt="Food Delivery" />
            </div>
            <div className="carousel-item">
              <img src="https://png.pngtree.com/png-clipart/20200727/original/pngtree-food-delivery-logo-design-png-image_5392526.jpg" className="d-block w-100" style={{ filter: "brightness(40%)", height: '60vh', objectFit: 'cover' }} alt="Fast Food" />
            </div>
            <div className="carousel-item">
              <img src="https://wallpaperaccess.com/full/6221183.jpg" className="d-block w-100" style={{ filter: "brightness(40%)", height: '60vh', objectFit: 'cover' }} alt="Delicious Meals" />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {/* Food Categories */}
      <div className='container mt-4'>
        {
          foodCat.length > 0
            ? foodCat.map((data) => (
              <div key={data._id} className='row mb-5'>
                <div className="fs-3 m-3 text-success">{data.CategoryName}</div>
                <hr className='mb-4' style={{ borderTop: '2px solid #28a745' }} />
                {foodItem.length > 0
                  ? foodItem
                      .filter((item) => 
                        item.CategoryName === data.CategoryName &&
                        item.name.toLowerCase().includes(search.toLowerCase())
                      )
                      .map((filteredItem) => (
                        <div key={filteredItem._id} className='col-12 col-md-6 col-lg-3 d-flex align-items-stretch'>
                          <Card
                            foodItem={filteredItem}
                            options={filteredItem.options[0]}
                          />
                        </div>
                      ))
                  : <div className="text-center text-muted">No items found for this category.</div>
                }
              </div>
            ))
            : <div className="text-center my-5">
                <div className="spinner-border text-success" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className='mt-2'>Fetching delicious meals for you...</p>
              </div>
        }
      </div>
      <Footer />
    </div>
  );
}
