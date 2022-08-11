const ListItem = (props) => {
    return <li style={props.style} onClick={props.onClick}>{props.title}</li>
}

export default ListItem;