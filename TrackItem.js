import { StyleSheet, Text, View, Image } from 'react-native';
import { Themes } from "./assets/Themes";

// export default function TrackItem({ song_title, album_image, artists, album_name, duration}) {
export default function TrackItem() {
    return (
      <View style={styles.track}>
        <Text style={styles.song_index}>
            1
        </Text>
        <Image
            style={styles.album_image}
            source={{uri: 'https://i.scdn.co/image/ab67616d0000b273b53427fe60e7ae869ba9b1a1'}} 
        />
        <View style={styles.song_title_artist}>
            <Text numberOfLines={1} style={styles.song_title}>
                Swan Upon Leda!
            </Text>
            <Text numberOfLines={1} style={styles.song_artist}>
                Hozier
            </Text>
        </View>
        <Text numberOfLines={1} style={styles.song_album}>
            Swan Upon Leda
        </Text>
        <Text style={styles.song_duration}>
            {millisToMinutesAndSeconds(222026)}
        </Text>  
      </View>
    );
}


const styles = StyleSheet.create({
    track: {
        backgroundColor: 'black',   
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'space-evenly',
        height: 70, 
    },
    song_index: {
        // backgroundColor: 'blue',
        textAlign: 'center',
        width: '8%',
        color: Themes.colors.gray,
        fontSize: 14,
    },
    album_image: {
        width: '15%',
        aspectRatio: 640/640,
    },
    song_title_artist: {
        width: '35%',
        color: Themes.colors.white,
        fontSize: 14
    },
    song_title: {
        color: Themes.colors.white,
        fontSize: 14
    },
    song_artist: {
        color: Themes.colors.gray,
        fontSize: 14
    },
    song_album: {
        width: '25%',
        color: Themes.colors.white,
        fontSize: 14
    },
    song_duration: {
        width: '8%',
        color: Themes.colors.white,
        fontSize: 14
    },
});