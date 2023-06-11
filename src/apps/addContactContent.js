import { contactContent } from "./contactContent";

const addContactContent = (function () {
    const contactDetails = contactContent.getDetails();

    const createContainer = function () {
        const mainContent = document.querySelector('div#content');

        const container = document.createElement('div');
        container.setAttribute('id', 'contact-content');

        mainContent.appendChild(container);
    }

    const createImagePreview = function () {
        const imagePreview = document.createElement('img');
        imagePreview.setAttribute('src', `${contactDetails.previewImgSrc}`);
        imagePreview.setAttribute('alt', `${contactDetails.previewImgAlt}`);

        return imagePreview;
    }

    const createReservation = function () {
        // Create parent container
        const reserveCont = document.createElement('div');
        reserveCont.setAttribute('id', 'reservation');
        reserveCont.setAttribute('class', 'contact-details');

        // Create header to parent container
        const reserveHeader = document.createElement('h3');
        reserveHeader.setAttribute('id', 'reserve-header');
        reserveHeader.textContent = 'Reserve a Spot';

        // Creates container (level-2);
        const contactOptionCont = document.createElement('div');
        contactOptionCont.setAttribute('id', 'reserve-cont');
        
        const createReserve = function (use, label, iconSrc, contact) {
            // Creates Container (level-3)
            // Note: will contain individual contact option
            const newContactCont = document.createElement('div');
            newContactCont.setAttribute('id', `contact-${use}`);
            newContactCont.setAttribute('class', 'reserve');

            // Creates icon
            const icon = document.createElement('img');
            icon.setAttribute('src', `${iconSrc}`);
            isSecureContext.setAttribute('alt', `contact-${use}`);

            // Creates label
            const contactLabel = document.createElement('p');
            contactLabel.textContent = `${label}`;

            // Creates the contact detail
            const detail = document.createElement('p');
            detail.textContent = `${contact}`;

            // Appends labels and details to the container
            const detailArray = [icon, contactLabel, detail];
            detailArray.forEach(detail => newContactCont.appendChild(detail));

            // Append container with the details inside to another container
            // Note: appends level-3 to level-2
            contactOptionCont.appendChild(newContactCont);
        }

        // Creates the call contact and message contact
        // Note: these are level-3 contents
        const callContact = createReserve (
            'call',
            'Phone',
            './assets/call.png',
            contactDetails.phone );
        
        const msgContact = createReserve (
            'message',
            'E-mail',
            './assets/msg.png',
            contactDetails.email );
        
        // Append reserve-cont to parent reservation container
        // Note: Appends level-2 to level-1/ parent container
        reserveCont.appendChild(contactOptionCont);
        
        return reserveCont;
    }

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
        console.log(args.length);
        return infoCont;
    }   

    const location = createInfo (
        './assets/location.png',
        'Location',
        contactDetails.building,
        contactDetails.city,
        contactDetails.province
    );

    const schedule = createInfo (
        './assets/sched.png',
        'Business Hours',
        contactDetails.schedule1,
        contactDetails.schedule2
    );

    return { location, schedule };

})();

export { addContactContent };