import React, {FC} from 'react';

interface SearchPostType {
    searchValue: string
    handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleClear: () => void
}

export const SearchPost: FC<SearchPostType> = ({searchValue, handleSearch, handleClear}) => {

    return (
        <div>
            SearchPost
            <input
                placeholder="enter post"
                value={searchValue}
                onChange={handleSearch}
            />
            <button onClick={handleClear}>clear</button>
        </div>
    );
};

