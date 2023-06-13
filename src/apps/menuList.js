import { addMenuList } from "./addMenuList";

const menuList = (function () {

    const categories = ['pork', 'beef', 'chicken', 'beer', 'cocktails', 'refreshments'];
    const menuItems = [];

    class MenuItem {
        constructor (name, price, description, image, category) {
            this.name = name;
            this.price = price;
            this.description = description;
            this.image = image;
            this.category = category;
            menuItems.push(this);
        }
    }

    const item1 = new MenuItem (
        "LECHON KAWALI",
        "250.00",
        "Crispy deep-fried pork belly, served with a side of traditional dipping sauce, combining irresistible crispy skin with tender meat.",
        "./assets/menu/lechon-kawali.jpg",
        "pork"
    );

    const item2 = new MenuItem (
        "SIZZLING SISIG",
        "250.00",
        "Chopped and grilled pig's face and ears, seasoned with various spices and tangy calamansi juice, Served on a sizzling plate for a flavorful and satisfying experience.",
        "./assets/menu/sisig.jpg",
        "pork"
    );

    const item3 = new MenuItem (
        "CRISPY LECHON BELLY",
        "250.00",
        "Slow roasted, marinated prime cut pork belly, with harmonious fusion of a crispy, crackling skin and tender, succulent meat.",
        "./assets/menu/lechon-belly.jpg",
        "pork"
    )

    const item4 = new MenuItem (
        "GRILLED LIEMPO",
        "250.00",
        "Made from succulent slices of pork belly, meticulously seasoned and expertly grilled to perfection, this dish offers a tantalizing fusion of smoky charred notes and savory juiciness",
        "./assets/menu/liempo.jpg",
        "pork"
    )

    const item5 = new MenuItem (
        "STEAK",
        "250.00",
        "Handpicked prime beef steak, meticulously aged for optimal tenderness. Perfectly seared with rich buttery flavors with a hint of smokiness for a truly unforgettable dining sensation.",
        "./assets/menu/steak.jpg",
        "beef"
    )

    const item6 = new MenuItem (
        "Heartbreak Burger",
        "250.00",
        "Signature beef hamburger, meticulously prepared with high-quality ground beef. Seasoned to perfection with a juicy patty nestled within a soft bun in delectable combination of fresh toppings and condiments.",
        "./assets/menu/burger.jpg",
        "beef"
    )

    const item7 = new MenuItem (
        "Filipino Beef Steak",
        "250.00",
        "Tender slices of beef marinated in a blend of soy sauce, calamansi juice, and spices, resulting in a delightful fusion of savory and citrus notes. Served with sautéed onions.",
        "./assets/menu/beef-steak.jpg",
        "beef"
    )

    const item8 = new MenuItem (
        "Fried Buttered Chicken",
        "250.00",
        "Juicy chicken pieces delicately fried to a golden crisp, then generously coated in a luscious butter glaze that adds a delightful richness to every bite.",
        "./assets/menu/buttered-chicken.jpg",
        "chicken"
    )

    const item9 = new MenuItem (
        "Buffalo Wings",
        "250.00",
        "Chicken wings expertly fried to a perfect crisp and coated in a mouthwatering buffalo sauce that strikes the perfect balance between spicy and tangy flavors. Served with a side of cool and creamy ranch dressing.",
        "./assets/menu/buffalo-wings.jpg",
        "chicken"
    )

    const item10 = new MenuItem (
        "Inasal",
        "250.00",
        "Marinated in a blend of tangy calamansi juice, garlic, lemongrass, and annatto. Tender chicken grilled to perfection, infusing it with a smoky and savory taste.",
        "./assets/menu/inasal.jpg",
        "chicken"
    )

    const beer1 = new MenuItem (
        "BUCKET OF 6",
        "250.00",
        "Choose a kind or a variety from available 500mL beer brands: Pale Pilsen, Red Pony, Light Apple, Light Lemon, Crown & Heisenberg.",
        "./assets/menu/bucket.jpg",
        "beer"
    )

    const beer2 = new MenuItem (
        "Bottled Beer 500mL ",
        "250.00",
        "Available 500mL beer brands: Pale Pilsen, Red Pony, Light Apple, Light Lemon, Crown & Heisenberg.",
        "./assets/menu/beer.jpg",
        "beer"
    )





    const addMenuCategory = function () {
        addMenuList.createContainer();
        addMenuList.assembleDetails(categories);
    }    

    const addMenuItems = function () {
        addMenuList.addItems(menuItems);
    }

    return {addMenuCategory, addMenuItems};

})();

export { menuList };


