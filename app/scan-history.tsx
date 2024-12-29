import { View, Text, StyleSheet, ScrollView, Pressable, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type ScanResult = {
  id: string;
  date: string;
  skinType: string;
  concerns: string[];
  score: number;
  imageData?: string;
};

export default function ScanHistory() {
  const router = useRouter();
  const [scanResults, setScanResults] = useState<ScanResult[]>([]);

  useEffect(() => {
    loadScanHistory();
  }, []);

  const loadScanHistory = async () => {
    try {
      const historyStr = await AsyncStorage.getItem('scanHistory');
      if (historyStr) {
        const history = JSON.parse(historyStr);
        setScanResults(history);
      }
    } catch (error) {
      console.error('Error loading scan history:', error);
      Alert.alert('Error', 'Failed to load scan history');
    }
  };

  const deleteScan = async (id: string) => {
    const confirmDelete = () => {
      if (Platform.OS === 'web') {
        return window.confirm('Are you sure you want to delete this scan?');
      } else {
        return new Promise((resolve) => {
          Alert.alert(
            'Delete Scan',
            'Are you sure you want to delete this scan?',
            [
              {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => resolve(false)
              },
              {
                text: 'Delete',
                style: 'destructive',
                onPress: () => resolve(true)
              }
            ]
          );
        });
      }
    };

    const shouldDelete = await confirmDelete();
    if (shouldDelete) {
      try {
        const historyStr = await AsyncStorage.getItem('scanHistory');
        if (!historyStr) return;
        
        const history = JSON.parse(historyStr);
        const updatedScans = history.filter((scan: ScanResult) => scan.id !== id);
        await AsyncStorage.setItem('scanHistory', JSON.stringify(updatedScans));
        setScanResults(updatedScans);
      } catch (error) {
        console.error('Error deleting scan:', error);
        if (Platform.OS === 'web') {
          window.alert('Failed to delete scan');
        } else {
          Alert.alert('Error', 'Failed to delete scan');
        }
      }
    }
  };

  const ScanResultCard = ({ result }: { result: ScanResult }) => {
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

        <View style={styles.buttonContainer}>
          <Pressable 
            style={styles.viewButton}
            onPress={() => router.push({
              pathname: '/scan-details',
              params: { 
                imageData: result.imageData,
                scanId: result.id
              }
            })}
          >
            <Text style={styles.viewButtonText}>View Details</Text>
            <Ionicons name="chevron-forward" size={16} color="#1a1a2e" />
          </Pressable>

          <Pressable 
            style={styles.deleteButton}
            onPress={() => deleteScan(result.id)}
          >
            <Ionicons name="trash-outline" size={20} color="#ff3b30" />
          </Pressable>
        </View>
      </View>
    );
  };

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

        {scanResults.length === 0 ? (
          <View style={styles.emptyState}>
            <Ionicons name="scan-outline" size={48} color="#666" />
            <Text style={styles.emptyStateText}>No scan history yet</Text>
            <Text style={styles.emptyStateSubtext}>Take your first skin scan to get started</Text>
          </View>
        ) : (
          scanResults.map((result) => (
            <ScanResultCard key={result.id} result={result} />
          ))
        )}
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
    paddingTop: 60,
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
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    marginTop: 8,
  },
  viewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a2e',
    marginRight: 4,
  },
  deleteButton: {
    padding: 8,
  },
  emptyState: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 40,
  },
  emptyStateText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginTop: 16,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 8,
    textAlign: 'center',
  },
}); 