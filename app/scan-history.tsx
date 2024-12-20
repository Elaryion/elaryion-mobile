import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type ScanResult = {
  id: string;
  date: string;
  skinType: string;
  concerns: string[];
  score: number;
};

const mockResults: ScanResult[] = [
  {
    id: '1',
    date: '2024-03-15',
    skinType: 'Combination',
    concerns: ['Acne', 'Dark Spots'],
    score: 85,
  },
  {
    id: '2',
    date: '2024-03-01',
    skinType: 'Combination',
    concerns: ['Acne', 'Large Pores'],
    score: 82,
  },
  {
    id: '3',
    date: '2024-02-15',
    skinType: 'Combination',
    concerns: ['Acne', 'Oiliness'],
    score: 78,
  },
];

const ScanResultCard = ({ result, router }: { result: ScanResult; router: any }) => {
  const date = new Date(result.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.resultCard}>
      <View style={styles.resultHeader}>
        <Text style={styles.date}>{date}</Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.score}>{result.score}</Text>
          <Text style={styles.scoreLabel}>Score</Text>
        </View>
      </View>

      <View style={styles.resultDetails}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Skin Type</Text>
          <Text style={styles.detailValue}>{result.skinType}</Text>
        </View>

        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Concerns</Text>
          <Text style={styles.detailValue}>{result.concerns.join(', ')}</Text>
        </View>
      </View>

      <Pressable 
        style={styles.viewButton}
        onPress={() => router.push({
          pathname: '/scan-details',
          params: { date: result.date }
        })}
      >
        <Text style={styles.viewButtonText}>View Details</Text>
        <Ionicons name="chevron-forward" size={16} color="#1a1a2e" />
      </Pressable>
    </View>
  );
};

export default function ScanHistory() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/profile")}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Scan History</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Your past scan results and progress</Text>

        {mockResults.map((result) => (
          <ScanResultCard key={result.id} result={result} router={router} />
        ))}
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
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  resultCard: {
    backgroundColor: '#f8f8f8',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  resultHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  date: {
    fontSize: 16,
    fontWeight: '500',
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
  resultDetails: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 16,
  },
  detailItem: {
    marginBottom: 12,
  },
  detailLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    marginTop: 8,
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a2e',
    marginRight: 4,
  },
}); 