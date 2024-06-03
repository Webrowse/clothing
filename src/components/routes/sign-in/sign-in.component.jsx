
import { signInWithGoogleProvider } from '../../../utils/firebase/firebas.utils';

const SignIn = () => {
    const logGoogleUser = async () => {
        const response = await signInWithGoogleProvider();
        console.log(response);
    }
    return (
        <div>
            <h1>
            Sign-In page
            </h1>
            <button style={{ background: 'yellow', 
            padding: 10, marginLeft: 10, 
            borderBlockColor: 'orange',
            borderRadius: 12 }} onClick={logGoogleUser}>
                Sign In with Google Popup
            </button>
        </div>
    )
}

export default SignIn;