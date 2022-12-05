
import Navbar_Account from './NavBar_Account';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext.js";
import { Alert } from "../Funtion/Alert.js";
  import "../../assets/css/index.css"

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
        console.log(user)
      await login(user.email, user.password);
      navigate("/Tables");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleChange = ({ target: { value, name } }) =>
    setUser({ ...user, [name]: value });

  return (
    // <div className="w-full max-w-xs m-auto">
    //   {error && <Alert message={error} />}

    //   <form
    //     onSubmit={handleSubmit}
    //     className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //   >
    //     <div className="mb-4">
    //       <label
    //         htmlFor="email"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Email
    //       </label>
    //       <input
    //         type="email"
    //         name="email"
    //         id="email"
    //         onChange={handleChange}
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="youremail@company.tld"
    //       />
    //     </div>
    //     <div className="mb-4">
    //       <label
    //         htmlFor="password"
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //       >
    //         Password
    //       </label>
    //       <input
    //         type="password"
    //         name="password"
    //         id="password"
    //         onChange={handleChange}
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="*************"
    //       />
    //     </div>

    //     <div className="flex items-center justify-between">
    //       <button
    //         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    //         type="submit"
    //       >
    //         Sign In
    //       </button>
    //     </div>
    //   </form>
    // </div>

      
    <div className="maincontainer">
        <Navbar_Account/>   
        {error && <Alert message={error} />}
    <div class="container-fluid">
        <div class="row no-gutter">
           
            <div class="col-md-6 d-none d-md-flex bg-image"></div>
            
            <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center py-5">
                   
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-xl-7 mx-auto">
                                <h3 class="display-4">Anurati</h3>
                                <p class="text-muted mb-4">Control de masas para pastel</p>
                                <form  onSubmit={handleSubmit}>
                                    <div class="mb-3">
                                        <input onChange={handleChange} id="email" name='email' type="email" placeholder="Email address" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                    </div>
                                    <div class="mb-3">
                                        <input onChange={handleChange} id="password" name='password' type="password" placeholder="Password" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                                    
                                    <div class="d-grid gap-2 mt-2">
                                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Iniciar sesion</button>
                                    </div>
                                    
                                   
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
  );
}