import { useEffect } from 'react';
import { useRouter } from 'next/router';

function HomePage() {
  const router = useRouter();

  // Redirect to the '/dashboard' page when the component mounts
  useEffect(() => {
    router.push('/dashboard');
  }, []); // The empty dependency array ensures this effect runs only once when the component mounts

  return <div>Redirecting to Dashboard...</div>;
}

export default HomePage;