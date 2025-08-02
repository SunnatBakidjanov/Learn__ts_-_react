import classNames from 'classnames';
import { RoundToolbar } from '../../../../UI/toolbars/round-toolbar/RoundToolbar';
import { FaGear } from 'react-icons/fa6';
import { useRoundToolbar } from '../../../../UI/toolbars/round-toolbar/useRoundToolbar';
import { RoundToolbarChangeThemeBtn } from '../../../../UI/toolbars/round-toolbar/UI/round-toolbar-change-theme-btn/RoundToolbarChangeThemeBtn';
import { useRoundToolbarStyles } from '../../../../styles/round-toolbar/useRoundToolbarStyles';
import { RoundToolbarChangeLanguageBtn } from '../../../../UI/toolbars/round-toolbar/UI/round-toolbar-change-language-btn/RoundToolbarChangeLanguageBtn';

export const AuthToolbar = () => {
	const { isOpen, isDisabled, toggleDisabled, toolbarRef, toggleOpen } = useRoundToolbar();
	const { toolClassName, toolImgClassName, toolbarImgClassName, toolbarBtnClassName } =
		useRoundToolbarStyles({
			isOpen,
		});

	return (
		<RoundToolbar
			img={<FaGear className={toolbarImgClassName} />}
			initialDegree={180}
			ref={toolbarRef}
			radius={!isOpen ? 50 : 65}
			angleStep={!isOpen ? 60 : 70}
			onClick={() => {
				toggleOpen();
				toggleDisabled();
			}}
			isBtnDisabled={isDisabled}
			className={{
				toolbar: classNames(
					'w-[190px] h-[190px] flex items-center justify-center fixed bottom-0 right-0 mb-3.5'
				),
				btn: toolbarBtnClassName,
			}}
		>
			<RoundToolbarChangeThemeBtn
				isOpen={isOpen}
				className={{ btn: toolClassName, img: toolImgClassName }}
			/>

			<RoundToolbarChangeLanguageBtn
				isOpen={isOpen}
				className={{ btn: toolClassName, img: toolImgClassName }}
			/>
		</RoundToolbar>
	);
};
