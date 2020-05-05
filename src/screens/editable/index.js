import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "native-base"

export default class EditableScreen extends React.Component {
    state = {
        value: 'مقدار اولیه',
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>ایجاد فرم های دارای قابلیت ویرایش</Text>
                <View style={{
                    paddingHorizontal: 20,
                    marginVertical: 10,
                    borderWidth: 1,
                    borderColor: "#a8a8a8",
                    width: "100%",
                    flex: 1,
                }}>
                    <EditableTextInput
                        value={this.state.value}
                        onChangeText={value => this.setState({ value })}
                        inputIconComponent={<Icon name='settings' style={styles.rowIconStyle} />}
                    />
                </View>
            </View>
        )
    }
}

class EditableTextInput extends React.Component {
    state = {
        editable: false
    }
    render() {
        let { inputIconComponent, placeholder, ...otherProps } = this.props;
        let { editable } = this.state;
        return (
            <View style={[styles.textInputContainer, editable ? styles.editable : null]}>
                {inputIconComponent ?
                    <TouchableOpacity
                        onPress={() => this.setState({ editable: !this.state.editable })}
                        style={styles.inputIcon}>
                        {
                            inputIconComponent
                        }
                    </TouchableOpacity> : null
                }
                <TextInput
                    editable={editable}
                    style={[styles.textinput]}
                    placeholder={placeholder ? placeholder : "متن دلخواه"}
                    placeholderTextColor={"#888a8f"}
                    {...otherProps}
                >
                </TextInput>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    header: {
        fontFamily: "IRANSans_Normal",
        textAlign: "center",
        // color: "#888a8f",
        color: "#313131",
        fontSize: "9rem"
    },
    //--------------
    textInputContainer: {
        marginVertical: hp("1.5%"),
        // borderBottomWidth: 3,
        // borderBottomColor: "transparent",
        borderWidth: 3,
        borderColor: "#f0f0f0",
        borderRadius: 8,
        //--------------//
        // other styles // 
        //--------------//
        flexDirection: "row",
    },
    editable: {
        backgroundColor: "#f0f0f0",
        borderColor: "transparent",
    },
    inputIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
    },
    textinput: {
        flex: 1,
        borderRadius: 8,
        paddingHorizontal: 15,
        paddingVertical: 15,
        fontFamily: "IRANSans_Normal",
        fontSize: "8rem"
    },
    //----------
    rowIconStyle: {
        color: "#888a8f",
        fontSize: "14rem"
    },
})