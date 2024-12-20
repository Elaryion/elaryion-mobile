import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CameraView, Camera } from 'expo-camera';
import { useState } from 'react';
import { router } from 'expo-router';

const ScanInstructions = () => (
  <View style={styles.instructionsContainer}>
    <View style={styles.instructionItem}>
      <Ionicons name="happy-outline" size={24} color="#1a1a2e" />
      <Text style={styles.instructionText}>Relax your face</Text>
    </View>
    <View style={styles.instructionItem}>
      <Ionicons name="water-outline" size={24} color="#1a1a2e" />
      <Text style={styles.instructionText}>Do not apply any products</Text>
    </View>
    <View style={styles.instructionItem}>
      <Ionicons name="sunny-outline" size={24} color="#1a1a2e" />
      <Text style={styles.instructionText}>Sit in a good lighting</Text>
    </View>
    <View style={styles.instructionItem}>
      <Ionicons name="time-outline" size={24} color="#1a1a2e" />
      <Text style={styles.instructionText}>Stay still for a few seconds</Text>
    </View>
  </View>
);

const FaceOutline = () => (
  <View style={styles.faceOutline}>
    {/* Eyes */}
    <View style={styles.eyesContainer}>
      <View style={styles.eye} />
      <View style={styles.eye} />
    </View>
    
    {/* Nose */}
    <View style={styles.nose} />
    
    {/* Mouth */}
    <View style={styles.mouth} />
  </View>
);

export default function FaceScan() {
  const [startCamera, setStartCamera] = useState(false);

  const startCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setStartCamera(true);
    }
  };

  if (startCamera) {
    return (
      <View style={styles.container}>
        <CameraView 
          style={styles.camera}
          facing="front"
        >
          <View style={styles.overlay}>
            <View style={styles.cameraFrame}>
              <FaceOutline />
            </View>
            <Pressable 
              style={styles.closeButton}
              onPress={() => setStartCamera(false)}
            >
              <Ionicons name="close" size={32} color="#fff" />
            </Pressable>
          </View>
        </CameraView>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Face Scan</Text>
        <Text style={styles.subtitle}>
          Analyze your skin condition with AI
        </Text>
      </View>

      <View style={styles.content}>
        <ScanInstructions />
      </View>

      <View style={styles.footer}>
        <Pressable 
          style={styles.scanButton}
          onPress={startCameraHandler}
        >
          <Text style={styles.scanButtonText}>Start Scan</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  camera: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    marginBottom: 40,
    paddingHorizontal: 20,
    position: 'relative',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  scanArea: {
    alignItems: 'center',
    marginBottom: 20,
  },
  cameraFrame: {
    width: 280,
    height: 380,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 140,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  faceOutline: {
    width: '75%',
    height: '85%',
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'dashed',
    borderRadius: 120,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.7,
  },
  eyesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    position: 'absolute',
    top: '30%',
  },
  eye: {
    width: 12,
    height: 6,
    backgroundColor: '#fff',
    borderRadius: 6,
    opacity: 0.7,
  },
  nose: {
    width: 8,
    height: 14,
    backgroundColor: '#fff',
    borderRadius: 4,
    position: 'absolute',
    top: '48%',
    opacity: 0.7,
  },
  mouth: {
    width: 30,
    height: 8,
    backgroundColor: '#fff',
    borderRadius: 10,
    position: 'absolute',
    top: '65%',
    opacity: 0.7,
  },
  scanText: {
    marginTop: 16,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: -40,
  },
  instructionsContainer: {
    padding: 20,
    marginBottom: 20,
  },
  instructionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  instructionText: {
    marginLeft: 12,
    fontSize: 16,
    color: '#1a1a2e',
  },
  scanButton: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 40,
    right: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  footer: {
    padding: 20,
    paddingBottom: 40, // Bottom tab bar için extra padding
  },
  settingsButton: {
    position: 'absolute',
    top: 0,
    right: 20,
    padding: 8,
  },
}); 