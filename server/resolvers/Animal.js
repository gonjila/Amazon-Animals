// animalის schemaში თუ რამე სხვა schema არის დასაბრუნებელი
const Animal = {
    // პოულობს categoryს რომელშიც შედის ის ცხოველი dbდან, რომლის "category" იქნება თვითონ ამ categoryს idს ტოლი.
    category: (parent, args, ctx) => {
        return ctx.categories.find((category) => {
            return parent.category === category.id;
        });
    },
};

module.exports = Animal;
