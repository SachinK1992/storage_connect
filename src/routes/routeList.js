import Home from "../containers/Home/Home";
import NotFound from "../containers/NotFound/NotFound";

export const routerList = [
    {
        key: 2,
        label: 'Home',
        path: '/',
        Component: Home,
        hasNavbar: true,
    },
    {
        key: 3,
        path: '*',
        label: 'Not Found Page',
        Component: NotFound,
        hasNavbar: false,
    }
]
