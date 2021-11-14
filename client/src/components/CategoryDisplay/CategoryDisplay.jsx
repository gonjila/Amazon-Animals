// import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Container } from "react-bootstrap";
import animals from "../../assets/images";
import "./CategoryDisplay.css";

const CATEGORIES_QUERY = gql`
    query Categories {
        categories {
            id
            image
            category
            slug
        }
    }
`;

function CategoryDisplay() {
    const { data, loading, error } = useQuery(CATEGORIES_QUERY);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>uups... :(</div>;
    return (
        <div className="CategoryDisplay">
            <Container className="CategoryDisplay-container">
                {data.categories.map((category) => {
                    return (
                        <Link
                            to={`/products/${category.slug}`}
                            className="CategoryDisplay-card-container"
                            key={category.id}
                        >
                            <div className="CategoryDisplay-card">
                                <img src={animals[category.image]} alt="animal" />
                            </div>
                            <h3>{category.category}</h3>
                        </Link>
                    );
                })}
            </Container>
        </div>
    );
}

export default CategoryDisplay;
