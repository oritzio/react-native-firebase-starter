import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

const Stack = createNativeStackNavigator();

export default function App() {

  const [currentUser, setCurrentUser] = useState(null);

  console.log('currentUser', currentUser?.email)

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser(user);
      } else {
        console.log('User signed out');
      }
    })

  }, [currentUser])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}} />
        <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
