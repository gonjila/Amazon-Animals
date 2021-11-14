import React from "react";
import "./MainHero.css";
import animals from "../../assets/images";
import { Container } from "reactstrap";
import { useQuery, gql } from "@apollo/client";

const FETCH_MAIN_CARDS = gql`
    query MainCards {
        mainCards {
            id
            title
            image
        }
    }
`;

function MainHero() {
    const { data, loading, error } = useQuery(FETCH_MAIN_CARDS);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>uups... :(</div>;
    return (
        <div className="MainHero">
            <Container>
                <div className="header-container">
                    <h2>
                        Find your <br /> new four-legged <br /> best friend
                    </h2>
                    <img src={animals.rhino} alt="rhino" />
                </div>
                <div className="cards-container">
                    {data.mainCards.map((card) => {
                        return (
                            <div className="card" key={card.id}>
                                <h3>{card.title}</h3>
                                <img
                                    src={animals[card.image]}
                                    alt={animals[card.title]}
                                    style={{ width: "100%" }}
                                />
                            </div>
                        );
                    })}
                </div>
            </Container>
        </div>
    );
}

export default MainHero;
