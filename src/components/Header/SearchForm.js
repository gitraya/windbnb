import { useState, useRef } from 'react';

const SearchForm = ({
  locationValue,
  guestsValue,
  inputClass,
  showModal,
  focusInput,
}) => {
  // State of component
  const [state, setstate] = useState({
    locationValue: locationValue,
    guestsValue: guestsValue,
  });
  // Ref
  const inputModalRef = useRef();

  // Function to change value of input
  const onValueChange = (value) => {
    setstate({
      locationValue: value,
    });
  };

  const handleShowModal = (event) => {
    if (typeof showModal === 'function') {
      showModal(event.target.name);
      console.log(focusInput());
      focusInput();
    }
  };

  return (
    <div>
      <form action="">
        <input
          ref={inputModalRef}
          type="text"
          title="location"
          name="location"
          id="location"
          onClick={handleShowModal}
          value={state.locationValue}
          onChange={(e) => onValueChange(e.target.value)}
          className={`${inputClass} location`}
        />
        <input
          ref={inputModalRef}
          type="text"
          title="guests"
          name="guests"
          id="guests"
          placeholder="Add guests"
          onClick={handleShowModal}
          className={`${inputClass} guests`}
        />
        <button type="submit" name="search" className={inputClass}>
          <i class="fas"></i>
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
