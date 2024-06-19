import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleLogin = () => {
    if (name && email) {
      navigation.navigate('Home', { name, email });
    } else {
      alert('Please enter both name and email');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.hello}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.welcome}>Welcome Back 👋</Text>
      <Text style={styles.subtitle}>Let's log in. Apply to jobs!</Text>
      </View>
     
     
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />

<TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />
      </View>
      

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
<View >
<View style={{flexDirection: 'row', alignItems: 'center'}}>
  <View style={{flex: 1, height: 1, backgroundColor: '#888'}} />
  <View >
    <Text style={{width: 150, textAlign: 'center', color: '#888'}}>Or continue with</Text>
  </View>
  <View style={{flex: 1, height: 1, backgroundColor: '#888'}} />
</View>
</View>
     

      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/cib_apple.png')} style={styles.socialButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/icons_google.png')} style={styles.socialButtonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('../assets/logo-facebook.png')} style={styles.socialButtonImage} />
        </TouchableOpacity>
      </View>

      <View style={styles.register}> 
       <Text>Haven't an account? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:"space-around",
    //alignItems: 'flex-start',    
    padding: 20,
    backgroundColor: '#fff',
    
  },

  hello:{
    marginTop: 100
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#356899',
    marginBottom: 5,
  },
  welcome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D0D26',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#0D0D26',
    marginBottom: 5,
    fontWeight: 400,  
  },
  inputContainer:{
    width: '100%', 
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
  },
  loginButton: {
    width: '100%',
    padding: 15,
    borderRadius: 5,
    backgroundColor: '#356899',
    alignItems: 'center',
    marginBottom: 5,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 14,
    color: '#888',
    marginBottom: 15,
    textAlign: 'center'
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: '#FFFFFF',
  },
  socialButton: {
    width: 50,
    height: 50,
    marginHorizontal: 10,
    
  },
  socialButtonImage: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
    
  },
  register:{
flexDirection: 'row',
justifyContent: 'center'
  },
  registerText: {
    fontSize: 14,
    color: '#007bff',
    textAlign: 'center'
  },
});

export default LoginScreen;