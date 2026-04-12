function Navbar(){
    return(
        <div className="bg-gray-200 p-3 text-black flex justify-between">
          <h1 className="pl-7 text-2xl">LOGO</h1>
          <ul className="flex gap-3 pr-7">
            <li>Home</li>
            <li>Signup</li>
            <li>Login</li>
          </ul>
        </div>
    );
}
export default Navbar;