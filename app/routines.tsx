import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

type Routine = {
  id: string;
  time: string;
  title: string;
  steps: {
    id: string;
    product: string;
    instruction: string;
    duration: string;
  }[];
};

const routines: Routine[] = [
  {
    id: '1',
    time: 'Morning',
    title: 'Morning Routine',
    steps: [
      {
        id: '1',
        product: 'Gentle Cleanser',
        instruction: 'Wash face with lukewarm water',
        duration: '1 min'
      },
      {
        id: '2',
        product: 'Vitamin C Serum',
        instruction: 'Apply 3-4 drops',
        duration: '30 sec'
      },
      {
        id: '3',
        product: 'Moisturizer',
        instruction: 'Apply evenly',
        duration: '1 min'
      },
      {
        id: '4',
        product: 'Sunscreen',
        instruction: 'Apply generously',
        duration: '1 min'
      }
    ]
  },
  {
    id: '2',
    time: 'Evening',
    title: 'Evening Routine',
    steps: [
      {
        id: '1',
        product: 'Oil Cleanser',
        instruction: 'Massage gently',
        duration: '1 min'
      },
      {
        id: '2',
        product: 'Foam Cleanser',
        instruction: 'Double cleanse',
        duration: '1 min'
      },
      {
        id: '3',
        product: 'Toner',
        instruction: 'Pat gently',
        duration: '30 sec'
      },
      {
        id: '4',
        product: 'Retinol',
        instruction: 'Apply pea-sized amount',
        duration: '30 sec'
      },
      {
        id: '5',
        product: 'Night Cream',
        instruction: 'Apply evenly',
        duration: '1 min'
      }
    ]
  }
];

const RoutineCard = ({ routine }: { routine: Routine }) => (
  <Pressable style={styles.routineCard}>
    <LinearGradient
      colors={['#1a1a2e', '#2d2d44']}
      style={styles.routineGradient}
    >
      <View style={styles.routineHeader}>
        <View>
          <Text style={styles.routineTime}>{routine.time}</Text>
          <Text style={styles.routineTitle}>{routine.title}</Text>
        </View>
        <View style={styles.stepsCount}>
          <Text style={styles.stepsText}>{routine.steps.length} steps</Text>
        </View>
      </View>

      <View style={styles.steps}>
        {routine.steps.map((step, index) => (
          <View key={step.id} style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.productName}>{step.product}</Text>
              <Text style={styles.instruction}>{step.instruction}</Text>
              <Text style={styles.duration}>{step.duration}</Text>
            </View>
          </View>
        ))}
      </View>
    </LinearGradient>
  </Pressable>
);

export default function Routines() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/home")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Your Routines</Text>
        <Pressable style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </Pressable>
      </View>

      <ScrollView style={styles.content}>
        {routines.map((routine) => (
          <RoutineCard key={routine.id} routine={routine} />
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
  editButton: {
    padding: 8,
  },
  editButtonText: {
    color: '#007aff',
    fontSize: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  routineCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 20,
  },
  routineGradient: {
    padding: 20,
  },
  routineHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  routineTime: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 14,
    marginBottom: 4,
  },
  routineTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  stepsCount: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  stepsText: {
    color: '#fff',
    fontSize: 14,
  },
  steps: {
    gap: 12,
  },
  step: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    marginTop: 2,
  },
  stepNumberText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  stepContent: {
    flex: 1,
  },
  productName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  instruction: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 14,
    marginBottom: 2,
  },
  duration: {
    color: '#fff',
    opacity: 0.6,
    fontSize: 12,
  },
});