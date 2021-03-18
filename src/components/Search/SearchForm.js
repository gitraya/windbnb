import './Search.css';

const SearchForm = ({
  filteringStays,
  filterValue,
  changeFilterValue,
  optionShow,
}) => {
  // Handle submitted form
  const handleFormSubmit = (e) => {
    let filter = [filterValue.location, parseInt(filterValue.maxGuests)];
    filteringStays(e, filter);
  };

  // Handle focused input
  const handleFocused = (e) => {
    optionShow(e.target.title);
  };

  // Text guest by number of guests
  const guestValue = () => {
    return filterValue.maxGuests > 1 ? 'guests' : 'guest';
  };

  return (
    <div className="search-form-modal">
      <form onSubmit={handleFormSubmit}>
        <div className="input-control-modal">
          <label className="input-label-modal" htmlFor="location">
            location
          </label>
          <input
            value={filterValue.location}
            type="text"
            title="location"
            name="location"
            id="location"
            placeholder="Add location"
            className="search-input-modal"
            onChange={changeFilterValue}
            onFocus={handleFocused}
            autoComplete="off"
          />
        </div>
        <div className="input-control-modal">
          <label className="input-label-modal" htmlFor="guests">
            guests
          </label>
          <input
            value={`${filterValue.maxGuests} ${guestValue()}`}
            type="text"
            title="guests"
            name="guests"
            id="guests"
            placeholder="Add guests"
            className="search-input-modal"
            onFocus={handleFocused}
            autoComplete="off"
          />
        </div>
        <div className="input-control-modal">
          <button type="submit" name="search" className="search-input-modal">
            <i class="fas"></i> Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
