import React from 'react';
import styles from './Form.module.css';

const Form = ({ userForm, setUserForm }) => {
    const changeData = (e) => {
        const { name, value } = e.target;
        setUserForm((prevUserForm) => ({
            ...prevUserForm,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <> 
            <h2 className={styles.h2}>Create new User</h2>
            <form action="" className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="firstName">FirstName:</label>
                <input
                    name="firstName"
                    type="text"
                    value={userForm.firstName}
                    onChange={changeData}
                />
                <label htmlFor="lastName">LastName:</label>
                <input
                    name="lastName"
                    type="text"
                    value={userForm.lastName}
                    onChange={changeData}
                />
                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    type="email"
                    value={userForm.email}
                    onChange={changeData}
                />
                <label htmlFor="password">Password:</label>
                <input
                    name="password"
                    type="password"
                    value={userForm.password}
                    onChange={changeData}
                />
                <label htmlFor="confirmPassword">ConfirmPassword:</label>
                <input
                    name="confirmPassword"
                    type="password"
                    value={userForm.confirmPassword}
                    onChange={changeData}
                />
                <button type="submit">Save</button>
            </form>
        </>
    );
};

export default Form;