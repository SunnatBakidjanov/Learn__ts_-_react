import './styles/fonts.css';
import './styles/reset.css';
import './styles/main.css';
import './styles/transitions.css';

import '../i18n/i18n';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import { persistor } from '../redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeWrapper } from '../components/theme-wrapper/ThemeWrapper';
import { AppRoutes } from '../components/routes/AppRoutes';

export const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<BrowserRouter>
					<ThemeWrapper>
						<AppRoutes />
					</ThemeWrapper>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	);
};
