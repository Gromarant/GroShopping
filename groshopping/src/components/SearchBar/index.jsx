import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useEffect, useState } from 'react';
import { getSearchResult } from './actions';
import { InputText } from '../InputText';
import './style.scss'

export const SearchBar = ( { placeholder, data } ) => {
    const [searchInput, setSearchInput] = useState( '' );
    const [resultItems, setResultItems] = useState( [] );

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    }
    

    useEffect(() => {
        const search = async (criteria) => {
            const data = await getSearchResult();
            const filteredData = data.filter( (value) => {
                return value.title.toLowerCase().includes(criteria.toLowerCase())
            });
            setResultItems(filteredData);
        }
        search(searchInput);
    }, [searchInput])

    return (
        <>
            <form className='searchBar' role="search">
                <div className='searchBar_container'>
                    <InputText className='SearchBar__input' type="text" value={searchInput} onChange={handleSearchInput} placeholder={ placeholder } areaLabel="Search through site"/>
                    <MicRoundedIcon className='SearchBar__talkIcon'/>
                    <SearchRoundedIcon className='SearchBar__searchIcon'/>
                </div>
                <FilterListRoundedIcon className='SearchBar__filterIcon'/>
            </form>

            {
                searchInput.length !== 0 && (
                    <section className='data'>
                        <div className='data__results'>
                            {resultItems.slice(0, 15).map((value, key) => {
                                return (
                                    <a key={value.title + value.author + value.year} className='data__result-item' href={value.link} target="blank">
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