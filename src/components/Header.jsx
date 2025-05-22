import Search from "./Search";
function Header({ onSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img" aria-label="peace symbol">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearch={onSearch} />
    </header>
  );
}
export default Header;