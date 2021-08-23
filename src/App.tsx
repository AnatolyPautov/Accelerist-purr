import Header from './components/Header';
import GlobalStyle from './globalstyles';
import styled from 'styled-components';
import { Route } from 'react-router';
import SearchList from './components/SearchList';
import PageHeader from './components/PageHeader';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <PageHeader />
      <Wrapper>
        <Route path="/dashboard" render={() => <SearchList />} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;

export default App;
