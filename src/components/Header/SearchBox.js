import SearchForm from './SearchForm';

const SearchBox = () => {
  return (
    <div>
      <div className="search-form-container">
        <SearchForm
          locationValue="Helsinki, Finland"
          inputClass="search-input"
        />
      </div>
      <div style={{ display: 'none' }}></div>
    </div>
  );
};

export default SearchBox;
