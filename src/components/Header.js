const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <img src={process.env.PUBLIC_URL + '/images/logo.svg'} alt="" />
        </div>
        <div>
          <button>Helsinki, Finland</button>
          <button>Add guests</button>
          <button>
            <i class="material-icons-round">search</i>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
