const addHeaderContent = (function () {

    // Create page banner
    const createPageBanner = function () {
        // Create titleBanner div
        const titleBanner = document.createElement('div');
        titleBanner.setAttribute('id', 'page-title');

        // Creates page logo
        const logo = document.createElement('img');
        logo.setAttribute('id', 'logo');
        logo.setAttribute('src', './assets/logo.png');
        logo.setAttribute('alt', 'Heartbreak Pub logo');

         // Creates restaurant name
        const restoName = document.createElement('h1');
        restoName.setAttribute('id', 'resto-name');
        restoName.textContent = 'Heartbreak Pub';

        // Assemble Dom Elements
        titleBanner.appendChild(logo);
        titleBanner.appendChild(restoName);
        
        return titleBanner;
    }

    // Create tab changer
    const createTabChanger = function () {
        const btnsCont = document.createElement('div');
        btnsCont.setAttribute('id', 'tab-btns');

        const tabBtns = [];

        // Button maker function
        const makeBtn = function (id, value, dataOpen) {
            const newBtn = document.createElement('button');
            newBtn.setAttribute('id', `${id}`);
            newBtn.setAttribute('value', `${value}`);
            newBtn.setAttribute('data-open', `${dataOpen}`);

            const btnLabel = `${value.slice(0, 1).toUpperCase()}${value.slice(1)}`;
            newBtn.textContent = `${btnLabel}`;

            // Push the created button to tabBtns
            tabBtns.push(newBtn);
        }

        // Make the tab changer buttons
        makeBtn('home-btn', 'home', 'open');
        makeBtn('menu-btn', 'menu', 'close');
        makeBtn('contact-btn', 'contact', 'close');

        // Appends the buttons saved from the array to the container
        tabBtns.forEach(btn => btnsCont.appendChild(btn));

        return btnsCont;
    }

    // Append Header Contents to the DOM
    const appendHeaderContents = function () {
        const header = document.querySelector('header');

        const titleBanner = createPageBanner();
        const tabChanger = createTabChanger();

        const headerContents = [titleBanner, tabChanger];
        headerContents.forEach(content => header.appendChild(content));
    }
    return { appendHeaderContents };

})();

export { addHeaderContent };