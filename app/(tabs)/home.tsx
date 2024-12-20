import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

type RoutineCardProps = {
  time: string;
  title: string;
  steps: number;
};

const RoutineCard = ({ time, title, steps }: RoutineCardProps) => (
  <Pressable style={styles.routineCard}>
    <LinearGradient
      colors={['#1a1a2e', '#2d2d44']}
      style={styles.routineGradient}
    >
      <Text style={styles.routineTime}>{time}</Text>
      <Text style={styles.routineTitle}>{title}</Text>
      <Text style={styles.routineSteps}>{steps} steps</Text>
    </LinearGradient>
  </Pressable>
);

type ProgressRingProps = {
  progress: number;
  size?: number;
  strokeWidth?: number;
};

const ProgressRing = ({ progress, size = 60, strokeWidth = 6 }: ProgressRingProps) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={[styles.progressRing, { width: size, height: size }]}>
      <View style={styles.progressBackground} />
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const GoalCard = ({ title, progress, icon }: { title: string; progress: number; icon: string }) => (
  <View style={styles.goalCard}>
    <View style={styles.goalContent}>
      <View style={styles.goalIcon}>
        <Ionicons name={icon as any} size={24} color="#1a1a2e" />
      </View>
      <View style={styles.goalInfo}>
        <Text style={styles.goalTitle}>{title}</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressFill, { width: `${progress}%` }]} />
        </View>
      </View>
    </View>
    <Text style={styles.goalProgress}>{progress}%</Text>
  </View>
);

const TipCard = ({ tip, source }: { tip: string; source: string }) => (
  <View style={styles.tipCard}>
    <Ionicons name="bulb-outline" size={24} color="#1a1a2e" />
    <View style={styles.tipContent}>
      <Text style={styles.tipText}>{tip}</Text>
      <Text style={styles.tipSource}>{source}</Text>
    </View>
  </View>
);

const ProductCard = ({ title, brand, price, image }: { title: string; brand: string; price: number; image: string }) => (
  <Pressable style={styles.productCard}>
    <Image source={{ uri: image }} style={styles.productImage} />
    <View style={styles.productInfo}>
      <Text style={styles.productBrand}>{brand}</Text>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productPrice}>${price}</Text>
    </View>
  </Pressable>
);

const StreakCard = () => (
  <View style={styles.streakCard}>
    <LinearGradient
      colors={['#1a1a2e', '#2d2d44']}
      style={styles.streakGradient}
    >
      <View style={styles.streakHeader}>
        <Ionicons name="flame" size={24} color="#ff9500" />
        <Text style={styles.streakTitle}>Skincare Streak</Text>
      </View>
      <Text style={styles.streakCount}>12 Days</Text>
      <Text style={styles.streakSubtitle}>Keep up the good work!</Text>
    </LinearGradient>
  </View>
);

