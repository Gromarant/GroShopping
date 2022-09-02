import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useState } from 'react';

export const SearchBar = ( { placeholder, data } ) => {
    const [filteredData, setFilteredData] = useState( [] );

    const handleFilter = (event) => {
        const searchInput = event.target.value;
        const newSearch = data.filter( (value) => {
            return value.title.toLowerCase().includes(searchInput.toLowerCase())
        });

        const searchData = ( searchInput === "" ) ? [] : newSearch;
        setFilteredData(searchData);
    };

    return (
        <>
            <form className='searchBar' role="search">
                <input className='SearchBar__input' type="text" placeholder={ placeholder } area-label="Search through site" onChange={handleFilter}></input>
                    <MicRoundedIcon className='SearchBar__talkIcon'/>
                    <SearchRoundedIcon className='SearchBar__searchIcon'/>
                    <FilterListRoundedIcon className='SearchBar__filterIcon'/>
            </form>

            {
                filteredData.length !== 0 && (
                    <section className='data'>
                        <div className='data__results'>
                            {filteredData.slice(0, 15).map((value, key) => {
                                return (
                                    <a className='data__result-item' href={value.link} target="blank">
                                        <p>{value.title}</p>
                                    </a>)
                            })}
                        </div>
                    </section>
                )
            }
        </>
    );
}