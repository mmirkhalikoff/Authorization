import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { requests } from '../../api/requests';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');


  const { isLoading, login } = useContext(AuthContext);

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
            Sign in Page
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
          onPress={() => login(email, password)}>
          {isLoading ? (<ActivityIndicator size="small" color="#262626" />) : (<Text>Sign in</Text>)}


        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 20,
            marginHorizontal: 20,
          }}>
          <Text style={{ color: 'gray' }}>Don't have an account ?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={{ paddingLeft: 10 }}>
            <Text style={{ fontSize: 14 }}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SignInScreen;

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
