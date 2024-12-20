import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Question3() {
  const router = useRouter();
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const skinTypes = [
    { id: 'dry', label: 'Dry', image: require('../../assets/skin-dry.png') },
    { id: 'oily', label: 'Oily', image: require('../../assets/skin-oily.png') },
    { id: 'normal', label: 'Normal', image: require('../../assets/skin-normal.png') },
    { id: 'combination', label: 'Combination', image: require('../../assets/skin-combination.png') },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: '36%' }]} />
      </View>

      <Text style={styles.title}>What's your skin type?</Text>
      <Text style={styles.subtitle}>Identifying your skin type allows us to offer more effective recommendations.</Text>

      <View style={styles.optionsGrid}>
        {skinTypes.map((type) => (
          <Pressable 
            key={type.id}
            style={[
              styles.option,
              selectedType === type.id && styles.selectedOption
            ]}
            onPress={() => {
              setSelectedType(type.id);
              router.push('/onboarding/question4');
            }}
          >
            <View style={styles.imageContainer}>
              <Image source={type.image} style={styles.skinImage} />
              <Text style={styles.optionText}>{type.label}</Text>
            </View>
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
  optionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 40,
  },
  option: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    height: '100%',
    borderRadius: 70,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  skinImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  optionText: {
    position: 'absolute',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedOption: {
    borderWidth: 2,
    borderColor: '#1a1a2e',
    borderRadius: 70,
  },
}); 