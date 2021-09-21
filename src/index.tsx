import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Context from './context';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import ScrollToTop from './utils/ScrollToTop';

let persistor = persistStore(store);

function Main() {
  const [filterActive, setFilterActive] = React.useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <Router>
          <Context.Provider
            value={{
              filterActive,
              setFilterActive,
            }}
          >
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <App />
              </PersistGate>
            </Provider>
          </Context.Provider>
        </Router>
      </React.StrictMode>
    </ThemeProvider>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
