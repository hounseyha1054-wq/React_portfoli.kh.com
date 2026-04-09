
import Layoutpage from "./pages/layoutpage.jsx";
import { BrowserRouter } from 'react-router-dom';
import Routerpage from "./routes/index.jsx";
function App(){
  return(
    <div>
       <BrowserRouter>
       <Layoutpage/>
       <Routerpage/>

       </BrowserRouter>
      
    </div>
  )
}
export default App;