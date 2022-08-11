import ContactHours from "./ContactHours";
import EmailForm from "./EmailForm";

const Contact = () =>{

    const contactHoursTitle = "Ideal Contact Hours";
    //                          Monday       Tuesday    Wednesday    Thursday     Friday     Saturday   Sunday
    const idealContactHours = ["After 2PM", "Anytime", "After 2PM", "After 2PM", "Anytime", "Anytime", "After 2PM"];

    return (
        <div className=' row container-liquid'>
          <div className=" col-lg-6 col-md-12 bg-warning">
            <div className="col-12 d-flex align-items-center justify-content-center min-vh-100">
              <ContactHours title={contactHoursTitle} hours={idealContactHours}></ContactHours>
            </div>
          </div>

          <div className=" col-lg-6 col-md-12 bg-light">
            <div className="col-12 d-flex align-items-center justify-content-center min-vh-100">
              
              <EmailForm></EmailForm>

            </div>
          </div>

      </div>
    );
}

export default Contact;