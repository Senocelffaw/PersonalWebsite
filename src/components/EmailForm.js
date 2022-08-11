
import {useState} from "react";
const EmailForm = (props) =>{

    const sendMessageURL = "https://robertha.ca/api/mailer";

    const [submitDisabled, changeSubmitDisabled] = useState(false);

    const [form, changeForm] = useState(
        {
            name:"",
            email:"",
            message:""
        }
    );

    const changeMessage = (event) => {
        changeForm({
            ...form,
            message: event.target.value
        });
      };

    const changeName = (event) => {
        changeForm({
            ...form,
            name: event.target.value
        });
    };

    const changeEmail = (event) => {
        changeForm({
            ...form,
            email: event.target.value
        });
    };

    const submitForm = async (event)=>{
        event.preventDefault();

        changeSubmitDisabled(true);


        if(!submitDisabled){
            event.currentTarget.disabled = true;

            await fetch(sendMessageURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify(form)
            })
            .then((data) => {
              console.log('Success:', data);
            })
            .catch((error) => {
              console.error('Error:', error);
            });
    
            changeForm({
                name:"",
                email:"",
                message:""
            });
        }


        alert("E-mail has been sent");
    }



    return (
        <div className="col-lg-9 col-md-9 col-sm-12 col-12">
            <form onSubmit={submitForm}>
                <p className="h1 fw-bold border-bottom">Contact Me</p>

                <label className="my-3">Name:</label>
                <input className="col-12" type="text" onChange={changeName} value={form.name}></input>

                <label className="my-3">E-mail:</label>
                <input className="col-12" type="text" onChange={changeEmail} value={form.email}></input>

                <label className="my-3">Message:</label>
                <textarea rows="10" className="col-12" onChange={changeMessage} value={form.message}></textarea>

                <button disabled={submitDisabled} type="submit" className="mt-1 btn btn-secondary" >Submit</button>
            </form>
        </div>
    );
}

export default EmailForm;