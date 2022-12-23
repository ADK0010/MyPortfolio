const Navbar = () => {
    return ( 
        <div className="flex justify-around items-center p-4">
            <span className="logo text-3xl font-black">AK</span>
            <span className="right">
                <ul  className="flex gap-x-[4rem]">
                    <li className="cursor-pointer bg-[#fc5185] p-3 px-6 rounded navItem">Home</li>
                    <li className="cursor-pointer bg-[#fc5185] p-3 px-6 rounded navItem">Skills</li>
                    <li className="cursor-pointer bg-[#fc5185] p-3 px-6 rounded navItem">Projects</li>
                    <li className="cursor-pointer bg-[#fc5185] p-3 px-6 rounded navItem">Contact</li>
                </ul>
            </span>
        </div>
     );
}
 
export default Navbar;