import React from "react";
import Pet from "./components/Pet";
import SearchParams from "./components/SearchParams";

function App() {
  return (
    <div className="App">
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/* <Pet name="Luna" animal="Dog" breed="Havanese" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Doink" animal="Cat" breed="Mixed" /> */}
    </div>
  );
}

export default App;
