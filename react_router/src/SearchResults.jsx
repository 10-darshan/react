import React from 'react';

const SearchResults=(props)=>{
    const img=`https://source.unsplash.com/400x300/?${props.name}`
    return (
        <img src={img} alt={props.name}/>
    );
}

export default SearchResults;