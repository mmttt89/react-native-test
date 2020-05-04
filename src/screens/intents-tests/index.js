import React from "react";
import { View, Button, Text, Linking } from "react-native"

const MY_BOOK_PACKAGE = "ir.mservices.mybook"

export default class IntentTest extends React.Component {

    launchUrl = () => {
        // let url = `http://myket.ir/app/${MY_BOOK_PACKAGE}`;
        let url = `myket://developer/MY_BOOK_PACKAGE`;
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
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: "blue" }}>
                <Text>Intent Tests</Text>
                <Button
                    onPress={() => this.launchUrl()}
                    title="First Intent" />
            </View>
        )
    }
}