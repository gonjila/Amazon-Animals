import { useParams } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { Container } from "react-bootstrap";
import CardDisplay from "../components/CardDisplay/CardDisplay";

const CATEGORY_QUERY = gql`
    query Category($slug: String!) {
        category(slug: $slug) {
            id
            category
            animals {
                id
                image
                title
                price
                slug
            }
        }
    }
`;

function CategoryPage() {
    const { slug } = useParams();
    const { data, loading, error } = useQuery(CATEGORY_QUERY, { variables: { slug } });
    console.log(data);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>uups... :(</div>;
    return (
        <div className="py-5">
            <Container>
                <h1 className="text-capitalize">{data.category.category}</h1>
                <CardDisplay animals={data.category.animals} />
            </Container>
        </div>
    );
}

export default CategoryPage;
