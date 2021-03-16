import SearchForm from './SearchForm';
import { useState, useRef, useEffect } from 'react';

const SearchBox = () => {
  const [modalShow, setModalShow] = useState('none');
  const modalRef = useRef();
  let nameInput;

  const hideModal = () => {
    window.onclick = (event) => {
      if (event.target === modalRef.current) {
        setModalShow('none');
        document.body.style.overflowY = 'scroll';
      }
    };
  };

  const showModal = (name) => {
    setModalShow('flex');
    document.body.style.overflowY = 'hidden';
    return (nameInput = name);
  };

  // const focusInput = () => {
  //   const modalContainer = modalRef.current;
  //   if (nameInput) {
  //     console.log(nameInput);
  //     setInputFocus(focusInput());
  //     return modalContainer.querySelector(`.${nameInput}`).focus();
  //   }
  //   return console.log(false);
  // };

  const focusInput = () => {
    modalRef.current && modalRef.current.querySelector(`.${nameInput}`).focus();
  };

  useEffect(() => {
    hideModal();
  }, []);

  return (
    <div>
      <div className="search-form-container">
        <SearchForm
          showModal={showModal}
          focusInput={focusInput}
          locationValue="Helsinki, Finland"
          inputClass="search-input"
        />
      </div>
      <div
        className="search-modal-container"
        style={{ display: modalShow }}
        ref={modalRef}
      >
        <div className="search-form-modal">
          <SearchForm
            inputClass="search-input-modal"
            // locationInputModalRef={locationInputModalRef}
            // guestsInputModalRef={guestsInputModalRef}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
