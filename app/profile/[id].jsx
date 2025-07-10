import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

export default function ProfileScreen() {
    const { id } = useLocalSearchParams();
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>👤 Profile ID: {id}</Text>
        </View>
    );
}