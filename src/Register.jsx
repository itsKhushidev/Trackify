import "./App.css";
import { Link } from "react-router-dom";

function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register clicked");
  };

  return (
    <div className="login-page">

      {/* LEFT */}
      <div className="login-left">
        <div className="login-box">

          <h2>Create account ✨</h2>
          <p className="subtitle">
            Start your habit journey today
          </p>

          <form className="login-form" onSubmit={handleSubmit}>

            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="login-btn">
              Register
            </button>
          </form>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="oauth-buttons">
            <button type="button" className="oauth google">Google</button>
            <button type="button" className="oauth github">GitHub</button>
          </div>

          <p className="register-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>

        </div>
      </div>

      {/* RIGHT */}
      <div className="login-right">
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
          alt="Register"
        />
      </div>

    </div>
  );
}

export default Register;