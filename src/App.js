import Home from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { List } from "./pages/list/List";
import { MentalList } from "./pages/list/MentalList";
import New from "./pages/new/New";

import MentalNew from "./pages/new/MentalNew";
import { Single } from "./pages/single/Single";
import { userInputs } from "../src/formSource/formSource";
import { usersInputs } from "../src/formSource/MentalFormSource";
import { userInput } from "../src/formSource/VerbalFormSource";
import "./components/style/dark.scss"
import { useContext } from "react";
import { AuthContext } from "./components/context/AuthContext";
import { DarkModeContext } from "./components/context/darkModeContext";
import { Category } from "./pages/category/Category";
import VerbalList from "./pages/list/VerbalList";
import VerbalNew from "./pages/new/VerbalNew";
// import { MentalSingle } from "./pages/single/MentalSingle";
import { VideoCategory } from "./pages/VideoCategory/VideoCategory"
import PhysicalVideo from "./pages/VideoCategory/physical/PhysicalVideo";
import VerbalVideo from "./pages/VideoCategory/verbal/VerbalVideo";
import MentalVideo from "./pages/VideoCategory/mental/MentalVideo"
import { QuestionAndAnswer } from "./pages/QuestionAnsAnswer/QuestionAndAnswer";
import { questionInput } from "./pages/QuestionAnsAnswer/QuoFormSource";
import QuoAnsNew from "./pages/QuestionAnsAnswer/QuoAnsNew";
import { ContactUs } from "./pages/ContactPage/contactUs/ContactUs"
import {Image} from './pages/home/image/Image';
function App() {
  const { darkMode } = useContext(DarkModeContext)
  // const { currentUser } = useContext(AuthContext);


  // const RequireAuth = ({ children }) => {
  //   return currentUser ? (children) : <Navigate to="/login" />;
  // };

  // console.log(currentUser);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
           <Route path="home" element={<Home />} />
            <Route path="category">
              <Route index element={
                // <RequireAuth>
                  <Category />
                // </RequireAuth>
              } />
            </Route>
            <Route path="VideoCategory">
              <Route index element={
                // <RequireAuth>
                  <VideoCategory />
                // </RequireAuth>
              } />
            </Route>
            <Route path="ContactUs">
              <Route index element={
                // <RequireAuth>
                  <ContactUs />
                // </RequireAuth>
              } />
            </Route>
            <Route path="image">
              <Route index element={
                // <RequireAuth>
                  <Image/>
                // </RequireAuth>
              } />
            </Route>
          
            <Route path="QuestionAndAnswer">
              <Route index element={
                // <RequireAuth>
                  <QuestionAndAnswer />
                // </RequireAuth>
              } />

              <Route path="new"
                element={
                  // <RequireAuth>
                    <QuoAnsNew inputs={questionInput} title="Add New Question" />
                  // {/* </RequireAuth> */}
                }
              />
            </Route>
            <Route path="PhysicalVideo">
              <Route index element={
                // <RequireAuth>
                  <PhysicalVideo />
                // </RequireAuth>
              } />
            </Route>
            <Route path="VerbalVideo">
              <Route index element={
                // <RequireAuth>
                  <VerbalVideo/>
                // {/* </RequireAuth> */}
              } />
            </Route>
            <Route path="MentalVideo">
              <Route index element={
                // <RequireAuth>
                  <MentalVideo/>
                // </RequireAuth>
              } />
            </Route>
            <Route path="Physical">
              <Route index element={
                // <RequireAuth>
                  <List />
                // </RequireAuth>
              } />

              <Route path="physicalNew"
                element={
                  // <RequireAuth>
                    <New inputs={userInputs} title="Add New Image" />
                  // </RequireAuth>
                }
              />

              {/* <Route path="userID"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              /> */}
            </Route>

            <Route path="mental">
              <Route index element={
                // <RequireAuth>
                  <MentalList />
                // </RequireAuth>
              } />

              <Route path="mentalNew"
                element={
                  // <RequireAuth>
                    <MentalNew inputs={usersInputs} title="Add the New Image" />
                  // </RequireAuth>
                }
              /> 
             
            </Route>

            <Route path="verbal">
              <Route
                index
                element={
                  // <RequireAuth>
                    <VerbalList />
                  // </RequireAuth>
                }
              />
              {/* <Route path=":userID"
                element={
                  <RequireAuth>
                    <Single />
                  </RequireAuth>
                }
              /> */}
              <Route path="new"
                element=
                {
                // <RequireAuth>
                  <VerbalNew inputs={userInput} title="Add New Image" />
                // </RequireAuth>
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;



// import React from 'react'
// import PhysicalVideo from './pages/VideoCategory/physical/PhysicalVideo'

// const App = () => {
//   return (
//     <div>
//       <PhysicalVideo/>
//     </div>
//   )
// }

// export default App