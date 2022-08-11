import 'bootstrap/dist/css/bootstrap.min.css';
import {useRef, useState, useEffect} from 'react';
import Nav from './components/Nav';
import Mainbody from './components/Mainbody';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import './App.css';

function App() {

  const about = useRef();
  const work = useRef();
  const contact = useRef();

  const [navTitle, setNavTitle] = useState(
    [
      {title:"Home",
       key:1,
       offset:0
      },
      {title:"Work",
       key:2,
       offset:0
      },
      {title:"Contact",
      key:3,
      offset:0
      }
    ]
  );

  

  useEffect(() => {

    const resizeWindow = () =>{
      let tempArr = [...navTitle];
      tempArr[0].offset = about.current.offsetTop;
      tempArr[1].offset = work.current.offsetTop;
      tempArr[2].offset = contact.current.offsetTop;
      setNavTitle(tempArr);
    }

    resizeWindow();

    window.addEventListener('resize', resizeWindow);


    return () =>{
      window.removeEventListener('resize', resizeWindow);
  }
  },[]);





  return (
    <div className="container-fluid">
      <div ref={about}></div>
      <Nav navTitles={navTitle} name='Robert Ha'/>
      <Mainbody/>
      <div ref={work}></div>
      <Portfolio/>
      <div ref={contact}></div>
      <Contact/>
    </div>
  );
}

export default App;
