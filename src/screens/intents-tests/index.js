import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ActionSheetCustom as ActionSheet } from 'react-native-custom-actionsheet'
import EStyleSheet from "react-native-extended-stylesheet";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Icon } from "native-base";
import { CustomModalize } from "./Modalize";
import faker from 'faker';

const MY_BOOK_PACKAGE = "ir.mservices.mybook";
const FIXED_H = hp("5%");

export default class IntentTest extends React.Component {
    state = {
    }

    showActionSheet = () => this.actionSheet.show()

    getActionSheetRef = ref => (this.actionSheet = ref)

    handlePress = index => {
        switch (index) {
            case 0: alert("Home Selected")
                break;
            case 1: alert("Observe Form Selected")
                break;
            case 2: alert("Alarm Selected")
                break;
            case 3: alert("Settings Selected")
                break;
            case 4: alert("Camera Selected")
                break;
            default:
                break;
        }
    }

    onOpen = () => this.modalizeRef.current?.open();

    renderItem = (item) => (
        <View>
            <Text>{item.heading}</Text>
        </View>
    );
    getData = () => {
        Array(50)
            .fill(0)
            .map(_ => ({
                name: faker.name.findName(),
                email: faker.internet.email(),
            }));
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity onPress={this.showActionSheet}>
                    <Text>Show Action Sheet</Text>
                </TouchableOpacity>
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
                                {/* <Icon name="home" style={{ color: "#888a8f" }} /> */}
                                <Text style={styles.optionText}>خانه</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                {/* <Icon name="eye" style={{ color: "#888a8f" }} /> */}
                                <Text style={styles.optionText}>مشاهده فرم</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                {/* <Icon name="alarm" style={{ color: "#888a8f" }} /> */}
                                <Text style={styles.optionText}>آلارم</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                {/* <Icon name="settings" style={{ color: "#888a8f" }} /> */}
                                <Text style={styles.optionText}>تنظیمات</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                {/* <Icon name="camera" style={{ color: "#888a8f" }} /> */}
                                <Text style={styles.optionText}>دوربین</Text>
                            </View>,
                            height: FIXED_H,
                        },
                        {
                            component: <View style={styles.optionContainer}>
                                {/* <Icon name="close" style={{ color: "red" }} /> */}
                                <Text style={[styles.optionText, { color: "red" }]}>لغو</Text>
                            </View>,
                            height: FIXED_H,
                        },
                    ]}
                    cancelButtonIndex={9}
                    onPress={this.handlePress}
                />
                <View style={{ width: "100%", height: 3, backgroundColor: 'grey', marginVertical: 20 }} />
                <CustomModalize />
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