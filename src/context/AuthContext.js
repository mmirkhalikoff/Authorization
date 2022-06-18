import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';
import { requests } from '../api/requests';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [userDetails, setUserDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSplashLoading, setIsSplashLoading] = useState(true);

  const signUp = async (email, password) => {
    setIsLoading(true)
    try {
      let res = await requests.auth.signUp({
        email: email,
        password: password,
      });

      if (res) {
        let userInfo = res.data;
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        setUserDetails(userInfo)
        setIsLoading(false)
        console.log(userInfo);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }

  const login = async (email, password) => {
    setIsLoading(true)
    try {
      let res = await requests.auth.login({
        email: email,
        password: password,
      });

      if (res) {
        let userInfo = res.data;
        await AsyncStorage.setItem('userInfo', JSON.stringify(userInfo))
        setUserDetails(userInfo)
        setIsLoading(false)
        console.log(userInfo);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false)
    }
  }

  const logout = async () => {
    setIsLoading(true)
    try {
      let userInfo = await AsyncStorage.removeItem('userInfo');
      setUserDetails(userInfo)
      setIsLoading(false)
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false)
  }


  const isLoggedIn = async () => {
    // setIsSplashLoading(true);
    try {
      let userInfo = await AsyncStorage.getItem('userInfo');
      userInfo = JSON.parse(userInfo)

      if (userInfo) {
        setUserDetails(userInfo)
      }
      setIsSplashLoading(false);
    } catch (error) {
      console.log(error);
      setIsSplashLoading(false);
    }
  }

  useEffect(() => {
    setTimeout(async () => { isLoggedIn(); }, 200);

  }, [])



  return (
    <AuthContext.Provider value={{ login, isLoading, userDetails, isSplashLoading, logout, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};
