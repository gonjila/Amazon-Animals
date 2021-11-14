import { Link } from "react-router-dom";
import animal from "../../assets/images";
import star from "../../assets/svg/star.svg";
// import lion from "../../assets/image/lion2.jpg";
import "./Card.css";

function Card(props) {
    return (
        <Link to={`/product/${props.animal.slug}`} className="Card">
            <img className="main-img" src={animal[props.animal.image]} alt="animal" />
            <h4>{props.animal.title}</h4>
            <div className="card-start">
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
            </div>
            <div className="card-price">
                <p>CAD $</p>
                <h4>{props.animal.price}</h4>
            </div>
            <div className="card-prime">
                <span>prime</span> FREE delivery by <span className="bold">Tuesday, Feb 16</span>
            </div>
        </Link>
    );
}

export default Card;
