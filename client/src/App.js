import React                   from 'react';
import CssBaseline             from '@material-ui/core/CssBaseline';

import Container               from '@material-ui/core/Container';
import Footer                  from './components/main/Footer';

import Router from './Router';

function App() {
  return (
     <div className="App">
       <CssBaseline />
            <Container>                         
              <main>
                <Router />
              </main> 
          </Container>
        <Footer />
      </div>
  );
}

export default App;
