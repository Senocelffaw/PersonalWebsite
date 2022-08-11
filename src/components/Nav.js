import './css/Nav.css';
import ListItem from './ListItem';
import { useState, useEffect, useRef} from 'react';


const Nav = (props) => {
    /**********************************************************************
    *   Variables
    ***********************************************************************/
    const [navbarOpen, navbarSet] = useState(false);
    const [hide, hideSet] = useState(false);
    const prevY = useRef(0);

    let hamburger;
    let x;
    let name;
    let liClose = {
        opacity: '0',
        pointerEvents: 'none',
        transition: '700ms'
    };
    let liOpen = {
        opacity: '1',
        pointerEvents: 'auto',
        transition: '1000ms'
    }
    let navHide = {
        opacity: '0',
        pointerEvents: 'none',
        transition: '700ms'
    }
    let navShow = {
        transition: '700ms'
    }

        
    /**********************************************************************
    *   Functions
    ***********************************************************************/

     const scrollHandler = (event) =>{
        let tempY = window.scrollY;
        hideSet(tempY > prevY.current ? true : false);
        prevY.current = tempY;
    }


    useEffect(() => {

        window.addEventListener('scroll', scrollHandler);
        
        return () =>{
            window.removeEventListener('scroll', scrollHandler);
        }
        
     },[]);

    const clickHandle = () =>{
        navbarSet(!navbarOpen);
    }

    /* *********************************************************************
    *   Logic
    ************************************************************************/

    //if navbarOPen display X, if closed, display hamburger icon instead
    if(!navbarOpen){
        hamburger = <div id='hamburger' onClick={clickHandle}><p>☰</p></div>;
        name = <li style={liOpen} id='name'>{props.name}</li>;
    }
    else{
        x = <div id='close' onClick={clickHandle}><p>✕</p></div>;
        name = <li style={liClose} id='name'>{props.name}</li>;
    }

    //Create Navbar Items
    let list = props.navTitles.map((title, index) => (
        <ListItem style={navbarOpen ? liOpen : liClose} key={title.key} title={title.title} onClick={() =>{
            window.scrollTo(0, title.offset);
        }}></ListItem>
    ));
    

    return (
        <nav style={hide? navHide : navShow}>
            {hamburger}
            {x}
            <ul className=''>
                {name}
                {list}
            </ul>
        </nav>
    );
};




export default Nav;