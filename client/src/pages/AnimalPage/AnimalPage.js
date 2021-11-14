import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import star from "../../assets/svg/star.svg";
import "./AnimalPage.css";

const ANIMAL_QUERY = gql`
    query Animal($slug: String!) {
        animal(slug: $slug) {
            image
            title
            rating
            price
            description
            stock
        }
    }
`;

function AnimalPage() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(ANIMAL_QUERY, { variables: { slug: slug } });

    if (loading) return <div>Loading...</div>;
    if (error) return <div>uups... :(</div>;
    return (
        <div className="py-5">
            <Container>
                <div className="d-flex">
                    <img
                        className="product-img"
                        alt="animal"
                        src={animals[data.animal.image]}
                        style={{ marginRight: "1rem" }}
                    />
                    <div className="text-container">
                        <h1>{data.animal.title}</h1>
                        <div className="star-container">
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <div className="rating-stock-container">
                                <p>{data.animal.rating} rating</p>
                                <p>{data.animal.stock} in stock</p>
                            </div>
                        </div>
                        <div className="about-container">
                            <h4>About this Animal</h4>
                            {data.animal.description.map((dsp, i) => {
                                return (
                                    <em key={i}>
                                        <li>{dsp}</li>
                                    </em>
                                );
                            })}
                        </div>
                    </div>
                    <div className="cart-container border">
                        <p className="price">
                            <span>CAD$ {data.animal.price}</span>
                        </p>
                        <p className="delivery-time">
                            FREE delivery: Thursday, Feb 25 Details
                            <button className="buy-now-btn" style={{ marginTop: "2rem" }}>
                                Add to Cart
                            </button>
                            <button>Buy Now</button>
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default AnimalPage;
