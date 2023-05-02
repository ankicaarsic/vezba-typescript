import { Link } from 'react-router-dom'
import { auth } from '../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { signOut } from 'firebase/auth'

export function Navbar() {
    const [user]=useAuthState(auth);

    const signUserOut = async() => {
        await signOut(auth)
    }
    return (
        <div>
            <Link to="/">Home</Link>
            {!user ? <Link to="/login">Login</Link> : <Link to='/createpost'>Create post</Link> }

            <div className='user'>
                { user && (
                     <>
                     <p>{user?.displayName}</p>
                     <img src={user?.photoURL   || ''} width='100' height='100'></img>
                     <button onClick={signUserOut}>Sing Out</button>
                  </>

               )}  
            </div>
        </div>
    )
}