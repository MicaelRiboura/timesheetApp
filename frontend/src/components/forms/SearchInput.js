import { Search } from "heroicons-react";

const SearchInput = ({ placeholder }) => {
    return (
        <div className="border border-blue-900 rounded-sm outline-none p-1 flex items-center bg-white">
            <input type="text" className="focus:outline-none" placeholder={placeholder} />
            <Search className="h-4 text-blue-900" />
        </div>
    );
}

export default SearchInput;