import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Charts from "@Screens/charts";
import IntentTest from "@Screens/intents-tests";
import LoginFormScreen from "@Screens/login-form";
import EditableFormScreen from "@Screens/editable-form";
import Loading from "@Screens/loading";
import Pan from "@Screens/pan";

export default class Root extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <IntentTest /> */}
                {/* <Charts /> */}
                {/* <LoginFormScreen /> */}
                {/* <EditableFormScreen /> */}
                <Loading />
                {/* <Pan /> */}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

