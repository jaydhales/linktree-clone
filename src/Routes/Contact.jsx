import { useState } from "react";
import "../styles/Contact.css";

const Contact = ({ name }) => {
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const [hasUserAgreed, setHasUserAgreed] = useState(false);

  const handleChange = (e, key) => {
    setErrors({});
    setContactData({ ...contactData, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(contactData));
  };

  const validate = (values) => {
    let errors = {};
    for (const key in values) {
      if (!values[key]) {
        switch (key) {
          case "message":
            errors[key] = `Please enter a message`;
            break;
          default:
            errors[key] = `Please enter your ${key}`;
            break;
        }
      }

      if (values.email && !/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email address is invalid";
      }
    }
    return errors;
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} noValidate>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <div className="name-section">
        <div className="form-group">
          <p className="input-label">First name</p>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            className={`input ${errors.firstName && "is-danger"}`}
            value={contactData.firstName}
            onChange={(e) => handleChange(e, "firstName")}
          />

          {errors.firstName && (
            <p className="help is-danger">{errors.firstName}</p>
          )}
        </div>

        <div className="form-group">
          <p className="input-label">Last name</p>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            className={`input ${errors.lastName && "is-danger"}`}
            value={contactData.lastName}
            onChange={(e) => handleChange(e, "lastName")}
          />
          {errors.lastName && (
            <p className="help is-danger">{errors.lastName}</p>
          )}
        </div>
      </div>

      <div className="form-group">
        <p className="input-label">Email</p>
        <input
          type="email"
          id="email"
          placeholder="yourname@gmail.com"
          className={`input ${errors.email && "is-danger"}`}
          value={contactData.email}
          onChange={(e) => handleChange(e, "email")}
        />
        {errors.email && <p className="help is-danger">{errors.email}</p>}
      </div>

      <div className="form-group">
        <p className="input-label">Message</p>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          className={`input ${errors.message && "is-danger"}`}
          value={contactData.message}
          onChange={(e) => handleChange(e, "message")}
        />
        {errors.message && <p className="help is-danger">{errors.message}</p>}
      </div>

      <div className="form-check">
        <input
          type="checkbox"
          name="agree"
          id="agree"
          onChange={(e) => setHasUserAgreed(e.target.checked)}
        />
        <p>You agree to providing your data to {name} who may contact you.</p>
      </div>

      <input
        type="submit"
        value="Send message"
        id="btn_submit"
        className="input"
        disabled={!hasUserAgreed}
      />
    </form>
  );
};

export default Contact;
