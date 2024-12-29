import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';

type IngredientDetail = {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  howToUse: string[];
  precautions: string[];
  image: string;
  safetyLevel: 'Safe' | 'Moderate' | 'Use with Caution';
  scientificName: string;
  concentration: string;
};

const ingredientDetails: Record<string, IngredientDetail> = {
  '1': {
    id: '1',
    name: 'Hyaluronic Acid',
    category: 'Humectant',
    description: 'A powerful moisturizing ingredient that can hold up to 1000x its weight in water.',
    benefits: [
      'Intense hydration',
      'Plumping effect',
      'Reduces fine lines',
      'Improves skin texture'
    ],
    howToUse: [
      'Apply to damp skin',
      'Use morning and night',
      'Layer under moisturizer',
      'Can be used with other actives'
    ],
    precautions: [
      'Use in humid environments',
      'May need to layer with occlusive',
      'Different molecular weights work differently'
    ],
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19',
    safetyLevel: 'Safe',
    scientificName: 'Sodium Hyaluronate',
    concentration: '1-2%'
  },
  '4': {
    id: '4',
    name: 'Niacinamide',
    category: 'Vitamin B3',
    description: 'A versatile ingredient that helps with multiple skin concerns including oil control, pore appearance, and brightening.',
    benefits: [
      'Regulates oil production',
      'Minimizes pore appearance',
      'Improves uneven skin tone',
      'Strengthens skin barrier',
      'Reduces inflammation'
    ],
    howToUse: [
      'Can be used morning and night',
      'Works well in 2-5% concentration',
      'Pairs well with most ingredients',
      'Apply before moisturizer'
    ],
    precautions: [
      'May cause flushing in sensitive skin',
      'Start with lower concentration',
      'Avoid mixing with pure vitamin C'
    ],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be',
    safetyLevel: 'Safe',
    scientificName: 'Nicotinamide',
    concentration: '2-5%'
  },
  '6': {
    id: '6',
    name: 'AHA/BHA',
    category: 'Chemical Exfoliants',
    description: 'A combination of alpha and beta hydroxy acids that provide both surface and deep pore exfoliation.',
    benefits: [
      'Removes dead skin cells',
      'Unclogs pores',
      'Improves skin texture',
      'Reduces acne',
      'Evens skin tone'
    ],
    howToUse: [
      'Start 1-2 times per week',
      'Use in evening routine',
      'Apply to clean, dry skin',
      'Always follow with sunscreen'
    ],
    precautions: [
      'Can increase sun sensitivity',
      'Not for sensitive skin',
      'Avoid using with retinol',
      'May cause initial purging'
    ],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    safetyLevel: 'Use with Caution',
    scientificName: 'Various Hydroxy Acids',
    concentration: 'AHA 5-10%, BHA 1-2%'
  },
  '5': {
    id: '5',
    name: 'Peptides',
    category: 'Anti-aging Actives',
    description: 'Short chains of amino acids that signal skin cells to perform specific functions, particularly collagen production.',
    benefits: [
      'Boosts collagen production',
      'Improves skin firmness',
      'Reduces fine lines',
      'Enhances skin barrier',
      'Promotes wound healing'
    ],
    howToUse: [
      'Can be used twice daily',
      'Apply after cleansing',
      'Layer under heavier products',
      'Best used consistently'
    ],
    precautions: [
      'Check specific peptide type',
      'May not work with direct acids',
      'Results take time to show',
      'Store properly to maintain stability'
    ],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03',
    safetyLevel: 'Safe',
    scientificName: 'Various Peptides',
    concentration: 'Varies by type'
  },
  '3': {
    id: '3',
    name: 'Retinol',
    category: 'Vitamin A Derivative',
    description: 'A powerful anti-aging ingredient that promotes cell turnover and collagen production.',
    benefits: [
      'Reduces fine lines and wrinkles',
      'Improves skin texture',
      'Helps with acne',
      'Evens skin tone',
      'Boosts collagen'
    ],
    howToUse: [
      'Start with lower concentration',
      'Use in evening only',
      'Apply to clean, dry skin',
      'Build up frequency gradually'
    ],
    precautions: [
      'Can cause irritation',
      'Increases sun sensitivity',
      'Not for pregnant women',
      'Avoid mixing with acids'
    ],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    safetyLevel: 'Use with Caution',
    scientificName: 'Retinol/Retinal',
    concentration: '0.25-1%'
  },
  '2': {
    id: '2',
    name: 'Vitamin C',
    category: 'Antioxidant',
    description: 'A potent antioxidant that brightens skin, fights free radicals, and boosts collagen production.',
    benefits: [
      'Brightens complexion',
      'Fights free radicals',
      'Boosts collagen production',
      'Fades dark spots',
      'Improves skin texture'
    ],
    howToUse: [
      'Best used in the morning',
      'Apply to clean skin',
      'Follow with sunscreen',
      'Store in dark, cool place'
    ],
    precautions: [
      'Can oxidize easily',
      'May irritate sensitive skin',
      'Avoid mixing with niacinamide',
      'Check product pH'
    ],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03',
    safetyLevel: 'Moderate',
    scientificName: 'L-Ascorbic Acid',
    concentration: '10-20%'
  }
};

export default function IngredientDetails() {
  const { id } = useLocalSearchParams();
  const ingredient = ingredientDetails[id as string];

  if (!ingredient) {
    return (
      <View style={styles.container}>
        <Text>Ingredient not found</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <Image source={{ uri: ingredient.image }} style={styles.coverImage} />
        
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
          </Pressable>
        </View>

        <View style={styles.ingredientContent}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{ingredient.name}</Text>
            <View style={[
              styles.safetyBadge,
              {
                backgroundColor: 
                  ingredient.safetyLevel === 'Safe' ? '#e8f5e9' :
                  ingredient.safetyLevel === 'Moderate' ? '#fff3e0' : '#ffebee'
              }
            ]}>
              <Text style={[
                styles.safetyText,
                {
                  color: 
                    ingredient.safetyLevel === 'Safe' ? '#2e7d32' :
                    ingredient.safetyLevel === 'Moderate' ? '#f57c00' : '#c62828'
                }
              ]}>{ingredient.safetyLevel}</Text>
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Category</Text>
              <Text style={styles.infoValue}>{ingredient.category}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Scientific Name</Text>
              <Text style={styles.infoValue}>{ingredient.scientificName}</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Concentration</Text>
              <Text style={styles.infoValue}>{ingredient.concentration}</Text>
            </View>
          </View>

          <Text style={styles.description}>{ingredient.description}</Text>

          <Text style={styles.sectionTitle}>Benefits</Text>
          <View style={styles.listContainer}>
            {ingredient.benefits.map((benefit, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                <Text style={styles.listText}>{benefit}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>How to Use</Text>
          <View style={styles.listContainer}>
            {ingredient.howToUse.map((instruction, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons name="information-circle" size={20} color="#2196F3" />
                <Text style={styles.listText}>{instruction}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.sectionTitle}>Precautions</Text>
          <View style={styles.listContainer}>
            {ingredient.precautions.map((precaution, index) => (
              <View key={index} style={styles.listItem}>
                <Ionicons name="warning" size={20} color="#FFC107" />
                <Text style={styles.listText}>{precaution}</Text>
              </View>
            ))}
          </View>
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
  ingredientContent: {
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
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a2e',
    flex: 1,
  },
  safetyBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  safetyText: {
    fontSize: 12,
    fontWeight: '500',
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  infoItem: {
    flex: 1,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 14,
    color: '#1a1a2e',
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
  listContainer: {
    marginBottom: 24,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  listText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 12,
    flex: 1,
  },
}); 