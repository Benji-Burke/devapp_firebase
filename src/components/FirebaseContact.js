import React, { useState } from 'react'
import { db } from '../firebase';
import '../Contact.css'
// import '../app.css';




const FirebaseContact = () => {
    
    const [name, setName]=useState("");
    const [email, setEmail]=useState("");
    const [message, setMessage]=useState("");
    const [setTime]=useState("");

    const [loader, setLoader]=useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoader(true)
        db.collection('contacts').add({
            name: name,
            email: email,
            message: message,
            time: currentDateTime,

        })
        .then(()=>{
            alert('Message has been submitted 👍');
            setLoader(false);
        })
        .catch(error=>{
            alert(error.message);
            setLoader(false);
        })
        setName('')
        setEmail('')
        setMessage('')
    }

    let currentDate = new Date();
    const currentDateTime = currentDate.getMonth() + 1 + "/"+ currentDate.getDate() 
    + "/" + currentDate.getFullYear() + " @ " 
    + currentDate.getHours() + ":" 
    + currentDate.getMinutes() + ":" + currentDate.getSeconds();
    return (
        <form className="form app" onSubmit={handleSubmit}>
            <h1>Contact form ☎️ 📱 </h1>

            <label>Name</label>
            <input placeholder="Name" 
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <label>email</label>
            <input placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)} />

            <label>Message</label>
            <textarea placeholder="Message"
            value={message} 
            onChange={(e)=>setMessage(e.target.value)}></textarea>
            
            <input
            placeholder="Time"
            defaultValue={currentDateTime}  
            hidden= {true}
            onChange={(e)=>setTime(e.target.time)} 
            
            />
            
            <button type="submit" style={{ background: loader ? "#ccc" : " rgb(2, 2, 110)"}}>Submit</button>


        </form>
    )
}

export default FirebaseContact;
