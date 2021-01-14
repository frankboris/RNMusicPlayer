import React from 'react';
import {Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import COLORS from './color';

function FlatListItem({song, divider, active, onPress}) {
    const backgroundColor = active === song.id ? '#09333333' : 'transparent';
    return (
        <TouchableHighlight
            onPress={() => onPress(song)}
            style={{backgroundColor, zIndex: 9}}
            activeOpacity={0.6}
        >
            <View>
                <View style={styles.container}>
                    <Image style={styles.image} source={song.artwork}/>
                    <View style={styles.content}>
                        <Text style={styles.title}>{song.title}</Text>
                        <Text style={styles.artist}>{song.artist}</Text>
                    </View>
                    <Ionicon color={COLORS.text} size={30} name="play"/>
                </View>
                {divider && <View style={styles.divider}/>}
            </View>
        </TouchableHighlight>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 8,
    },
    content: {
        flexGrow: 1,
        paddingHorizontal: 10,
    },
    image: {
        width: 60,
        height: 60,
    },
    title: {
        color: COLORS.text,
        fontSize: 16,
        fontWeight: '700',
        marginBottom: 5,
    },
    artist: {
        color: COLORS.text,
        fontSize: 12,
    },
    divider: {
        borderBottomWidth: 1,
        borderBottomColor: COLORS.divider,
        marginHorizontal: 15,
    },
});

export default FlatListItem;
