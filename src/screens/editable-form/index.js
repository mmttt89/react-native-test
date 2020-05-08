import React from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "native-base"

export default class EditableScreen extends React.Component {
    state = {
        value1: '',
        value2: '',
        value3: '',
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.form, { justifyContent: 'center', paddingVertical: wp("3%") }]}>
                    <Text style={styles.header}>ایجاد فرم دارای قابلیت ویرایش</Text>
                </View>
                <View style={[styles.form, { flex: 1 }]}>
                    <EditableTextInput
                        value={this.state.value1}
                        onChangeText={value1 => this.setState({ value1 })}
                        label={"یادداشت"}
                    />
                    <EditableTextInput
                        value={this.state.value2}
                        onChangeText={value2 => this.setState({ value2 })}
                        label={"دسته بندی"}
                    />
                    <EditableTextInput
                        value={this.state.value3}
                        onChangeText={value3 => this.setState({ value3 })}
                        label={"بر چسب"}
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

    _toggleEditable = () => this.setState({ editable: !this.state.editable })

    render() {
        let { placeholder, label, ...otherProps } = this.props;
        let { editable } = this.state;
        return (
            <View style={[styles.textInputContainer]}>
                <TouchableOpacity
                    onPress={this._toggleEditable}
                    style={styles.inputIcon}>
                    {
                        editable ? <Icon name='checkmark' style={[styles.rowIconStyle, { color: "#4caf50" }]} /> : <Icon name='brush' style={styles.rowIconStyle} />
                    }
                </TouchableOpacity>
                <TextInput
                    editable={editable}
                    style={[styles.textinput, editable ? styles.editable : null]}
                    placeholder={placeholder ? placeholder : "وارد نمایید"}
                    placeholderTextColor={"#888a8f"}
                    {...otherProps}
                >
                </TextInput>
                <View style={styles.verticalDivider} />
                <Text style={styles.label}>
                    {label ? label : null}
                </Text>
            </View>
        )
    }
}

const styles = EStyleSheet.create({  
    container: {
        flex: 1,
        alignItems: "center",
        paddingHorizontal: wp("1.5%"),
        backgroundColor: "#f0f2f2"
    },
    form: {
        paddingHorizontal: wp("3%"),
        marginVertical: 10,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 8,
        elevation: 1
    },
    header: {
        fontFamily: "IRANSans_Normal",
        textAlign: "center",
        color: "#313131",
        fontSize: "9rem"
    },
    //--------------
    textInputContainer: {
        marginVertical: hp("1.5%"),
        // borderColor: "#f0f0f0",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: 'center',
    },
    editable: {
        backgroundColor: "#f0f0f0",
        borderColor: "#4caf50",
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
        fontSize: "8rem",
        borderWidth: 1,
        borderColor: 'transparent'
    },
    //----------
    rowIconStyle: {
        color: "#888a8f",
        fontSize: "14rem"
    },
    verticalDivider: {
        width: 1,
        height: "80%",
        backgroundColor: "#5e5e5e",
        marginHorizontal: wp("3%"),
    },
    label: {
        fontFamily: "IRANSans_Normal",
        fontSize: "8rem",
        color: "#5e5e5e",
        minWidth: wp("12%")
    },
})