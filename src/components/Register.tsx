import React, { useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {getUsers, login, registerUser} from '../services/auth';
import {Navigate} from "react-router-dom";

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const queryClient = useQueryClient();

    // const {data, isLoading, isSuccess, isError } = useQuery({
    //     queryKey: ['users'],
    //     queryFn: getUsers
    // });

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({queryKey: ['users']});
        },
    });

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        mutation.mutate({ email, password });
    };

    if (isRegistered) {
        // После успешной регистрации, сразу выполняем вход
        login({ email, password }).then(() => {
            // После успешного входа, перенаправляем на домашнюю страницу
            return <Navigate to="/home" replace />;
        });
    }
    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                <button type="submit">Register</button>
            </form>
            {/*{mutation.isError && <p>Error registering user</p>}*/}
        </div>

    );
};

export default Register;
