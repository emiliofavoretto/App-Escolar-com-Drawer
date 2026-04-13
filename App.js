import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import InicioScreen from './src/Screen/InicioScreen';
import TarefasScreen from './src/Screen/TarefasScreen';
import PerfilScreen from './src/Screen/PerfilScreens';
import DisciplinasScreen from './src/Screen/DisciplinasScreen';

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <NavigationContainer>
                <Drawer.Navigator
                    initialRouteName="Home"
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#1e40af',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                        drawerActiveTintColor: '#1e40af',
                        drawerActiveBackgroundColor: '#dbeafe',
                        drawerInactiveTintColor: '#334155',
                        drawerLabelStyle: {
                            fontSize: 16,
                            fontWeight: '500',
                        },
                        drawerStyle: {
                            backgroundColor: '#f8fafc',
                            width: 260,
                        },
                    }}>
                    <Drawer.Screen name="Home" component={InicioScreen} />
                    <Drawer.Screen name="Perfil" component={PerfilScreen} />
                    <Drawer.Screen name="Configurações" component={DisciplinasScreen} />
                    <Drawer.Screen name="Configurações" component={TarefasScreen} />
                </Drawer.Navigator>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
}
