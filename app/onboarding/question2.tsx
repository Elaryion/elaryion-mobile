import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { useState, useRef } from 'react';

export default function Question2() {
  const router = useRouter();
  const [selectedAge, setSelectedAge] = useState(24);
  const scrollViewRef = useRef<ScrollView>(null);

  const ages = Array.from({ length: 83 }, (_, i) => i + 18); // 18-100 yaş arası

  const handleScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    const selectedIndex = Math.round(y / 50);
    if (selectedIndex >= 0 && selectedIndex < ages.length) {
      setSelectedAge(ages[selectedIndex]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '24%' }]} />
      </View>

      <Text style={styles.title}>How old are you?</Text>
      <Text style={styles.subtitle}>This will help us personalize your product suggestions based on your age group.</Text>

      <View style={styles.pickerContainer}>
        <View style={styles.pickerOverlay}>
          <View style={styles.selectedLine} />
        </View>
        
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          snapToInterval={50}
          decelerationRate="fast"
          onScroll={handleScroll}
          onMomentumScrollEnd={handleScroll}
          style={styles.picker}
          contentContainerStyle={styles.pickerContent}
        >
          {ages.map((age) => (
            <View key={age} style={styles.ageItem}>
              <Text style={[
                styles.ageText,
                age === selectedAge && styles.selectedAgeText
              ]}>
                {age}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <Pressable 
        style={styles.button}
        onPress={() => router.push('/onboarding/question3')}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </Pressable>
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
  pickerContainer: {
    height: 150,
    position: 'relative',
    marginVertical: 40,
  },
  pickerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    pointerEvents: 'none',
  },
  selectedLine: {
    width: '100%',
    height: 50,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
  },
  picker: {
    flex: 1,
  },
  pickerContent: {
    paddingVertical: 50,
  },
  ageItem: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ageText: {
    fontSize: 24,
    color: '#999',
    fontWeight: '400',
  },
  selectedAgeText: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  button: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 16,
    borderRadius: 12,
    marginTop: 'auto',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 