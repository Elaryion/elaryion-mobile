import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useLocalSearchParams } from 'expo-router';

type SkinFactor = {
  title: string;
  value: string;
  score: number;
  description: string;
};

const factors: SkinFactor[] = [
  {
    title: 'Skin Type',
    value: 'Combination',
    score: 85,
    description: 'Your T-zone shows slight oiliness while cheeks are normal to dry',
  },
  {
    title: 'Texture',
    value: 'Smooth',
    score: 90,
    description: 'Your skin texture is generally smooth with minimal roughness',
  },
  {
    title: 'Pores',
    value: 'Moderate',
    score: 75,
    description: 'Visible pores in T-zone area, minimal elsewhere',
  },
  {
    title: 'Hydration',
    value: 'Good',
    score: 82,
    description: 'Skin maintains good moisture levels with slight dehydration in some areas',
  },
  {
    title: 'Sensitivity',
    value: 'Low',
    score: 88,
    description: 'Your skin shows minimal sensitivity to environmental factors',
  },
];

const FactorCard = ({ factor }: { factor: SkinFactor }) => (
  <View style={styles.factorCard}>
    <View style={styles.factorHeader}>
      <Text style={styles.factorTitle}>{factor.title}</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>{factor.score}</Text>
        <Text style={styles.scoreLabel}>Score</Text>
      </View>
    </View>
    
    <View style={styles.factorContent}>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.value}>{factor.value}</Text>
      </View>
      
      <Text style={styles.description}>{factor.description}</Text>
    </View>
  </View>
);

export default function ScanDetails() {
  const router = useRouter();
  const { date } = useLocalSearchParams<{ date: string }>();
  
  const formattedDate = new Date(date || '').toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Scan Details</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.date}>{formattedDate}</Text>
        <View style={styles.overallScore}>
          <Text style={styles.overallScoreValue}>85</Text>
          <Text style={styles.overallScoreLabel}>Overall Score</Text>
        </View>

        <Text style={styles.sectionTitle}>Detailed Analysis</Text>
        
        {factors.map((factor, index) => (
          <FactorCard key={index} factor={factor} />
        ))}

        <View style={styles.recommendationSection}>
          <Text style={styles.sectionTitle}>Recommendations</Text>
          <Text style={styles.recommendationText}>
            Based on your scan results, we recommend focusing on:
          </Text>
          <View style={styles.recommendationList}>
            <Text style={styles.recommendationItem}>• Pore minimizing treatments</Text>
            <Text style={styles.recommendationItem}>• Regular hydration</Text>
            <Text style={styles.recommendationItem}>• Gentle exfoliation</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 40,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  date: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  overallScore: {
    alignItems: 'center',
    marginBottom: 30,
    backgroundColor: '#f8f8f8',
    padding: 20,
    borderRadius: 12,
  },
  overallScoreValue: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  overallScoreLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 24,
  },
  factorCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  factorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  factorTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  scoreContainer: {
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  scoreLabel: {
    fontSize: 12,
    color: '#666',
  },
  factorContent: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 14,
    color: '#666',
    marginRight: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  recommendationSection: {
    marginTop: 24,
    marginBottom: 40,
  },
  recommendationText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 16,
  },
  recommendationList: {
    backgroundColor: '#f8f8f8',
    padding: 16,
    borderRadius: 12,
  },
  recommendationItem: {
    fontSize: 16,
    color: '#1a1a2e',
    marginBottom: 8,
    lineHeight: 24,
  },
}); 