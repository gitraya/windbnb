import { useState, useRef, useEffect } from 'react';
import SearchForm from './SearchForm';

const SearchBox = () => {
  const [modalShow, setModalShow] = useState('flex');
  const [check, setCheck] = useState('none');
  const modalRef = useRef();

  // Function to hide modal
  const hideModal = () => {
    window.onclick = (event) => {
      if (event.target === modalRef.current) {
        setModalShow('none');
        document.body.style.overflowY = 'scroll';
      }
    };
  };

  // Function to show up modal
  const showModal = (e) => {
    e.preventDefault();
    setModalShow('flex');
    document.body.style.overflowY = 'hidden';
  };

  // React use effect
  useEffect(() => {
    hideModal();
  }, []);

  const checkk = () => {
    return setCheck('flex');
  };
  return (
    <div>
      <div className="search-form-container">
        <form action="">
          <input
            onClick={showModal}
            type="text"
            defaultValue="Helsinki, Finland"
            className="search-input"
          />
          <input
            onClick={showModal}
            type="text"
            placeholder="Add guests"
            className="search-input"
          />
          <button
            onClick={showModal}
            type="submit"
            name="search"
            className="search-input"
          >
            <i class="fas"></i>
          </button>
        </form>
      </div>

      <div
        className="search-modal-container"
        style={{ display: modalShow }}
        ref={modalRef}
      >
        <div className="modal-wrap">
          <SearchForm onlick={checkk} />
          <div className="option-container">
            <div className="option-item">
              <button className="opt-link">
                <i className="fas"></i>
                <small>Helsinki, Finland</small>
              </button>
              <button className="opt-link">
                <i className="fas"></i>
                <small>Turku, Finland</small>
              </button>
              <button className="opt-link">
                <i className="fas"></i>
                <small>Oulu, Finland</small>
              </button>
              <button className="opt-link">
                <i className="fas"></i>
                <small>Vaasa, Finland</small>
              </button>
            </div>
            <div className="option-item">
              <div className="opt-guest">
                <h3>Adults</h3>
                <p>Ages 13 or above</p>
                <div className="item-amount">
                  <div className="icon-amount">
                    <i className="fas"></i>
                  </div>
                  <span className="amount">0</span>
                  <div className="icon-amount">
                    <i className="fas"></i>
                  </div>
                </div>
              </div>
              <div className="opt-guest">
                <h3>Children</h3>
                <p>Ages 2-12</p>
                <div className="item-amount">
                  <div className="icon-amount">
                    <i className="fas"></i>
                  </div>
                  <span className="amount">0</span>
                  <div className="icon-amount">
                    <i className="fas"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="option-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
