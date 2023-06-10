const addMainContent = (function () {
    // Create main content container
    const createMainContainer = function () {
        const contentDiv = document.createElement('div');
        contentDiv.setAttribute('id', 'content');
        contentDiv.setAttribute('data-content', 'home');

        return contentDiv;
    }

    // Append main container to the DOM
    const appendMainContainer = function () {
        const main = document.querySelector('main');
        const mainContainer = createMainContainer();

        main.appendChild(mainContainer);
    }

    return { appendMainContainer };

})();

export { addMainContent };