import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase';

function SignUp({user, setUser}) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, username, password);
    } catch(error) {
      console.log(error.message);
    }
  }

  const userSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch(error) {
      console.log(error.message);
    }
  }

  return(
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.page}>
        { user && 
        <View style={styles.formContainer}>
          <Text style={styles.userMsg}>Hi, {user.email}</Text> 
          <TouchableOpacity onPress={userSignOut} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        }
        { !user && 
        <>
          <Text style={styles.heading}>Sign Up</Text>
          <View style={styles.formContainer}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setUsername(val)}
              value={username}
              autoCapitalize="none"              
            />
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={(val) => setPassword(val)}
              value={password}
              secureTextEntry
            />
            <TouchableOpacity onPress={userSignUp} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.label}>Already have an account?</Text>
            <Text style={styles.alternativeButton}>Sign In</Text>
          </View>
        </>
        }
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  heading: {
    fontSize: 40,
    marginBottom: 20
  },
  formContainer: {
    width: '75%',
    display: 'flex',
    alignItems: 'center'
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    opacity: 0.5
  },
  input: {
    fontSize: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    width: '100%',
    textTransform: 'lowercase',
    margin: 8,
    padding: 12,
    borderRadius: 6
  },
  submitButton: {
    backgroundColor: 'black',
    width: '100%',
    padding: 14,
    borderRadius: 6,
    marginTop: 10,
    marginBottom: 20
  },
  submitButtonText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  },
  alternativeButton: {
    marginTop: 8
  }
});


export default SignUp;