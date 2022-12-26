import { ChangeEventHandler } from 'react';
import { InputLabel } from './input-label';
import { InputTypes } from './input-types';
import { InputValidation } from './input-validaton';
import { InputVariant } from './input-varient';

export interface FormStructure {
  id: string;
  type: InputTypes;
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  varient?: InputVariant;
  labelType?: InputLabel;
  size?: 'small' | 'normal';
  fullWidth?: boolean;
  validations?: InputValidation;
  onchange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
