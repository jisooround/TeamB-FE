import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import GlobalStyles from './global/globalStyles';

function App() {
  return (
    <RecoilRoot>
      <Header />
      <GlobalStyles />
      <Outlet />
      <Footer />
    </RecoilRoot>
  );
}

export default App;
