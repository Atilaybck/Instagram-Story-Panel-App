import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const Story = ({ image, name, seen }) => {
    return (
        <View>
            <Image source={image} 
            style={[{ 
                width: 90, 
                height: 90, 
                borderRadius: 45, 
                borderWidth:2},
                seen ? Styles.seen : Styles.unseen]} />
            <View style={{ alignItems: 'center', margin: 3 }}>
                <Text style={{ paddingTop: 5 }}>{name}</Text>
            </View>
        </View>
    );
};

const Styles = StyleSheet.create({
    seen: {
        borderColor: "gray",
        borderWidth: 1
    },
    unseen: {
        borderColor: "gray",
        borderStyle: "dashed"
    }
});

export default Story;
