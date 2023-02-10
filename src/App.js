// import './App.css';

import Box from './02/Box';
import Mydiv from './03/Mydiv';
import Frcst from './04/Frcst';
import Taccident from './05/Taccident';
import Taccidentcopy from './05/Taccidentcopy';

import Gal from './06/Gal';
import Galselect from './06/GalSelelct';
import Mycom from './07/Mycom';
import MyForm from './08/MyForm';
import RouterMain from './09/RouterMain';
import Wmain from './10/Wmain'
import { BrowserRouter } from 'react-router-dom';
const App = () => {

  return (

    // <Frcst />
    // <Box />
    // <Mydiv />
    // <Taccidentcopy />
    //  <Taccident />

    // <Gal/>
    // <Galselect />
    // <Mycom />
    // <MyForm />
    <BrowserRouter>
      {/* //   <RouterMain /> */}
      <Wmain />
    </BrowserRouter>

  );
}

export default App;
