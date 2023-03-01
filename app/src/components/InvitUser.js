import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function InvitUser() {
  return (
    <div>
        <TextField
        required
        id="outlined-required"
        label="Required"
        defaultValue="Hello World"
        />
        <TextField
        disabled
        id="outlined-disabled"
        label="Disabled"
        defaultValue="Hello World"
        />
        <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        />
    </div>
  );
}