const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const { Query, Category, Animal, Mutation } = require("./resolvers");
const { mainCards, animals, categories } = require("./db");

const resolvers = {
    Query,
    Category,
    Animal,
    Mutation,
};
// მონაცემებს ვტვირთავთ contextზე რათა resolversებში გამოვიყენოთ მესამე არგუმენტით.
const context = {
    mainCards,
    animals,
    categories,
};

const server = new ApolloServer({ typeDefs, resolvers, context });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});
