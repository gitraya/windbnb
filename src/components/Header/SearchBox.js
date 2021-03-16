import SearchForm from './SearchForm';
import { useState, useRef, useEffect } from 'react';

const SearchBox = () => {
  const [modalShow, setModalShow] = useState('flex');
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

  useEffect(() => {
    hideModal();
  }, []);

  return (
    <div>
      <div className="search-form-container">
        <SearchForm
          showModal={showModal}
          locationValue="Helsinki, Finland"
          inputClass="search-input"
        />
      </div>
      <div
        className="search-modal-container"
        style={{ display: modalShow }}
        ref={modalRef}
      >
        <div className="modal-wrap">
          <div className="search-form-modal">
            <SearchForm inputClass="search-input-modal" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
