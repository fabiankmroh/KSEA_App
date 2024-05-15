// src/app/signup.js
'use client';

import { useState } from 'react';
import { users } from '../src/app/lib/data';

export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [major, setMajor] = useState('');
    const [type, setType] = useState('');
    const [grade, setGrade] = useState('');
    const [fog, setFog] = useState('');
    const [socialGroup, setSocialGroup] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
        name,
        email,
        password,
        major,
        type,
        exec: false,
        points: 0,
        grade: parseInt(grade),
        fog,
        social_group: parseInt(socialGroup),
        };

        users.push(newUser);
        console.log('New user added:', newUser);

        // Reset form fields
        setName('');
        setEmail('');
        setPassword('');
        setMajor('');
        setType('');
        setGrade('');
        setFog('');
        setSocialGroup('');
    };

    return (
        <div>
        <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="major">Major:</label>
                <input
                    type="text"
                    id="major"
                    value={major}
                    onChange={(e) => setMajor(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="type">Type:</label>
                <input
                    type="text"
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="grade">Grade:</label>
                <input
                    type="number"
                    id="grade"
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="fog">FOG:</label>
                <input
                    type="text"
                    id="fog"
                    value={fog}
                    onChange={(e) => setFog(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="socialGroup">Social Group:</label>
                <input
                    type="number"
                    id="socialGroup"
                    value={socialGroup}
                    onChange={(e) => setSocialGroup(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Sign Up</button>
        </form>
        </div>
    );
}