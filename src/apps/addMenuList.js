const addMenuList = (function () {

    const createContainer = function () {
        const mainContent = document.querySelector('div#content');

        const container = document.createElement('div');
        container.setAttribute('id', 'menu-content');

        mainContent.appendChild(container);
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

    return {createContainer, assembleDetails, addItems };
})();

export { addMenuList };