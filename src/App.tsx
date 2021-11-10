import GlobalStyle from "./globalstyles";
import Main from "./screens/Main";
import Auth from "./screens/Auth";
import { useSelector } from "react-redux";
import { getUserState } from "./store/store";

function App() {
  const userState = useSelector(getUserState);
  return (
    <>
      <GlobalStyle />
      {userState.isAuth ? <Main /> : <Auth />}
    </>
  );
}

export default App;
