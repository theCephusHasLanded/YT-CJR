import ModalWindow from "../errors/ModalWindow";
import nasa from "../../assets/NYCNasa.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <img src={nasa} alt="NASA Sattelite Imagery of NYC" />
      <ModalWindow />
    </div>
  );
};

export default Home;
