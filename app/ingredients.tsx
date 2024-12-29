import { View, Text, StyleSheet, ScrollView, Pressable, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

type Ingredient = {
  id: string;
  name: string;
  category: string;
  description: string;
  benefits: string[];
  image: string;
  safetyLevel: 'Safe' | 'Moderate' | 'Use with Caution';
};

const ingredients: Ingredient[] = [
  {
    id: '1',
    name: 'Hyaluronic Acid',
    category: 'Humectant',
    description: 'A powerful moisturizing ingredient that can hold up to 1000x its weight in water.',
    benefits: ['Hydration', 'Plumping', 'Anti-aging'],
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19',
    safetyLevel: 'Safe'
  },
  {
    id: '2',
    name: 'Vitamin C',
    category: 'Antioxidant',
    description: 'A potent antioxidant that brightens skin and protects against environmental damage.',
    benefits: ['Brightening', 'Collagen production', 'Sun protection'],
    image: 'https://images.unsplash.com/photo-1577003811926-53b288a6e5d0',
    safetyLevel: 'Moderate'
  },
  {
    id: '3',
    name: 'Retinol',
    category: 'Vitamin A',
    description: 'A derivative of vitamin A that promotes cell turnover and collagen production.',
    benefits: ['Anti-aging', 'Acne treatment', 'Skin renewal'],
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883',
    safetyLevel: 'Use with Caution'
  },
  {
    id: '4',
    name: 'Niacinamide',
    category: 'Vitamin B3',
    description: 'A versatile ingredient that helps with multiple skin concerns.',
    benefits: ['Pore reduction', 'Oil control', 'Brightening'],
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03',
    safetyLevel: 'Safe'
  },
  {
    id: '5',
    name: 'Peptides',
    category: 'Proteins',
    description: 'Short chains of amino acids that help build proteins like collagen and elastin.',
    benefits: ['Firming', 'Anti-aging', 'Skin repair'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    safetyLevel: 'Safe'
  },
  {
    id: '6',
    name: 'AHA/BHA',
    category: 'Chemical Exfoliants',
    description: 'A combination of alpha and beta hydroxy acids that provide both surface and deep pore exfoliation.',
    benefits: ['Exfoliation', 'Pore cleansing', 'Texture improvement'],
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    safetyLevel: 'Use with Caution'
  }
];

const IngredientCard = ({ ingredient }: { ingredient: Ingredient }) => (
  <Pressable 
    style={styles.ingredientCard}
    onPress={() => router.push({
      pathname: '/ingredient-details',
      params: { id: ingredient.id }
    })}
  >
    <Image source={{ uri: ingredient.image }} style={styles.ingredientImage} />
    <View style={styles.ingredientContent}>
      <View style={styles.ingredientHeader}>
        <Text style={styles.ingredientName}>{ingredient.name}</Text>
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
      <Text style={styles.category}>{ingredient.category}</Text>
      <Text style={styles.description}>{ingredient.description}</Text>
      <View style={styles.benefitsContainer}>
        {ingredient.benefits.map((benefit, index) => (
          <View key={index} style={styles.benefitBadge}>
            <Text style={styles.benefitText}>{benefit}</Text>
          </View>
        ))}
      </View>
    </View>
  </Pressable>
);

export default function Ingredients() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.title}>Ingredients</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView style={styles.content}>
        <Text style={styles.subtitle}>
          Learn about common skincare ingredients and their benefits
        </Text>

        {ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient} />
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
  ingredientCard: {
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
  ingredientImage: {
    width: '100%',
    height: 160,
    backgroundColor: '#f5f5f5',
  },
  ingredientContent: {
    padding: 20,
  },
  ingredientHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  ingredientName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  category: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 16,
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
  benefitsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  benefitBadge: {
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 8,
  },
  benefitText: {
    fontSize: 12,
    color: '#666',
  },
}); 