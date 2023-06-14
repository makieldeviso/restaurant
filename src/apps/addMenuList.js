const addMenuList = (function () {

    const createContainer = function () {
        const mainContent = document.querySelector('div#content');

        const container = document.createElement('div');
        container.setAttribute('id', 'menu-content');

        mainContent.appendChild(container);
    }

    const createNavBar = function (categories) {
        const navBar = document.createElement('nav');
        navBar.setAttribute('id', 'menu-nav');

        const listCont = document.createElement('ul');

        categories.forEach(category => {
            const newList = document.createElement('li');
            const newButton = document.createElement('button');
            newButton.setAttribute('value', `${category}`);
            newButton.textContent = `${category.slice(0, 1).toUpperCase()}${category.slice(1)}`;

            // Adds event listener to menu nav bar
            const scrollToCategory = function () {
                const categoryDiv = document.querySelector(`section#${this.value} h5`);

                // Scrolls to center of name of first menu item
                categoryDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            }
            newButton.addEventListener('click', scrollToCategory);

            // Appends button to list and list to unordered list
            newList.appendChild(newButton);
            listCont.appendChild(newList);
        });

        // Appends container with all its button contents
        navBar.appendChild(listCont);

        // Appends menu nav bar to header
        const header = document.querySelector('header');
        header.appendChild(navBar);
    }

    const removeNavBar = function () {
        const navBar = document.querySelector('nav#menu-nav');
        const header = document.querySelector('header');

        // Note: condition ensures that menu navbar exists
        if (navBar !== null) {
            header.removeChild(navBar);
        }
    }

    const createCategory = function (category) {
        const categorySection = document.createElement('section');
        categorySection.setAttribute('class', 'category');
        categorySection.setAttribute('id', `${category}`);

        return categorySection;
    }

    const createHeader = function (category) {
        const label = `${category.slice(0, 1).toUpperCase()}${category.slice(1).toLowerCase()}`;
        const header = document.createElement('h4');
        header.setAttribute('class', 'menu-category');
        header.textContent = `${label}`;

        return header;
    }

    const createMenuItem = function (item) {
        const itemContainer = document.createElement('div');
        itemContainer.setAttribute('class', 'menu-item');

        // Reusable content maker
        const itemText = function (element, assignClass, text) {
            const newElement = document.createElement(`${element}`);
            newElement.setAttribute('class', `${assignClass}`);
            newElement.textContent = `${text}`;

            return newElement;
        }

        // Image content Maker
        const image = function () {
            const newImage = document.createElement('img');
            newImage.setAttribute('class', 'menu-img');
            newImage.setAttribute('src', item.image);

            const alt = `${item.name.toLowerCase()} image`;
            newImage.setAttribute('alt', `${alt}`);

            return newImage;
        }

        // Generate menu item details
        const itemName = itemText('h5', 'item-name', item.name);
        const itemPrice = itemText('p', 'item-price', item.price);
        const itemDescription = itemText('p', 'item-description', item.description);
        const itemImage = image();

        const itemsArray = [itemName, itemPrice, itemDescription, itemImage];
        itemsArray.forEach(item => itemContainer.appendChild(item));

        return itemContainer;
    }

    const assembleDetails = function (categoryArray) {
        categoryArray.forEach(category => {
            const menuContent = document.querySelector('div#menu-content');

            const categorySection = createCategory(category);
            const header = createHeader(category);

            categorySection.appendChild(header);
            menuContent.appendChild(categorySection);
        });
    }

    const addItems = function (itemsArray) {

        itemsArray.forEach(item => {
            const newItem = createMenuItem(item);
            const itemCategory = item.category;
        
            const categorySection = document.querySelector(`section#${itemCategory}`);

            categorySection.appendChild(newItem);
        }); 
    }

    return {createContainer, createNavBar, removeNavBar, assembleDetails, addItems };
})();

export { addMenuList };