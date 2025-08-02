import { useLayoutEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { setTheme } from '../../redux/theme-slice/slice';

export const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useAppDispatch();

	useLayoutEffect(() => {
		dispatch(setTheme());
	}, []);

	return <>{children}</>;
};
