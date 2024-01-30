import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
const UserDropdown = () => {
    return (
        <div>
            <div className="dropdown dropdown-hover">
                <div tabIndex={0} role="button" className="btn !border-none !p-0 !bg-transparent !text-4xl ">
                    <FaCircleUser className="border-2 !border-brand rounded-full" />
                </div>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-md w-52">
                    <li>
                        <Link href={"/profile"}>Profile</Link>
                    </li>
                    <li>
                        <Link href={"/profile"}>Logout</Link>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default UserDropdown