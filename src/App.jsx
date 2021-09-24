import "./App.css";
import Idols from "./ronaldomessi_adkh.jpeg";

const item = {
  id: 1,
  title: "Image 01",
  labels: [
    {
      name: "Ronaldo",
      position: [0, 10, 20, 30],
    },
    {
      name: "Messi",
      position: [0, 10, 20, 30],
    },
  ],
};

function App() {
  return (
    <div className="App">
      <h3>TECHTEAMH3I_CV_PROCESS_LABEL_IMAGE</h3>
      <img src={Idols} />
    </div>
  );
}

export default App;
