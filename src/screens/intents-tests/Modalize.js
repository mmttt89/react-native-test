import React, { useRef, forwardRef, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated } from 'react-native';
import { Modalize } from 'react-native-modalize';
import faker from 'faker';

export const CustomModalize = () => {
    const modalizeRef = useRef(null);
    const [data, setData] = useState([])

    onOpen = () => {
        let data = Array(50)
            .fill(0)
            .map(_ => ({
                name: faker.name.findName(),
                email: faker.internet.email(),
            }));
        setData(data);
        modalizeRef.current?.open();
    }

    return (
        <>
            <TouchableOpacity onPress={onOpen}>
                <Text>Open the modal</Text>
            </TouchableOpacity>
            <Modalize
                ref={modalizeRef}
                adjustToContentHeight={true}
                childrenStyle={{ justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ paddingVertical: 20 }}>
                    <Text style={{ paddingVertical: 20 }}>Header of Modal</Text>
                    <Text style={{ paddingVertical: 20 }}>First View Content</Text>
                    <Text style={{ paddingVertical: 20 }}>First View Content</Text>
                    <Text style={{ paddingVertical: 20 }}>First View Content</Text>
                    <Text style={{ paddingVertical: 20 }}>First View Content</Text>
                    <Text style={{ paddingVertical: 20 }}>First View Content</Text>
                </View>
            </Modalize>
        </>
    );
}