import { Auth } from '../pages/auth-page/Auth';
import '../i18n/i18n';

import './styles/main.scss';
import './styles/reset.scss';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeWrapper } from '../components/theme-wrapper/ThemeWrapper';

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<ThemeWrapper>
					<Auth />
				</ThemeWrapper>
			</PersistGate>
		</Provider>
	);
};
