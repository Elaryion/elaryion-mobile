import { View, Text, StyleSheet, ScrollView, Pressable, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ImageWithFallback } from '../utils/ImageWithFallback';
import { useState, useCallback } from 'react';
import { products, categories, Product } from '../data/products';

type CategoryChipProps = {
  title: string;
  selected: boolean;
  onPress: () => void;
};

const ProductCard = ({ title, brand, price, image }: Product) => (
  <Pressable style={styles.productCard}>
    <ImageWithFallback
      source={image ? { uri: image } : { uri: 'https://rhiannonbosse.com/wp-content/uploads/2020/03/RhisBeautyFaves3.jpg' }}
      style={styles.productImage}
      fallbackSize={30}
    />
    <View style={styles.productInfo}>
      <Text style={styles.productTitle}>{title}</Text>
      <Text style={styles.productBrand}>{brand}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.productPrice}>${price.toFixed(2)}</Text>
        <Pressable style={styles.cartButton}>
          <Ionicons name="bag-outline" size={20} color="#1a1a2e" />
        </Pressable>
      </View>
    </View>
  </Pressable>
);

const CategoryChip = ({ title, selected, onPress }: CategoryChipProps) => (
  <Pressable 
    style={[styles.categoryChip, selected && styles.selectedChip]}
    onPress={onPress}
  >
    <Text style={[styles.categoryText, selected && styles.selectedCategoryText]}>
      {title}
    </Text>
  </Pressable>
);

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>(categories[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useCallback(() => {
    return products.filter(product => {
      const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
      const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const recommendedProducts = filteredProducts().filter(p => p.isRecommended);
  const popularProducts = filteredProducts().filter(p => p.isPopular);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable>
          <Ionicons name="chevron-back" size={24} color="#000" />
        </Pressable>
        <Text style={styles.headerTitle}>Products</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#666" style={styles.searchIcon} />
        <TextInput 
          placeholder="Search the library"
          style={styles.searchInput}
          placeholderTextColor="#666"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.bannerContainer}>
        <ImageWithFallback 
          source={{ uri: 'https://rhiannonbosse.com/wp-content/uploads/2020/03/RhisBeautyFaves3.jpg' }}
          style={styles.bannerImage}
          resizeMode="cover"
          fallbackSize={48}
        />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Find best{'\n'}Beauty{'\n'}Product.</Text>
        </View>
      </View>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <CategoryChip
            key={category.id}
            title={category.title}
            selected={selectedCategory === category.id}
            onPress={() => setSelectedCategory(category.id)}
          />
        ))}
      </ScrollView>

      {recommendedProducts.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>RECOMMENDED</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.recommendedScroll}
          >
            {recommendedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </ScrollView>
        </View>
      )}

      {popularProducts.length > 0 && (
        <View style={[styles.section, styles.lastSection]}>
          <Text style={styles.sectionTitle}>POPULAR</Text>
          <View style={styles.popularGrid}>
            {popularProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </View>
        </View>
      )}
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
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    margin: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  bannerContainer: {
    margin: 20,
    height: 200,
    borderRadius: 15,
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  bannerContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
    justifyContent: 'center',
  },
  bannerTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    lineHeight: 40,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryChip: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    marginRight: 10,
  },
  selectedChip: {
    backgroundColor: '#1a1a2e',
  },
  categoryText: {
    color: '#666',
    fontSize: 14,
  },
  selectedCategoryText: {
    color: '#fff',
  },
  section: {
    padding: 20,
  },
  lastSection: {
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  recommendedScroll: {
    marginLeft: -5,
  },
  productCard: {
    marginHorizontal: 5,
    width: 160,
    marginBottom: 15,
  },
  productImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#f5f5f5',
  },
  productPlaceholder: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  productInfo: {
    paddingHorizontal: 5,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  productBrand: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a2e',
  },
  cartButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popularGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
}); 