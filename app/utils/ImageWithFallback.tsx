import React, { useState } from 'react';
import { Image, ImageProps, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface ImageWithFallbackProps extends ImageProps {
  fallbackSize?: number;
  fallbackColor?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  style,
  fallbackSize = 30,
  fallbackColor = "#666",
  ...props
}) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <View style={[style, { justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5' }]}>
        <Ionicons name="image-outline" size={fallbackSize} color={fallbackColor} />
      </View>
    );
  }

  return (
    <Image
      {...props}
      style={style}
      onError={() => setError(true)}
    />
  );
}; 