import "./App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DetailPage from "./pages/DetailPage";

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
      {/* <MainPage /> */}
      <DetailPage />
    </>
  );
}

export default App;
