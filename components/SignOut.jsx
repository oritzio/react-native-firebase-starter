import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";

function SignOut({user}) {

  const userSignOut = async () => {
    try {
      await signOut(auth);
    } catch(error) {
      console.log(error.message);
    }
  }

  return(
    <View style={styles.page}>
      { user &&  
        <View style={styles.formContainer}>
          <Text style={styles.label}>Hi, {user.email}</Text> 
          <Text style={styles.heading}>Sign Out</Text>
          <View style={styles.formContainer}>
            <TouchableOpacity onPress={userSignOut} style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
      { !user &&
        <View style={styles.formContainer}>
          <Text>User signed out successfully, consider to add a redirection after the signOut function.</Text>
        </View>
      }
    </View>
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
    marginBottom: 20,
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


export default SignOut;