import { useRef, forwardRef, useImperativeHandle } from 'react';
import SearchBox from './Search/SearchBox';

const Header = forwardRef(({ filteringStays, resetIsFiltered }, ref) => {
  const searchRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      hideModal: searchRef.current.hideModal,
    };
  });
  return (
    <header>
      <nav>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" />
        </div>
        <SearchBox
          ref={searchRef}
          filteringStays={filteringStays}
          resetIsFiltered={resetIsFiltered}
        />
      </nav>
    </header>
  );
});

export default Header;
