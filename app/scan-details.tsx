import { View, Text, StyleSheet, Image, Pressable, Platform } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ScanDetails() {
  const { imageData, imagePath } = useLocalSearchParams<{ imageData: string; imagePath: string }>();

  const imageSource = Platform.OS === 'web' 
    ? { uri: `data:image/jpeg;base64,${imageData}` }
    : { uri: `file://${imagePath}` };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Scan Results</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={imageSource}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <View style={styles.resultsContainer}>
        <Text style={styles.resultTitle}>Analysis Results</Text>
        {/* Buraya analiz sonuçlarını ekleyebilirsiniz */}
        <View style={styles.resultItem}>
          <Ionicons name="water-outline" size={24} color="#1a1a2e" />
          <View style={styles.resultTextContainer}>
            <Text style={styles.resultLabel}>Hydration Level</Text>
            <Text style={styles.resultValue}>Good</Text>
          </View>
        </View>
        
        <View style={styles.resultItem}>
          <Ionicons name="sunny-outline" size={24} color="#1a1a2e" />
          <View style={styles.resultTextContainer}>
            <Text style={styles.resultLabel}>UV Damage</Text>
            <Text style={styles.resultValue}>Minimal</Text>
          </View>
        </View>

        <View style={styles.resultItem}>
          <Ionicons name="fitness-outline" size={24} color="#1a1a2e" />
          <View style={styles.resultTextContainer}>
            <Text style={styles.resultLabel}>Skin Elasticity</Text>
            <Text style={styles.resultValue}>Normal</Text>
          </View>
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
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
  },
  backButton: {
    padding: 8,
    marginRight: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  resultsContainer: {
    padding: 20,
  },
  resultTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  resultItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  resultTextContainer: {
    marginLeft: 12,
  },
  resultLabel: {
    fontSize: 16,
    color: '#666',
  },
  resultValue: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
  },
}); 