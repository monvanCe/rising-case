'use client';

import { loginAction } from '@/store/actions/authActions';

import React, { useState } from 'react';
import { toast } from 'sonner';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    loginAction(username.trim(), password.trim())
      .then((res) => {
        window.location.href = '/dashboard';
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={handleUsernameChange}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={handlePasswordChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
