const addDomStructure = (function () {

    // Create and appends body elements, i.e. header, main, footer
    const appendBodyElements = function () {
        const header = document.createElement('header');
        const main = document.createElement('main');
        const footer = document.createElement('footer');
    
        const bodyElements = [header, main, footer];
        const body = document.querySelector('body');
    
        bodyElements.forEach(element => body.appendChild(element));
    }
   
    return {appendBodyElements};
})();

export { addDomStructure };