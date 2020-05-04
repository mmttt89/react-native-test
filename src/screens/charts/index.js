import React from "react";
import { View, Text, StyleSheet, Dimensions, Button, TouchableHighlight } from "react-native";
import {
    LineChart,
} from "react-native-chart-kit";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

export default class Charts extends React.Component {
    state = {
        data2: []
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold", color: "teal" }}>Charts Section</Text>
                </View>
                <View style={{ paddingVertical: 0.05 * height, alignItems: 'center', height: (0.4 * height) }}>
                    <Text style={{ fontWeight: "bold", color: "orange" }}>Line Chart</Text>
                    <LineChart
                        data={{
                            labels: ["January", "February", "March", "April", "May", "June"],
                            datasets: this.state.data2.length !== 0 ? [
                                {
                                    data: [10, 30, 40, 20, 50, 12]
                                },
                                {
                                    data: this.state.data2,
                                    color: (opacity = 1) => `rgba(128, 11, 163, ${opacity})`, // optional
                                    strokeWidth: 2 // optional
                                }
                            ]
                                :
                                [
                                    {
                                        data: [10, 30, 40, 20, 50, 12]
                                    }
                                ]
                        }}
                        width={width} // from react-native
                        height={0.4 * height}
                        yAxisLabel="$"
                        yAxisSuffix=""
                        yAxisInterval={1} // optional, defaults to 1
                        chartConfig={{
                            backgroundColor: "#e26a00",
                            backgroundGradientFrom: "teal",
                            decimalPlaces: 1, // optional, defaults to 2dp
                            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                            style: {
                                borderRadius: 16
                            },
                            propsForDots: {
                                r: "6",
                                strokeWidth: "2",
                                stroke: "#ffa726"
                            }
                        }}
                        bezier
                        style={{
                            marginVertical: 8,
                            borderRadius: 16
                        }}
                    />
                </View>
                <View style={{ paddingTop: height * 0.12, flexDirection: "row", alignItems: 'center', }}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.setState({ data2: [] })}>
                        <Text style={{ color: "gray" }}>Reset Comapre</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress={() => this.setState({ data2: [20, 45, 28, 60, 50, 43] })}>
                        <Text style={{ color: "gray" }}>Do Comapre</Text>
                    </TouchableHighlight>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "gray",
        marginHorizontal: 10,
        width: 200
    },
})

