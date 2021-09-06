import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import RegisterContainer from './styles/RegisterContainer'
import FilledInput from '@material-ui/core/FilledInput'
import Button from '@material-ui/core/Button'

type IRegisterData = {
  email: String
  password: any
}

interface Components {
  data: any
  required: boolean
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>()

  const onSubmit: SubmitHandler<Components> = (data) => console.log(data)

  return (
    <RegisterContainer>
      <form onSubmit={handleSubmit(onSubmit)} className="form-register">
        <label>Email</label>
        <FilledInput
          {...register('email', { required: true })}
          className="input"
          type="text"
        />
        {errors.email && 'Email is required'}

        <label>Password</label>
        <FilledInput
          {...register('password', { required: true })}
          className="input"
          type="password"
        />
        {errors.password && 'Password is required'}

        <Button type="submit" className="button">
          Submit
        </Button>
      </form>
    </RegisterContainer>
  )
}

export default Register
