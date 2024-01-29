import { FaSearch } from "react-icons/fa";
const SearchForm = () => {
    return (
        <form >
            <div className="grid grid-cols-12 rounded-lg">
                <input
                    type="search"
                    name="search"
                    placeholder="Search news"
                    className="border-2 border-[#ccc] focus:border-brand focus:outline-none px-2 py-2 w-full col-span-10 rounded-s-lg text-[#ccc]"
                />
                <button type="submit" className=" col-span-2 flex items-center justify-center bg-brand text-white rounded-e-lg">
                    <FaSearch />
                </button>
            </div>
        </form>
    )
}

export default SearchForm