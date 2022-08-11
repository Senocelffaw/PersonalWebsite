import PortfolioItem from "./PortfolioItem";
import {useRef, useEffect, useState} from "react";

let apiurl = "https://robertha.ca/api/portitem/";
let numItems = 7;

apiurl += numItems;

const Portfolio = () => {

    const boxPos = useRef();

    const [portItemList, setportItemList] = useState([]);
    const [transparent, setTransparent] = useState(true);

    const hide = {
        opacity: 0
    }
    const show = {
        opacity: 1,
        transition: "500ms"
    }

    const scrollHandler = () =>{
        let windowYPos = window.scrollY;

        const { offsetTop } = boxPos.current;
        if(windowYPos >= offsetTop - 500){
            setTransparent(false);
        }
    };
   
    useEffect(() => {
        
        window.addEventListener('scroll', scrollHandler);
        try{
            fetch(apiurl)
            .then((response) => response.json())
            .then((data) => {
            setportItemList(data);
        });
        }
        catch(e){
            throw e;
        }

        return ()=>{
            window.removeEventListener('scroll', scrollHandler);
        }

        },[]);




    return(
        <div ref={boxPos} className='row min-vh-100 justify-content-center' style={transparent? hide : show}>
            <div className="col-10 row">
                {
                    portItemList.map(item =>{
                        return <PortfolioItem key={item.item_id} title={item.title} description={item.description} image={item.image_url} url={item.url}/>
                    })
                }
            </div>
      </div>
    );
}


export default Portfolio;