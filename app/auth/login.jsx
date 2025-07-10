import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export default function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>📝 Login</Text>
            <Image
                style={styles.image}
                source="https://redis.ktxgroup.com.vn/api/file/img/4f2c72dd2aa14f25b8f222d7fbb9ca68"
                placeholder={"placeholder"}
                contentFit="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        aspectRatio: 16 / 9,
        width: 200,
        backgroundColor: '#0553',
    },
});