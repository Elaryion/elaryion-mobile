import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Link, useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();

  const handleLogin = () => {
    router.push('/onboarding/question1' as const);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image 
          source={require('../assets/logo.png')} 
          style={styles.logo}
        />
        <Text style={styles.title}>Elaryon</Text>
        <Text style={styles.subtitle}>The Glow you seek is one treatment away</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.welcomeText}>Your skin journey start here!</Text>

        <Pressable style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.buttonText}>Log in with Apple</Text>
        </Pressable>

        <Pressable style={[styles.loginButton, styles.emailButton]} onPress={handleLogin}>
          <Text style={[styles.buttonText, styles.emailButtonText]}>Log in with Email</Text>
        </Pressable>

        <Pressable style={[styles.loginButton, styles.googleButton]} onPress={handleLogin}>
          <Text style={[styles.buttonText, styles.emailButtonText]}>Log in with Google</Text>
        </Pressable>

        <View style={styles.createAccountContainer}>
          <Text style={styles.orText}>Or </Text>
          <Link href={'/signup' as const} style={styles.createAccountLink}>
            <Text style={styles.createAccountText}>Create new account</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    textAlign: 'center',
    color: '#666',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 30,
    textAlign: 'center',
  },
  loginButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 16,
    borderRadius: 30,
    marginBottom: 16,
  },
  emailButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  googleButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
    textAlign: 'center',
  },
  emailButtonText: {
    color: '#000',
  },
  createAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  orText: {
    color: '#666',
  },
  createAccountLink: {
    marginLeft: 4,
  },
  createAccountText: {
    color: '#000',
    textDecorationLine: 'underline',
  },
}); 