import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/store';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import Context from './context';

function Main() {
  const [filterActive, setFilterActive] = React.useState<boolean>(false);
  return (
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <BrowserRouter>
          <Context.Provider value={{ filterActive, setFilterActive }}>
            <Provider store={store}>
              <App />
            </Provider>
          </Context.Provider>
        </BrowserRouter>
      </React.StrictMode>
    </ThemeProvider>
  );
}
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
