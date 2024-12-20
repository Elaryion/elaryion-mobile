import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Question7() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '100%' }]} />
      </View>

      <Text style={styles.title}>What are your goals?</Text>
      <Text style={styles.subtitle}>Choose as many as you wish. This will help us improve the app and your experience</Text>

      <View style={styles.optionsContainer}>
        <Pressable 
          style={styles.option}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Text style={styles.optionText}>Fix the concerns of my skin</Text>
        </Pressable>

        <Pressable 
          style={styles.option}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Text style={styles.optionText}>Discover skincare products</Text>
        </Pressable>

        <Pressable 
          style={styles.option}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Text style={styles.optionText}>Educate myself about skincare</Text>
        </Pressable>

        <Pressable 
          style={styles.option}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Text style={styles.optionText}>Learn more about my skin</Text>
        </Pressable>

        <Pressable 
          style={styles.option}
          onPress={() => router.push('/(tabs)/home')}
        >
          <Text style={styles.optionText}>Apply home treatments</Text>
        </Pressable>
      </View>

      <Pressable 
        style={styles.button}
        onPress={() => router.push('/(tabs)/home')}
      >
        <Text style={styles.buttonText}>Finish</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#eee',
    marginBottom: 40,
  },
  progress: {
    height: '100%',
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
  },
  optionsContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  option: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 30,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 