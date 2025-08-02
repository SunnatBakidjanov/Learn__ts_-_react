import 'i18next';

declare module 'i18next' {
	interface CustomTypeOptions {
		resources: {
			auth: {
				mainTitle: string;
				secondTitle: string;
				form: {
					placeholder: {
						name: string;
						lastName: string;
						email: string;
						password: string;
						confirmPassword: string;
					};
					text: {
						name: string;
						lastName: string;
						email: string;
						password: string;
						confirmPassword: string;
					};
					errorsMessages: {
						SHORT_NAME: string;
						INVALID_NAME: string;
						SHORT_LAST_NAME: string;
						INVALID_LAST_NAME: string;
						INVALID_EMAIL: string;
						EMAIL_EXISTS: string;
						INVALID_PASSWORD: string;
						SHORT_PASSWORD: string;
						PASSWORD_DO_NOT_MATCH: string;
						USER_CREATED: string;
						EMPTY_FIELD: string;
						SERVER_ERROR: string;
					};
					submitBtn: string;
				};
				link: {
					text: string;
					linkText: string;
				};
			};
			login: {
				mainTitle: string;
				secondTitle: string;
				form: {
					placeholder: {
						email: string;
						password: string;
					};
					text: {
						email: string;
						password: string;
					};
					errorsMessages: {
						INVALID_EMAIL: string;
						EMAIL_EXISTS: string;
						INVALID_PASSWORD: string;
						SHORT_PASSWORD: string;
						INCORRECT_PASSWORD: string;
					};
				};
			};
		};
	}
}
