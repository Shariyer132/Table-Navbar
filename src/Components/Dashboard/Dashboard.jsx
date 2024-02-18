import { Link, Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { TbCategoryPlus } from "react-icons/tb";

const Dashboard = () => {
    return (
        <div>
            <Navbar />
            <div className="flex gap-2">
                <div className="w-1/5 pt-3">
                    <h4 className="bg-gray-300 pl-7 text-base py-2 w-full font-medium">Admin Links</h4>
                    
                        <Link className="flex hover:bg-[#D0CBC8] py-2 pl-7 font-semibold items-center gap-1 " ><TbCategoryPlus /><span className="hidden sm:block">Admin Links</span></Link>
                        <Link className="flex hover:bg-[#D0CBC8] py-2 pl-7 font-semibold items-center gap-1 " ><TbCategoryPlus /><span className="hidden sm:block">Admin Links</span></Link>
                        <Link className="flex hover:bg-[#D0CBC8] py-2 pl-7 font-semibold items-center gap-1 " ><TbCategoryPlus /><span className="hidden sm:block">Admin Links</span></Link>
                 
                </div>
                <div className="w-4/5"><Outlet /></div>
            </div>
        </div>
    );
};

export default Dashboard;