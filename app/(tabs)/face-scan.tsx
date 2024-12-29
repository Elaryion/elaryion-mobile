import { View, Text, StyleSheet, Pressable, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CameraView, Camera } from 'expo-camera';
import { useState } from 'react';
import { router } from 'expo-router';
import * as FileSystem from 'expo-file-system';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = "http://localhost:5050"; // API URL'ini kendi sunucunuzla değiştirin

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
    <View style={styles.eyesContainer}>
      <View style={styles.eye} />
      <View style={styles.eye} />
    </View>
    <View style={styles.nose} />
    <View style={styles.mouth} />
  </View>
);

export default function FaceScan() {
  const [startCamera, setStartCamera] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [camera, setCamera] = useState<CameraView | null>(null);

  const startCameraHandler = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === 'granted') {
      setStartCamera(true);
    } else {
      alert('Camera permission is required to use this feature');
    }
  };

  const saveScanResult = async (imageData: string) => {
    try {
      // Mevcut kayıtları al
      const existingScansStr = await AsyncStorage.getItem('scanHistory');
      const existingScans = existingScansStr ? JSON.parse(existingScansStr) : [];

      // Yeni tarama sonucunu oluştur
      const newScan = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        imageData: imageData,
        skinType: 'Combination', // API'den gelecek
        concerns: ['Analyzing...'], // API'den gelecek
        score: 85, // API'den gelecek
      };

      // Yeni taramayı listeye ekle
      const updatedScans = [newScan, ...existingScans];

      // Güncellenmiş listeyi kaydet
      await AsyncStorage.setItem('scanHistory', JSON.stringify(updatedScans));

      // Bildirim oluştur
      await createNotification({
        title: 'Skin Analysis Complete',
        message: `Your skin analysis is ready with a score of ${newScan.score}. View the detailed results now.`,
        type: 'success'
      });

      return newScan.id;
    } catch (error) {
      console.error('Error saving scan result:', error);
      throw error;
    }
  };

  const createNotification = async ({ title, message, type }: { title: string; message: string; type: 'info' | 'warning' | 'success' }) => {
    try {
      const notificationsStr = await AsyncStorage.getItem('notifications');
      const notifications = notificationsStr ? JSON.parse(notificationsStr) : [];

      const newNotification = {
        id: Date.now().toString(),
        title,
        message,
        time: new Date().toLocaleString(),
        read: false,
        type,
      };

      const updatedNotifications = [newNotification, ...notifications];
      await AsyncStorage.setItem('notifications', JSON.stringify(updatedNotifications));
    } catch (error) {
      console.error('Error creating notification:', error);
    }
  };

  const takePicture = async () => {
    if (!camera) return;

    try {
      setIsProcessing(true);
      
      const photo = await camera.takePictureAsync({
        quality: 0.7,
        base64: true,
      });

      if (!photo || !photo.base64) {
        throw new Error('Failed to take photo');
      }

      const response = await fetch(API_URL, {
        method: 'POST',
        mode: 'cors',
        credentials: 'omit',
        headers: {
          'Content-Type': 'text/plain',
          'Accept': 'text/plain',
        },
        body: photo.base64,
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      const resultBase64 = await response.text();
      
      // Tarama sonucunu kaydet
      const scanId = await saveScanResult(resultBase64);
      
      if (Platform.OS === 'web') {
        router.push({
          pathname: '/scan-details',
          params: { 
            imageData: resultBase64,
            scanId: scanId
          }
        });
      } else {
        const resultPath = FileSystem.documentDirectory + 'scan-result.jpg';
        await FileSystem.writeAsStringAsync(
          resultPath,
          resultBase64,
          { encoding: FileSystem.EncodingType.Base64 }
        );
        router.push({
          pathname: '/scan-details',
          params: { 
            imagePath: resultPath,
            scanId: scanId
          }
        });
      }

    } catch (error) {
      console.error('Error during face scan:', error);
      alert('An error occurred during face scan. Please try again.');
    } finally {
      setIsProcessing(false);
      setStartCamera(false);
    }
  };

  if (startCamera) {
    return (
      <View style={styles.container}>
        <CameraView 
          style={styles.camera}
          facing="front"
          ref={(ref) => setCamera(ref)}
        >
          <View style={styles.overlay}>
            <View style={styles.cameraFrame}>
              <FaceOutline />
              {isProcessing && (
                <View style={styles.processingOverlay}>
                  <ActivityIndicator size="large" color="#fff" />
                  <Text style={styles.processingText}>Processing...</Text>
                </View>
              )}
            </View>
            <Pressable 
              style={styles.closeButton}
              onPress={() => setStartCamera(false)}
            >
              <Ionicons name="close" size={32} color="#fff" />
            </Pressable>
            {!isProcessing && (
              <Pressable 
                style={styles.captureButton}
                onPress={takePicture}
              >
                <View style={styles.captureOuter}>
                  <View style={styles.captureInner} />
                </View>
              </Pressable>
            )}
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
    paddingBottom: 40,
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
  },
  captureOuter: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  captureInner: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  processingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 140,
  },
  processingText: {
    color: '#fff',
    marginTop: 12,
    fontSize: 16,
  },
});