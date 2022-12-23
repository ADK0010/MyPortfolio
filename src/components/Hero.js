/* eslint-disable jsx-a11y/alt-text */
import Avataar from "./assets/avataaars.png"
const Hero = () => {
    return ( 
        <div className="hero h-full mb-24 flex justify-around items-center pt-10">
        <div className="left_hero flex flex-col w-2/5 ">
        <span className="text-3xl">AdityaKrishnan</span>
        <span className="text-lg">lorem dfsdf fdsgbdfs fgbrd vsfdvffbsd vf vdsff fgsbfwevbfwgvfvsd fgbsdfbfdsv fsbsd fdvbsefvd</span>
         <span className="border-solid w-24">Contact Me</span>
            </div>
            <div className="right_hero" >
                <img src={Avataar} className="w-80"></img>
            </div>
            
        </div>
     );
}
 
export default Hero;