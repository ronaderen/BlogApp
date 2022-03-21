import { Link } from "react-router-dom";
const NotFound = () => {
    return (  
        <div className="not-found">
            <h2>Sorry 404 man </h2>
            <Link to='/'> going back homeeee</Link>
        </div>
    );
}

export default NotFound;
