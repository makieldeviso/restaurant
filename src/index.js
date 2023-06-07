import './style.css';
import { domElements } from "./addContent";
import bgImage from "./assets/bg.jpg";

import { adjustMainSize } from './sizeAdjust';

// domElements();


// Adjust the padding-top of main on resize
// Note: header position is fixed
window.addEventListener('load', adjustMainSize);
window.addEventListener('resize', adjustMainSize);
