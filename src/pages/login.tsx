import { auth, provider} from '../config/firebase'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
export function LogIn() { 
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
       const result = await signInWithPopup(auth, provider)
       console.log(result)

    }
    return (
        <div>
          <p> Sign in with Google to countine</p>
          <button onClick={signInWithGoogle}>Sign in with google</button>
        </div>
    )
}