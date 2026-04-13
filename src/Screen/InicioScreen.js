import { View, Text, StyleSheet } from 'react-native';

export default function InicioScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Portal do Aluno</Text>
            <Text style={styles.text}>Bem-vindo</Text>
            <Text style={styles.explicacao}>O app funciona como um assistente pessoal do estudante.
                substituindo murais de papel e mensagens perdidas por uma interface intuitiva e organizada.
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
    name: {
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