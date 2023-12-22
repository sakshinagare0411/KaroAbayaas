import "./FooterStyle.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Karo Abhayaas</h1>
          <p>Education to become Doctor</p>
          <h4>KARO ABHAYAAS 112, ELECTRONIC CITY BANGALORE, INDIA</h4>
        </div>
        <div>
          <a href="./">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="./">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="./">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="./">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Company</h4>
          <a href="/">About KA</a>
          <a href="/">Shikshodaya</a>
          <a href="/">Careers</a>
          <a href="/">Privacy policy</a>
          <a href="/">Terms and Condition</a>
        </div>
        <div>
          <h4>Help & Support</h4>
          <a href="/">User Guidelines</a>
          <a href="/">Site Map</a>
          <a href="/">Refund Policy</a>
          <a href="/">Takedown Policy</a>
        </div>
        <div>
          <h4>Karo Abhayaas Centre</h4>
          <a href="/">Mumbai</a>
          <a href="/">Pune</a>
          <a href="/">Nashik</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
