import { useQuery, useMutation, gql } from "@apollo/client";
import MainHero from "../components/MainHero/MainHero";
import CategoryDisplay from "../components/CategoryDisplay/CategoryDisplay";
import CardDisplay from "../components/CardDisplay/CardDisplay";

const ANIMALS_QUERY = gql`
    query Animals {
        animals {
            id
            image
            title
            price
            slug
        }
    }
`;
const ADD_ANIMAL_MUTATION = gql`
    # ავღნიშნავთ რომელი ცვლადი რომელი typeსი უნდა იყოს.
    mutation Mutation(
        $image: String!
        $title: String!
        $rating: Float
        $price: String!
        $description: [String!]!
        $stock: Int!
        $slug: String!
        $category: String!
    ) {
        # ფუნქციის პარამეტრები გახდება useMutationის მიერ დაბრუნებული ფუნქცია რა ცვლადებსაც მიიღებს.
        addAnimal(
            image: $image
            title: $title
            rating: $rating
            price: $price
            description: $description
            stock: $stock
            slug: $slug
            category: $category
        ) {
            id
        }
    }
`;

function LandingPage() {
    // იღებს არგუმენტად Queryის gqlს და აბრუნებს მონაცემებს, "იტვირთება თუ არა" და "არის თუ არა დარღვევა/შეცდომა".
    const { data, loading, error } = useQuery(ANIMALS_QUERY);
    // იღებს არგუმენტად Mutationის gqlს და აბრუნებს ფუნქციას.
    const [addAnimal] = useMutation(ADD_ANIMAL_MUTATION);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>uups... :(</div>;
    return (
        <div>
            <MainHero />
            <CategoryDisplay />
            <CardDisplay animals={data.animals} />
            <button
                onClick={() => {
                    // დაბრუნებული ფუნქცია იღებს ცვლადების მნიშვნელობებს.
                    addAnimal({
                        variables: {
                            image: "ostrich",
                            title: "This is really cool ostrich",
                            rating: 4.7,
                            price: "15.450",
                            description: [
                                "asdsad qweqwe zxcxzc asdd dfgdfg retert vbcv",
                                "qweqweasdazxczxczc  qweqwe qweqwdas asd zxc ",
                                "asdasd wqeqwe qwe asd rewwe df xcvxcvf sdfdsa",
                            ],
                            stock: 23,
                            slug: "ostrich",
                            category: "1",
                        },
                    });
                }}
            >
                Add an Ostrich
            </button>
        </div>
    );
}

export default LandingPage;
