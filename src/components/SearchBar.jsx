const SearchBar = ({query, setQuery, text}) => {
    return(
            <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="size-6 text-yellow-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
            </div>
                <input type="search" id="default-search" className="w-full font-bold ps-12 p-2 bg-transparent border border-gray-950/30 placeholder:text-gray-950 placeholder:text-sm placeholder:font-bold outline-none uppercase" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={text}/>
            </div>
    )
}

export default SearchBar