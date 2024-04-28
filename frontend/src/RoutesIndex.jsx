import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';

export default function RoutesIndex(){
    return(
        <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={Logon} />
          <Route path="/register" Component={Register} />
        </Routes>
      </BrowserRouter>
    );
}