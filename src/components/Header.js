import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" />
        </div>
        <SearchBox />
      </nav>
    </header>
  );
};

export default Header;
