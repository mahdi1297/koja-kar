import { InputTypes } from './input-types';
import { InputVariant } from './input-varient';
import { UseFormRegister, FieldValues, FieldErrors } from 'react-hook-form';
import { ChangeEventHandler } from 'react';

export interface InputProps {
  id: string;
  name?: string;
  type: InputTypes;
  varient: InputVariant;
  label?: string;
  placeholder?: string;
  /**
   * The register function input handler for react-hook-form
   */
  register?: UseFormRegister<FieldValues> | any;
  /**
   * The error object which is provided by react-hook-form formState
   */
  inputErrors?: FieldErrors<FieldValues> | any;
  fullWidth?: boolean;
  onchange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
