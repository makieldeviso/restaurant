import { addMenuList } from "./addMenuList";
import { menuList } from "./menuList";


const changeContent = (function () {
    // Toggle between tabs
    const changeTab = function () {
        const open = this.dataset.open === 'open';

        // Button Events Function
        const setButtons = function (button) {
            const tabButton = button;
            if (open) {
                return
            };

            if (!open) {
                // Set open btn to close, before opening new btn
                const tabBtns = document.querySelectorAll('div#tab-btns button');
                tabBtns.forEach(btn => {
                    if (btn.dataset.open === 'open') {
                        btn.setAttribute('data-open', 'close');
                    }
                });

                // Opens new Btn
                button.setAttribute('data-open', 'open');
            }
        };

        // Content Events Function
        const changeContent = function (button) {
            const newPage = button.value;

            const mainContent = document.querySelector('div#content');

            // Removes the direct div child of mainContent before appending new tab
            const contentContainer = document.querySelector('div#content>div');
            mainContent.removeChild(contentContainer);

            // Appends new tab according to button Press
            if (newPage === 'home') {
                mainContent.setAttribute('data-content', 'home');

            } else if (newPage === 'menu') {
                // Create menu-content div container
                addMenuList.createContainer();

                // Appends the section categories
                menuList.addMenuCategory();

                // Adds menu items into corresponding section category
                menuList.addMenuItems();

                // Set attribute of the mainContainer
                mainContent.setAttribute('data-content', 'menu');

            } else if (newPage === 'contact') {
                mainContent.setAttribute('data-content', 'contact');
            }

        };

        // Executes functions
        setButtons(this);
        changeContent(this);
    }

    return {changeTab}
})();

export { changeContent };