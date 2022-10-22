import dp from "../assets/profile.jpg";

const Header = () => {
  return (
    <header>
      <img src={dp} alt="" id="profile__img" />
      <h3 id="twitter">James_O</h3>
      <p id="slack" className="hidden">
        james-o
      </p>
    </header>
  );
};

export default Header;
