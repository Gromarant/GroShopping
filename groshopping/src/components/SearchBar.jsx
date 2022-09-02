import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useState } from 'react';

export const SearchBar = ( { placeholder, data } ) => {
    return (
        <>
            <form className='searchBar' role="search">
                <input className='SearchBar__input' type="text" placeholder={ placeholder } area-label="Search through site" onChange={handleFilter}></input>
                <span className='SearchBar__talkIcon'>
                    <MicRoundedIcon />
                </span>
                <button className='SearchBar__searchIcon' type='submit'>
                    <SearchRoundedIcon />
                </button>
                <span className='SearchBar__filterIcon'>
                    <FilterListRoundedIcon />
                </span>
            </form>

            {filteredData.length != 0 &&
            <section className='data'>
                <div className='data__results'>
                    {data.map((value, key) => {
                        return (
                            <a className='data__result-item' href={value.link} target="blank">
                                <p>{value.title}</p>
                            </a>)
                    })}
                </div>
            </section>
            }
        </>
    );
}