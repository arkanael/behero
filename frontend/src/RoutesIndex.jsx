import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';

export default function RoutesIndex(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Logon} />
          <Route path="/register" Component={Register} />
          <Route path="/profile" Component={Profile} />

        </Routes>
      </BrowserRouter>
    );
}