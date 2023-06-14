const addContactContent = (function () {
    const createContainer = function () {
        const mainContent = document.querySelector('div#content');

        const container = document.createElement('div');
        container.setAttribute('id', 'contact-content');

        mainContent.appendChild(container);
    }

    const createImagePreview = function (imgSrc, imgAlt) {
        const imagePreview = document.createElement('img');
        imagePreview.setAttribute('id', 'lounge-img');
        imagePreview.setAttribute('src', `${imgSrc}`);
        imagePreview.setAttribute('alt', `${imgAlt}`);

        return imagePreview;
    }

    // Create reservation contact options (start) -
    const createReserveCont = function () {
        // Create parent container
        const reserveCont = document.createElement('div');
        reserveCont.setAttribute('id', 'reservation');
        reserveCont.setAttribute('class', 'contact-detail');

        // Create header to parent container
        const reserveHeader = document.createElement('h3');
        reserveHeader.setAttribute('id', 'reserve-header');
        reserveHeader.textContent = 'Reserve a Spot';

        // Creates container (level-2);
        const contactOptionCont = document.createElement('div');
        contactOptionCont.setAttribute('id', 'reserve-cont');

        // Appends header and level-2 container to parent container
        const detailsArray = [reserveHeader, contactOptionCont];
        detailsArray.forEach(detail => reserveCont.appendChild(detail));

        return reserveCont;
    }

    // Take object as an argument, create reservation contact option
    const createReserve = function (...args) {
        const parentCont = createReserveCont();
        const level2Cont = parentCont.querySelector('div#reserve-cont');

        // Loops through the object arguments 
        for (let i = 0; i < args.length; i++) {
            // Creates Container (level-3)
            // Note: will contain individual contact option
            const newContactCont = document.createElement('div');
            newContactCont.setAttribute('id', `contact-${args[i].use}`);
            newContactCont.setAttribute('class', 'reserve');

            // Creates icon
            const icon = document.createElement('img');
            icon.setAttribute('src', `${args[i].iconSrc}`);
            icon.setAttribute('alt', `contact-${args[i].use}`);

            // Creates label
            const contactLabel = document.createElement('p');
            contactLabel.textContent = `${args[i].label}`;

            // Creates the contact detail
            const detail = document.createElement('p');
            detail.textContent = `${args[i].contact}`;

            // Appends labels and details to the container
            const detailArray = [icon, contactLabel, detail];
            detailArray.forEach(detail => newContactCont.appendChild(detail));

            // Append container with the details inside to another container
            // Note: appends level-3 to level-2
            level2Cont.appendChild(newContactCont);
        }

        return parentCont
    }
    // Create reservation contact options (end) -

    // Reusable info creator function
    // 1st param - image source
    // 2nd para -label
    // Rest addition info
    const createInfo = function (...args) {
        const iconSrc = args[0];
        const infoLabel = args[1];

        // Creates parent container
        const infoCont = document.createElement('div');
        infoCont.setAttribute('class', 'contact-detail');

        // Creates icon
        const newIcon = document.createElement('img');
        newIcon.setAttribute('src', `${iconSrc}`);
        newIcon.setAttribute('alt', `${infoLabel} icon`);

        // Creates label
        const newLabel = document.createElement('h3');
        newLabel.textContent = `${infoLabel}`;

        // Array of info to include
        //Note: icon and label is already included, 
        // a for loop is executed to append additional info
        const infoArray = [newIcon, newLabel];

        for (let i = 2; i < args.length; i++) {
            const newDetail = document.createElement('p');
            newDetail.textContent = `${args[i]}`;

            infoArray.push(newDetail);
        }

        // Append info from array to parent container
        infoArray.forEach(info => infoCont.appendChild(info));
        
        // Return info container with all info inside
        return infoCont;
    }   
    
    const appendContent = function  (contentArray) {
        const contactContent = document.querySelector('div#contact-content');

        contentArray.forEach(content => contactContent.appendChild(content));

    }

    return { createContainer, createImagePreview, createReserve, createInfo, appendContent };

})();

export { addContactContent };