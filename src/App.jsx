import { Outlet } from "react-router";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";

const App = () => {
    return (
        <div className="flex justify-between">
            <div className="w-[25%] h-[100vh] sticky top-0 left-0 z-50 bg-blue-900">
                <Profile />
            </div>
            <div className="w-[75%]">
                <Navbar />
                <Outlet />
            </div>
        </div>
    )
}

export default App;