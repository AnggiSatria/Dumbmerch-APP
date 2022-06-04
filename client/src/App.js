import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Homepage from "./pages/homepage";
import DetailProduct from "./pages/detail page";
import Profile from "./pages/profile";
import Category from "./pages/category";
import Product from "./pages/product";
import Complain from "./pages/complainUser";
import Error from "./pages/Error";
import EditCategory from "./pages/EditCategory";
import EditProduct from "./pages/EditProduct";
import ComplainAdmin from "./pages/complainAdmin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/detail-product" element={<DetailProduct />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/product" element={<Product />}/>
        <Route path="/complain" element={<Complain />}/>
        <Route path="*" element={<Error />}/>
        <Route path="*" element={<Error />}/>
        <Route path="/edit-category" element={<EditCategory />}/>
        <Route path="/edit-product" element={<EditProduct />}/>
        <Route path="/complain-admin" element={<ComplainAdmin />}/>
      </Routes>
    </Router>
  );
}

export default App;
