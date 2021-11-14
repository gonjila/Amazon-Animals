const Query = {
    // db-დან წამოღებულ ინფორმაციას აბრუნებს
    mainCards: (parent, args, ctx) => ctx.mainCards,
    animals: (parent, args, ctx) => ctx.animals,
    // dbდან animalsის arrayში ეძებს იმ animalს რომლის "slug" და არგუმენტში ჩაწერილი "slug"ი დაემთხვევა და იმას აბრუნებს.
    animal: (parent, args, ctx) => {
        const animal = ctx.animals.find((animal) => {
            return animal.slug === args.slug;
        });
        return animal;
    },
    categories: (parent, args, ctx) => ctx.categories,
    // dbდან categoriesის arrayში ეძებს იმ categoryს რომლის "slug" და არგუმენტში ჩაწერილი "slug"ი დაემთხვევა და იმას აბრუნებს.
    category: (parent, args, ctx) => {
        const Category = ctx.categories.find((category) => {
            return args.slug === category.slug;
        });
        return Category;
    },
};

module.exports = Query;
