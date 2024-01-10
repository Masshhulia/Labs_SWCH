import Home from './pages/Home';
import Employees from './pages/Employees';
import DangerousWorks from './pages/DangerousWorks';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import NotFound from './pages/NotFound';
import Reviews from './pages/Reviews';
import Careers from './pages/Careers';
import {HOME_ROUTE, WORKS_ROUTE, ABOUT_ROUTE, SERVICES_ROUTE, REVIEWS_ROUTE, CAREERS_ROUTE, NOT_FOUND_ROUTE, EMPLOYEES_ROUTE} from "./utils/consts";

export const authRoutes = [
    {
        path:WORKS_ROUTE,
        Component: DangerousWorks
    },
    {
        path: EMPLOYEES_ROUTE,
        Component: Employees
    },
]



export const publicRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    },
    
    {
        path: ABOUT_ROUTE,
        Component: AboutUs
    },
    {
        path: SERVICES_ROUTE,
        Component: Services
    },
    {
        path: REVIEWS_ROUTE,
        Component: Reviews
    },
    {
        path: CAREERS_ROUTE,
        Component: Careers
    },
    {
        path: NOT_FOUND_ROUTE,
        Component: NotFound
    }
]