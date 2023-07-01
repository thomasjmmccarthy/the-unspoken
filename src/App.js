import './App.css';
import unspokenBackground from './resources/unspoken-background.gif';
import unspokenDeco from './resources/unspoken-deco.png';

import Break from './components/Break';
import { ShowDescription, AdditionalInformation, ShowPlaylist, Footer, ThankYou, Awards, ShowRecording } from './components/PageContent';
import BottomBar from './components/BottomBar';
import MobileMenu from './components/MobileMenu';
import { LocalButton, GlobalButton } from './components/SpecialButtons';

import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';

import { useRef, useState, useEffect } from 'react';
import useCollapse from "react-collapsed";

import { DisplayMatrix } from './_DisplayMatrix';



function App() {


  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  const displayMatrix = DisplayMatrix();




  const about = useRef(null);
  const info = useRef(null);

  const scrollToSection = (elementRef => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 75,
      behaviour: 'smooth'
    })
  })



  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);
  const isNarrow = width <= 450;



  // Alter page details if the page is narrow
  const backgroundImage = isNarrow? null : `url(${unspokenBackground})`;

  const topBarMobileStyle = isExpanded? {backgroundColor: '#000000ee'} : null;
  const topBar = !isNarrow? (
    <div className='TopBar'>
      <button onClick={() => scrollToSection(about)}><img src={unspokenDeco} alt='The Unspoken' width='50px'/></button>
      <LocalButton onClick={() => scrollToSection(info)} icon={faCircleInfo} />
      <GlobalButton href='https://youtu.be/_aYDffd0J10' icon={faYoutube} />
      <div className='vr' />
      <GlobalButton href='https://www.instagram.com/theunspoken_dramasoc' icon={faInstagram} />
      <GlobalButton href='https://www.facebook.com/profile.php?id=100087548843208' icon={faFacebook} />
    </div>
  )
  :(
    <div className='TopBar' style={topBarMobileStyle}>
      <MobileMenu getCollapseProps={getCollapseProps} getToggleProps={getToggleProps} isExpanded={isExpanded}>
        <hr />
        <LocalButton onClick={() => scrollToSection(info)} icon={faCircleInfo} label='Information' mobileMenu={true} />
        <GlobalButton href='https://youtu.be/_aYDffd0J10' icon={faYoutube} label='Watch Now' mobileMenu={true} />
        <hr />
        <GlobalButton href='https://www.instagram.com/theunspoken_dramasoc' icon={faInstagram} label='Instagram' mobileMenu={true} />
        <GlobalButton href='https://www.facebook.com/profile.php?id=100087548843208' icon={faFacebook} label='Facebook' mobileMenu={true} />
      </MobileMenu>
    </div>
  );



  return (
    <div className="App" style={{
      ...{backgroundImage: backgroundImage},
    }}>
      {topBar}
      <Break isNarrow={isNarrow}/>
      <div className='PageContent'>

        <div>
          <ShowRecording isNarrow={isNarrow} />
          <hr/>
        </div>

        <div ref={about}>
          <ShowDescription />
          <hr/>
        </div>

        <div>
          <Awards />
          <hr/>
        </div>

        <div>
          <ThankYou />
          <hr/>
        </div>

        <div ref={info}>
          <AdditionalInformation infoData={displayMatrix.infoData} isNarrow={isNarrow} />
          <hr/>
        </div>

        <div>
          <ShowPlaylist />
        </div>
        <hr/>
        <Footer />
      </div>

      <BottomBar icon={faYoutube} label='WATCH NOW' link={'https://youtu.be/_aYDffd0J10'}/>
    </div>
  );
}

export default App;