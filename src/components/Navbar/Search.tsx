
import SearchIcon from '../../assets/navbar/searchIcon.svg?react';

const Search = () => {
  return (
    <form className="md:flex items-center hidden">
    <label htmlFor="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
      <div className="absolute inset-y-0 left-0 flex items-center pl-[6px] pointer-events-none">
        <SearchIcon className='text-black/40 dark:text-white/40' />
      </div>
      <input
        type="text"
        className="bg-black/5 dark:bg-white/10 border-0 text-black/20 dark:text-white/40 text-sm rounded-lg block max-w-[160px] w-full px-[26px] p-1 focus:ring-0 focus:outline-0 dark:placeholder-white/20 placeholder-black/20"
        placeholder="Search"
        required
      />
      <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-2">
        <svg aria-hidden="true" className="w-4 h-4 text-black/20 dark:text-white/20 hover:text-black dark:hover:text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd"></path>
        </svg>
      </button>
    </div>
  </form>
  )
}

export default Search
