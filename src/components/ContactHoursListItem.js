const ContactHoursListItem = (props) =>{

    return (
        <li className="row col-12">
            <p className="col-6">{props.day}</p> <span className="col-6 d-flex justify-content-end">{props.idealContactHour}</span>
        </li>
    );
}

export default ContactHoursListItem;