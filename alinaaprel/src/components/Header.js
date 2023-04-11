function Header(props) {
  return (
    <div className="header">
      <ul className="header__menu">
        {props.menu.map((elem, index) => {
          return <li key={index} className="header__nav">{elem}</li>
        })}
      </ul>
      <h1 className="header__title">{props.title}</h1>
    </div>
  );
}

export default Header;