import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const HomeScreen = () => {

  const { isLoading, userDetails, logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          {isLoading ? (<Spinner
            visible={true}
            // textContent={'Loading...'}
            // textStyle={{color: colors.caribbeanGreen}}
            color='#262626'
            overlayColor='#fff'
            animation="fade"
          />) : (
            <>
            <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              padding: 15,
              letterSpacing: 2,
              textAlign: 'center',
            }}>
            Home Page
          </Text>

          {isLoading ?
            (<ActivityIndicator size="small" color="#262626" />)
            : (<View>
              <TouchableOpacity
                onPress={() => logout()}
                style={{
                  backgroundColor: 'red',
                  width: 180,
                  paddingVertical: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                }}>
                <Text style={{ fontSize: 16, fontWeight: '500', color: 'white' }}>
                  Log out
                </Text>
              </TouchableOpacity>
            </View>)}</>
          )}
          
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
