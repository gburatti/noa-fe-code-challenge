import App from "../App";
import IPStats from "../components/stats";
import path from "./path";

const Route =()=>{
switch (window.location.pathname) {
    case path.stats:
       return <IPStats/>
    default:
       return <App/>
}
}

export default Route