import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/:id">
            <DetailPage id=":id" />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
