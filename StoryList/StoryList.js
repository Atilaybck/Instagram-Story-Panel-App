import React from 'react';
import { FlatList, View } from 'react-native';
import DATA from '../DATA';
import { Story } from '../Story/Story';

export const StoryList = () => {
    const renderStoryItem = ({ item }) => {
        return <Story image={item.avatar} name={item.name} seen={item.seen} />;
    };

    return (
        <View>
            <FlatList 
                data={DATA}
                horizontal
                keyExtractor={(item) => item.id}
                renderItem={renderStoryItem}
            />
        </View>
    );
};
