import { View, Text, StyleSheet } from 'react-native';

export default function InicioScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.dsiciplina1}>Português</Text>
            <Text style={styles.dsiciplina2}>Matematica</Text>
            <Text style={styles.dsiciplina3}>Biologia</Text>
            <Text style={styles.dsiciplina4}>Geografia</Text>
            <Text style={styles.text}>Bem-vindo</Text>
            <Text style={styles.explicacao}></Text>
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
    nome: {
        fontSize: 40,
        marginBottom: 12,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e40af',
    },
    explicacao: {
        fontSize: 16,
        color: '#64748b',
        marginTop: 8,
    }
});