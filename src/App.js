import React         from 'react';
import CssBaseline   from '@material-ui/core/CssBaseline';
import NavigationBar from './components/main/NavigationBar';
import GridLayout    from './containers/main/GridLayout';
import Container     from '@material-ui/core/Container';
import Footer        from './components/main/Footer';


function App() {
  return (
     <div className="App">
       <CssBaseline />
         <NavigationBar />

            <Container>
              <main>
                <GridLayout />
              </main>
            </Container>
            <Footer /></div>
  );
}

export default App;
