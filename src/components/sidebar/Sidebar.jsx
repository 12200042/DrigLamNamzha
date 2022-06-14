import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
// import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../context/darkModeContext";
import { logout } from "../../firebase";
import { useNavigate } from "react-router-dom";

export const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

    let navigate = useNavigate();

    async function handleLogout() {
        logout();
        navigate('/');
    }

    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <span className="logo">driglamAdmin</span>
                </Link>

            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">LISTS</p>
                    <Link to="/category" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleIcon className="icon" />
                            <span>Image</span>
                        </li>
                    </Link>
                    <Link to="/VideoCategory" style={{ textDecoration: "none" }}>
                        <li>
                            <VideoLibraryIcon className="icon" />
                            <span>Video</span>
                        </li>
                    </Link>
                    <p className="title">SERVICES</p>
                    <Link to="/QuestionAndAnswer" style={{ textDecoration: "none" }}>
                        <li>
                            <AutoStoriesOutlinedIcon className="icon" />
                            <span>QuestionAndAnswers</span>
                        </li>
                    </Link>
                    <Link to="/ContactUs" style={{ textDecoration: "none" }}>
                        <li>
                            <ContactMailOutlinedIcon className="icon" />
                            <span>Contact Us</span>
                        </li>
                    </Link>
                    <p className="title">USER</p>
                 
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <li>
                            <LogoutIcon className="icon" />
                            <span>
                                <button onClick={handleLogout}>Logout</button>
                            </span>
                        </li>
                    </Link>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div className="colorOption" onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar
