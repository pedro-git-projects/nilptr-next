import { FaSearch } from "react-icons/fa";

interface Props {
  handleClick: () => void;
}

const SearchBtn: React.FC<Props> = ({ handleClick }) => {
  return (
    <button
      className="relative inline-flex items-center px-20 py-4 border border-gray-300 shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
      onClick={handleClick}
    >
      <span className="absolute inset-y-0 left-0 flex items-center pl-2">
        <FaSearch />
      </span>
    </button>
  );
};

export default SearchBtn;
