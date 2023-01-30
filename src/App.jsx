import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import GlobalStyles from '@styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <RecoilRoot>
        <Header />
        <Outlet />
      </RecoilRoot>
    </>
  );
}

export default App;
