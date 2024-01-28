import { FaSearch } from "react-icons/fa";
const SearchForm = () => {
    return (
        <form >
            <div className=" text-gray-600 ">
                <input
                    type="search"
                    name="search"
                    placeholder="Search"
                    className="bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                />
                <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
                    <FaSearch/>
                </button>
            </div>
        </form>
    )
}

export default SearchForm