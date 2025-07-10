import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function DocsCatchAll() {
    const { slug } = useLocalSearchParams();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>📄 Docs Route:</Text>
            <Text>{JSON.stringify(slug)}</Text>
        </View>
    );
}