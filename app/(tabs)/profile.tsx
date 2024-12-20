import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type FactorProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value: string;
};

const Factor = ({ icon, title, subtitle, value }: FactorProps) => (
  <View style={styles.factorContainer}>
    <View style={styles.factorLeft}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <View>
        <Text style={styles.factorTitle}>{title}</Text>
        <Text style={styles.factorSubtitle}>{subtitle}</Text>
      </View>
    </View>
    <Text style={styles.factorValue}>{value}</Text>
  </View>
);

const ProfilePlaceholder = () => (
  <View style={styles.profilePlaceholder}>
    <Ionicons name="person" size={40} color="#666" />
  </View>
);

export default function Profile() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.push("/home")}>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Profile</Text>
        <Pressable onPress={() => router.push('/settings')}>
          <Ionicons name="settings-outline" size={24} color="#000" />
        </Pressable>
      </View>

      <View style={styles.profileSection}>
        <ProfilePlaceholder />
        <Text style={styles.name}>Jesica Bren</Text>
      </View>

      <Text style={styles.sectionTitle}>Factors</Text>

      <Factor
        icon={<Ionicons name="body-outline" size={24} color="#1a1a2e" />}
        title="Skin Type"
        subtitle="Skin characteristics"
        value="Combination"
      />
      <Factor
        icon={<Ionicons name="water-outline" size={24} color="#1a1a2e" />}
        title="Oiliness"
        subtitle="Sebum protection"
        value="Normal"
      />
      <Factor
        icon={<Ionicons name="grid-outline" size={24} color="#1a1a2e" />}
        title="Texture"
        subtitle="Surface feel"
        value="Smooth"
      />
      <Factor
        icon={<Ionicons name="color-palette-outline" size={24} color="#1a1a2e" />}
        title="Tone"
        subtitle="Color consistency"
        value="Even"
      />
      <Factor
        icon={<Ionicons name="fitness-outline" size={24} color="#1a1a2e" />}
        title="Elasticity"
        subtitle="Skin firmness"
        value="Good"
      />
      <Factor
        icon={<Ionicons name="leaf-outline" size={24} color="#1a1a2e" />}
        title="Sensitivity"
        subtitle="Reactivity"
        value="Sensitive"
      />

      <Pressable 
        style={styles.historyButton}
        onPress={() => router.push('/scan-history')}
      >
        <Text style={styles.historyButtonText}>See past scan results</Text>
        <Ionicons name="chevron-forward" size={20} color="#666" />
      </Pressable>
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
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  editButton: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 20,
  },
  factorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  factorLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#f8f8f8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  factorTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  factorSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  factorValue: {
    fontSize: 16,
    color: '#1a1a2e',
  },
  historyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f0f0',
    margin: 20,
    padding: 15,
    borderRadius: 12,
  },
  historyButtonText: {
    fontSize: 16,
    color: '#666',
    marginRight: 5,
  },
}); 