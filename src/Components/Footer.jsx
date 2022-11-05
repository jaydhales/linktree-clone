import i4gLogo from "../assets/I4G.svg";
import zuriLogo from "../assets/zuri.svg";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={zuriLogo} alt="" />
      </div>

      <p>HNG Internship 9 Frontend Task</p>
      <div>
        <img src={i4gLogo} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
