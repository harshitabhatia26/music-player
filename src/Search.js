import React, { useState } from 'react';

const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    // Handle input changes and update parent component
    const handleChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery);
        onSearch(newQuery); // Pass the search query back to parent
    };

    return (
        <div className="relative px-2">
            <label htmlFor="Search" className="sr-only">Search for Song, Artist</label>

            <input
                type="text"
                id="Search"
                placeholder="Search for Song, Artist"
                value={query} // Reflect the current query
                onChange={handleChange} // Update query on change
                className="w-full rounded-md border-gray-200 p-2.5 pe-10 shadow-sm sm:text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
            />

            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                <button
                    type="button"
                    className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                    <span className="sr-only">Search</span>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-4 w-4"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                        />
                    </svg>
                </button>
            </span>
        </div>
    );
};

export default Search;
