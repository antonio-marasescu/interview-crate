import { Link, Route, Routes } from 'react-router-dom';
import { Button } from '@interview-crate/fe/component-library';

export function App() {
    return (
        <div>
            <Button variant="secondary" size="default">
                Button
            </Button>
            <br />
            <hr />
            <br />
            <div role="navigation">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/page-2">Page 2</Link>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={
                        <div>
                            This is the generated root route.{' '}
                            <Link to="/page-2">Click here for page 2.</Link>
                        </div>
                    }
                />
                <Route
                    path="/page-2"
                    element={
                        <div>
                            <Link to="/">
                                Click here to go back to root page.
                            </Link>
                        </div>
                    }
                />
            </Routes>
            {/* END: routes */}
        </div>
    );
}

export default App;
