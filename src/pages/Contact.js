import React from "react";
import "../css/style.css";


function Contact () {
    return (
      <>
       <div className="container-fluid background-contact text-white p-5 text-center">
        <h1 className="text-center">Contact</h1>
        <form className="form-horizontal">
          <div className="form-group">
            <p>Name</p>
            <input
              type="text"
              className="form-control"
              id="contactname"
              placeholder="Jane Doe"
              required
            />
          </div>
          <div className="form-group">
            <p>Email</p>
            <input
              type="email"
              className="form-control"
              id="contactemail"
              placeholder="jane.doe@example.com"
              required
            />
          </div>
          <div className="form-group">
            <p>Message</p>
            <textarea
              className="form-control"
              name="message"
              id="contactmsg"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-info">Send Message</button>
        </form>
        </div>
      </>
    );
  }


export default Contact;
