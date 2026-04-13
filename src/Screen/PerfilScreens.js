import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.nome}>Emílio Henrique dos Santos Favoretto</Text>
            <Text style={styles.turma}>2º Ano 2TDS1</Text>
            <Text style={styles.curso}>Desenvolvimento de sistemas </Text>
            <Text style={styles.frase}>Desenvolver sistemas é a arte de transformar lógica e café em soluções que facilitam a vida das pessoas, um ponto e vírgula por vez. </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4ff',
        flexDirection: 'column'
    },
    nome: {
        fontSize: 40
    },
    turma: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e40af',
    },
    curso: {
        fontSize: 16,
        color: '#0c4594',
        marginTop: 8,
    },
    curso: {
        fontSize: 16,
        color: '#0c4594',
        marginTop: 8,
    }
});