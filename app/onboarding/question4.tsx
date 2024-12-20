import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Question4() {
  const router = useRouter();
  const [selectedTone, setSelectedTone] = useState<string | null>(null);

  const skinTones = [
    { id: 'light', label: 'Light' },
    { id: 'medium', label: 'Medium' },
    { id: 'tan', label: 'Tan' },
    { id: 'dark', label: 'Dark' }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '48%' }]} />
      </View>

      <Text style={styles.title}>What's your skin tone?</Text>
      <Text style={styles.subtitle}>Identifying your skin tone allows us to offer more effective recommendations</Text>

      <View style={styles.optionsContainer}>
        {skinTones.map((tone) => (
          <Pressable 
            key={tone.id}
            style={[
              styles.option,
              selectedTone === tone.id && styles.selectedOption
            ]}
            onPress={() => {
              setSelectedTone(tone.id);
              router.push('/onboarding/question5');
            }}
          >
            <Text style={[
              styles.optionText,
              selectedTone === tone.id && styles.selectedOptionText
            ]}>
              {tone.label}
            </Text>
          </Pressable>
        ))}
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
    paddingHorizontal: 20,
    marginTop: 20,
  },
  option: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
  },
  selectedOption: {
    backgroundColor: '#1a1a2e',
  },
  optionText: {
    fontSize: 16,
    color: '#1a1a2e',
    textAlign: 'center',
    fontWeight: '500',
  },
  selectedOptionText: {
    color: '#fff',
    fontWeight: 'bold',
  },
}); 