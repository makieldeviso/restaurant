const sizeAdjust = (function () {
    const getHeaderHeight = function () {
        const header =  document.querySelector('header');
        const headerHeight = header.clientHeight;
    
        return headerHeight;
    }
    
    const adjustMainSize = function () {
        const headerSize = getHeaderHeight();
        const main = document.querySelector('main');
        
        main.style.paddingTop = `${headerSize}px`;
    }

    return {adjustMainSize};
})();

export {sizeAdjust};


