import Header from './components/header';
import GlobalStyle from './globalstyles';
import styled from 'styled-components';
import { Route } from 'react-router';
import SearchList from './components/searchList';
import PageHeader from './components/pageHeader';
import Auth from './components/auth';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageHeader />
      <Wrapper>
        <Route path="/dashboard" render={() => <SearchList />} />
      </Wrapper>
      {/* <Auth /> */}
    </>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 1200px;
`;

export default App;
