import { View, Text, StyleSheet } from 'react-native';

export default function DisciplinasScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.container2}>
                <Text style={styles.dsiciplina1}>Português</Text>
                <Text style={styles.dsiciplina2}>Matematica</Text>
                <Text style={styles.dsiciplina3}>Biologia</Text>
                <Text style={styles.dsiciplina4}>Desenvolvimento de sistemas</Text>
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4ff',
    },
    container2: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4ff',
        width: 300,
        height: 600,
        flexDirection: "column",
    },
    dsiciplina1: {
        width: 100,
        height: 50,
        backgroundColor: '#2c88df',
        fontSize: 5,
        color: '#fff'
    },
    dsiciplina2: {
        width: 100,
        height: 50,
        backgroundColor: '#e07715',
        fontSize: 5,
        color: '#fff'
    },
    dsiciplina3: {
        width: 100,
        height: 50,
        backgroundColor: '#339b18',
        fontSize: 5,
        color: '#fff'
    },
    dsiciplina4: {
        width: 100,
        height: 50,
        backgroundColor: '#2022b9',
        fontSize: 5,
        color: '#fff'
    },
});