import {View, Text, SafeAreaView, ScrollView, StatusBar} from 'react-native';
import React from 'react';
import WebView from 'react-native-webview';

const App = () => {
  const jsCode = `
  setTimeout(() => {
    document.getElementsByClassName('sb-close')[0].click();
  }, 3000);`;
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <WebView
        source={{uri: 'https://turkiye.gov.tr/'}}
        style={{marginTop: 20}}
        injectedJavaScript={jsCode}
      />
      {/* <WebView
        originWhitelist={['*']}
        source={{html: '<h1>Hello world</h1>'}}
      /> */}
    </SafeAreaView>
  );
};

export default App;
