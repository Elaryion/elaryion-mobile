import { View, Text, StyleSheet, ScrollView, Pressable, TextInput, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type CourseCardProps = {
  title: string;
  category: string;
  duration: string;
  image?: string;
  progress?: number;
  isNew?: boolean;
};

const CourseCard = ({ title, category, duration, image, progress, isNew }: CourseCardProps) => (
  <Pressable style={styles.courseCard}>
    <View style={styles.imageContainer}>
      {image ? (
        <Image source={{ uri: image }} style={styles.courseImage} />
      ) : (
        <View style={[styles.courseImage, styles.coursePlaceholder]}>
          <Ionicons name="play-circle-outline" size={30} color="#666" />
        </View>
      )}
      {isNew && (
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>NEW</Text>
        </View>
      )}
      {progress !== undefined && (
        <View style={styles.progressContainer}>
          <View style={[styles.progressBar, { width: `${progress}%` }]} />
        </View>
      )}
    </View>
    <View style={styles.courseInfo}>
      <Text style={styles.courseTitle}>{title}</Text>
      <View style={styles.courseMetaInfo}>
        <Text style={styles.courseCategory}>{category}</Text>
        <View style={styles.durationContainer}>
          <Ionicons name="time-outline" size={14} color="#666" />
          <Text style={styles.courseDuration}>{duration}</Text>
        </View>
      </View>
    </View>
  </Pressable>
);

const TrendingTopic = ({ title, icon, count }: { title: string; icon: any; count: number }) => (
  <Pressable style={styles.trendingTopic}>
    <LinearGradient
      colors={['#f8f9fa', '#e9ecef']}
      style={styles.topicGradient}
    >
      <Ionicons name={icon} size={24} color="#1a1a2e" />
      <Text style={styles.topicTitle}>{title}</Text>
      <Text style={styles.topicCount}>{count} lessons</Text>
    </LinearGradient>
  </Pressable>
);

const IngredientCard = ({ name, icon }: { name: string; icon: keyof typeof Ionicons.glyphMap }) => (
  <Pressable style={styles.ingredientCard}>
    <LinearGradient
      colors={['#f8f9fa', '#e9ecef']}
      style={styles.ingredientIcon}
    >
      <Ionicons name={icon} size={24} color="#1a1a2e" />
    </LinearGradient>
    <Text style={styles.ingredientName}>{name}</Text>
  </Pressable>
);

export default function Explore() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Academy</Text>
        <Pressable style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#1a1a2e" />
          <View style={styles.notificationBadge} />
        </Pressable>
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search courses and topics"
          style={styles.searchInput}
          placeholderTextColor="#666"
        />
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Course</Text>
        <Pressable style={styles.featuredCard}>
          <ImageBackground 
            source={{ uri: "https://media.istockphoto.com/id/1482298143/video/asian-woman-serum-and-retinol-on-face-for-beauty-skincare-or-cosmetics-on-white-studio.jpg?s=640x640&k=20&c=Yw4sJjSv-A-cgIOJIZDtRqhO1ba57LK-HPjf6Hxcjs8=" }}
            style={styles.featuredBackground}
          >
            <LinearGradient
              colors={['rgba(26, 26, 46, 0.9)', 'rgba(22, 33, 62, 0.9)']}
              style={styles.featuredGradient}
            >
              <View style={styles.featuredContent}>
                <View>
                  <Text style={styles.featuredTag}>BESTSELLER</Text>
                  <Text style={styles.featuredTitle}>Complete Skincare{'\n'}Routine Guide</Text>
                  <Text style={styles.featuredSubtitle}>Master the basics of skincare</Text>
                </View>
                <Pressable style={styles.startButton}>
                  <Text style={styles.startButtonText}>Start Learning</Text>
                </Pressable>
              </View>
            </LinearGradient>
          </ImageBackground>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Trending Topics</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TrendingTopic title="Anti-Aging" icon="fitness-outline" count={8} />
          <TrendingTopic title="Acne Care" icon="medical-outline" count={6} />
          <TrendingTopic title="Hydration" icon="water-outline" count={5} />
          <TrendingTopic title="Sun Care" icon="sunny-outline" count={4} />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Ingredients Library</Text>
          <Pressable>
            <Text style={styles.seeAllButton}>See All</Text>
          </Pressable>
        </View>
        <Text style={styles.sectionSubtitle}>Learn about active ingredients</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.ingredientsScroll}>
          <IngredientCard name="Retinol" icon="flask-outline" />
          <IngredientCard name="Vitamin C" icon="leaf-outline" />
          <IngredientCard name="Hyaluronic Acid" icon="water-outline" />
          <IngredientCard name="Niacinamide" icon="shield-outline" />
          <IngredientCard name="AHA/BHA" icon="sparkles-outline" />
          <IngredientCard name="Peptides" icon="cellular-outline" />
        </ScrollView>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>In Progress</Text>
          <Pressable>
            <Text style={styles.seeAllButton}>See All</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CourseCard
            title="Understanding Skin Types"
            category="Basics"
            duration="15 MIN"
            progress={75}
            image="https://pi.tedcdn.com/r/talkstar-photos.s3.amazonaws.com/uploads/07d1743f-1f67-4db6-9925-6f7f2b3dcb96/TED_Body_Stuff_TED.com_2880x1620_Ep1-8-06.jpg?u%5Br%5D=2&u%5Bs%5D=0.5&u%5Ba%5D=0.8&u%5Bt%5D=0.03&quality=82w=640"
          />
          <CourseCard
            title="Ingredient Science"
            category="Advanced"
            duration="20 MIN"
            progress={30}
            image="https://i.ytimg.com/vi/hoZyeuvxtcA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDIlHGEcgNQV8KlF1Z81UuONLUXfg"
          />
        </ScrollView>
      </View>

      <View style={[styles.section, styles.lastSection]}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>New Releases</Text>
          <Pressable>
            <Text style={styles.seeAllButton}>See All</Text>
          </Pressable>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <CourseCard
          title="Retinol Guide"
          category="Ingredients"
          duration="25 MIN"
          image="https://i.ytimg.com/vi/JN96K2A_ZGE/maxresdefault.jpg"
          isNew
        />
        <CourseCard
          title="Seasonal Skincare"
          category="Routines"
          duration="18 MIN"
          image="https://i.ytimg.com/vi/zLqBEeGOI9Y/maxresdefault.jpg"
          isNew
          />
        </ScrollView>
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
    fontSize: 28,
    fontWeight: 'bold',
  },
  notificationButton: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff4444',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  featuredSection: {
    padding: 20,
  },
  featuredCard: {
    borderRadius: 16,
    overflow: 'hidden',
    marginTop: 12,
  },
  featuredGradient: {
    padding: 24,
  },
  featuredContent: {
    height: 180,
    justifyContent: 'space-between',
  },
  featuredTag: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
    opacity: 0.8,
    marginBottom: 8,
  },
  featuredTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  featuredSubtitle: {
    color: '#fff',
    fontSize: 16,
    opacity: 0.8,
  },
  startButton: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 24,
    alignSelf: 'flex-start',
  },
  startButtonText: {
    color: '#1a1a2e',
    fontSize: 16,
    fontWeight: '600',
  },
  section: {
    padding: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  seeAllButton: {
    color: '#666',
    fontSize: 14,
  },
  trendingTopic: {
    marginRight: 12,
    width: 140,
  },
  topicGradient: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  topicTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 8,
    marginBottom: 4,
  },
  topicCount: {
    fontSize: 12,
    color: '#666',
  },
  courseCard: {
    marginRight: 15,
    width: 280,
    marginBottom: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  courseImage: {
    width: '100%',
    height: 160,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
  },
  coursePlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  newBadge: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#ff4444',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  newBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  progressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#1a1a2e',
  },
  courseInfo: {
    paddingTop: 12,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  courseMetaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseCategory: {
    fontSize: 14,
    color: '#666',
    marginRight: 12,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  courseDuration: {
    fontSize: 12,
    color: '#666',
    marginLeft: 4,
  },
  lastSection: {
    paddingBottom: 100,
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  ingredientsScroll: {
    marginLeft: -8,
  },
  ingredientCard: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 100,
  },
  ingredientIcon: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  ingredientName: {
    fontSize: 14,
    textAlign: 'center',
    color: '#1a1a2e',
    fontWeight: '500',
  },
  featuredBackground: {
    width: '100%',
    overflow: 'hidden',
    borderRadius: 16,
  },
}); 