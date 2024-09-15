import React from 'react'

 function SearchForm({setSearch}) {


  return (
    <div>
        <form className='add-form' onSubmit={(e) => e.preventDefault()}>  
            <label htmlFor='search'>search</label>
            <input
            id='search'
            onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
            role='searchBox'
            type='text'
            placeholder='search'
            ></input>
            {/* <button>submit</button> */}
        </form>
    </div>
  )
}

export default SearchForm;
