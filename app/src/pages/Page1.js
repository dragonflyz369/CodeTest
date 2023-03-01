import React, { useState } from 'react';
import { Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import NistEmployee from '../components/NistEmployee';
import InvitUser from '../components/InvitUser';

const who = ["Wen, Tony", "NIST Employee/Assoc", "Invitational Traveler"];
const what = ["Rough Estimate", "Full Cost Detail"];

export default function Page1() {
  const [ userType, setUserType ] = useState('Wen, Tony');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserType(event.target.value);
  };

  const generateUserType = () => {
    if (userType === "Wen, Tony") { 
        return (<div>Wen, Tony</div>)
    } else if (userType === "NIST Employee/Assoc") {
        return(<NistEmployee />)
    } else if (userType === "Invitational Traveler") {
        return(<InvitUser/>)
    }
  }
  return (
    <main className='container mx-auto'>
        <div className='w-full bg-blue-600 text-white h-10 rounded-t-lg text-center text-lg'>
            Get trip details
        </div>
        <div className='flex flex-row items-center'>
            <div className='w-1/4'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Who is traveling?</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        onChange={ handleChange }>
                        {
                            who.map(item => {
                                return (<FormControlLabel value={item} control={ <Radio /> } label={item} />)
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='w-1/4'>
                <div>Traveler details</div>
                {
                    generateUserType()
                }
            </div>
            <div className='w-1/4'>
                <FormControl>
                    <FormLabel id="demo-radio-buttons-group-label">Plan details</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radio-buttons-group"
                        onChange={ handleChange }>
                        {
                            what.map(item => {
                                return (<FormControlLabel value={item} control={ <Radio /> } label={item} />)
                            })
                        }
                    </RadioGroup>
                </FormControl>
            </div>
            <div className='w-1/4'>
                <div>Submit</div>
                <Button variant="contained">Create Trip</Button>
            </div>
        </div>
    </main>
  );
}