import React from "react";
import { View, Button, Text, Linking } from "react-native";
import { ActionSheetCustom as ActionSheet } from 'react-native-custom-actionsheet'
import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "native-base";
const MY_BOOK_PACKAGE = "ir.mservices.mybook";
const FIXED_H = hp("5%");

export default class IntentTest extends React.Component {
    state = {
        selected: 1,
    }

    showActionSheet = () => this.actionSheet.show()

    getActionSheetRef = ref => (this.actionSheet = ref)

    handlePress = index => this.setState({ selected: index }, () => console.log(">>>>>>", this.state.selected))

    launchUrl = () => {
        let url = `http://myket.ir/app/${MY_BOOK_PACKAGE}`;
        Linking.canOpenURL(url)
            .then((supported) => {
                if (!supported) {
                    console.log("Can't handle url: " + url);
                } else {
                    console.log("url opened");
                    return Linking.openURL(url);
                }
            })
            .catch((err) => console.error('An error occurred', err));
    }

    render() {
        const { selected } = this.state;

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "blue" }}>
                <Text>Intent Tests</Text>
                <Button
                    onPress={() => this.launchUrl()}
                    title="First Intent" />
                <View style={{ marginTop: 20 }}>
                    <Button title="show" onPress={this.showActionSheet}></Button>
                </View>
                <ActionSheet
                    ref={this.getActionSheetRef}
                    title={<View style={styles.titleContainer}>
                        <Text style={styles.sheetTitle}>
                            چه کاری میتونم برات انجام بدم؟
                        </Text>
                    </View>
                    }
                    // message="custom message custom message custom message custom message custom message custom message "
                    options={[
                        {
                            component: <View style={styles.optionContainer}>
                                <Icon type="FontAwesome" name="home" style={{ color: "#888a8f" }} />
                                <Text style={styles.optionText}>خانه</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                <Icon name="eye" style={{ color: "#888a8f" }} />
                                <Text style={styles.optionText}>مشاهده فرم</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                <Icon name="alarm" style={{ color: "#888a8f" }} />
                                <Text style={styles.optionText}>آلارم</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                <Icon name="settings" style={{ color: "#888a8f" }} />
                                <Text style={styles.optionText}>تنظیمات</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                <Icon name="camera" style={{ color: "#888a8f" }} />
                                <Text style={styles.optionText}>دوربین</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                <Icon name="close" style={{ color: "red" }} />
                                <Text style={[styles.optionText, { color: "red" }]}>لغو</Text>
                            </View>,
                            height: FIXED_H,
                        },
                    ]}
                    cancelButtonIndex={9}
                    onPress={this.handlePress}
                />
            </View>
        )
    }
}

const styles = EStyleSheet.create({
    sheetTitle: {
        fontFamily: "IRANSans_Normal",
        fontSize: "8rem",
        // color: "#4caf50"
    },
    titleContainer: {
        height: hp("5%"),
        backgroundColor: "#fff",
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    optionContainer: {
        // backgroundColor: 'grey',
        width: "100%",
        flexDirection: "row-reverse",
        paddingHorizontal: wp("3%")

    },
    optionText: {
        fontFamily: "IRANSans_Normal",
        fontSize: "8rem",
        paddingRight: 20,
        color: "#888a8f"
    }
})