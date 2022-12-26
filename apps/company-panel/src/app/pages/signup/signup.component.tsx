import { Button, Divider } from '@mui/material';
import { Container, Stack } from '@mui/system';
import { FieldValues, useForm } from 'react-hook-form'
import { FormWrapper } from '@dev/form';
import { formStructure } from './signup.form-structure';
import { registerCall } from './signup.service'

const SignupComponent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const submitForm = async (data: FieldValues) => {
        const { email, password } = data;
        await registerCall(email, password)
    }

    return (
        <div className="signup_wrapper">
            <h1>پنل مدیریت شرکتی Koja Kar</h1>
            <div className="signup-card">
                <Container>
                    <form onSubmit={handleSubmit(submitForm)}>
                        <Stack spacing={3}>
                            <FormWrapper
                                formData={formStructure}
                                inputRegister={register}
                                inputErrors={errors}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disableElevation
                                fullWidth
                            >ورود به سامانه</Button>
                            <Divider />
                            <Button
                                variant="text"
                                color="primary"
                                type="submit"
                                disableElevation
                                fullWidth
                            >ثبت نام</Button>
                        </Stack>
                    </form>
                </Container>
            </div>
        </div >
    )
}

export default SignupComponent