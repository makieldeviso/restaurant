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
        // TEMPORARY !!!!!!!!!!
        const changeContent = function (button) {
            console.log(button.value);
            const homeContent = document.querySelector('div#home-content');

            homeContent.style.display = 'none';
        };

        // Executes functions
        setButtons(this);
        changeContent(this);
    }

    return {changeTab}
})();

export { changeContent };