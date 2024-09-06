"use client";
import { useRouter } from 'next/navigation';
import styles from './styles.module.css'
import { useEffect } from 'react';
import axios from 'axios';
import getCookie from '../../utils/getCookie';

export default function Landing() {
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get('http://localhost:8000/api/users/check-auth/', { withCredentials: true, headers: {
          Authorization: `Bearer ${getCookie('access-token')}`
        } });
        const data = res.data;

        const authStatus = data.authenticated;

        if (authStatus) {
          router.push('/chats');
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        router.push('/login')
      }
    };

    checkAuth();
  }, [router]);


  return (
    <main className="w-full flex items-center justify-center">
      <span className={styles.loader}></span>
    </main>
  );
}
