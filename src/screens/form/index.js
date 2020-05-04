import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import CustomTextInput from "./Custom-TextInput";
import { Icon } from "native-base";

export default class FormScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>
                    {"لوگوی سازمان شما"}
                </Text>
                <View style={styles.form}>
                    <CustomTextInput
                        rowIcon={true}
                        rowIconComponent={<Icon name='home' style={{ color: "#888a8f" }} />}
                        placeholder={"پست الکترونیک یا شماره موبایل"}
                    />
                    <CustomTextInput
                        inputIcon={true}
                        inputIconComponent={<Icon name='eye' style={{ color: "#888a8f" }} />}
                        rowIcon={true}
                        rowIconComponent={<Icon name='key' style={{ color: "#888a8f" }} />}
                        placeholder={"کلمه عبور خود را وارد کنید"}
                    />
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={styles.loginBtn}>
                        <Text style={styles.loginBtnText}>
                            {"ورود به دیجی کالا"}
                        </Text>
                    </TouchableOpacity>

                    <Text style={styles.newUser}>
                        {"ساخت حساب کاربری جدید"}
                    </Text>
                    <View style={styles.divider} />
                    <Text style={styles.terms}>
                        {"با ورود یا ثبت نام در دیجی کالا شما شرایط و قوانین استفاده از سرویس های سایت دیجی کالا و قوانین حریم خصوصی آن را می پذیرید"}
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    header: {
        fontFamily: "IRANSans_Normal",
        fontSize: 25,
    },
    form: {
        paddingHorizontal: 20,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        backgroundColor: "#ef39af",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 15,
        marginTop: 30
    },
    loginBtnText: {
        fontFamily: "IRANSans_Normal",
        color: "#fff",
    },
    newUser: {
        paddingVertical: 40,
        fontFamily: "IRANSans_Normal",
        color: "#ef39af",
    },
    divider: {
        backgroundColor: "#f0f0f0",
        width: "100%",
        height: 1,
    },
    terms: {
        fontFamily: "IRANSans_Normal",
        paddingVertical: 30,
        textAlign: "center",
        color: "#888a8f"
    }
})