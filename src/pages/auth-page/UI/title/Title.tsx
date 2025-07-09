import { useTranslation } from 'react-i18next';

import { MainTitle } from '../../../UI-general/main-title/MainTitle';

export const Title = () => {
	const { t } = useTranslation('auth');

	return <MainTitle text={t('mainTitle')} styleUsePlace="auth" />;
};
