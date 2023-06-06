const domElements = function () {
    const header = document.querySelector('header');

    const title = document.createElement('h1');
    title.setAttribute('id', 'restName');
    title.textContent = 'Restaurant';
    header.appendChild(title);
};

export { domElements };