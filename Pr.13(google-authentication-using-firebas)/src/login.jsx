import { useEffect } from 'react';
import { auth, provider } from '../firebase';
import { signInWithPopup } from 'firebase/auth';

function Login() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User Info:', user);
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
  }, []);

  return (
    <div>
      <h1>Login with Google</h1>
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
}

export default Login;
