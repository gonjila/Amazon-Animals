// categoryის schemaში თუ რამე სხვა schema არის დასაბრუნებელი
const Category = {
    // ფილტრავს animals dbდან, რომლებსაც "category" ტოლი აქვთ categoryს idს.
    animals: (parent, args, ctx) => {
        return ctx.animals.filter((animal) => {
            return parent.id === animal.category;
        });
    },
};

module.exports = Category;
