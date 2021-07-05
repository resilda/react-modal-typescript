import { useForm, SubmitHandler } from 'react-hook-form';
import RegisterContainer from './styles/RegisterContainer';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';

type RegisterData = {
	email: String;
	password: any;
};

interface Components {
	data: any;
}

function Register() {
	const { register, setValue, handleSubmit } = useForm<RegisterData>();

	const onSubmit: SubmitHandler<Components> = data => console.log(data);

	return (
		<RegisterContainer>
			<form onSubmit={handleSubmit(onSubmit)} className="form-register">
				<label>Email</label>
				<FilledInput {...register('email')}  className="input"/>
				<label>Password</label>
				<FilledInput {...register('password')}  className="input"/>
				<Button
					type="button"
					onClick={() => {
						setValue('email', 'resilda@yahoo.com');
						setValue('password', 'iwhrie');
					}}
					className="button"
				>
					SetValue
				</Button>
			</form>
		</RegisterContainer>
	);
}

export default Register;
