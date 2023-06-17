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

    // Create menu items here (start) -
    const item1 = new MenuItem (
        "LECHON KAWALI",
        "349.00",
        "Crispy deep-fried pork belly, served with a side of traditional dipping sauce, combining irresistible crispy skin with tender meat.",
        "./assets/menu/lechon-kawali.jpg",
        "pork"
    );

    const item2 = new MenuItem (
        "SIZZLING SISIG",
        "249.00",
        "Chopped and grilled pig's face and ears, seasoned with various spices and tangy calamansi juice, Served on a sizzling plate for a flavorful and satisfying experience.",
        "./assets/menu/sisig.jpg",
        "pork"
    );

    const item3 = new MenuItem (
        "CRISPY LECHON BELLY",
        "399.00",
        "Slow roasted, marinated prime cut pork belly, with harmonious fusion of a crispy, crackling skin and tender, succulent meat.",
        "./assets/menu/lechon-belly.jpg",
        "pork"
    )

    const item4 = new MenuItem (
        "GRILLED LIEMPO",
        "299.00",
        "Made from succulent slices of pork belly, meticulously seasoned and expertly grilled to perfection, this dish offers a tantalizing fusion of smoky charred notes and savory juiciness",
        "./assets/menu/liempo.jpg",
        "pork"
    )

    const item5 = new MenuItem (
        "STEAK",
        "549.00",
        "Handpicked prime beef steak, meticulously aged for optimal tenderness. Perfectly seared with rich buttery flavors with a hint of smokiness for a truly unforgettable dining sensation.",
        "./assets/menu/steak.jpg",
        "beef"
    )

    const item6 = new MenuItem (
        "HEARTBREAK BURGER",
        "149.00",
        "Signature beef hamburger, meticulously prepared with high-quality ground beef. Seasoned to perfection with a juicy patty nestled within a soft bun in delectable combination of fresh toppings and condiments.",
        "./assets/menu/burger.jpg",
        "beef"
    )

    const item7 = new MenuItem (
        "FILIPINO BEEF STEAK",
        "349.00",
        "Tender slices of beef marinated in a blend of soy sauce, calamansi juice, and spices, resulting in a delightful fusion of savory and citrus notes. Served with sautéed onions.",
        "./assets/menu/beef-steak.jpg",
        "beef"
    )

    const item8 = new MenuItem (
        "FRIED BUTTERED CHICKEN",
        "349.00",
        "Juicy chicken pieces delicately fried to a golden crisp, then generously coated in a luscious butter glaze that adds a delightful richness to every bite.",
        "./assets/menu/buttered-chicken.jpg",
        "chicken"
    )

    const item9 = new MenuItem (
        "BUFFALO WINGS",
        "299.00",
        "Chicken wings expertly fried to a perfect crisp and coated in a mouthwatering buffalo sauce that strikes the perfect balance between spicy and tangy flavors. Served with a side of cool and creamy ranch dressing.",
        "./assets/menu/buffalo-wings.jpg",
        "chicken"
    )

    const item10 = new MenuItem (
        "INASAL",
        "299.00",
        "Marinated in a blend of tangy calamansi juice, garlic, lemongrass, and annatto. Tender chicken grilled to perfection, infusing it with a smoky and savory taste.",
        "./assets/menu/inasal.jpg",
        "chicken"
    )

    const beer1 = new MenuItem (
        "BUCKET OF 6",
        "399.00",
        "Choose a kind or a variety from available 500mL beer brands: Pale Pilsen, Red Pony, Light Apple, Light Lemon, Crown & Heisenberg.",
        "./assets/menu/bucket.jpg",
        "beer"
    )

    const beer2 = new MenuItem (
        "BOTTLED BEER 500mL ",
        "69.00",
        "Available 500mL beer brands: Pale Pilsen, Red Pony, Light Apple, Light Lemon, Crown & Heisenberg.",
        "./assets/menu/beer.jpg",
        "beer"
    )

    const beer3 = new MenuItem (
        "CRAFT BEER 1 PINT",
        "149.00",
        "A pint of house special beer, brewed utilizing premium malt varieties, carefully selected hops, and distinctive yeast strains.",
        "./assets/menu/craft-beer.jpg",
        "beer"
    )

    const cocktail1 = new MenuItem (
        "PIÑA COLADA",
        "199.00",
        "Tropical cocktail featuring rum, coconut cream, and pineapple juice. Served over ice and garnished with a pineapple wedge and cherry",
        "./assets/menu/pina-colada.jpg",
        "cocktails"
    )

    const cocktail2 = new MenuItem (
        "MOJITO",
        "129.00",
        "Combination of rum, lime juice, mint leaves, sugar, and soda water. Its invigorating flavors and muddled mint leaves evoke images of Caribbean beaches and provide a cool, refreshing experience",
        "./assets/menu/mojito.jpg",
        "cocktails"
    )

    const cocktail3 = new MenuItem (
        "MARGARITA",
        "129.00",
        "A classic cocktail made with tequila, lime juice, and orange liqueur, often served in a salt-rimmed glass. Its refreshing citrus flavors and balanced sweetness have made it a beloved choice for cocktail enthusiasts.",
        "./assets/menu/margarita.jpg",
        "cocktails"
    )

    const cocktail4 = new MenuItem (
        "ESPRESSO MARTINI",
        "149.00",
        "Combines vodka, coffee liqueur, and freshly brewed espresso, resulting in a sophisticated and energizing drink with balanced rich coffee notes and touch of sweetness.",
        "./assets/menu/espresso-martini.jpg",
        "cocktails"
    )

    const cocktail6 = new MenuItem (
        "PALOMA",
        "129.00",
        "Refreshing tequila-based cocktail that features grapefruit juice, lime juice, a pinch of salt and topped with soda water.",
        "./assets/menu/paloma.jpg",
        "cocktails"
    )

    const refresh1 = new MenuItem (
        "LEMONADE",
        "99.00",
        "Icy drink made with freshly squeezed lemon juice, water, and sweetened with honey.",
        "./assets/menu/lemonade.jpg",
        "refreshments"
    )

    const refresh2 = new MenuItem (
        "MANGO SHAKE",
        "99.00",
        "Luscious Mango Shake, blending ripe, juicy mangoes with creamy vanilla ice cream for a velvety, mouthwatering treat.",
        "./assets/menu/mango-shake.jpg",
        "refreshments"
    )

    const refresh3 = new MenuItem (
        "AVOCADO SHAKE",
        "99.00",
        "Nutritious Avocado Shake, crafted from ripe avocados, blended with condensed milk sweetness and cooling shaved ice.",
        "./assets/menu/avocado-shake.jpg",
        "refreshments"
    )

    const refresh4 = new MenuItem (
        "FROZEN COLA",
        "69.00",
        "Quench your thirst with our Frozen Cola, a frosty treat that combines the classic flavor of Cola-Cola with a delightful slushy texture. Cool down and enjoy the icy indulgence of this iconic beverage.",
        "./assets/menu/frozen-cola.jpg",
        "refreshments"
    )

    const refresh5 = new MenuItem (
        "FRESHLY BREWED ICED TEA",
        "89.00",
        "Enjoy the cool, revitalizing taste of our Iced Tea. Made from freshly brewed tea leaves, sweetened by natural honey and handsomely iced.",
        "./assets/menu/iced-tea.jpg",
        "refreshments"
    )
    // Create menu items here (end) -

    const addMenuCategory = function () {
        addMenuList.createContainer();

        // Append menu navbar to the header
        addMenuList.createNavBar(categories);
        
        addMenuList.assembleDetails(categories);
    }    

    const addMenuItems = function () {
        addMenuList.addItems(menuItems);
    }

    return {addMenuCategory, addMenuItems};
})();

export { menuList };


