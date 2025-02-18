import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Tables from './pages/Tables';

const TestPage: React.FC<{ name: string }> = ({ name }) => <Box>{name}</Box>;

const App = () => {
    return (
        <Router>
            <Flex>
                <Sidebar />
                <Box flex="1">
                    <Navbar />
                    <Box p="6">
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/tables" element={<Tables />} />
                            <Route
                                path="/billing"
                                element={<TestPage name="Billing page" />}
                            />
                            <Route
                                path="/rtl"
                                element={<TestPage name="RTL page" />}
                            />
                            <Route
                                path="/profile"
                                element={<TestPage name="Profile page" />}
                            />
                            <Route
                                path="/signin"
                                element={<TestPage name="Signin" />}
                            />
                            <Route
                                path="/signup"
                                element={<TestPage name="Signup" />}
                            />
                        </Routes>
                    </Box>
                    <Footer />
                </Box>
            </Flex>
        </Router>
    );
};

export default App;
