import { View, Text, StyleSheet } from 'react-native';

export default function TarefasScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.tarefas1}>
                <Text style={styles.titulo1}>Drawer</Text>
                <Text style={styles.descricao1}>Configuração da navegação lateral personalizada e estrutura de rotas do aplicativo.</Text>
            </Text>
            <Text style={styles.tarefas2}>
                <Text style={styles.titulo2}>Font-End</Text>
                <Text style={styles.descricao2}>Desenvolvimento da interface visual, componentes reutilizáveis e estilização responsiva.</Text>
            </Text>
            <Text style={styles.tarefas3}>
                <Text style={styles.titulo3}>Back-End</Text>
                <Text style={styles.descricao3}>Implementação da lógica de negócios, integração com banco de dados e APIs RESTful.</Text>
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
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f4ff',
        flexDirection: 'column',
    },
    tarefas1: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#f01d1d'
    },
    tarefas2: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#e6d119'
    },
    tarefas3: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#ffffff',
        backgroundColor: '#2445d8'
    },
});