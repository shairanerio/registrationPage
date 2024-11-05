import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { Provider as PaperProvider, TextInput, Button, Divider } from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function App() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <PaperProvider>
      <View style={styles.container}>
        <StatusBar style="auto" />

        <View style={styles.regSection}>
          <Text style={styles.regTitle}>Sign Up</Text>
        </View>

        <TextInput label="Full Name" value={fullName} onChangeText={text => setFullName(text)} style={styles.input}/>

        <TextInput label="Email Address" value={email} onChangeText={text => setEmail(text)} style={styles.input} keyboardType="email-address"/>

        <TextInput label="Password" value={password} onChangeText={text => setPassword(text)} style={styles.input} secureTextEntry/>

        <Button mode="contained" style={styles.signUpButton} onPress={() => console.log('Sign Up pressed')} labelStyle={styles.signUpButtonText}>Sign Up</Button>

        <View style={styles.haveAccSection}>
          <Text style={styles.haveAccText}>Already have an account?</Text>
          <Button onPress={() => console.log('Login')} labelStyle={styles.logInButtonText}>LOGIN</Button>
        </View>

        <View style={styles.orSection}>
          <Divider style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <Divider style={styles.line} />
        </View>

        <Button icon={() => <FontAwesome name="google" size={24} style={styles.icon} />} mode="outlined" style={styles.socialButton} labelStyle={styles.socialButtonText} onPress={() => console.log('Sign Up with Google pressed')}>Sign Up with Google</Button>

        <Button icon={() => <FontAwesome name="facebook" size={24} style={styles.icon} />} mode="outlined" style={styles.socialButton} labelStyle={styles.socialButtonText} onPress={() => console.log('Sign Up with Facebook pressed')}>Sign Up with Facebook</Button>
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8ecae6',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  regSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  regTitle: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  input: {
    marginBottom: 10,
    backgroundColor: 'transparent',
  },
  signUpButton: {
    marginVertical: 20,
    backgroundColor: '#AB644B',
    borderRadius: 10,
  },
  signUpButtonText: {
    color: '#fff',
  },
  haveAccSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  haveAccText: {
    fontSize: 16,
    color: '#696969',
    marginRight: -8,
  },
  logInButtonText: {
    fontSize: 16,
    color: '#AB644B',
    fontWeight: 'bold',
    marginTop: 12,
  },
  orSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
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
  socialButton: {
    marginVertical: 5,
    borderColor: '#AB644B',
    borderRadius: 10,
  },
  socialButtonText: {
    color: '#AB644B',
  },
  icon: {
    color: '#AB644B',
  },
});
