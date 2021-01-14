import React from 'react';
import {
    FlatList,
    ImageBackground,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import songs from './data';
import FlatListItem from './FlatListItem';
import PlayerSlider from './PlayerSlider';
import PlayerController from './PlayerController';
import COLORS from './color';

function App() {

    const onSongItemPress = (song) => {

    };

    return (
        <>
            <StatusBar translucent backgroundColor="rgba(0, 0, 0, 0.5)" style={styles.statusBar}
                       barStyle="dark-content"/>
            <SafeAreaView style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('../assets/images/faded.jpg')}>
                    <View style={styles.header}>
                        <View style={styles.appBar}>
                            <Text style={styles.title}>Music Player</Text>
                        </View>
                        <View style={styles.headerContent}>
                            <View style={styles.songContent}>
                                <Text style={styles.songTitle}>Love To Dance</Text>
                                <Text style={styles.songArtist}>PinkinLark LLC</Text>
                            </View>
                            <PlayerSlider/>
                            <PlayerController/>
                        </View>
                    </View>
                </ImageBackground>
                <View>
                    <FlatList
                        data={songs}
                        style={{zIndex: 5}}
                        renderItem={({item, index}) =>
                            <FlatListItem
                                song={item}
                                divider={index !== songs.length - 1}
                                active="1"
                                onPress={onSongItemPress}
                            />
                        }
                        keyExtractor={(item) => item.id}
                    />
                    <TouchableHighlight style={styles.shuffleBtn}>
                        <Ionicon size={24} color="#FFF" name="shuffle"/>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#333',
        height: '100%',
    },
    appBar: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    header: {
        paddingTop: 24,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    headerContent: {
        paddingVertical: 40,
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    songContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15
    },
    songTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    songArtist: {
        fontSize: 14,
        color: COLORS.text,
    },
    shuffleBtn: {
        position: 'absolute',
        elevation: 3,
        top: -25,
        right: 20,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 50,
        zIndex: 99,
    },
    backgroundImage: {
        position: 'relative',
        resizeMode: 'cover',
        justifyContent: 'center',
    },
});

export default App;
