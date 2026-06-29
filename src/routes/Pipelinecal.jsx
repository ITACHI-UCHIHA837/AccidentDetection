import { lazy } from 'react';

// project-imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';
const calepage = Loadable(lazy(() => import('views/cal')));
const PipelinePage = Loadable(lazy(() => import('views/pipeline')));


const Pipelinecalroute = {
  path: '/',
  children: [
    {
      path: '/',
      element: <DashboardLayout />,
      children: [
        {
          path: '/cal',
          element:<>
           <calepage /><PipelinePage/>
          </>
        }
      ]
    }
  ]
};

export default Pipelinecalroute;