import Portfolio from "./components/Portfolio.js";
import { PortfolioLyle } from "./data/Portfolio.js";
import "./App.css";

function App() {
  const { imgUrl, imgName, personName, personIntroduction, skillSets } =
    PortfolioLyle;

  return (
    <div>
      <Portfolio
        imgUrl={imgUrl}
        imgName={imgName}
        personName={personName}
        personIntroduction={personIntroduction}
        skillSets={skillSets}
      />
    </div>
  );
}

export default App;
