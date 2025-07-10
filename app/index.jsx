import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, View } from "react-native";

export default function SplashScreen() {
    const { navigate } = useRouter()

    useEffect(() => {
        setTimeout(() => { navigate("/auth/login") }, 1000)
    }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <Text>Loading...</Text>
        </View>
    );
}