/* eslint-disable jsx-a11y/alt-text */
import HTML from "./icons/html-icon.svg"
import CSS from "./icons/css-icon.svg"
import TAILWIND from "./icons/tailwind-css-icon.svg"
import JAVASCRIPT from "./icons/javascript-programming-language-icon.svg"
import NODEJS from "./icons/node-js-icon.svg"
import EXPRESSJS from "./icons/express-js-icon.svg"
const Skills = () => {
    return ( 
        <div className="Skills h-full w-full flex flex-col">
         <div>
         <span>MY</span>
         <span>SKILLS</span>
         </div>
         
<span>
    What I Can Do
</span>
<div className="grid grid-cols-3">
   <span className="flex items-center">
    <img src= {HTML} className="w-10" />HTML 
      </span>
   <span className="flex items-center">
    <img src= {CSS} className="w-10" />CSS 
      </span>
   <span className="flex items-center">
    <img src= {TAILWIND} className="w-10" />TAILWIND-CSS
      </span>
   <span className="flex items-center">
    <img src= {JAVASCRIPT} className="w-10" />JAVASCRIPT 
      </span>
   <span className="flex items-center">
    <img src= {NODEJS} className="w-10" />NODEJS 
      </span>
   <span className="flex items-center">
    <img src= {EXPRESSJS} className="w-10" />EXPRESSJS 
      </span>
</div>
        </div>
     );
}
 
export default Skills;