import React from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen"
import { View, Text, TouchableOpacity, Image } from "react-native"
import { Icon } from "native-base";
import Companylogo from "@Assets/images/company-Icon.png"
import CustomTextInput from "./Custom-TextInput";

export default class FormScreen extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={{ width: wp("30%"), height: wp("30%") }}
                        source={Companylogo}
                    />
                </View>
                <View style={styles.form}>
                    <CustomTextInput
                        rowIcon={true}
                        rowIconComponent={<Icon name='home' style={styles.rowIconStyle} />}
                        placeholder={"پست الکترونیک یا شماره موبایل"}
                    />
                    <CustomTextInput
                        inputIcon={true}
                        inputIconComponent={<Icon name='eye' style={styles.inputIconStyle} />}
                        inputIconAction={() => alert("نمایش رمز عبور / عدم نمایش رمز عبور")}
                        rowIcon={true}
                        rowIconComponent={<Icon name='key' style={styles.rowIconStyle} />}
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
                    <Text style={{
                        textAlign: "center",
                        paddingVertical: hp("2%")
                    }}>
                        <Text style={styles.terms}>
                            {"با ورود یا ثبت نام در دیجی کالا شما"}
                        </Text>
                        <Text
                            onPress={() => alert("terms clicked")}
                            style={[styles.terms, styles.textlink]}>
                            {" شرایط و قوانین "}
                        </Text>

                        <Text style={styles.terms}>
                            {"استفاده از سرویس های سایت دیجی کالا و "}
                        </Text>
                        <Text
                            onPress={() => alert("privacy rules clicked")}
                            style={[styles.terms, styles.textlink]}>
                            {" قوانین حریم خصوصی "}
                        </Text>
                        <Text style={[styles.terms]}>
                            {"آن را می پذیرید"}
                        </Text>
                    </Text>
                </View>
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        paddingVertical: hp("5%")
    },
    form: {
        paddingHorizontal: wp("3%"),
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginBtn: {
        backgroundColor: "#E44949",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        paddingVertical: 15,
        marginTop: hp("2.5%")
    },
    loginBtnText: {
        fontFamily: "IRANSans_Normal",
        fontSize: "8rem",
        color: "#fff",
    },
    newUser: {
        paddingVertical: hp("4%"),
        fontFamily: "IRANSans_Normal",
        color: "#E44949",
        fontSize: "8rem"
    },
    divider: {
        backgroundColor: "#f0f0f0",
        width: "100%",
        height: 1,
    },
    termsContainer: {
        flexDirection: "row-reverse",
        flexGrow: 1,
        paddingVertical: hp("2%"),
    },
    terms: {
        fontFamily: "IRANSans_Normal",
        textAlign: "center",
        color: "#888a8f",
        fontSize: "7rem"
    },
    textlink: {
        color: "#38c4d1",
        marginHorizontal: wp("0.5%"),
        borderBottomWidth: 1
    },
    inputIconStyle: {
        color: "#888a8f",
        fontSize: "14rem"
    },
    rowIconStyle: {
        color: "#888a8f",
        fontSize: "14rem"
    },
})