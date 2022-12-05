
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


      
    <div className="maincontainer">
  
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