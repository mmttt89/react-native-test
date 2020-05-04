import React from "react"
import { Text, StyleSheet } from "react-native"

const TText = ({ large, small, style, ...props }) => {

    let fontSize = styles.normal
    if (large) fontSize = styles.large
    if (small) fontSize = styles.small

    return (
        <Text
            style={[styles.text, fontSize, style]}
            {...props}>
            {props.children}
        </Text>
    )
}
export default TText;

const styles = StyleSheet.create({
    text: {
        color: "#313131"
    },
    large: {
        fontSize: 14
    },
    normal: {
        fontSize: 11
    },
    small: {
        fontSize: 8
    }
})