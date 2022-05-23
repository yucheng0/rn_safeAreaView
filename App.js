import React from "react";
import { Text, View, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";

const App = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.container0}>
      <Text style={{ color: "#fff" }}>
        Notice that the status bar has light text!
      </Text>
      {/* 狀態列字的顏色 */}
      {/* <ExpoStatusBar style="Dark" /> */}
    </View>
    {/* 狀態列字的顏色 auto 自動判斷, 目前預設Dark
    目前使用的是expo 所提供的狀態條而非React 原生的
     */}
    <ExpoStatusBar style="auto" hidden={false} />
  </SafeAreaView>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container0: {
    flex: 1,
    backgroundColor: "#000",
    // alignItems: "center",
    // justifyContent: "center",

    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
