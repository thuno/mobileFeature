import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>🏠 Home</Text>
            <Link href={{
                pathname: "/docs/hehehelalalal"
            }} style={{ color: 'blue', marginTop: 20 }}>
                <Text>Docs</Text>
            </Link>
            <Link href={{
                pathname: "/profile/cogangsekodeemnghingodumotgiaylucnay"
            }} style={{ color: 'red', marginTop: 20 }}>
                <Text>profile</Text>
            </Link>
        </View>
    );
}