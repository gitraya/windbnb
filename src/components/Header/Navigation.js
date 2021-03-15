import SearchBox from './SearchBox';

const Navigation = () => {
  return (
    <nav>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" />
      </div>
      <SearchBox />
    </nav>
  );
};

export default Navigation;
