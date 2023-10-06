import { css } from '@/styled-system/css';
import { useNavigate } from 'react-router-dom';

export const Root = () => {
	const navigate = useNavigate();

	return (
		<div className={css({ color: 'red' })}>
			<h1>Root page</h1>
			<a
				className={css({ cursor: 'pointer' })}
				onClick={() => {
					navigate('/dashboard');
				}}
			>
				go to dashboard
			</a>
		</div>
	);
};

export default Root;
