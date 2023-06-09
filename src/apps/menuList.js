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


    const addMenuCategory = function () {
        categories.forEach(category => {
            addMenuList.assembleDetails(category);
        });
    }    

    const addMenuItems = function () {
        menuItems.forEach(item => {
            addMenuList.addItem(item);
        });
    }

    return {addMenuCategory, addMenuItems};

})();

export { menuList };


