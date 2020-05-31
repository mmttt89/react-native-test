import React, { useRef, useEffect } from "react";
import { Icon } from "native-base";
import { View, Text, Animated, FlatList, TouchableOpacity } from "react-native";
import EStyleSheet, { create } from "react-native-extended-stylesheet";
import { PanGestureHandler, PinchGestureHandler } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
const items = [
    {
        id: 1,
        name: 'item1',
        description: ' +1 213 323 2343 ',
    },
    {
        id: 2,
        name: 'hayani',
        description: ' +1 513 323 2646',
    },
    {
        id: 3,
        name: 'Oho',
        description: ' +1 613 673 2646 ',
    },
];

export default class Loading extends React.Component {


    render() {
        return (
            <View style={styles.listItemWrapper}>
                <FlatList
                    data={items}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => <ListItem
                        {...item}
                    />}
                />
            </View>
        )
    }
}

const ListItem = ({ description }) => {

    // create our ref
    const swip = useRef();

    const closeL = () => {
        swip.current.close()
    }
    const openL = () => {
        swip.current.openLeft()
    }

    return (
        <TouchableOpacity
            onPress={() => openL()}
        >
            <Swipeable
                ref={swip}
                renderLeftActions={(progress, dragx) => <LeftItem closeL={closeL} />}
                renderRightActions={(progress, dragx) => <RightItem />}>
                <View style={styles.listItem}>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </Swipeable>
        </TouchableOpacity>
    );
};
const LeftItem = ({ closeL }) => {
    return (
        <View style={styles.leftItem}>
            <TouchableOpacity
                onPress={() => closeL()}
                style={[styles.deleteButtonStyle]}>
                <Icon name="eye" style={{ color: "green" }} />
            </TouchableOpacity>
        </View>
    );
};
const RightItem = () => {
    return (
        <View style={styles.rightItem}>
            <TouchableOpacity style={styles.deleteButtonStyle}>
                <Icon name="refresh" style={{ color: "green" }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.archiveButtonStyle}>
                <Icon name="keypad" style={{ color: "green" }} />
            </TouchableOpacity>
        </View>
    );
};

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'column',
        backgroundColor: '#eee',
    },
    titleWrapper: {
        alignItems: 'flex-start',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'black',
        marginVertical: 20,
    },
    leftItem: {
        flex: 0.1,
        justifyContent: 'center',
    },
    rightItem: {
        flex: 0.2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        justifyContent: 'center',
    },
    archiveButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    deleteButtonStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    archiveTextButtonStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    textButtonStyle: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
    leftItemText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#fff',
    },
    listItemWrapper: {
        flex: 1,
        flexDirection: 'column',
    },
    listItem: {
        paddingHorizontal: 10,
        justifyContent: 'center',
        borderTopWidth: 0.6,
        borderBottomWidth: 0.6,
        borderBottomColor: '#ccc',
        borderTopColor: '#ccc',
        flex: 1,
        height: 60,
        backgroundColor: '#fff',
    },
    item2: {
        flex: 4,
        justifyContent: 'center',
    },
    item: {
        flex: 2,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textBtn: {
        textAlign: 'center',
        fontWeight: 'bold',
    },
    btn: {
        backgroundColor: '#ccc',
        padding: 10,
        borderRadius: 6,
        width: '80%',
        margin: 5,
        alignSelf: 'center',
    },
    description: {
        fontSize: 16,
        color: '#000',
    },
})