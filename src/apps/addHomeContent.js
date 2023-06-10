const addHomeContent = (function () {

    const createContainer = function () {
        const mainContent = document.querySelector('div#content');

        const container = document.createElement('div');
        container.setAttribute('id', 'home-content');

        mainContent.appendChild(container);
    }

    const createContent = function (item) {
        const contentDiv = document.createElement('div');
        contentDiv.setAttribute('class', 'home-text');

        const slogan = document.createElement('h3');
        slogan.textContent = `${item.slogan}`;

        const message = document.createElement('p');
        message.textContent = `${item.message}`;

        const image = document.createElement('img');
        image.setAttribute('class', 'home-img');
        image.setAttribute('src', `${item.image}`);
        image.setAttribute('alt', `${item.imageAlt}`);

        const detailsArray = [slogan, message, image];
        detailsArray.forEach(detail => contentDiv.appendChild(detail));

        return contentDiv;
    }

    const createStrip = function (item) {
        const stripDiv = document.createElement('div');
        stripDiv.setAttribute('class', 'strip');

        const stripContent = document.createElement('p');
        stripContent.setAttribute('class', 'strip-text');
        stripContent.textContent = `${item}`;

        stripDiv.appendChild(stripContent);

        return stripDiv;
    }

    const appendContent = function (contentArray) {
        const homeContent = document.querySelector('div#home-content');

        contentArray.forEach(content => homeContent.appendChild(content));
    }



    return {createContainer, createContent, createStrip, appendContent};
})();

export { addHomeContent };