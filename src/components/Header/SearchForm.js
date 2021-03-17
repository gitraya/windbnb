import { useRef } from 'react';
const SearchForm = ({ onlick }) => {
  const inputRef = useRef();
  const handleInputClick = () => {
    inputRef.current.defaultValue = 'Helsinki, Finland';
    onlick();
  };
  return (
    <div className="search-form-modal">
      <form action="">
        <div className="input-control-modal">
          <label className="input-label-modal" htmlFor="location">
            location
          </label>
          <input
            ref={inputRef}
            onClick={handleInputClick}
            type="text"
            title="location"
            name="location"
            id="location"
            placeholder="Add location"
            className="search-input-modal"
          />
        </div>
        <div className="input-control-modal">
          <label className="input-label-modal" htmlFor="guests">
            guests
          </label>
          <input
            type="text"
            title="guests"
            name="guests"
            id="guests"
            placeholder="Add guests"
            className="search-input-modal"
          />
        </div>
        <div className="input-control-modal">
          <button
            onClick={(e) => {
              e.preventDefault();
            }}
            type="submit"
            name="search"
            className="search-input-modal"
          >
            <i class="fas"></i> Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
