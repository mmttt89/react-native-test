import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default class CustomTextInput extends React.Component {
    state = {
        isFoucsed: false
    }

    _onFoucs = () => this.setState({ isFoucsed: true })
    _onBlur = () => this.setState({ isFoucsed: false })

    render() {
        let { isFoucsed } = this.state;
        let { placeholder, inputIcon, inputIconComponent, rowIcon, rowIconComponent } = this.props
        return (
            <View style={[styles.container, isFoucsed ? styles.isFoucsed : null]}>
                {
                    inputIcon ?
                        <TouchableOpacity
                            onPress={() => alert("a")}
                            style={styles.inputIcon}>
                            {
                                inputIconComponent
                            }
                        </TouchableOpacity> : null
                }
                <TextInput
                    onFocus={this._onFoucs}
                    onBlur={this._onBlur}
                    style={[styles.textinput]}
                    placeholder={placeholder ? placeholder : ""}
                    placeholderTextColor={"#888a8f"}
                    onChangeText={text => console.log(text)}
                >
                </TextInput>
                {
                    rowIcon ?
                        <View
                            style={styles.rowIcon}>
                            {rowIconComponent}
                        </View> : null
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        borderBottomWidth: 3,
        borderBottomColor: "#fff",
        borderRadius: 8,
        //
        flexDirection: "row",
        backgroundColor: "#f0f0f0",
    },
    inputIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    rowIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        borderLeftWidth: 1,
        borderLeftColor: "#fff",
        minWidth: 60
    },
    textinput: {
        flex: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontFamily: "IRANSans_Normal",
    },
    isFoucsed: {
        borderBottomColor: "#19c0d3"
    }
})