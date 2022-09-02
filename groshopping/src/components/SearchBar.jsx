import MicRoundedIcon from '@mui/icons-material/MicRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import FilterListRoundedIcon from '@mui/icons-material/FilterListRounded';

export const SearchBar = ( { placeholder, data } ) => {
    return (
        <>
            <form className='searchBar' role="search">
                <input className='SearchBar__input' type="text" placeholder={ placeholder } area-label="Search through site"></input>
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
            <section className='data'>
                <div className='data__results'>
                    {data.map((value, key) => {
                        return <div> {} </div>
                    })}
                </div>
            </section>
        </>
    );
}