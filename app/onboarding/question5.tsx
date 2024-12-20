import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';

export default function Question5() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '70%' }]} />
      </View>

      <Text style={styles.title}>What are your concerns?</Text>
      <Text style={styles.subtitle}>Identifying your concerns will help us to offer more effective recommendations</Text>

      <View style={styles.optionsContainer}>
        <Pressable 
          style={styles.option}
          onPress={() => router.push('/onboarding/question6')}
        >
          <Text style={styles.optionText}>Acne</Text>
        </Pressable>

        <Pressable 
          style={styles.option}
          onPress={() => router.push('/onboarding/question6')}
        >
          <Text style={styles.optionText}>Dark Spots</Text>
        </Pressable>

        <Pressable 
          style={styles.option}
          onPress={() => router.push('/onboarding/question6')}
        >
          <Text style={styles.optionText}>Wrinkles</Text>
        </Pressable>

        <Pressable 
          style={styles.option}
          onPress={() => router.push('/onboarding/question6')}
        >
          <Text style={styles.optionText}>Large Pores</Text>
        </Pressable>
      </View>
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