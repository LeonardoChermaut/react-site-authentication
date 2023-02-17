import { useState, useEffect } from "react";
import { fetchLocalApi, token} from "./index";

export const userContext = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const token = localStorage.getItem("token");
    const fetchUser = async () => {
      try {
        const { data: user } = await fetchLocalApi.get(`/api/user/context`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(user);
      } catch (error) {
        console.error('Failed to fetch user by context', error);
      }
    };
    fetchUser();
  }, [token]);

  return user;
};
