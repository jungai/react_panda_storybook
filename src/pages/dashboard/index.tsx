import { css } from '@/styled-system/css';
import { Button } from '@/components/Button';

export const Dashboard = () => {
	console.log(import.meta.env.VITE_API_URL);
	return (
		<div className={css({ textDecoration: 'underline' })}>
			<h1>Dashboard Page</h1>

			<p>this is a button component in project</p>
			<Button>click</Button>
		</div>
	);
};

export default Dashboard;
