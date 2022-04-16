import {Link} from 'react-router-dom';
function Welcome(){
    return(
        <>
        <h1>Welcome</h1>
        <Link to='/login'>Login</Link>
        </>
    )
}
export default Welcome;