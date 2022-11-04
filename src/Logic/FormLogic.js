import { useState } from "react";

const formLogic = () => {
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

    setErrors(validateData(contactData));
  };

  const validateData = (values) => {
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

  return {
    contactData,
    setContactData,
    errors,
    setErrors,
    handleChange,
    handleSubmit,
    hasUserAgreed,
    setHasUserAgreed,
  };
};

export default formLogic;
