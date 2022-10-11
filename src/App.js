import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Navigation from "./components/navigation";
import { BrowserRouter as Router, Route, useParams } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Router>
          <Navigation />
          <Route path="/:type?">
            <HomePage />
          </Route>
        </Router>
      </div>
    </Router>
  );
}

export default App;
