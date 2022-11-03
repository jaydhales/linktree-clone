import "../styles/Contact.css";

const Contact = ({ name }) => {
  return (
    <form>
      <h2>Contact Me</h2>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>

      <div className="name-section">
        <div className="form-group">
          <p className="input-label">First name</p>
          <input
            type="text"
            id="first_name"
            placeholder="Enter your first name"
            className="input"
          />
        </div>

        <div className="form-group">
          <p className="input-label">Last name</p>
          <input
            type="text"
            id="last_name"
            placeholder="Enter your last name"
            className="input"
          />
        </div>
      </div>

      <div className="form-group">
        <p className="input-label">Email</p>
        <input
          type="email"
          id="email"
          placeholder="yourname@gmail.com"
          className="input"
        />
      </div>

      <div className="form-group">
        <p className="input-label">Message</p>
        <textarea
          name="message"
          id="message"
          placeholder="Send me a message and I'll reply you as soon as possible..."
          className="input"
        />
      </div>

      <div className="form-check">
        <input type="checkbox" name="agree" id="agree" />
        <p>You agree to providing your data to {name} who may contact you.</p>
      </div>

      <input
        type="submit"
        value="Send message"
        id="btn_submit"
        className="input"
      />
    </form>
  );
};

export default Contact;
