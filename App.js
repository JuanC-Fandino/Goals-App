import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.dummyText}>This is so amazing! I'm super happy
                wow!</Text>
            <Text style={styles.dummyText}> Wow </Text>
            <Button title={'holi'} onPress={() => alert('holi')}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dummyText: {
        margin: 16,
        padding: 16,
        borderWidth: 3,
        borderColor: 'blue'
    }
});
