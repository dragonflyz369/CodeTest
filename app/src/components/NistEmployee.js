import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function NistEmployee() {
  return (
    <Autocomplete
      disablePortal
      id="nist-autocomplete"
      options={ people }
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="User" />}
    />
  );
}
// generate generic list
const people = [
    {
      "label": "Adams",
      "id": 1
    },
    {
      "label": "Baker",
      "id": 2
    },
    {
      "label": "Clark",
      "id": 3
    },
    {
      "label": "Davis",
      "id": 4
    },
    {
      "label": "Evans",
      "id": 5
    },
    {
      "label": "Frank",
      "id": 6
    },
    {
      "label": "Hills",
      "id": 7
    },
    {
      "label": "Irwin",
      "id": 8
    },
    {
      "label": "Jones",
      "id": 9
    },
    {
      "label": "Klein",
      "id": 10
    },
    {
      "label": "Lopez",
      "id": 11
    },
    {
      "label": "Mason",
      "id": 12
    },
    {
      "label": "Nalty",
      "id": 13
    },
    {
      "label": "Ochoa",
      "id": 14
    },
    {
      "label": "Patel",
      "id": 15
    },
    {
      "label": "Quinn",
      "id": 16
    },
    {
      "label": "Reily",
      "id": 17
    },
    {
      "label": "Smith",
      "id": 18
    }
   ];