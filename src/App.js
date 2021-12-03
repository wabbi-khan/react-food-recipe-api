import "./App.css";
import Axios from "axios";
function App() {
  const YOUR_APP_ID = "3b620bbf";
  const YOUR_APP_KEY = "bd121d42f201323d54f9cdd1229c29e6";

  var url = `https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=alcohol-free`;
  const getRecipes = async () => {
    var result = await Axios.get(url);
    console.log(result.data);
  };
  return (
    <div className="app">
      <p className="title" onClick={getRecipes}>
        Food Recipe Plaza 🍔
      </p>
    </div>
  );
}

export default App;
