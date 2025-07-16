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
						repeatPassword: string;
					};
					text: {
						name: string;
						lastName: string;
						email: string;
						password: string;
						repeatPassword: string;
					};
					errorsMessages: {
						passwrodDoNotMatch: string;
						lowPasswordLength: string;
					};
					submitBtn: string;
				};
			};
		};
	}
}
