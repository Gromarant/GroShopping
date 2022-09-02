export const SearchBar = ( { placeholder, data } ) => {
    return (
        <>
            <form className='searchBar' role="search">
                <input className='SearchBar__input' type="text" placeholder={placeholder} area-label="Search through site"></input>
                <button className='SearchBar__button' type='submit'>Icon loupe</button>
                <span className='SearchBar__filter'>Icon filter</span>
            </form>
            <section className='data'>
                <div className='data__results'></div>
            </section>
        </>
    );
}