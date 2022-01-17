import React, { useState } from 'react';
import SearchResults from './SearchResults';

const Search=()=>{
    let [img,setImg] =useState();
    return (
        <>
        <br/>
        <input type="text" value={img} onChange={(event)=>setImg(event.target.value)} placeholder="Search Anything"/>
        <br/>
        { img==="" ? null : <SearchResults name={img}/> }
        </>
    );
}

export default Search;