const InsightCard = ({ title, value, change }: { title: string; value: string; change: number }) => (
  <View style={styles.insightCard}>
    <Text style={styles.insightTitle}>{title}</Text>
    <Text style={styles.insightValue}>{value}</Text>
    <View style={styles.insightChange}>
      <Ionicons 
        name={change >= 0 ? "arrow-up" : "arrow-down"} 
        size={16} 
        color={change >= 0 ? "#34c759" : "#ff3b30"} 
      />
      <Text style={[styles.insightChangeText, { color: change >= 0 ? "#34c759" : "#ff3b30" }]}>
        {Math.abs(change)}%
      </Text>
    </View>
  </View>
);

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning,</Text>
          <Text style={styles.userName}>Sarah</Text>
        </View>
        <Pressable style={styles.notificationButton}>
          <Ionicons name="notifications-outline" size={24} color="#1a1a2e" />
          <View style={styles.notificationBadge} />
        </Pressable>
      </View>

      {/* Weather & UV Index */}
      <View style={styles.weatherSection}>
        <View style={styles.weatherCard}>
          <Ionicons name="sunny-outline" size={24} color="#ff9500" />
          <View style={styles.weatherInfo}>
            <Text style={styles.weatherTitle}>UV Index</Text>
            <Text style={styles.weatherValue}>High (8)</Text>
          </View>
          <Text style={styles.weatherAlert}>Apply sunscreen!</Text>
        </View>
        <View style={styles.weatherCard}>
          <Ionicons name="water-outline" size={24} color="#007aff" />
          <View style={styles.weatherInfo}>
            <Text style={styles.weatherTitle}>Humidity</Text>
            <Text style={styles.weatherValue}>65%</Text>
          </View>
        </View>
      </View>

      {/* Streak Card */}
      <View style={styles.section}>
        <StreakCard />
      </View>

      {/* Tip of the Day */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tip of the Day</Text>
        <TipCard 
          tip="Apply your products on damp skin to lock in hydration and improve absorption."
          source="Dr. Sarah Wilson, Dermatologist"
        />
      </View>

      {/* Daily Routines */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Today's Routines</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <RoutineCard time="Morning" title="Morning Routine" steps={4} />
          <RoutineCard time="Evening" title="Evening Routine" steps={5} />
        </ScrollView>
      </View>



      {/* Product Recommendations */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recommended for You</Text>
          <Link href="/products" asChild>
            <Pressable>
              <Text style={styles.seeAllButton}>See All</Text>
            </Pressable>
          </Link>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductCard
            title="Hydrating Serum"
            brand="The Ordinary"
            price={6.99}
            image="https://images.surferseo.art/fdc14bc4-971d-4ef1-b5d8-ae385a899d76.jpeg"
          />
          <ProductCard
            title="Moisturizer"
            brand="CeraVe"
            price={15.99}
            image="https://www.simpleskincare.in/cdn/shop/articles/Here_s_Why_You_Need_A_Night_Cream_In_Your_PM_Routine_1200x600_crop_center.jpg?v=1712562771"
          />
          <ProductCard
            title="Sunscreen"
            brand="La Roche-Posay"
            price={33.50}
            image="https://m.media-amazon.com/images/I/61kqdtuuRCL._AC_UF1000,1000_QL80_.jpg"
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
    paddingTop: 60,
  },
  greeting: {
    fontSize: 16,
    color: '#666',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  notificationButton: {
    position: 'relative',
    padding: 8,
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ff3b30',
  },
  scanSection: {
    padding: 20,
  },
  scanButton: {
    backgroundColor: '#1a1a2e',
    borderRadius: 16,
    padding: 20,
  },
  scanContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scanTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  scanSubtitle: {
    color: '#fff',
    opacity: 0.8,
  },
  scanIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#1a1a2e',
  },
  routineCard: {
    width: 160,
    height: 180,
    marginRight: 15,
    borderRadius: 16,
    overflow: 'hidden',
  },
  routineGradient: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
  },
  routineTime: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 14,
  },
  routineTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  routineSteps: {
    color: '#fff',
    opacity: 0.8,
    fontSize: 14,
  },
  statusCard: {
    flexDirection: 'row',
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
  },
  statusItem: {
    flex: 1,
    alignItems: 'center',
  },
  statusValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 4,
  },
  statusLabel: {
    fontSize: 14,
    color: '#666',
  },
  statusDivider: {
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 15,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  actionCard: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 15,
    alignItems: 'center',
  },
  actionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 14,
    color: '#1a1a2e',
    fontWeight: '500',
  },
  lastSection: {
    paddingBottom: 100,
  },
  weatherSection: {
    flexDirection: 'row',
    padding: 20,
    gap: 15,
  },
  weatherCard: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  weatherInfo: {
    marginLeft: 12,
    flex: 1,
  },
  weatherTitle: {
    fontSize: 14,
    color: '#666',
  },
  weatherValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  weatherAlert: {
    fontSize: 12,
    color: '#ff3b30',
    fontWeight: '500',
  },
  goalCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 15,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  goalContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  goalIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  goalInfo: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: '#1a1a2e',
  },
  progressBar: {
    height: 4,
    backgroundColor: '#e9ecef',
    borderRadius: 2,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#1a1a2e',
  },
  goalProgress: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a2e',
    marginLeft: 12,
  },
  tipCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  tipContent: {
    marginLeft: 15,
    flex: 1,
  },
  tipText: {
    fontSize: 16,
    color: '#1a1a2e',
    lineHeight: 22,
    marginBottom: 8,
  },
  tipSource: {
    fontSize: 14,
    color: '#666',
    fontStyle: 'italic',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  seeAllButton: {
    fontSize: 14,
    color: '#666',
  },
  progressRing: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 30,
  },
  progressBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 30,
    borderWidth: 6,
    borderColor: '#1a1a2e',
  },
  progressText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  productCard: {
    width: 160,
    marginRight: 15,
    backgroundColor: '#fff',
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#f5f5f5',
  },
  productInfo: {
    padding: 12,
  },
  productBrand: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  streakCard: {
    borderRadius: 16,
    overflow: 'hidden',
  },
  streakGradient: {
    padding: 20,
  },
  streakHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  streakTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  streakCount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  streakSubtitle: {
    color: '#fff',
    opacity: 0.8,
  },
  insightsScroll: {
    marginLeft: -8,
  },
  insightCard: {
    width: 140,
    backgroundColor: '#f8f9fa',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 8,
  },
  insightTitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  insightValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    marginBottom: 8,
  },
  insightChange: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  insightChangeText: {
    fontSize: 14,
    fontWeight: '500',
    marginLeft: 4,
  },
}); 