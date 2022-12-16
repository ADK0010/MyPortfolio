/* eslint-disable jsx-a11y/alt-text */
import Avataar from "./assets/avataaars.png"
const Hero = () => {
    return ( 
        <div className="flex justify-around items-center pt-10">
        <div className="flex flex-col w-2/5">
        <span>AdityaKrishnan</span>
        <span>lorem dfsdf fdsgbdfs fgbrd vsfdvffbsd vf vdsff fgsbfwevbfwgvfvsd fgbsdfbfdsv fsbsd fdvbsefvd</span>
         <span className="border-solid w-24">Contact Me</span>
            </div>
            <div >
                <img src={Avataar} className="w-80"></img>
            </div>
            
        </div>
     );
}
 
export default Hero;