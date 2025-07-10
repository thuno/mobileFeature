import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>🏠 Home</Text>
            <Link href={{
                pathname: "docs/hehehehe"
            }} style={{ color: 'blue', marginTop: 10 }}>
                <Text>Docs</Text>
            </Link>
        </View>
    );
}