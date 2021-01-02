import React, { useState } from 'react'

export const AuthPage = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>mernApp</h1>
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Authorization</span>
                        <div>
                            <div class="input-field">
                                <input placeholder="Email" id="email" type="text" name="email" className="yellow-input"
                                    onChange={changeHandler} />
                                <label for="email">Email</label>
                            </div>
                            <div class="input-field">
                                <input placeholder="Password" id="password" type="password" name="password" className="yellow-input"
                                    onChange={changeHandler} />
                                <label for="password">Password</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn yellow darken-4" style={{ marginRight: 10 }}>Sign In</button>
                        <button className="btn grey lighten-1 black-text">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    )
}