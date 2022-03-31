import sx from "./search.module.css";
import React from "react";
import {Search} from '@mui/icons-material';
const SearchComponent = () =>{
    return (
        <div className={sx.middle}>
            <div>
                <input className={sx.input} type="text" name="input"/>
            </div>
            <div>
                <Search className={sx.search}/>
            </div>
        </div>
    );
};
export default SearchComponent;