import { Link } from "react-router-dom";
import { IoIosLogOut } from "react-icons/io";

const Navbar = () => {
    const links = <>
        <li><Link to='/dashboardProduct' className=" btn-sm">DASHBOARD</Link></li>
        <li><Link className=" btn-sm flex items-center">Logout<IoIosLogOut /></Link></li>

    </>
    return (
        <div className="navbar bg-blue-400 px-16">
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-white text-xl">HOME</Link>
            </div>
            <div className="navbar-end">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box gap-2 w-52">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary className="text-white">CATEGORIES</summary>
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/dashboardProduct' className=" btn-sm">DASHBOARD</Link></li>
                                <li><Link className=" btn-sm flex items-center">Logout<IoIosLogOut /></Link></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div >
    );
};

export default Navbar;