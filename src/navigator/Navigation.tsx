import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/home/HomeScreen';
import SignUpScreen from '../screens/signup/SignUpScreen';
import {Routes} from '../router/router';
import SignInScreen from '../screens/signin/SignInScreen';
import {AuthContext} from '../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const {userDetails, isSplashLoading} = useContext(AuthContext);

  return (
    <View style={{flex: 1}}>
      {isSplashLoading ? (
        <Spinner
          visible={true}
          // textContent={'Loading...'}
          // textStyle={{color: colors.caribbeanGreen}}
          color="#262626"
          overlayColor="#fff"
          animation="fade"
        />
      ) : (
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {!userDetails?.token ? (
              <>
                <Stack.Screen name={Routes.SignIn} component={SignInScreen} />
                <Stack.Screen name={Routes.SignUp} component={SignUpScreen} />
              </>
            ) : (
              <Stack.Screen name={Routes.Home} component={HomeScreen} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
