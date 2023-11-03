import './App.css';
import plakat from "./assets/plakat.jpg"
import useWindowDimensions from './useWindowDimensions';

function AppProd() {
    const { height, width } = useWindowDimensions();

    const isMobile = width <= 425;

  return (
    <div style={{ height: window.innerHeight, width: "100%" }} className="app-maintenance-mode">
        {isMobile
            ? <img src={plakat} className="app-maintenance-mode-center" style={{ width: width - 40, maxHeight: height }} />
            : <img src={plakat} className="app-maintenance-mode-center" style={{ maxWidth: width, height: height - 40 }} />
        }
    </div>
  );
}
export default AppProd;