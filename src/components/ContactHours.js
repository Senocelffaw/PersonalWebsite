import ContactHoursListItem from './ContactHoursListItem'
import './css/ContactHours.css'

const ContactHours = (props) =>{

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    var output = [];

    for(let i = 0; i < days.length; i++){
        output.push(<ContactHoursListItem key={i} day={days[i]} idealContactHour={props.hours[i]}></ContactHoursListItem>);
    }

    return (
        <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <p id="contact-hours-title" className="h1 text-center mb-5"><strong>{props.title}</strong></p>
            <ul className="col-12 list-group m-0">
                {output}
            </ul>
        </div>
    );
}

export default ContactHours;