import "./LoginpageStyle.css";

function Loginpage() {
  return (
    <div className="from-container">
      <div className="t-card">
        <form>
          <h1>Login</h1>
          <input placeholder="USERNAME" />
          <input placeholder="PASSWORD" />
          <button>Login</button>
          <p>
            Don't have an account ? <a href="/">Sign up </a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Loginpage;
