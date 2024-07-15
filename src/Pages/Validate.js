const Validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Address";
  }

  if (!values.password) {
    errors.password = "Password Required";
  } else if (values.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
}

  return errors;
};

export default Validate;
