import { addContactContent } from "./addContactContent";

const contactContent = (function () {

    const contactDetails = {
        phone: '+63 915 123 4567',
        email: 'heartbreak_pub@madeup.com',
        building: 'Fiery Pata Building',
        city: 'Pob. Zone I, Mayorga',
        province: 'Leyte PH',
        schedule1: 'Weekdays: 4:00pm - 3:00am',
        schedule2: 'Weekends: 6:00pm - 4:00am',
        previewImgSrc: './assets/lounge.jpg',
        previewImgAlt: 'lounge image of heartbreak pub'

    }

    const addContent = function () {
        // Creates container for the contents
        addContactContent.createContainer();

        // Create and append image preview to main
        const imagePreview = addContactContent.createImagePreview(contactDetails.previewImgSrc, contactDetails.previewImgAlt);

        // Create reservation contact info (start) -
        // Create the reservation object
        const reserveObj = function (use, label, iconSrc, contact) {
            this.use = use,
            this.label = label,
            this.iconSrc = iconSrc,
            this.contact = contact
        }
        
        const call = new reserveObj ( 
            'call', 
            'Phone', 
            './assets/call.png', 
            contactDetails.phone );
        
        const message = new reserveObj (
            'message',
            'E-mail',
            './assets/msg.png',
            contactDetails.email );

        const reserveContact = addContactContent.createReserve(call, message);
        // Create reservation contact info (end) -

        // Create info content using createInfo function (start) -
        const location = addContactContent.createInfo (
            './assets/location.png',
            'Location',
            contactDetails.building,
            contactDetails.city,
            contactDetails.province
        );

        const schedule = addContactContent.createInfo (
            './assets/sched.png',
            'Business Hours',
            contactDetails.schedule1,
            contactDetails.schedule2
        );
        // Create info content using createInfo function (end) -

        // Save contents on an array
        const contentArray = [imagePreview, reserveContact, location, schedule];
        
        // Append the contents from array by passing the array as argument 
        // to appendContent function
        addContactContent.appendContent(contentArray);
    }

    return { addContent };

})();

export { contactContent };