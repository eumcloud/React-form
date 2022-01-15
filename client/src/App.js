import React    from 'react';
import CssBaseline             from '@material-ui/core/CssBaseline';
import Container               from '@material-ui/core/Container';
import Footer                  from './components/main/Footer';
import Router                  from './Router';
import {Provider}              from './context';
// import Product2 from "./containers/product/Product2";
// import BoardRoute from './routes/board/BoardRoute';


function App() {
  return (
  
       <Provider>
        <div className="App">
          <CssBaseline />
                <Container>                         
                  <main>
                    <Router />
                  </main> 
              </Container>
            <Footer />
            {/* <BoardRoute /> */}
          </div>
        </Provider>
   
  );
}

export default App;
