import { Image } from 'expo-image';
import { Platform, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const steps = [
    { title: 'Step 1: Try it', contentKey: 'step1' },
    { title: 'Step 2: Explore', contentKey: 'step2' },
    { title: 'Step 3: Get a fresh start', contentKey: 'step3' },
  ];
  // filter steps by search query
  const filteredSteps = steps.filter(s =>
    s.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#000000ff', dark: '#000000ff' }}
      headerImage={
        <Image
          source={require('@/assets/images/header-img.png')}
          style={styles.homeBgrd}
        />
      }
    >
      {/* search bar */}
      <ThemedView style={{ padding: 10 }}>
        <TextInput
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
          style={{
            backgroundColor: '#fff',
            paddingHorizontal: 12,
            paddingVertical: 8,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#ccc',
          }}
        />
      </ThemedView>

      {filteredSteps.map(step => {
        switch (step.contentKey) {
          case 'step1':
            return (
              <ThemedView key={step.contentKey} style={styles.stepContainer}>
                <ThemedText type="subtitle">{step.title}</ThemedText>
                <ThemedText>
                  Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
                  Press{' '}
                  <ThemedText type="defaultSemiBold">
                    {Platform.select({
                      ios: 'cmd + d',
                      android: 'cmd + m',
                      web: 'F12',
                    })}
                  </ThemedText>{' '}
                  to open developer tools.
                </ThemedText>
              </ThemedView>
            );
          case 'step2':
            return (
              <ThemedView key={step.contentKey} style={styles.stepContainer}>
                <Link href="/modal">
                  <Link.Trigger>
                    <ThemedText type="subtitle">{step.title}</ThemedText>
                  </Link.Trigger>
                  <Link.Preview />
                  <Link.Menu>
                    <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
                    <Link.MenuAction title="Share" icon="square.and.arrow.up" onPress={() => alert('Share pressed')} />
                    <Link.Menu title="More" icon="ellipsis">
                      <Link.MenuAction
                        title="Delete"
                        icon="trash"
                        destructive
                        onPress={() => alert('Delete pressed')}
                      />
                    </Link.Menu>
                  </Link.Menu>
                </Link>
                <ThemedText>
                  {`Tap the Explore tab to learn more about what's included in this starter app.`}
                </ThemedText>
              </ThemedView>
            );
          case 'step3':
            return (
              <ThemedView key={step.contentKey} style={styles.stepContainer}>
                <ThemedText type="subtitle">{step.title}</ThemedText>
                <ThemedText>
                  {`When you're ready, run `}
                  <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
                  <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
                  <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
                  <ThemedText type="defaultSemiBold">app-example</ThemedText>.
                </ThemedText>
              </ThemedView>
            );
        }
      })}

      {/* Page title */}
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  homeBgrd: {
    height: 320,
    width: 1520,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});