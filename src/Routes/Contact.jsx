import formLogic from "../Logic/FormLogic";
import "../styles/Contact.css";

const Contact = ({ name }) => {
  const {
    contactData,
    errors,
    handleChange,
    handleSubmit,
    hasUserAgreed,
    setHasUserAgreed,
    hasSubmitted,
  } = formLogic();

  return (
    <form onSubmit={(e) => handleSubmit(e)} noValidate>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      {hasSubmitted && <p className="success">Submitted successfully ✅</p>}

      <div className="name-section">
        <div className="form-group">
          <label htmlFor="first_name" className="input-label">
            First name
          </label>
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
          <label htmlFor="last_name" className="input-label">
            Last name
          </label>
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
        <label htmlFor="email" className="input-label">
          Email
        </label>
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
        <label htmlFor="message" className="input-label">
          Message
        </label>
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
          id="agree"
          checked={hasUserAgreed}
          onChange={(e) => setHasUserAgreed(e.target.checked)}
        />
        <label htmlFor="agree">
          You agree to providing your data to {name} who may contact you.
        </label>
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
