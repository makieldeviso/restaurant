import './style.css';

import { sizeAdjust } from './apps/sizeAdjust';
import { changeContent } from './apps/changeContent';
import { addDomStructure } from './apps/addDomStructure';
import { addHeaderContent } from './apps/addHeaderContent';
import { addMainContent } from './apps/addMainContent';
import { addFooterContent } from './apps/addFooterContent';
import { addContactContent } from './apps/addContactContent';

// Append basic DOM elements;
addDomStructure.appendBodyElements();

// Append header contents
addHeaderContent.appendHeaderContents()

// Adjust the padding-top of main on resize
// Note: header position is fixed
window.addEventListener('load', sizeAdjust.adjustMainSize);
window.addEventListener('resize', sizeAdjust.adjustMainSize);

// Appends main container and append home contents on load
addMainContent.appendMainContainer();
changeContent.onLoadPage(); //home contents are loaded

// Append footer contents
addFooterContent.appendFooterContent();


// Add Event Listeners to tab changing buttons
const tabBtns = document.querySelectorAll('div#tab-btns button');
tabBtns.forEach(btn => btn.addEventListener('click', changeContent.changeTab));

