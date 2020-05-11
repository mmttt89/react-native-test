import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Charts from "@Screens/charts";
import IntentTest from "@Screens/intents-tests";
import LoginFormScreen from "@Screens/login-form";
import EditableFormScreen from "@Screens/editable-form";

export default class Root extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <IntentTest />
                {/* <Charts /> */}
                {/* <LoginFormScreen /> */}
                {/* <EditableFormScreen /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

