import { Component } from "react";
import { ErrorMessage, Field, Form, Formik } from 'formik';

class Login extends Component {
    render() {
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-md-8 text-center bg-light" style={{'height': '100vh', 'padding-top': '18%'}}>
                        <h1>
                            <span className="text-primary">ADYTUM</span> 
                            <span> CRM</span>
                        </h1>
                        <small className="text-secondary">Powered by Adytum</small>
                    </div>
                    <div className="col-12 col-md-4 mb-5">
                        <Formik>
                            <Form>
                                <div className="mt-5 text-center">
                                <h1 className="display-6"> Login here </h1>
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="">Email id</label>
                                    <Field type="email" className="form-control" name="email_id" />
                                    <ErrorMessage name="email_id" component="span" className="text-danger" />
                                </div>

                                <div className="mt-3">
                                    <label htmlFor="">Password</label>
                                    <Field type="password" className="form-control" name="user_password" />
                                    <ErrorMessage name="user_password" component="span" className="text-danger" />
                                </div>

                                <div className="mt-3 d-grid gap-2">
                                    <button className="btn btn-primary" type="submit"> Login </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login