import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type Topic = {
  id: string;
  title: string;
  icon: string;
  count: number;
  description: string;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
};

const topics: Topic[] = [
  {
    id: '1',
    title: 'Anti-Aging',
    icon: 'fitness-outline',
    count: 8,
    description: 'Learn about preventing and treating signs of aging with effective skincare routines and ingredients.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273',
    level: 'Intermediate'
  },
  {
    id: '2',
    title: 'Acne Care',
    icon: 'medical-outline',
    count: 6,
    description: 'Discover how to treat and prevent acne with the right products and routines.',
    image: 'https://www.cellderma.com/wp-content/uploads/2023/05/Acne-1-860x400.png',
    level: 'Beginner'
  },
  {
    id: '3',
    title: 'Hydration',
    icon: 'water-outline',
    count: 5,
    description: 'Master the art of keeping your skin hydrated and healthy throughout the day.',
    image: 'https://hips.hearstapps.com/hmg-prod/images/young-beautiful-woman-with-clean-fresh-skin-with-royalty-free-image-1711130251.jpg?crop=1.00xw:0.389xh;0,0.243xh&resize=1200:*',
    level: 'Beginner'
  },
  {
    id: '4',
    title: 'Sun Care',
    icon: 'sunny-outline',
    count: 4,
    description: 'Protect your skin from sun damage with proper sunscreen application and UV protection.',
    image: 'https://images.unsplash.com/photo-1587909209111-5097ee578ec3',
    level: 'Beginner'
  }
];

const TopicCard = ({ topic }: { topic: Topic }) => (
  <Pressable 
    style={styles.topicCard}
    onPress={() => router.push({
      pathname: '/topic-details',
      params: { id: topic.id }
    })}
  >
    <Image source={{ uri: topic.image }} style={styles.topicImage} />
    <View style={styles.topicContent}>
      <View style={styles.topicHeader}>
        <View style={styles.iconContainer}>
          <Ionicons name={topic.icon as any} size={24} color="#1a1a2e" />
        </View>
        <View style={styles.levelBadge}>
          <Text style={styles.levelText}>{topic.level}</Text>
        </View>
      </View>
      <Text style={styles.topicTitle}>{topic.title}</Text>
      <Text style={styles.topicDescription}>{topic.description}</Text>
      <View style={styles.topicFooter}>
        <Text style={styles.lessonCount}>{topic.count} lessons</Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </View>
    </View>
  </Pressable>
);

export default function Topics() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/explore")} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Topics</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.subtitle}>
          Explore our comprehensive skincare topics and enhance your knowledge
        </Text>

        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
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
  content: {
    flex: 1,
    padding: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  topicCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  topicImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#f5f5f5',
  },
  topicContent: {
    padding: 20,
  },
  topicHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  levelBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
  },
  levelText: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  topicTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  topicDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 16,
  },
  topicFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
  },
  lessonCount: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
}); 