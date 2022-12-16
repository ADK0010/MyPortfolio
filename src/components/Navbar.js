const Navbar = () => {
    return ( 
        <div className="flex justify-around items-center p-4">
            <span className="logo text-3xl font-black">AK</span>
            <span className="right">
                <ul  className="flex gap-x-[4rem]">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Skills</li>
                    <li className="cursor-pointer">Projects</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </span>
        </div>
     );
}
 
export default Navbar;