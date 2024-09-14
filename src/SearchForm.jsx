import React from 'react'

 function SearchForm() {
  return (
    <div>
        <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor='search'>search</label>
            <input
            id='search'
            role='searchBox'
            type='text'
            placeholder='search'
            ></input>
        </form>
    </div>
  )
}

export default SearchForm;
