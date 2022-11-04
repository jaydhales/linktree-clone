import Profile from "../Components/Profile";
import Main from "../Components/Main";

const Home = ({ name }) => {
  return (
    <div className="App">
      <Profile name={name} />
      <Main />
    </div>
  );
};

export default Home;
