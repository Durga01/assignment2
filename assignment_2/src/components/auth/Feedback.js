import React, { Component } from 'react';
import FormErrors from "../FormErrors";
import Validate from "../utility/FormValidation"
import { AUTH, Feed } from "aws-amplify";

class Feedback extends Component {
    state = {
        username: "",
        given_name: "",
        subject: "",
        feedback: "",
        family_name: "",
        email: "",
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

        const { given_name, family_name, email, subject, feedback } = this.state;
        try {
            const signUpResponse = await Feed.signUp({
                username: email,

                password: "123123Net1524",
                attributes: {
                    given_name: given_name,
                    family_name: family_name,
                    email: email,
                    'custom:subject': subject,
                    'custom:feedback': feedback




                }
            });
            console.log(signUpResponse);
            this.props.history.push("/welcome");
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
                    <h1 className="register-head text-center"><b>FEEDBACK FORM</b></h1>
                    <FormErrors formerrors={this.state.errors} />

                    <form onSubmit={this.handleSubmit}>


                        <br />
                        <div className="field row">
                            <div className="form-group col-md-12">
                                <label><b>FIRST NAME</b></label>
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
                                <label><b>SUBJECT</b></label>
                                <p className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="subject"
                                        aria-describedby="userNameHelp"
                                        placeholder="Enter feedback subject"
                                        value={this.state.subject}
                                        onChange={this.onInputChange}
                                    />
                                </p>
                            </div>



                            <div className="form-group col-md-12">
                                <label><b>FEEDBACK</b></label>
                                <p className="control">
                                    <input
                                        className="input"
                                        type="text"
                                        id="feedback"
                                        aria-describedby="userNameHelp"
                                        placeholder="Enter Feedback"
                                        value={this.state.feedback}
                                        onChange={this.onInputChange}
                                    />
                                </p>
                            </div>






                            <div className="field">
                                <p className="control">
                                    <button className="button is-success">
                                        SUBMIT FEEDBACK
                </button>
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </section>
        );
    }
}

export default Feedback;
