import { useForm } from 'react-hook-form';

type RegisterData = {
	username: String;
	email: String;
	password: any;
};

interface Components {
	data: any;
}

function Register(registered: RegisterData, others: Components) {
	const { register, setValue, handleSubmit, formState: { errors } } = useForm<RegisterData>();

	const onSubmit = handleSubmit(() => console.log('data', others.data));

	return (
		<form onSubmit={onSubmit}>
			<label>Username</label>
			<input {...register('username')} />
			<label>Email</label>
			<input {...register('email')} />
			<label>Password</label>
			<input {...register('password')} />
			<button
				type="button"
				onClick={() => {
					setValue('username', 'resilda');
					setValue('email', 'resilda@yahoo.com');
					setValue('password', 'dhjeiwhrie');
				}}
			>
				SetValue
			</button>
		</form>
	);
}

export default Register;
