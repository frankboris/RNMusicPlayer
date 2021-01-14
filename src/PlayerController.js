import React from 'react';
import {StyleSheet, TouchableHighlight, View} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import COLORS from './color';

function PlayerController() {
    const iconSize = 24;

    return (
        <View style={{alignItems: 'center'}}>
            <View style={styles.container}>
                <TouchableHighlight
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={() => alert('Pressed!')}>
                    <Ionicon size={iconSize} color={COLORS.text} name="ios-play-skip-back-sharp"/>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={() => alert('Pressed!')}>
                    <Ionicon size={iconSize} color={COLORS.text} name="play"/>
                </TouchableHighlight>
                <TouchableHighlight
                    activeOpacity={0.6}
                    style={styles.btn}
                    onPress={() => alert('Pressed!')}>
                    <Ionicon size={iconSize} color={COLORS.text} name="ios-play-skip-forward-sharp"/>
                </TouchableHighlight>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '45%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    btn: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    }
});

export default PlayerController;
