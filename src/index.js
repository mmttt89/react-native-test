import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Charts from "@Screens/charts";
import IntentTest from "@Screens/intents-tests";
import FormScreen from "@Screens/form";
import EditableScreen from "@Screens/editable";

export default class Root extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <Charts /> */}
                {/* <IntentTest/> */}
                {/* <FormScreen /> */}
                <EditableScreen />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

