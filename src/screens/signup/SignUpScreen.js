import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {AuthContext} from '../../context/AuthContext';

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('pistol');

  const {signUp, isLoading} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.inputContainer}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              padding: 15,
              letterSpacing: 2,
            }}>
            Sign up Page
          </Text>
          <TextInput
            placeholder="Enter e-mail"
            style={styles.input}
            value={email}
            onChangeText={() => {
              setEmail();
            }}
          />
          <TextInput
            placeholder="Enter password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={() => {
              setPassword();
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => signUp(email, password)}>
          
          {isLoading ? (<ActivityIndicator size="small" color="#262626" />) : (<Text>Sign up</Text>)}
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  inputContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  input: {
    width: '100%',
    paddingVertical: 8,
    paddingHorizontal: 8,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 10,
    borderColor: 'gray',
  },

  button: {
    backgroundColor: 'lightblue',
    height: 35,
    marginHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 35,
  },
});
