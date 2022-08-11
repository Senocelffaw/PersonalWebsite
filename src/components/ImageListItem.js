const ImageListItem = (props)=>{
    return(
        <li className='row col-12 justify-content-center'>
            <div className='my-2 col-2'>
                <img className='list-img' src={props.image} alt={props.name}/> 
            </div>
            <div className='col-4 row'>
                <h1 className='p-0 my-auto'>{props.name}</h1>
            </div>
        </li>
    );
}


export default ImageListItem;