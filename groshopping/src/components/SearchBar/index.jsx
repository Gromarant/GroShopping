import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';
import { useEffect, useState } from 'react';
import { getResult } from './actions';
import { InputText } from '../InputText';
import './style.scss'

export const SearchBar = ( { placeholder } ) => {
    const [input, setInput] = useState( '' );
    const [items, setItems] = useState( [] );

    const handleInput = (event) => {
        setInput(event.target.value);
    }

    useEffect(() => {
        const search = async () => {
            const data = await getResult(input);
            setItems(data);
        }
        search();
    }, [input])

    return (
        <>
            <form className='searchBar' role="search">
                <div className='searchBar_container'>
                    <InputText className='SearchBar__input' type="text" value={input} onChange={handleInput} placeholder={ placeholder } areaLabel="Search through site"/>
                    <MicRoundedIcon className='SearchBar__talkIcon'/>
                    <SearchRoundedIcon className='SearchBar__searchIcon'/>
                </div>
                <FilterListRoundedIcon className='SearchBar__filterIcon'/>
            </form>

            {
                input.length !== 0 && (
                    <section className='data'>
                        <div className='data__results'>
                            <ul>
                                {items.map((product) => {
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