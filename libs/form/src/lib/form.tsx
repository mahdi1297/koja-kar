/* eslint-disable array-callback-return */
import Input from './components/input';
import { Stack } from '@mui/system';
import {
  UseFormRegister,
  FieldValues,
  FieldErrors
} from 'react-hook-form'
import {
  FormStructure,
  InputTypes,
  InputVariant,
} from '@dev/types';

export interface FormProps {
  formData: FormStructure[],
  inputRegister?: UseFormRegister<FieldValues>,
  inputErrors?: FieldErrors<FieldValues>,
}

export function FormWrapper({ formData, inputRegister, inputErrors }: FormProps) {

  return (
    <div className="form-wrapper">
      <Stack spacing={3}>
        {formData.map((f: FormStructure) => {
          const inputVarient = f.varient ?? InputVariant.STANDARD;

          switch (f.type) {
            case InputTypes.PASSWORD:
            case InputTypes.TEXT: {
              return (
                <Input
                  id={f.id}
                  key={f.id}
                  type={f.type}
                  varient={inputVarient}
                  register={{ ...inputRegister(f.name, f.validations) }}
                  inputErrors={inputErrors?.[f.name]}
                  label={f.label}
                  fullWidth={f.fullWidth}
                />
              )
            }
          }
        })}
      </Stack >
    </div>
  );
}

export default FormWrapper;
