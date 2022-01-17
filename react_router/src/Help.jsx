import React from 'react';

const Help=({match})=>{
    return (
        <h1>{match.params.number}</h1>
    );
}

export default Help;