import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/Footer";

const data = [
  {
    id: "wassily",
    name: "Wassily Chair",
    date: "1926",
    description: "",
  },
];

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}

export default App;
