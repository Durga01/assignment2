import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation"
import { AUTH, Auth } from "aws-amplify";

class Register extends Component {
  state = {
    username: "",
    city: "",
    zip: "",
    docter_name: "",
    given_name: "",
    address1: "",
    address2: "",
    child_name: "",
    state_val: "",
    family_name: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
    errors: {
      cognito: null,
      blankfield: false,
      passwordmatch: false
    }
  }

  clearErrorState = () => {
    this.setState({
      errors: {
        cognito: null,
        blankfield: false,
        passwordmatch: false
      }
    });
  }

  handleSubmit = async event => {
    event.preventDefault();

    this.clearErrorState();
    const error = Validate(event, this.state);
    if (error) {
      this.setState({
        errors: { ...this.state.errors, ...error }
      });
    }

    const { given_name, address1, address2, city, zip, docter_name, child_name, state_val, family_name, phone, email } = this.state;
    try {
      const signUpResponse = await Auth.signUp({
        username: email,

        password: "123123Net1524",
        attributes: {


          phone_number: phone,
          'custom:custom:state': state_val,

          given_name: given_name,
          address: address1,
          'custom:custom:city': city,

          'custom:custom:zip': zip,

          'custom:custom:doctor_name': docter_name,

          'custom:custom:child_name': child_name,
          'custom:custom:address_2': address2,
          family_name: family_name,
          email: email
        }
      });
      console.log(signUpResponse);
      this.props.history.push("/Home");
    } catch (error) {
      let err = null;
      !error.message ? err = { "message": error } : err = error;
      this.setState({
        errors: {
          ...this.state.errors,
          cognito: error
        }
      });
    }
  };

  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
    document.getElementById(event.target.id).classList.remove("is-danger");
  }

  render() {


    return (




      <section className="section-auth">
        <div className="container">
          <br /><br />
          <h1 className="register-head text-center"><b>BOOK APPOINTMENT</b></h1>
          <FormErrors formerrors={this.state.errors} />

          <form onSubmit={this.handleSubmit}>


            <br />
            <div className="field row">
              <div className="form-group col-md-12">
                <label><b>PARENT NAME</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="given_name"
                    aria-describedby="userNameHelp"
                    placeholder="Enter Parent name"
                    value={this.state.given_name}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="form-group col-md-12">
                <label><b>FAMILY NAME</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="family_name"
                    aria-describedby="lastNameHelp"
                    placeholder="Enter family name"
                    value={this.state.family_name}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="form-group col-md-12">
                <label><b>CHILD NAME</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="child_name"
                    aria-describedby="lastNameHelp"
                    placeholder="Enter Child name"
                    value={this.state.child_name}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>

              <div className="form-group col-md-12">
                <label><b>EMAIL</b></label>
                <p className="control has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="email"
                    id="email"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={this.state.email}
                    onChange={this.onInputChange}
                  />
                  <span className="icon is-small is-left">
                    <i className="fas fa-envelope"></i>
                  </span>
                </p>
              </div>




              <div className="form-group col-md-12">
                <label><b>PHONE NUMBER</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="phone"
                    aria-describedby="userNameHelp"
                    placeholder="Enter Phone Number"
                    value={this.state.phone}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>



              <div className="form-group col-md-12">
                <label><b>ADDRESS 1</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="address1"
                    aria-describedby="userNameHelp"
                    placeholder="1234 Main St"
                    value={this.state.address1}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>


              <div className="form-group col-md-12">
                <label><b>ADDRESS 2</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="address2"
                    aria-describedby="userNameHelp"
                    placeholder="Apartment, studio, or floor"
                    value={this.state.address2}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>


              <div className="form-group col-md-12">
                <label><b>CITY NAME</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="city"
                    aria-describedby="userNameHelp"
                    placeholder="City Name"
                    value={this.state.city}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>


              <div className="form-group col-md-12">
                <label><b>ZIP CODE</b></label>
                <p className="control">
                  <input
                    className="input"
                    type="text"
                    id="zip"
                    aria-describedby="userNameHelp"
                    placeholder="Zip Code"
                    value={this.state.zip}
                    onChange={this.onInputChange}
                  />
                </p>
              </div>





              <div class="form-group col-md-12">
                <label><b>STATE</b></label>
                <select id="state_val" name="state" placeholder="Enter email" class="form-control" value={this.state.state_val}
                  onChange={this.onInputChange}>
                  <option selected>Choose state</option>
                  <option value="ACT">Australian Capital Territory</option>
                  <option value="NSW">New South Wales</option>
                  <option value="NT ">Northern Territory</option>
                  <option value="QLD">Queensland</option>
                  <option value="SA ">South Australia</option>
                  <option value="TAS">Tasmania</option>
                  <option value="VIC">Victoria</option>
                  <option value="WA ">Western Australia</option>
                </select>

              </div>




              <div class="form-group col-md-12">
                <label><b>DOCTOR NAME</b></label>
                <select id="docter_name" name="dname" class="form-control" value={this.state.docter_name}
                  onChange={this.onInputChange}>
                  <option selected>----Doctor Name----</option>
                  <option>JENNY MARY - DOCKLANDS</option>
                  <option>KATIE KAY - DOCKLANDS</option>
                  <option>RAVI TEJA - DOCKLANDS</option>
                  <option>JOHN MICHEL - MELBOURNE CENTRAL</option>
                  <option>SIDHARTHA RAJU - MELBOURNE CENTRAL</option>
                  <option>KAJOL USMAN - MELBOURNE CENTRAL</option>
                  <option>SHREYA CHOOPRA - GEELONG</option>
                  <option>LUCY NICOLE - GEELONG</option>
                  <option>LYNN PALA - GEELONG</option>
                  <option>ANDRENA JOSH - SOUTH YAARA</option>
                  <option>CELINE JOSEPHS - SOUTH YAARA</option>
                  <option>SCOOT CHRISTPHOR - SOUTH YAARA</option>
                  <option>JULIE PHALGUN - WERRIBEE</option>
                  <option>PAUL ROB - WERRIBEE</option>
                  <option>FATHIMA RAJ - WERRIBEE</option>
                </select>
              </div>














              <div className="field">
                <p className="control">
                  <button className="button is-success">
                    BOOK APPOINTMENT
                </button>
                </p>
              </div>
            </div>
          </form>
        </div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      </section>
    );
  }
}


export default Register;
