import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    NavLink,
    Navigate
} from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/Login';
import NotFound from './../components/NotFound';
import Dashboard from './../components/dashboard/Dashboard';
import PrivateRoute from './../components/privateRoute/PrivateRoute';
import Header from '../components/header/Header';

const AppRoutes = () => {
    const isAuthenticated = true;
    return (
        <>
            <Router>
            <Header />
                <Routes>
                    {/* Public routing */}
                    <Route path='/' element={<Home />} />
                    <Route path='/login' element={<Login />} />
                    {/* If page doesnt match or exist then 404 page not found comp has to be rendered */}
                    <Route path='*' element={<NotFound />} />

                    {/* Private routing : it is accessible when the user is authenticated */}
                    <Route
                        path='/dashboard'
                        element={<PrivateRoute element={<Dashboard />} isAuthenticated={isAuthenticated} />}
                    />

                </Routes>
            </Router>
        </>
    );
}

export default AppRoutes;