// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Layout from "./Layout";
// import Home from "./pages/Home";
// import Insert from "./pages/Insert";
// import Display from "./pages/Display";
// import Search from "./pages/Search";
// import Update from "./pages/Update";
// import Edit from "./pages/Edit";
// import Login from "./pages/Login";

// const App=()=>{
//   return(
//     <>
      
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout/>}>
//           <Route index element={<Home/>}/>
//           <Route path="home" element={<Home/>}/>
//           <Route path="insert" element={<Insert/>}/>
//           <Route path="display" element={<Display/>}/>
//           <Route path="search" element={<Search/>}/>
//           <Route path="update" element={<Update/>}/>
//           <Route path="edit" element={<Edit/>}/>
//           <Route path="login" element={<Login/>}/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//       <button>Upload</button>
//       <button>Photos</button>
     
//     </>
//   )
// }
// export default App;

import { useState } from "react";
import axios from "axios";
const App=()=>{
  const handleSubmit=async()=>{
    let api="http://localhost:8000/home"
    axios.get(api).then((res)=>{
      console.log(res.data)
    })
  }

  const handleSubmit1=async()=>{
    let api="http://localhost:8000/about";
    axios.get(api).then((res)=>{
      console.log(res.data)
    })
  }
  return(
    <>
    <h1>Error handling</h1>
    <button onClick={handleSubmit}>Home</button>
    <button onClick={handleSubmit1}>About</button>
    </>
  )
}
export default App;