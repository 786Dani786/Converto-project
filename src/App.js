 
import React, {useEffect} from 'react'; 
import Header from './components/Header/Header'; 
import Footer from "./components/Footer"
import {  Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import ROUTES from './ROUTES';
import { Box } from '@mui/material'; 
import { useLocation } from 'react-router-dom';





function App() { 
  const ScrollToTop = (props) => {
    const location = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
    return <>{props.children}</>
  };
  
 
  return ( 
    <ScrollToTop> 
      <Header /> 
       <Box component='div' >
       <Switch>
            {ROUTES.map((item, index) => 
              <Route path={item.path} component = {item.component} key = {index} exact />
            )}
        </Switch> 
       </Box>
      <Footer /> 
    </ScrollToTop>
  );
}

export default App;
