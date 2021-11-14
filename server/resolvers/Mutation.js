const { v4 } = require("uuid");

const Mutation = {
    // არგუმენტში ჩაწერილი ინფორმაცია გადადის newAnimalში და შემდეგ ემატება dbდან წამოღებულ animalsის arrayს.
    addAnimal: (parent, { image, title, rating, price, description, stock, onSale, slug, category }, ctx) => {
        const newAnimal = { id: v4(), image, title, rating, price, description, stock, onSale, slug, category };
        ctx.animals.push(newAnimal);

        return newAnimal;
    },
    removeAnimal: (parent, args, ctx) => {
        //ცხოველების სიიდან იღებს ცხოველს index-ს რომლის id და ჩვენს მიერ არგუმენტებში ჩაწერილი id დაემთხვევა
        //ეს index ყოველთვის 1ით ნაკლები იქნება idზე რადგან idს ათვლა 1დან იწყება.
        const index = ctx.animals.findIndex((animal) => {
            return animal.id === args.id;
        });
        //ცხოველებისს სიიდან ამოაგდებს იმ ერთეულს რომელიც იქნება ზემოთ ხსენებული indexის შემდეგ.
        ctx.animals.splice(index, 1);
        console.log(index);

        return true;
    },
};

module.exports = Mutation;
