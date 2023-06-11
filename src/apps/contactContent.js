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

    const getDetails = function () {
        return contactDetails;
    }

    return {getDetails};

})();

export { contactContent };