import React, { useState, useEffect, useContext, createContext } from 'react';
import { MOCK_CURRENT_DASH_LIST, MOCK_OPEN_DASH_LIST, MOCK_USER_CONFIG_DATA, MOCK_USER_LIST } from '../views/dash_home/overviewMockData';

const MockBackendContext = createContext({});

const useMockBackend = () => {
    const context = useContext(MockBackendContext);
    if (!context) {
        throw new Error('useMockBackend must be used within a MockBackendProvider');
    }
    return context;
};

const useQuery = (queryFn, dependencies = []) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    const refetch = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await queryFn();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      refetch();
    }, dependencies);
  
    return { data, loading, error, refetch };
  };
  
  // Custom hook for mutations
  const useMutation = (mutationFn) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const mutate = async (...args) => {
      setLoading(true);
      setError(null);
      try {
        const result = await mutationFn(...args);
        setLoading(false);
        return result;
      } catch (err) {
        setError(err);
        setLoading(false);
        throw err;
      }
    };
  
    return { mutate, loading, error };
  };

  // Mock Backend Provider
export const MockBackendProvider = ({ children }) => {
    const [users, setUsers] = useState(MOCK_USER_LIST);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [posts, setPosts] = useState();
    const [dashes, setDashes] = useState([
        ...MOCK_CURRENT_DASH_LIST, 
        ...MOCK_OPEN_DASH_LIST
    ]);

    const [loading, setLoading] = useState({});
    const [errors, setErrors] = useState({});
  
    // Simulate network delay
    const simulateDelay = (ms = 500) => new Promise(resolve => setTimeout(resolve, ms));
  
    // Generic error handler
    const handleError = (operation: any, error: any) => {
      setErrors(prev => ({ ...prev, [operation]: error.message }));
      setTimeout(() => {
        setErrors(prev => ({ ...prev, [operation]: null }));
      }, 3000);
    };

    const authAPI = {
      login: async () => {
        setIsAuthenticated(true);
        const SESSION_ID = 1234567;
        // TODO: determine return on login
        return SESSION_ID;
      },
      logout: async () => {
        setIsAuthenticated(false);
        // TODO: determine return on logout
        return null;
      }
    };

    // TODO: what should this consist of data-wise?
    // a. some minified data set
    // b. ids that point to data sets (ex. list of current dashes) 
    const userDataAPI = {
      getUserConfigData: async () => {
        return MOCK_USER_CONFIG_DATA
      }
    };

    const dashesAPI = {
      getDashes: async () => {
        setLoading(prev => ({ ...prev, dashes: true }));
        try {
          await simulateDelay();
          setLoading(prev => ({ ...prev, dashes: false }));
          return dashes;
        } catch (error) {
          handleError('dashes', error);
          setLoading(prev => ({ ...prev, dashes: false }));
          throw error;
        }
      }
    };

    // Users API
    const usersAPI = {
      getAll: async () => {
        // setLoading(prev => ({ ...prev, users: true }));
        // try {
        //   await simulateDelay();
        //   setLoading(prev => ({ ...prev, users: false }));
        //   return users;
        // } catch (error) {
        //   handleError('users', error);
        //   setLoading(prev => ({ ...prev, users: false }));
        //   throw error;
        // }
      },
  
      getById: async (id) => {
        // setLoading(prev => ({ ...prev, [`user-${id}`]: true }));
        // try {
        //   await simulateDelay(300);
        //   const user = users.find(u => u.id === parseInt(id));
        //   if (!user) throw new Error('User not found');
        //   setLoading(prev => ({ ...prev, [`user-${id}`]: false }));
        //   return user;
        // } catch (error) {
        //   handleError(`user-${id}`, error);
        //   setLoading(prev => ({ ...prev, [`user-${id}`]: false }));
        //   throw error;
        // }
      },
  
      create: async (userData) => {
        // setLoading(prev => ({ ...prev, createUser: true }));
        // try {
        //   await simulateDelay();
        //   const newUser = {
        //     id: Math.max(...users.map(u => u.id)) + 1,
        //     ...userData
        //   };
        //   setUsers(prev => [...prev, newUser]);
        //   setLoading(prev => ({ ...prev, createUser: false }));
        //   return newUser;
        // } catch (error) {
        //   handleError('createUser', error);
        //   setLoading(prev => ({ ...prev, createUser: false }));
        //   throw error;
        // }
      },
  
      update: async (id, userData) => {
        // setLoading(prev => ({ ...prev, updateUser: true }));
        // try {
        //   await simulateDelay();
        //   setUsers(prev => prev.map(user => 
        //     user.id === parseInt(id) ? { ...user, ...userData } : user
        //   ));
        //   setLoading(prev => ({ ...prev, updateUser: false }));
        //   return { id: parseInt(id), ...userData };
        // } catch (error) {
        //   handleError('updateUser', error);
        //   setLoading(prev => ({ ...prev, updateUser: false }));
        //   throw error;
        // }
      },
  
      delete: async (id) => {
        // setLoading(prev => ({ ...prev, deleteUser: true }));
        // try {
        //   await simulateDelay();
        //   setUsers(prev => prev.filter(user => user.id !== parseInt(id)));
        //   setLoading(prev => ({ ...prev, deleteUser: false }));
        //   return { success: true };
        // } catch (error) {
        //   handleError('deleteUser', error);
        //   setLoading(prev => ({ ...prev, deleteUser: false }));
        //   throw error;
        // }
      }
    };
  
    const value = {
      users,
      loading,
      errors,
      api: { users: usersAPI }
    };
  
    return (
      <MockBackendContext.Provider value={value}>
        {children}
      </MockBackendContext.Provider>
    );
  };