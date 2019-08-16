import React from 'react';
import './searchbox-component.styles.css';

export const SearchBox = ({placeholder , handleChange}) =>
{
    return(
        <input type="search"
        className="search"
        placeholder= {placeholder}
        onChange= {handleChange}
        />
    )
}