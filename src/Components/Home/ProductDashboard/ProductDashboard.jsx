import { MdRemoveRedEye } from "react-icons/md";

const ProductDashboard = () => {
    return (
        <div>
            <h4 className="font-semibold bg-gray-300 mt-3 py-2 pl-2 mr-2">Manage All Products</h4>
            {/* large device showing table */}
            <div className="hidden md:block shadow-lg mt-1 px-6 mr-2 rounded-lg">
                <h2 className="py-4 text-lg font-bold">Product Dashboard</h2>
                <div className="overflow-x-auto rounded">
                    <table className="table">
                        {/* head */}
                        <thead className="bg-gray-300">
                            <tr className="text-black ">
                                <th className="tracking-wide text-left">Image</th>
                                <th className="tracking-wide text-left">Name</th>
                                <th className="tracking-wide text-left">Price</th>
                                <th className="tracking-wide text-left">Stock</th>
                                <th className="tracking-wide text-left">Category</th>
                                <th className="tracking-wide text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {/* row 1 */}
                            <tr className="">
                                <td className="whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-12 h-12 rounded">
                                                <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap">Couples</td>
                                <td className="whitespace-nowrap">200</td>
                                <td className="whitespace-nowrap">10</td>
                                <td className="whitespace-nowrap">people</td>
                                <td className="whitespace-nowrap"><MdRemoveRedEye/></td>
                            </tr>
                            {/* row 1 */}
                            <tr className="">
                                <td className="whitespace-nowrap">
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="w-12 h-12 rounded">
                                                <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="whitespace-nowrap">Couples</td>
                                <td className="whitespace-nowrap">200</td>
                                <td className="whitespace-nowrap">10</td>
                                <td className="whitespace-nowrap">people</td>
                                <td className="whitespace-nowrap"><MdRemoveRedEye/></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            {/* mobile device */}
            <div className="md:hidden shadow-lg m-2 p-3 rounded-md">
                <h2 className="py-4 pl-2 text-lg font-bold">Product Dashboard</h2>
                <div className="overflow-x-auto">
                    <table className="pt-5 border-t-2 border-black w-full">
                        <tbody >
                            {/* card one */}
                            <tr>
                                <th className="border-r-2 border-gray-500">Image</th>
                                <td className="pl-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Name</th>
                                <td className="pl-4">
                                    Couple
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Price</th>
                                <td className="pl-4">
                                    200
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Stock</th>
                                <td className="pl-4">
                                    2
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Category</th>
                                <td className="pl-4">
                                  People
                                </td>
                            </tr>
                            <tr className="border-b-4 border-black">
                                <th className="border-r-2 border-gray-500">Actions</th>
                                <td className="pl-4">
                                   <MdRemoveRedEye/>
                                </td>
                            </tr>
                                
                            </tbody>
                            <tbody>
                            {/* card one */}
                            <tr>
                                <th className="border-r-2 border-gray-500">Image</th>
                                <td className="pl-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Name</th>
                                <td className="pl-4">
                                    Couple
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Price</th>
                                <td className="pl-4">
                                    200
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Stock</th>
                                <td className="pl-4">
                                    2
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Category</th>
                                <td className="pl-4">
                                  People
                                </td>
                            </tr>
                            <tr className="border-b-4 border-black">
                                <th className="border-r-2 border-gray-500">Actions</th>
                                <td className="pl-4">
                                   <MdRemoveRedEye/>
                                </td>
                            </tr>
                                
                            </tbody>
                            <tbody>
                            {/* card one */}
                            <tr>
                                <th className="border-r-2 border-gray-500">Image</th>
                                <td className="pl-4">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src="https://images.pexels.com/photos/5065220/pexels-photo-5065220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Name</th>
                                <td className="pl-4">
                                    Couple
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Price</th>
                                <td className="pl-4">
                                    200
                                </td>
                            </tr>
                            <tr className="border-t-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Stock</th>
                                <td className="pl-4">
                                    2
                                </td>
                            </tr>
                            <tr className="border-y-2 border-gray-500">
                                <th className="border-r-2 border-gray-500">Category</th>
                                <td className="pl-4">
                                  People
                                </td>
                            </tr>
                            <tr className="border-b-2 border-black">
                                <th className="border-r-2 border-gray-500">Actions</th>
                                <td className="pl-4">
                                   <MdRemoveRedEye/>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};
export default ProductDashboard;