import React from 'react';
import s from './Login.module.css'
import {Field, reduxForm} from "redux-form";
import {Input} from "../FormsContorls/FormControls";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import styles from './Login.module.css'


const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit} className={s.login__form}>
            <Field component={Input} validate={[required]} name={'email'} type={'text'} placeholder={'email'}/>
            <Field component={Input} validate={[required]} name={'password'} type={'password'} placeholder={'password'}/>
            <label>
                <Field component={Input} name={'rememberMe'} type={'checkbox'}/> Remember me
            </label>
            {error && <div className={styles.form__error}>{error}</div>}
            <button>Log In</button>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if(props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {isAuth: state.auth.isAuth}
}

export default connect(mapStateToProps, {login} )(Login);