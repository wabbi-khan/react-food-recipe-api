import "./App.css";
import Axios from "axios";
import { useState } from "react";
function App() {
  const [query, setquery] = useState("");
  const YOUR_APP_ID = "3b620bbf";
  const YOUR_APP_KEY = "bd121d42f201323d54f9cdd1229c29e6";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;
  const getRecipes = async () => {
    var result = await Axios.get(url);
    console.log(result.data);
  };
  return (
    <div className="app">
      <p className="title" onClick={getRecipes}>
        Food Recipe Plaza 🍔
      </p>
      <form className="app-searchForm">
        <input
          className="app-input"
          type="text"
          placeholder="Enter Ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app-submit" type="submit" value="Search" />
      </form>
    </div>
  );
}

export default App;
