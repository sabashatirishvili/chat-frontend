import { useState, useEffect } from "react";
import axiosInstance from "../utils/axiosInstance";
import getCookie from "../utils/getCookie";

interface UserData {
  id: string;
  username: string;
  email: string;
  profile_picture: string;
  password: string;
}


const useAuthUser = () => {
  const [data, setData] = useState<UserData | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const url = 'http://localhost:8000/api/users/auth-user/'
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(url, {
          headers: {
            Authorization: `Bearer ${getCookie('access-token')}`
          }
        });
        const data = await res.data;

        setData(data)
      } catch (error) {
        setError(error as Error)
      }
    }

    fetchData()
  }, [])

  return {
    data, error
  }
}

export default useAuthUser