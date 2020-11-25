import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from 'react-router-dom';
import { UsersProvider } from './contexts/users';
import { EmployeesPage } from './pages/employees';
import { HomePage } from './pages/home';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <main>
                <nav>
                    <ul className="horizontal-menu">
                        <li>
                            <NavLink to="/" exact>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/employees">Employees</NavLink>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/employees">
                        <UsersProvider>
                            <EmployeesPage />
                        </UsersProvider>
                    </Route>
                    <Route path="/" exact>
                        <HomePage />
                    </Route>
                </Switch>
            </main>
        </Router>
    );
}

export default App;
