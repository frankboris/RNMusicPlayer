import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>

        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

export default App;
