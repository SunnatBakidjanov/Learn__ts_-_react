import { useTranslation } from 'react-i18next';
import { SubmitLink } from '../../../../UI/links/submit-link/SubmitLink';
import { useLinkSubmitLinkStyles } from '../../../../styles/link-submit/useLinkSubmitLinkStyles';

export const AuthLink = () => {
	const { t } = useTranslation('auth');
	const { submitLinkClassNames } = useLinkSubmitLinkStyles();

	return (
		<SubmitLink
			path="/login"
			linkText={t('link.linkText')}
			text={t('link.text')}
			hasUnderline={true}
			className={submitLinkClassNames}
		/>
	);
};
