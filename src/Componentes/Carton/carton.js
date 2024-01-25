import "./carton.css";
import { useNavigate } from "react-router-dom";


export const Carton = ({ name, img, type}) => {
const navigate = useNavigate()

  return (
    <section className="painel">
      <div className="container">
        <div onClick={() =>  navigate("/profile", { state: {name, img, type}} )}>
          <li className="carton">
          <h3>{name}</h3>
          <img src={img} height={150} alt="Shiny"></img>
          <p style={{textTransform: "capitalize"}}>{type}</p>
          </li>
        </div>
      </div>
    </section>
  );
};

export default Carton;
