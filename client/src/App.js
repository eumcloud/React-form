import React                   from 'react';
import CssBaseline             from '@material-ui/core/CssBaseline';

import Container               from '@material-ui/core/Container';
import Footer                  from './components/main/Footer';

import Router from './Router';

function App() {
  return (
<<<<<<< HEAD
  
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
   
=======
     <div className="App">
       <CssBaseline />
            <Container>                         
              <main>
                <Router />
              </main> 
          </Container>
        <Footer />
      </div>
>>>>>>> baa8dabcfb04fefdef0f38d4bdac1299b30092e7
  );
}

export default App;
