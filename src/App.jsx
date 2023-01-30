import { RecoilRoot } from 'recoil';
import { Outlet } from 'react-router-dom';
import Header from './components/layout/Header';
import GlobalStyles from '@styles/globalStyles';
import { useEffect } from 'react';
import { kakaoLoad } from '@atom/loadAtom';
import { useRecoilState } from 'recoil';

function App() {
  useEffect(() => {
    if (!import.meta.env.VITE_KAKAO) return;

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${
      import.meta.env.VITE_KAKAO
    }&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      kakao.maps.load(() => {
        const [test, setTest] = useRecoilState(kakaoLoad);
        setTest(true);
        /*...*/
      });
    };
  }, []);
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
