import { useState } from 'react';

export const useShowPassword = () => {
	const [showPassword, setPasswordType] = useState(false);

	const handleShowPassword = () => {
		setPasswordType(prev => !prev);
	};

	return { showPassword, handleShowPassword };
};
