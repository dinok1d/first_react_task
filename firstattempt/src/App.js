import "./App.css";
import BGhome from "./components/bghome";
import Cookielistcomp from "./components/Cookielistcomp";
import cookies from "./components/Cookies.js";

function App() {
  return (
    <div>
      <BGhome />

      <Cookielistcomp CookiesData={cookies} />
    </div>
  );
}

export default App;
