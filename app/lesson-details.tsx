import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

type LessonDetail = {
  id: string;
  title: string;
  duration: string;
  description: string;
  content: {
    type: 'text' | 'image' | 'video';
    value: string;
  }[];
  tips: string[];
};

const lessonDetails: Record<string, LessonDetail> = {
  '1.1': {
    id: '1.1',
    title: 'Understanding Skin Aging',
    duration: '15 min',
    description: 'Learn about the biological processes behind skin aging.',
    content: [
      {
        type: 'text',
        value: 'Skin aging is a complex biological process influenced by both internal and external factors. Understanding these processes is key to developing an effective anti-aging skincare routine.'
      },
      {
        type: 'image',
        value: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273'
      },
      {
        type: 'text',
        value: 'Internal factors include genetics, hormonal changes, and the natural aging process. External factors include sun exposure, pollution, smoking, and lifestyle choices.'
      }
    ],
    tips: [
      'Protect your skin from sun damage',
      'Stay hydrated',
      'Get adequate sleep',
      'Maintain a healthy diet',
      'Manage stress levels'
    ]
  },
  // Add more lessons as needed
};

export default function LessonDetails() {
  const { id } = useLocalSearchParams();
  const lesson = lessonDetails[id as string];

  if (!lesson) {
    return (
      <View style={styles.container}>
        <Text>Lesson not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>{lesson.title}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.durationContainer}>
          <Ionicons name="time-outline" size={16} color="#666" />
          <Text style={styles.duration}>{lesson.duration}</Text>
        </View>

        <Text style={styles.description}>{lesson.description}</Text>

        <View style={styles.contentSection}>
          {lesson.content.map((item, index) => {
            if (item.type === 'text') {
              return (
                <Text key={index} style={styles.contentText}>
                  {item.value}
                </Text>
              );
            } else if (item.type === 'image') {
              return (
                <Image
                  key={index}
                  source={{ uri: item.value }}
                  style={styles.contentImage}
                />
              );
            }
            return null;
          })}
        </View>

        <View style={styles.tipsSection}>
          <Text style={styles.sectionTitle}>Key Tips</Text>
          {lesson.tips.map((tip, index) => (
            <View key={index} style={styles.tipItem}>
              <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              <Text style={styles.tipText}>{tip}</Text>
            </View>
          ))}
        </View>
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
    flex: 1,
    textAlign: 'center',
    marginHorizontal: 16,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  duration: {
    fontSize: 14,
    color: '#666',
    marginLeft: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
  },
  contentSection: {
    marginBottom: 24,
  },
  contentText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 16,
  },
  contentImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
  },
  tipsSection: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 12,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 16,
  },
  tipItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  tipText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
}); 