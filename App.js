import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useState} from 'react';

export default function App() {
    const [isChecked, setIsChecked] = useState(false);
  
  const toggleCheck = () => {
    setIsChecked(!isChecked);
  }
  
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />

      <View style={styles.regSection}>
        <Text style={[styles.regTitle]}>Registration Form</Text>
      </View>

      <View style={styles.nameSection}>
        <View style={styles.nameText}>
          <Text>Full Name:</Text>
          <TextInput style={styles.input} placeholder="Full Name" keyboardType="default" autoCapitalize="none"></TextInput>
        </View>
      </View>

      <View style={styles.emAddSection}>
        <View style={styles.emAddText}>
          <Text>Email Address:</Text>
          <TextInput style={styles.input} placeholder='Enter email' keyboardType='email-address' autoCapitalize='none'></TextInput>
        </View>
      </View>

      <View style={styles.passSection}>
        <View style={styles.passText}>
          <Text>Password:</Text>
          <TextInput style={styles.input} placeholder='Enter password' secureTextEntry={true} autoCapitalize='none'></TextInput>
        </View>
      </View>

      <TouchableOpacity style={styles.signUpButton} onPress={() => console.log('Sign Up pressed')}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.haveAccSection}>
        <Text style={styles.haveAccText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => console.log('Already Have an Account pressed')}>
            <Text style={styles.LogInButtonText}>LOGIN</Text>
          </TouchableOpacity>
      </View>

      <View style={styles.orSection}>
        <View style={styles.line}></View>
        <Text style={[styles.orText]}>OR</Text>
        <View style={styles.line}></View>
      </View>

      <TouchableOpacity style={styles.googleButton} onPress={() => console.log('Login with Google pressed')}>
        <FontAwesome name="google" size={24} color="#AB644B" />
        <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton} onPress={() => console.log('Login with Facebook pressed')}>
        <FontAwesome name="facebook" size={24} color="#AB644B" />
        <Text style={styles.googleButtonText}>Sign Up with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
  },
  regSection: {
    alignItems: 'center',
    marginTop: 75,
  },
  regTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  nameText: {
    marginLeft: 25,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingRight: 5,
    width: 307,
    marginTop: 10,
    borderRadius: 10,
  },
  emAddText: {
    marginLeft: 25,
    marginTop: 10,
  },
  passText: {
    marginLeft: 25,
    marginTop: 10,
  },
  signUpButton: {
    padding: 15,
    marginTop: 35,
    backgroundColor: '#AB644B',
    borderRadius: 10,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 53,
  },
  signUpButtonText: {
    color: '#fff',
  },
  haveAccButton: {
    marginLeft: 100,
    marginTop: 8,
  },
  haveAccButtonText: {
    color: '#696969',
  },
  LogInButtonText: {
    fontSize: 16,
    color: '#AB644B',
    fontWeight: 'bold',
  },
  orSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginTop: 20,
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: 'black',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'black',
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 5,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#AB644B',
    borderRadius: 5,
    width: 250,
    alignSelf: 'center',
  },
  googleButtonText: {
    marginLeft: 10,
    color: '#AB644B',
    fontSize: 16,
  },
  facebookButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#AB644B',
    borderRadius: 5,
    width: 250,
    alignSelf: 'center',
  },
  facebookButtonText: {
    marginLeft: 10,
    color: '#AB644B',
    fontSize: 16,
  },
  haveAccSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  haveAccText: {
    fontSize: 16,
    color: '#696969',
    marginRight: 2,
  },
});