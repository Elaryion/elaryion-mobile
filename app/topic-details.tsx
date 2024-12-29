import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

type Lesson = {
  id: string;
  title: string;
  duration: string;
  description: string;
};

type TopicDetail = {
  id: string;
  title: string;
  description: string;
  image: string;
  level: string;
  lessons: Lesson[];
  overview: string[];
};

const topicDetails: Record<string, TopicDetail> = {
  '1': {
    id: '1',
    title: 'Anti-Aging',
    description: 'Learn about preventing and treating signs of aging with effective skincare routines and ingredients.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273',
    level: 'Intermediate',
    overview: [
      'Understanding the aging process',
      'Key anti-aging ingredients',
      'Prevention strategies',
      'Treatment options',
      'Building an anti-aging routine'
    ],
    lessons: [
      {
        id: '1.1',
        title: 'Understanding Skin Aging',
        duration: '15 min',
        description: 'Learn about the biological processes behind skin aging.'
      },
      {
        id: '1.2',
        title: 'Anti-Aging Ingredients',
        duration: '20 min',
        description: 'Discover the most effective ingredients for preventing and treating aging signs.'
      },
      {
        id: '1.3',
        title: 'Prevention Strategies',
        duration: '25 min',
        description: 'Learn how to prevent premature aging through lifestyle and skincare choices.'
      }
    ]
  },
  '2': {
    id: '2',
    title: 'Acne Care',
    description: 'Learn how to effectively treat and prevent acne with proper skincare routines and ingredients.',
    image: 'https://images.unsplash.com/photo-1564849444446-f876dcef378e',
    level: 'Beginner',
    overview: [
      'Understanding acne formation',
      'Types of acne',
      'Treatment approaches',
      'Prevention strategies',
      'Building an anti-acne routine'
    ],
    lessons: [
      {
        id: '2.1',
        title: 'Understanding Acne',
        duration: '15 min',
        description: 'Learn about the causes and types of acne.'
      },
      {
        id: '2.2',
        title: 'Acne-Fighting Ingredients',
        duration: '20 min',
        description: 'Discover effective ingredients for treating different types of acne.'
      },
      {
        id: '2.3',
        title: 'Lifestyle Factors',
        duration: '15 min',
        description: 'Understand how diet and lifestyle affect acne.'
      }
    ]
  },
  '3': {
    id: '3',
    title: 'Hydration',
    description: 'Master the art of keeping your skin properly hydrated for a healthy, plump complexion.',
    image: 'https://images.unsplash.com/photo-1525904097878-94fb15835963',
    level: 'Beginner',
    overview: [
      'Understanding skin hydration',
      'Hydrating ingredients',
      'Water-oil balance',
      'Dehydration signs',
      'Building a hydrating routine'
    ],
    lessons: [
      {
        id: '3.1',
        title: 'Skin Barrier Function',
        duration: '20 min',
        description: 'Learn about the skin barrier and its role in hydration.'
      },
      {
        id: '3.2',
        title: 'Hydrating Products',
        duration: '15 min',
        description: 'Discover the best products and ingredients for hydration.'
      },
      {
        id: '3.3',
        title: 'Environmental Factors',
        duration: '15 min',
        description: 'Understanding how environment affects skin hydration.'
      }
    ]
  },
  '4': {
    id: '4',
    title: 'Sun Care',
    description: 'Learn about sun protection, UV damage prevention, and maintaining healthy skin in the sun.',
    image: 'https://images.unsplash.com/photo-1532947974358-a218d18d8d14',
    level: 'Intermediate',
    overview: [
      'Understanding UV radiation',
      'Sunscreen types',
      'Application techniques',
      'Sun damage prevention',
      'Post-sun care'
    ],
    lessons: [
      {
        id: '4.1',
        title: 'UV Radiation Basics',
        duration: '20 min',
        description: 'Learn about different types of UV rays and their effects.'
      },
      {
        id: '4.2',
        title: 'Choosing Sunscreen',
        duration: '25 min',
        description: 'Understanding different types of sunscreens and how to choose.'
      },
      {
        id: '4.3',
        title: 'Application Guide',
        duration: '15 min',
        description: 'Master the proper techniques for sunscreen application.'
      },
      {
        id: '4.4',
        title: 'Repairing Sun Damage',
        duration: '20 min',
        description: 'Learn about treating and preventing sun damage.'
      }
    ]
  }
};

const LessonCard = ({ lesson }: { lesson: Lesson }) => (
  <Pressable 
    style={styles.lessonCard}
    onPress={() => router.push({
      pathname: '/lesson-details',
      params: { id: lesson.id }
    })}
  >
    <View style={styles.lessonContent}>
      <View style={styles.lessonHeader}>
        <Text style={styles.lessonTitle}>{lesson.title}</Text>
        <View style={styles.durationBadge}>
          <Ionicons name="time-outline" size={14} color="#666" />
          <Text style={styles.durationText}>{lesson.duration}</Text>
        </View>
      </View>
      <Text style={styles.lessonDescription}>{lesson.description}</Text>
    </View>
    <Ionicons name="chevron-forward" size={20} color="#666" />
  </Pressable>
);

export default function TopicDetails() {
  const { id } = useLocalSearchParams();
  const topic = topicDetails[id as string];

  if (!topic) {
    return (
      <View style={styles.container}>
        <Text>Topic not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Image source={{ uri: topic.image }} style={styles.coverImage} />
        
        <View style={styles.header}>
          <Pressable onPress={() => router.push("/explore")} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
        </View>

        <View style={styles.topicContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{topic.title}</Text>
            <View style={styles.levelBadge}>
              <Text style={styles.levelText}>{topic.level}</Text>
            </View>
          </View>

          <Text style={styles.description}>{topic.description}</Text>

          <Text style={styles.sectionTitle}>Overview</Text>
          <View style={styles.overviewList}>
            {topic.overview.map((item, index) => (
              <View key={index} style={styles.overviewItem}>
                <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                <Text style={styles.overviewText}>{item}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Lessons</Text>
          {topic.lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
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
  content: {
    flex: 1,
  },
  coverImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#f5f5f5',
  },
  header: {
    position: 'absolute',
    top: 60,
    left: 20,
    right: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  topicContent: {
    padding: 20,
    marginTop: -40,
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    flex: 1,
  },
  levelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    marginLeft: 12,
  },
  levelText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  description: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 16,
  },
  overviewList: {
    marginBottom: 24,
  },
  overviewItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  overviewText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
  },
  lessonCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lessonContent: {
    flex: 1,
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
    flex: 1,
  },
  durationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 12,
  },
  durationText: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
}); 