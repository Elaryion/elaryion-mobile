import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Question1() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '12%' }]} />
      </View>

      <Text style={styles.title}>What's your gender?</Text>
      <Text style={styles.subtitle}>This will help us adjust your routine steps based on your gender</Text>

      <View style={styles.optionsContainer}>
        <View style={styles.optionsGrid}>
          <Pressable 
            style={styles.genderOption}
            onPress={() => router.push('/onboarding/question2')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="female" size={32} color="#1a1a2e" />
            </View>
            <Text style={styles.optionText}>Female</Text>
          </Pressable>

          <Pressable 
            style={styles.genderOption}
            onPress={() => router.push('/onboarding/question2')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="male" size={32} color="#1a1a2e" />
            </View>
            <Text style={styles.optionText}>Male</Text>
          </Pressable>

          <Pressable 
            style={styles.genderOption}
            onPress={() => router.push('/onboarding/question2')}
          >
            <View style={styles.iconContainer}>
              <Ionicons name="male-female" size={32} color="#1a1a2e" />
            </View>
            <Text style={styles.optionText}>Non-binary</Text>
          </Pressable>
        </View>

        <Pressable 
          onPress={() => router.push('/onboarding/question2')}
        >
          <Text style={styles.preferNotText}>I prefer not to say</Text>
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
    fontSize: 28,
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -80,
  },
  optionsGrid: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
    gap: 20,
  },
  genderOption: {
    alignItems: 'center',
    width: 100,
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#f5f5f5',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#1a1a2e',
    textAlign: 'center',
  },
  preferNotText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginTop: 20,
  },
}); 