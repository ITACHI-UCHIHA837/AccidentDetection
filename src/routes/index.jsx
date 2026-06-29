import { createBrowserRouter } from 'react-router-dom';
import { createHashRouter } from 'react-router-dom';
import PagesRoutes from './PagesRoutes';
import NavigationRoutes from './NavigationRoutes';
import PipelineRoutes from './PipelineRoutes';



// ==============================|| ROUTING RENDER ||============================== //

const router = createHashRouter(
  [NavigationRoutes, PipelineRoutes, PagesRoutes]
);

// const router = createBrowserRouter(
//   // [NavigationRoutes,PipelineRoutes, ComponentsRoutes, FormsRoutes, TablesRoutes, PagesRoutes, OtherRoutes, ChartMapRoutes],
//   [NavigationRoutes,PipelineRoutes,  PagesRoutes, ],
//   {
//     basename: import.meta.env.VITE_APP_BASE_NAME
//   }
// );

export default router;
