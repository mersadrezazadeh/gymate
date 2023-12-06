import { FaMagnifyingGlass } from "react-icons/fa6";

function SearchBar() {
  return (
    <div className="flex">
      <input
        type="text"
        placeholder="Search here..."
        className="focus w-full rounded-l-md border border-gray-150 px-4"
      />
      <button className="focus ml-[-1px] rounded-r-md bg-red p-4 text-white">
        <FaMagnifyingGlass />
      </button>
    </div>
  );
}

export default SearchBar;
