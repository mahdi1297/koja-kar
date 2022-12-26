/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import TextField from '@mui/material/TextField';
import { InputProps } from '@dev/types';



const Input = ({
  id,
  name,
  label,
  placeholder,
  varient,
  register,
  inputErrors,
  type,
  fullWidth = true
}: InputProps) => {
  const hasError = inputErrors && true;

  return (
    <TextField
      type={type}
      {...register}
      varient={varient}
      label={label}
      placeholder={placeholder}
      fullWidth={fullWidth}
      helperText={hasError && inputErrors.message}
      error={hasError}
    />
  )
}

export default Input