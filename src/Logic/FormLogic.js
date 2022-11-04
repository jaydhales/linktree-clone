import { useEffect } from "react";
import { useState } from "react";

const formLogic = () => {
  const initialData = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };
  const [contactData, setContactData] = useState(initialData);

  const [errors, setErrors] = useState({});

  const [hasUserAgreed, setHasUserAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    if (Object.entries(errors).length === 0 && isSubmitting) {
      setIsSubmitting(false);

      setHasSubmitted(true);
      setContactData(initialData);
      setHasUserAgreed(false);

      setTimeout(() => {
        setHasSubmitted(false);
      }, 3000);
    }
  }, [errors]);

  const handleChange = (e, key) => {
    setErrors({});
    setHasSubmitted(false);
    setIsSubmitting(false);
    setContactData({ ...contactData, [key]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validateData(contactData));
    setIsSubmitting(true);
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
    hasSubmitted,
  };
};

export default formLogic;
