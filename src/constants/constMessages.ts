export type ConstmessagesType = {
	user: {
		existsEmail: 'EMAIL_EXISTS';
		invalidEmail: 'INVALID_EMAIL';
		shortName: 'SHORT_NAME';
		invalidName: 'INVALID_NAME';
		shortLastName: 'SHORT_LAST_NAME';
		invalidLastName: 'INVALID_LAST_NAME';
		invalidPassword: 'INVALID_PASSWORD';
		passwordDoNotMatch: 'PASSWORD_DO_NOT_MATCH';
		created: 'USER_CREATED';
	};
	form: {
		emptyfield: 'EMPTY_FIELD';
	};
	server: {
		serverError: 'SERVER_ERROR';
	};
};

export const constMessages: ConstmessagesType = Object.freeze({
	user: {
		existsEmail: 'EMAIL_EXISTS',
		invalidEmail: 'INVALID_EMAIL',
		shortName: 'SHORT_NAME',
		invalidName: 'INVALID_NAME',
		shortLastName: 'SHORT_LAST_NAME',
		invalidLastName: 'INVALID_LAST_NAME',
		invalidPassword: 'INVALID_PASSWORD',
		passwordDoNotMatch: 'PASSWORD_DO_NOT_MATCH',
		created: 'USER_CREATED',
	},

	form: {
		emptyfield: 'EMPTY_FIELD',
	},

	server: {
		serverError: 'SERVER_ERROR',
	},
});
