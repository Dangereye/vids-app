import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="search-bar" >
            <form onSubmit={onSubmit}>
                <div className='input-group'>
                    <label>Video Search</label>
                    <input
                        type='text'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
}

export default SearchBar;