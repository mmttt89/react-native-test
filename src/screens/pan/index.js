import React, { useRef, useState, useEffect } from "react";
import { Animated, View, PanResponder, Text, TouchableOpacity } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default function Pan() {
    const [panBool, setPanBool] = useState(true)

    pan = useRef(new Animated.ValueXY()).current;
    panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => panBool,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value
                });
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    { dx: pan.x, dy: pan.y }
                ]
            ),
            onPanResponderRelease: () => {
                pan.flattenOffset();
            }
        })
    ).current;

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Drag this box!</Text>
            <Animated.View
                style={{
                    transform: [{ translateX: pan.x }]
                }}
                {...panResponder.panHandlers}
            >
                <View style={styles.box}>
                    <Text>{panBool}</Text>
                </View>
            </Animated.View>
        </View>
    )
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    titleText: {
        fontSize: 14,
        lineHeight: 24,
        fontWeight: "bold"
    },
    box: {
        height: 150,
        width: 150,
        backgroundColor: "blue",
        borderRadius: 5
    }
})