"use client"
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import LoadingSpiner from "../LoadingSpiner";
import ShortNews from "../ShortNews";





const SearchForm = () => {
    const [data, setData] = useState({
        searchText: ""
    });
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState([]);


    const handleChange = async (e) => {
        e.preventDefault()
        setData({ ...data, searchText: e.target.value })
        if (!e.target.value) return

        const isEmptySpace = e.target.value.trim();
        if (isEmptySpace.length === 0) return

        try {
            setLoading(true)
            const res = await (await fetch(`/api/news_list/search?keyword=${e.target.value}`, { cache: "no-cache" })).json();
            if (res.success !== true) {
                setLoading(false)
            }
            else {
                setLoading(false)
                setResult(res.data)
            }
        } catch (error) {
            setLoading(false)

        }
    }








    return (
        <div className="relative ">
            <form >
                <div className="grid grid-cols-12 rounded-lg">
                    <input
                        onChange={e => handleChange(e)}
                        type="search"
                        name="search"
                        placeholder="Search news"
                        className="border-2 border-[#ccc] focus:border-brand focus:outline-none px-2 py-2 w-full col-span-10 rounded-s-lg text-heading_color"
                    />
                    <button type="submit" className=" col-span-2 flex items-center justify-center bg-brand text-white rounded-e-lg">
                        <FaSearch />
                    </button>
                </div>
            </form>
            {
                data.searchText && <div className="py-5 px-3 w-full bg-white z-10 shadow-brandShadow rounded-sm absolute transition ">
                    <div className="search_news grid grid-cols-1 items-center">
                        {
                            loading ?
                                <div>
                                    <LoadingSpiner />
                                </div>
                                :
                                <>
                                    {
                                        result.length !== 0 ? result.map((newsInfo, index) =>
                                            <ShortNews key={index} info={newsInfo} />
                                        ) :
                                            <div>
                                                <p>No News found</p>
                                            </div>
                                    }
                                </>
                        }
                    </div>
                </div>
            }
        </div>
    )
}

export default SearchForm