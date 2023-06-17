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

    const content3 = new HomeContent (
        "QUENCH YOUR THIRST THEN RESUME TO HUSTLE",
        "Join us and savor a tantalizing oasis of flavors, as we invite you to satiate your parched palate and indulge in our invigorating libations.",
        "./assets/preview-3.jpg",
        "Bartender serving refreshments"
    );

    const stripText1 = "PORK - BEEF - CHICKEN";
    const stripText2 = "BEER - COCKTAILS - REFRESHMENTS";

    const addContent = function () {
        // Creates home-content div
        addHomeContent.createContainer();

        const mainContent1 = addHomeContent.createContent(content1);
        const mainContent2 = addHomeContent.createContent(content2);
        const mainContent3 = addHomeContent.createContent(content3);
        const mainStrip1 = addHomeContent.createStrip(stripText1);
        const mainStrip2 = addHomeContent.createStrip(stripText2);

        const contentArray = [mainContent1, mainStrip1, mainContent2, mainStrip2, mainContent3];

        addHomeContent.appendContent(contentArray);

    }

    return {addContent};
})();

export { homeContent };