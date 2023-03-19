
import ModalWindow from "../errors/ModalWindow";
import nasa from "../../assets/NYCNasa.jpg";

const Home = () => {
return (
    <div className="home-container">
    <img src={nasa} alt="TopView" />
    <ModalWindow />
  </div>
)
};

export default Home;