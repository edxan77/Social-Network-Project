import React from 'react';
import {Search} from "@mui/icons-material";

const SearchSide = (props) => {
    return (
        <>
            <div className={props.className}>
                <div className={props.searchClass}>
                    <Search className={props.searchIcon}/>
                    <input className={props.searchInput}/>
                </div>
            </div>
        </>
    );
}

export default SearchSide;