import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useEffect, useState } from 'react';
import { getSearchResult } from './actions';
import { InputText } from '../InputText';
import './style.scss'

export const SearchBar = ( { placeholder } ) => {
    const [searchInput, setSearchInput] = useState( '' );
    const [resultItems, setResultItems] = useState( [] );

    const handleSearchInput = (event) => {
        setSearchInput(event.target.value);
    }
    

    useEffect(() => {
        const search = async () => {
            const data = await getSearchResult(searchInput);
            setResultItems(data);
        }
        search();
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
                            <ul>
                                {resultItems.map((product) => {
                                    return (
                                        <li key={product.id} className='data__result-item'>{product.name}</li>
                                    )
                                })}
                            </ul>
                        </div>
                    </section>
                )                                                                                           
            }
        </>
    );
}