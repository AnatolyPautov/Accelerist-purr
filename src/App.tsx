import GlobalStyle from './globalstyles';
import Main from './screens/main';
import Auth from './screens/auth';
import { useSelector } from 'react-redux';
import { getUserState } from './store/store';

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
