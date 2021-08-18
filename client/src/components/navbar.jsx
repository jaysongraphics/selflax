import logo from '../images/LOGOGFINALBLACK.png'
import {useHistory, Link} from 'react-router-dom'
import swal from 'sweetalert';

function NavBar({currentUser, setCurrentUser,}) {

// console.log(currentUser);

const history = useHistory();

    function logOut(){
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        setCurrentUser(null)
         history.push('/')
    //         swal(`See you soon${currentUser.first_name} ${currentUser.last_name}!`, {
    //         buttons: false,
    //         timer: 2000,
    // });
}
    // console.log(darkmode);

    return (
        <div>
            <nav className="navbar-bar">
            <Link to='/'>
                <div className="logo">
                  <img className ="logo-image" alt="logo"src={logo}/>
                    {/* <h2 className="logo-text">Selflax</h2> */}
                </div>
            </Link>
            {currentUser ?     
            <div className="current-user">
                <img className="ui avatar image" alt="useerr"style={{width: 36, height: 36}}src={currentUser.image}/><p className="useronluine">Hi, {currentUser.username}!</p>
             </div> : null }
                {currentUser ? (
            <>
                {/* <ul className="navnav"> */}
                    <Link to='/'> 
                        <a className="a-buttons">Home</a>
                    </Link>

                    <Link to='/profile'>
                        <a className="a-buttons">Profile</a>
                    </Link>

                    <Link to='/therapists'>
                        <a className="a-buttons">Therapists</a>
                    </Link>


                    <Link to='/chat'>
                        <a className="a-buttons">Chat</a>
                    </Link>

                    <Link to="/">
                    <button onClick={logOut} id="nav-button" className='button is-danger is-rounded'>Sign Out
                    </button>
                    </Link> 
            </>
            ):(
             <>
                {/* <Link to='/'> 
                    <a className="log-out-a-buttons" id="a-button">Home</a>
                 </Link> */}
                {/* </ul> */}

                    <div className="nav-buttons">
                    <Link to='/signin'>
                        <button id="nav-button-in-out"className='button is-danger is-rounded'>Sign In</button>
                    </Link>

                    <Link to='/signup'>
                        <button id="nav-button-in-out"className='button is-danger is-rounded'>Sign Up</button>
                    </Link> 
                </div>
             </>)}
        </nav>
    </div>
  )
}




export default NavBar;
