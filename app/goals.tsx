import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type Goal = {
  id: string;
  title: string;
  description: string;
  progress: number;
  icon: string;
  target: string;
  startDate: string;
  endDate: string;
};

const goals: Goal[] = [
  {
    id: '1',
    title: 'Complete morning routine',
    description: 'Follow your morning skincare routine consistently',
    progress: 75,
    icon: 'sunny-outline',
    target: '30 days streak',
    startDate: '2024-03-01',
    endDate: '2024-03-31'
  },
  {
    id: '2',
    title: 'Track water intake',
    description: 'Drink 8 glasses of water daily',
    progress: 60,
    icon: 'water-outline',
    target: '2L daily',
    startDate: '2024-03-01',
    endDate: '2024-03-31'
  },
  {
    id: '3',
    title: 'Use sunscreen daily',
    description: 'Apply and reapply sunscreen throughout the day',
    progress: 90,
    icon: 'sunny-outline',
    target: 'Every day',
    startDate: '2024-03-01',
    endDate: '2024-03-31'
  },
  {
    id: '4',
    title: 'Evening skincare routine',
    description: 'Complete your evening skincare routine before bed',
    progress: 85,
    icon: 'moon-outline',
    target: '30 days streak',
    startDate: '2024-03-01',
    endDate: '2024-03-31'
  }
];

const GoalCard = ({ goal }: { goal: Goal }) => (
  <View style={styles.goalCard}>
    <View style={styles.goalHeader}>
      <View style={styles.goalIcon}>
        <Ionicons name={goal.icon as any} size={24} color="#1a1a2e" />
      </View>
      <View style={styles.goalInfo}>
        <Text style={styles.goalTitle}>{goal.title}</Text>
        <Text style={styles.goalDescription}>{goal.description}</Text>
      </View>
    </View>

    <View style={styles.goalProgress}>
      <View style={styles.progressBar}>
        <View style={[styles.progressFill, { width: `${goal.progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{goal.progress}%</Text>
    </View>

    <View style={styles.goalFooter}>
      <View style={styles.goalDetail}>
        <Text style={styles.detailLabel}>Target</Text>
        <Text style={styles.detailValue}>{goal.target}</Text>
      </View>
      <View style={styles.goalDetail}>
        <Text style={styles.detailLabel}>End Date</Text>
        <Text style={styles.detailValue}>
          {new Date(goal.endDate).toLocaleDateString()}
        </Text>
      </View>
    </View>
  </View>
);

export default function Goals() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Your Goals</Text>
        <Pressable style={styles.addButton}>
          <Ionicons name="add" size={24} color="#007aff" />
        </Pressable>
      </View>

      <ScrollView style={styles.content}>
        {goals.map((goal) => (
          <GoalCard key={goal.id} goal={goal} />
        ))}
      </ScrollView>
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
    justifyContent: 'space-between',
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    padding: 8,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  goalCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  goalHeader: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  goalIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  goalInfo: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  goalDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  goalProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#e9ecef',
    borderRadius: 4,
    marginRight: 12,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1a1a2e',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a2e',
    width: 45,
  },
  goalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  goalDetail: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1a1a2e',
  },
});