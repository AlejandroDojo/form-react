import React from 'react';
import styles from '../Form/Form.module.css';

const Result = ({ userForm }) => {
    return (
        <div className={styles.result}>
            <h2>Form Data:</h2>
            <p>First Name: {userForm.firstName}</p>
            <p>Last Name: {userForm.lastName}</p>
            <p>Email: {userForm.email}</p>
            <p>Password: {userForm.password}</p>
            <p>Confirm Password: {userForm.confirmPassword}</p>
        </div>
    );
};

export default Result;