/* eslint-disable react/prop-types */
import { isAuth } from '../../services/auth.services';
import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function RequireAuth({ children }) {
  const [authenticated, setAuthenticated] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await isAuth();
        if (response.status === 200) {
          setAuthenticated(true);
        } else {
          setAuthenticated(false);
        }
        console.log(response.data.msg);
      } catch (error) {
        setAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  if (!authenticated) {
    return <Navigate to={"/api/login/"} />;
  }

  return children;
}

export default RequireAuth;
