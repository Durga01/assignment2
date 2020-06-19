function validateForm(event, state) {
  // clear all error messages
  const inputs = document.getElementsByClassName("is-danger");
  for (let i = 0; i < inputs.length; i++) {
    if (!inputs[i].classList.contains("error")) {
      inputs[i].classList.remove("is-danger");
    }
  }

  if (state.hasOwnProperty("firstname") && state.firstname === "") {
    document.getElementById("firstname").classList.add("is-danger");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("lastname") && state.lastname === "") {
    document.getElementById("lastname").classList.add("is-danger");
    return { blankfield: true };
  }
  if (state.hasOwnProperty("email") && state.email === "") {
    document.getElementById("email").classList.add("is-danger");
    return { blankfield: true };
  }
  if (
    state.hasOwnProperty("verificationcode") &&
    state.verificationcode === ""
  ) {
    document.getElementById("verificationcode").classList.add("is-danger");
    return { blankfield: true };
  }
  return;
}

export default validateForm;