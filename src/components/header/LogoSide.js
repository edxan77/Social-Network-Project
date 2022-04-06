import {Link} from "react-router-dom";


const LogoSide =(props)=> {
    return (
        <>
            <div className={props.className}>
                <Link to={props.path} className={props.logoClass}>{props.name}</Link>
            </div>
        </>
    );
}

export default LogoSide;