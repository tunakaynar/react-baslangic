import logo from './logo.svg';
import "./style.css";
import {Title} from "./components.js";
import Bootstrap from './bootstrap';
import "./tailwind.css";
import Tailwind from './Tailwind';

function App() {
  return (
    <div className="App">
      <Title>{process.env.NODE_ENV}</Title> {/* hangi modda olduğumuzu gösterir  mesela sadece production veya developer modunda gösterebiliriz*/}
      {/*npx serve -s build ile production ortamına geçeriz. npm run build ile de developer ortamına geçeriz. npm start ile projeyi başlat*/}
      <Title theme={'dark'}>{process.env.NODE_ENV}</Title>
      <p>
        {process.env.REACT_APP_API_URL}
      </p>
      {process.env.NODE_ENV === `production` && (
        <>
          <img src='/logo192.png' alt=''/>
          <img src={logo} alt=''/>
        </>
      )}
      <Bootstrap/>
      <Tailwind/>
    </div>
  );
}

export default App;
