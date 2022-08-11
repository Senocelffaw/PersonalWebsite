import 'bootstrap/dist/css/bootstrap.min.css';
import './css/PortfolioItem.css'

//Needs props.url, props.image, props.title, prop.description
const PortfolioItem = (props) =>{

    return(
        <div className='row p-0 m-0 my-3 '>
            <a className='col-md-4 py-md-0 py-sm-4' href={props.url}>
                <img className="img-fluid h-100 port_image"  alt="placeholder" src={props.image}>
                </img>
            </a>
            <div className='col-md-8 description '>
                <h1 className='d-flex justify-content-md-start justify-content-sm-center'>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default PortfolioItem;