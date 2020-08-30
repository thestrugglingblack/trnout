import React from "react";

import {FormControl} from "react-bootstrap";

const Search = ({onSearch, placeholder}) => {
    return <div>
        <FormControl size={'lg'} type={'search'} placeholder={placeholder} onChange={(e)=> {
            onSearch(e.target.value)
        }} />
    </div>
};

export default Search;
