import { lazy, Suspense } from 'react';
import {
	createBrowserRouter,
	RouterProvider as Provider,
} from 'react-router-dom';
import { css } from '@/styled-system/css';
import { Loader2 } from 'lucide-react';

// code splitting & lazy load
const Root = lazy(() => import('@/pages'));
const Dashboard = lazy(() => import('@/pages/dashboard'));

// loadign page
const LoadingScene = () => (
	<div className="grid h-screen place-items-center">
		<Loader2 className={css({ h: '10', w: '10', animation: 'spin' })} />
	</div>
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
	},
	{
		path: '/dashboard',
		element: (
			<Suspense fallback={<LoadingScene />}>
				<Dashboard />
			</Suspense>
		),
	},
]);

export const RouterProvider = () => {
	return <Provider router={router} />;
};
