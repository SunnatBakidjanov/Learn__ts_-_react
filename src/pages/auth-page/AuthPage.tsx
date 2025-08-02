import { GradientBackground } from '../../UI/backgrounds/gradient-background/GradientBackground';
import { MainContainer } from '../../UI/containers/main-container/MainContainer';
import { PageContainer } from '../../UI/containers/page-container/PageContainer';
import { AuthForm } from './UI/auth-form/AuthForm';
import { AuthLink } from './UI/auth-link/AuthLink';
import { AuthToolbar } from './UI/auth-toolbar/AuthToolbar';

export const AuthPage = () => {
	return (
		<>
			<PageContainer>
				<MainContainer>
					<main>
						<section>
							<div className="min-h-screen flex flex-col items-center justify-center py-8">
								<AuthForm />

								<AuthLink />

								<AuthToolbar />
							</div>
						</section>
					</main>
				</MainContainer>

				<GradientBackground />
			</PageContainer>
		</>
	);
};
