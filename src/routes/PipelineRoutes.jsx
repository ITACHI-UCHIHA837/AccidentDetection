import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

const PipelinePage = Loadable(lazy(() => import('views/pipeline')));

const PipelineRoutes = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/pipeline',
          element: <PipelinePage />
        }
      ]
    }
  ]
};

export default PipelineRoutes;