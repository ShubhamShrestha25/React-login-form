import React from 'react'
import login from "../login.svg";

 class Register extends React.Component {
    render() {
        return (
            <div className="base-container">
                <div className="header">Register</div>
                <div className="content">
                    <div className="image">
                        <img src={login} />
                    </div>
                    <div className="form">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" placeholder="username" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" placeholder="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" placeholder="password" />
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type="button" className="btn">Register</button>
                </div>
                </div>
        )
    }
}

export default Register;