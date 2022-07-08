
import {ThemeProvider, CssBaseline} from '@mui/material';
import React from 'react';
import './App.css';
import  Template  from './components/Template/TemplateComponent';
import theme from './Themes/main';



// eslint-disable-next-line @typescript-eslint/no-unused-vars



function App() {
  return (
    <div data-testid="App1" className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Template />
      </ThemeProvider>


    </div>
  );
}

export default App;





































// import {ThemeProvider, CssBaseline} from '@mui/material';
// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// // import './App.css';
// // import LibraryTemplate from './components/Template/LibraryTemplate';
// // import MyLibrary from './components/pages/MyLibrary';
//  import  Template  from './components/Template/TemplateComponent';
// import theme from './Themes/main';


// function App() {
//   return (
//     <Router >
//         <div  className="App">
//           <ThemeProvider theme={theme}>
//           <CssBaseline />
//             <Template />
//             {/* <LibraryTemplate/> */}
//           </ThemeProvider>

//         </div>
      
//     </Router>
//   );
// }

// export default App;





