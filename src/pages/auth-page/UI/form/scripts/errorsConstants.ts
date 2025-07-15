const PASSWORD_ERRORS = {
	LOW_PASSWORD_LENGTH: 'Пароль должен состоять хотя бы из 6 символов',
} as const;

const PASSWORD_REPEAT_ERRORS = {
	PASSWORD_DO_NOT_MATCH: 'Пароли не совпадают',
};

export { PASSWORD_ERRORS, PASSWORD_REPEAT_ERRORS };
