import { useState } from "react";
import Header from "./components/Header";
import ListingsContainer from "./components/ListingsContainer";

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="app">
      <Header onSearch={handleSearch} />
      <ListingsContainer searchTerm={searchTerm} />
    </div>
  );
}

export default App;
