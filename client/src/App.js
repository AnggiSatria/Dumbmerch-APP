import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import Homepage from "./pages/homepage";
import DetailProduct from "./pages/detail page";
import Profile from "./pages/profile";
import Category from "./pages/category";
import Product from "./pages/product";
import Complain from "./pages/complainUser";
import Error from "./pages/Error";
import AddCategory from "./pages/AddCategory";
import AddProduct from "./pages/AddProduct";
import ComplainAdmin from "./pages/complainAdmin";
import PrivateRoute from "./components/dummy/PrivateRouteAdmin"
import User from "./components/dummy/PrivateRouteUser"
import InputAdornments from "./components/input";
import { UserContext } from "./context/userContext";
import { useContext, useEffect } from "react";
import { API, setAuthToken } from "../../client/src/config/api"
import UpdateProduct from "./pages/UpdateProduct";
import UpdateCategory from "./pages/UpdateCategory";

if(localStorage.token){
  setAuthToken(localStorage.token)
}

function App() {

  const navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    // Redirect Auth
    if (state.isLogin === false) {
      navigate('/');
    } else {
      if (state.user.status === 'admin') {
        navigate('/product');
      } else if (state.user.status === 'customer') {
        navigate('/homepage');
      }
    }
  }, [state]);

  console.log(state);

  const checkAuth = async () => {
    try {
      
      const response = await API.get("/check-auth")

      if(response.status == 404){
        return dispatch({
          type : "AUTH_ERROR"
        })
      }

      let payload = response.data.data.user

      payload.token = localStorage.token

      console.log(payload.token);

      dispatch({
        type: 'USER_SUCCESS',
        payload
      })
      
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (localStorage.token) {
      checkAuth();
    }
  }, []);

  return (
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Register />}/> 
        <Route path="*" element={<Error />}/>
        <Route path="/input" element={<InputAdornments/>}/>

     {/* only for user */}

        <Route path="/" element={<User />}>
          <Route path="/homepage" element={<Homepage />}/>
          <Route path="/product/:id" element={<DetailProduct />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/complain" element={<Complain />}/>
        </Route>

      {/* only for admin */}

        <Route path="/" element={<PrivateRoute/>}>
          <Route path="/category" element={<Category />}/>
          <Route path="/product" element={<Product />}/>
          <Route path="/add-category" element={<AddCategory />}/>
          <Route path="/update-category" element={<UpdateCategory />}/>
          <Route path="/add-product" element={<AddProduct />}/>
          <Route path="/update-product" element={<UpdateProduct />}/>
          <Route path="/complain-admin" element={<ComplainAdmin />}/>
        </Route>
      </Routes>
  );
}

export default App;
