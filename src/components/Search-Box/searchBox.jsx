import React from 'react';
import './searchBox.css';


export const SearchBox = ({ placeholder, handleChange }) => {
    return (
            <input
              className="searchBox"
              type="Search"
              placeholder={placeholder}
              onChange={handleChange}
            />
    )
}