import { View, Text, StyleSheet } from 'react-native';

export default function TarefasScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.tarefas1}>
                <Text style={styles.descricao1}>descricao</Text>
            </Text>
            <Text style={styles.tarefas2}>
                <Text style={styles.descricao2}>descricao</Text>
            </Text>
            <Text style={styles.tarefas3}>
                <Text style={styles.descricao3}>descricao</Text>
            </Text>
            <Text style={styles.text}>Tela perfil</Text>
            <Text style={styles.subtitle}>Informação do Usuário</Text>
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
    emoji: {
        fontSize: 40,
        marginBottom: 12,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#1e40af',
    },
    subtitle: {
        fontSize: 16,
        color: '#64748b',
        marginTop: 8,
    }
});