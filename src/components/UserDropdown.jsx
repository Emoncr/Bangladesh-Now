import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
const UserDropdown = () => {
    return (
        <div className="dropdown group">
            <div role="button" className="group-item !border-none !p-0 !bg-transparent !text-4xl">
                <FaCircleUser className="border-2 !border-brand rounded-full" />
            </div>
            <ul className="dropdown-content z-[1] menu p-2 bg-base-100 rounded-md max-w-52 hidden group-hover:block  absolute bg-white shadow-lg w-full group-hover:item:bg-red-500">
                <li className="w-full">
                    <Link className="p-1 px-3 rounded-md transition w-full text-heading_color hover:bg-gray-200 block" href={"/profile"}>Profile</Link>
                </li>
                <li className="mt-1">
                    <Link className="p-1 px-3 rounded-md transition w-full text-heading_color hover:bg-gray-200 block" href={"/profile"}>Logout</Link>
                </li>
            </ul>
        </div>
    )
}

export default UserDropdown