import { Image, useImage } from "expo-image";
import { Text } from "react-native";

export const MyImage = ({ src }) => {
    const image = useImage(src, {
        maxWidth: 800,
        onError(error, retry) {
            console.error('Loading failed:', error.message);
        }
    });

    if (!image) {
        return <Text>Image is loading...</Text>;
    }

    return <Image source={image} style={{ width: 112, aspectRatio: image.width / image.height }} />;
}