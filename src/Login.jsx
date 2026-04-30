import "./App.css";
import { Link } from "react-router-dom";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login clicked");
  };

  return (
    <div className="login-page">

      {/* LEFT */}
      <div className="login-left">
        <div className="login-box">

          <h2>Welcome back 👋</h2>
          <p className="subtitle">
            Login to continue building your habits
          </p>

          <form className="login-form" onSubmit={handleSubmit}>

            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <div className="login-options">
              <Link to="/forgot-password" className="forgot">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="divider">
            <span>or continue with</span>
          </div>

          {/* OAuth */}
          <div className="oauth-buttons">
            <button type="button" className="oauth google">Google</button>
            <button type="button" className="oauth github">GitHub</button>
          </div>

          {/* Register */}
          <p className="register-text">
            New user? <Link to="/register">Register here</Link>
          </p>

        </div>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <img
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d"
          alt="Productivity"
        />
      </div>

    </div>
  );
}

export default Login;