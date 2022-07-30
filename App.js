import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

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
    <View style={styles.container}>
      <SignUp user={currentUser} setUser={setCurrentUser} />
      {/* <SignIn user={currentUser} setUser={setCurrentUser} /> */}
      {/* <SignOut user={currentUser} /> */}
    </View>
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
