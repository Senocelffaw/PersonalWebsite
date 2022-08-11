import './css/Mainbody.css';
import programmingImage from '../photos/programming-image.jpg';
import html5 from '../photos/html5.png'
import css from '../photos/css.png'
import javascript from '../photos/javascript.png'
import react from '../photos/react.png'
import sql from '../photos/sql.png'
import node from '../photos/node.png'
import bootstrap from '../photos/bootstrap.png'
import ImageListItem from './ImageListItem';

const Mainbody = ()=>{
    return(
        <div className='min-vh-100 row justify-content-center'>
            <div className=' col-10 row'>
                <div className='content col-sm-12 col-md-12 col-lg-6 my-auto'>
                    <img className='col-12 main-image' src={programmingImage} alt='2 people working/programming'/>
                </div>
                <div className='my-auto content col-sm-12 col-md-12 col-lg-6 row justify-content-center'>
                    <ul className=' col-sm-12 col-md-12 row'>
                        <ImageListItem image={html5} name="HTML5"></ImageListItem>
                        <ImageListItem image={css} name="CSS3"></ImageListItem>
                        <ImageListItem image={javascript} name="Javascript"></ImageListItem>
                        <ImageListItem image={react} name="React"></ImageListItem>
                        <ImageListItem image={sql} name="SQL"></ImageListItem>
                        <ImageListItem image={node} name="Express"></ImageListItem>
                        <ImageListItem image={bootstrap} name="Bootstrap"></ImageListItem>
                    </ul>
                </div>
            </div>
      </div>
    );
}


export default Mainbody;