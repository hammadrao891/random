// import React, { useState } from 'react'

// const Ques1 = () => {
//     const [name,setName]=useState("");
//     const [email,setEmail]=useState("");
//     const [cnic1,setCnic1]=useState("");
//     const [cnic2,setCnic2]=useState("");
//     const [cnic3,setCnic3]=useState("");
//     const [zipCode,setZipCode]=useState("");
//     const [country,setCountry]=useState("");
//     const [dob,setDob]=useState("");
 
    
//     function containsAlphabets(str) {
//   return /[a-zA-Z]/.test(str);
// }

     
//     const handleSubmit=()=>
//     {
        
        
//         if(zipCode.length !== 5  )
//         alert("ZIPCODE must be a 5 digit number")
//         if(zipCode === "")
//         alert("Zipcode field field is Empty")
//         if(name === "")
//         alert("Name field is Empty")
//         if(email === "")
//         alert("email field is Empty")
//         if(cnic1 === "" || cnic1 ==="" || cnic3 === "")
//         alert("cnic field is Empty")
//         if(containsAlphabets(cnic1) ||containsAlphabets(cnic2)||containsAlphabets(cnic3) )
//         alert("CNIC must be a number!");
//         if( containsAlphabets(zipCode))
//         alert("Zipcode must be a number")
//         if(country === "")
//         alert("country field is Empty")
//         if(dob === "")
//         alert("dob field is Empty")
//         else
//         alert(`Registration Successfull! Your details Includes : Name:${name},Email,${email},Zipcode:${zipCode},CNIC:${cnic1}-${cnic2}-${cnic3},Country:${country}` )
        
//     }
//   return (
//     <>
//     <div className='whole'>
//         <h1 style={{textAlign:"center"}}><i>Registration Form</i></h1>
//         <div className='main'>
//          <div className="mb-3 " >
//         <form className='form' onSubmit={handleSubmit}>
//         <input placeholder='Enter Name' class="form-control"  onChange={e=>setName(e.target.value)}/>
//         <input  placeholder='Enter Email' class="form-control" onChange={e=>setEmail(e.target.value)}/>
//          <label for="dob" class="form-label" >Date of Birth:</label>
//         <input type="date" id="dob" class="form-control" name="dob" onChange={e=>setDob(e.target.value)}/>
//         <input placeholder='Enter ZipCode' class="form-control" type='text' maxLength="5" onChange={e=>setZipCode(e.target.value)}/>
//          <label >Select Country</label>
//       <select class="form-control" onChange={e=>setCountry(e.target.value)}>
//       <option>Pakistan</option>
//       <option>India</option>
//       <option>China</option>
//       </select>
      
//   <div style={{display:"flex"}}>
//       <input placeholder='Enter CNIC:XXXXX' class="form-control" maxLength="5" type='text' onChange={setCnic1}/>-
//       <input placeholder='XXXXXXX'  class="form-control" maxLength="7"  type='text' onChange={setCnic1}/>-
//       <input placeholder='X' class="form-control" maxLength="1" type='text' onChange={setCnic1}/>
//       </div>
//       <label for="image">Select Image</label>
//        <input type="file"  /><br/>
//       <button type='submit' className='btn btn-primary'>Submit</button>
//       </form>
//     </div>
//     </div>
//     </div>
// </>  )
// }

// export default Ques1

import axios from "axios";
import React, { useEffect, useState } from "react";
// import {
//   TransformWrapper,
//   TransformComponent,
//   useControls
// } from "react-zoom-pan-pinch";

function App() {
  const [d,setD]=useState();
  // const generateRandomCoordinates = (num) => {
  //   const coordinates = [];
  //   for (let i = 0; i < num; i++) {
  //     const x = Math.floor(Math.random() * 30);
  //     const y = Math.floor(Math.random() * 30);
  //     coordinates.push([x, y]);
  //   }
  //   return coordinates;
  // };

  useEffect(()=>{
    const uAP=async()=>
    
    {
      fetch("http://testingapps.pythonanywhere.com/fieldrp/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    side: 20,
    selection: 5,
    choice: 0,
    value: 10,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data here
    console.log(data);
    setD(data);
  })
  .catch((error) => {
    // Handle any errors that occurred during the request
    console.error(error);
  });

    //   console.log("result.data.success")
    //    const data = {
    //   side: 20,
    //   selection: 5,
    //   choice: 0,
    //   value: 10
    //   }
    //   try{
    //   const result = await axios({
    //     method:"post",
    //     url:"http://testingapps.pythonanywhere.com/fieldrp/",
    //     // url:"/",
    //     data
    //   })
    //   // const result = await axios.post("http://testingapps.pythonanywhere.com/fieldrp",data)
    //   // const res=result.json;
    //   console.log("result.data.success")
    // }
    // catch(err)
    // {
    //   console.log("err")
    // }
    
    }
    uAP();
  },[d])
  // const h = generateRandomCoordinates(99999);
  // const Controls = () => {
  //   const { zoomIn, zoomOut, resetTransform } = useControls();
  //   return (
  //     <>
  //       <button onClick={() => zoomIn()}>Zoom In</button>
  //       <button onClick={() => zoomOut()}>Zoom Out</button>
  //       <button onClick={() => resetTransform()}>Reset</button>
  //     </>
  //   );
  // };
  // console.log(h)
  return (
    <>
      {/* <h1 style={{background:"white"}}>{h}</h1> */}
    </>
  );
}

export default App;
