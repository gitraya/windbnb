import { useState } from 'react';

const SearchForm = ({ locationValue, guestsValue, inputClass }) => {
  // State of component
  const [state, setstate] = useState({
    locationValue: locationValue,
    guestsValue: guestsValue,
  });

  // Function to change value of input
  function onValueChange(value) {
    setstate({
      locationValue: value,
    });
  }
  return (
    <div>
      <form action="">
        <input
          type="text"
          title="location"
          name="location"
          id="location"
          value={state.locationValue}
          onChange={(e) => onValueChange(e.target.value)}
          className={inputClass}
        />
        <input
          type="text"
          title="guests"
          name="guests"
          id="guests"
          placeholder="Add guests"
          className={inputClass}
        />
        <button type="submit" name="search" className={inputClass}>
          <i class="fas"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
