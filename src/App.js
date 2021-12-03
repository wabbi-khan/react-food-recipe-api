import "./App.css";
import Axios from "axios";
import { useState } from "react";
import RecipeTile from "./Recipes/RecipeTile";
function App() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabel, sethealthLabel] = useState("vegan");
  const YOUR_APP_ID = "3b620bbf";
  const YOUR_APP_KEY = "bd121d42f201323d54f9cdd1229c29e6";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`;
  const getRecipes = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };
  return (
    <div className="app">
      <p className="title" onClick={getRecipes}>
        Food Recipe Plaza 🍔
      </p>
      <form className="app-searchForm" onSubmit={onSubmit}>
        <input
          className="app-input"
          type="text"
          placeholder="Enter Ingridient"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app-submit" type="submit" value="Search" />
        <select className="app-health">
          <option onClick={() => sethealthLabel("vegan")}>Vegan</option>
          <option onClick={() => sethealthLabel("Vegetarian")}>
            Vegetarian
          </option>
          <option onClick={() => sethealthLabel("Pescatarian")}>
            Pescatarian
          </option>
          <option onClick={() => sethealthLabel("Egg-Free")}>Egg-Free</option>
          <option onClick={() => sethealthLabel("Red-Meat-Free")}>
            Red-Meat-Free
          </option>
        </select>
      </form>
      <div className="app-recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
