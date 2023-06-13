import { addHomeContent } from "./addHomeContent";

const homeContent = (function () {
    class HomeContent {
        constructor (slogan, message, image, imageAlt) {
            this.slogan = slogan;
            this.message = message;
            this.image = image;
            this.imageAlt = imageAlt;
        }
    }

    const content1 = new HomeContent (
        "WHAT DOESN'T KILL YOU, MAKES YOU HAPPIER",
        "Welcome to Heartbreak Pub, where we invite you to savor the moment and indulge in the pure bliss that comes from unabashed culinary delights. Dine with us and let the calories enhance the creation of unforgettable memories around our table.",
        "./assets/preview-1.png",
        "Various filipino foods on the table"
    );

    const content2 = new HomeContent (
        "RAISE YOUR GLASS AND DRINK WITH US",
        "Welcome to our lively pub, where laughter fills the air and good times are on tap. Enjoy a curated selection of classic cocktails, refreshing beers, and more. Whether you're celebrating, socializing, or unwinding, our friendly bartenders are here to serve your favorite drinks with a smile. Cheers to unforgettable moments!",
        "./assets/preview-2.png",
        "Friends enjoying their drinks while talking"
    );

    const stripText1 = "PORK - BEEF - CHICKEN - BEER - SEAFOOD - COCKTAIL - REFRESHMENTS";

    const addContent = function () {
        // Creates home-content div
        addHomeContent.createContainer();

        const mainContent1 = addHomeContent.createContent(content1);
        const mainContent2 = addHomeContent.createContent(content2);
        const mainStrip1 = addHomeContent.createStrip(stripText1);

        const contentArray = [mainContent1, mainStrip1, mainContent2];

        addHomeContent.appendContent(contentArray);

    }

    return {addContent};

})();


export { homeContent };