import { FormStructure, InputTypes, InputVariant } from '@dev/types';

export const formStructure: FormStructure[] = [
  {
    id: '1',
    type: InputTypes.TEXT,
    label: 'ایمیل',
    required: true,
    name: 'email',
    varient: InputVariant.OUTLINED,
    validations: {
      required: 'ورود ایمیل اجباریست',
      minLength: {
        value: 2,
        message: 'ایمیل باید بیشتر از 2 کاراکتر باشد',
      },
      maxLength: {
        value: 160,
        message: 'ایمیل باید کمتر از 160 کاراکتر باشد ',
      },
    },
  },
  {
    id: '2',
    type: InputTypes.PASSWORD,
    label: 'کلمه عبور',
    required: true,
    name: 'password',
    varient: InputVariant.OUTLINED,
    validations: {
      required: 'کلمه ی عبور اجباریست',
      minLength: {
        value: 8,
        message: 'کلمه ی عبور باید بیشتر از 8 کاراکتر باشد',
      },
      maxLength: {
        value: 32,
        message: 'کلمه ی عبور باید کمتر از 32 کاراکتر باشد',
      },
    },
  },
];
