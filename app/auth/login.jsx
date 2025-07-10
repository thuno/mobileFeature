import { MyImage } from '@/src/common';
import { FTextField } from '@/src/component/text-field';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

export default function LoginScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <MyImage
                src="https://redis.ktxgroup.com.vn/api/file/img/4f2c72dd2aa14f25b8f222d7fbb9ca68"
            />
            <Text>Welcome to Ebig</Text>
            <FTextField
                placeholder="Username"
                style={{ color: "#000", marginTop: 20 }}
                prefix={<Winicon src='color/animals/fish' />}
            />
            {/* <TextField
                placeholder="Password"
                value=''
                onChange={() => {}}
                secureTextEntry
            /> */}
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
        width: 112,
    },
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholder: {
        backgroundColor: '#e0e0e0', // Skeleton loading placeholder
    },
});


function Winicon({
    src,
    style,
    size = 24,
    color,
    onClick,
}) {
    const [svgData, setSvgData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const cdnSrc = 'https://cdn.jsdelivr.net/gh/WiniGit/icon-library@latest/';

    useEffect(() => {
        // If src is already an SVG string, use it directly
        if (src && src.startsWith('<svg')) {
            console.log("??????: ", src)
            setSvgData(src);
            return;
        }

        const fetchSvg = async () => {
            try {
                const url = src?.startsWith('http') ? src : `${cdnSrc}${src}.svg`;
                if (!url) return;

                // If not in cache, set loading state
                setIsLoading(true);

                // Fetch from network
                const response = await fetch(url);
                console.log("response: ", response)
                let text = await response.text();
                console.log("text: ", text)       

                // Clear loading state
                setIsLoading(false);

                if (!text.startsWith('<svg')) {
                    // is image
                    setSvgData(null);
                    return;
                }

                // Apply color if needed
                if (color) {
                    text = text.replace(/stroke="(?!none")[^"]*"/g, `stroke="${color}"`);
                    text = text.replace(/fill="(?!none")[^"]*"/g, `fill="${color}"`);
                }

                // Cache the colored version
                setSvgData(text);
            } catch (error) {
                setIsLoading(false);
                setSvgData(null); // Set fallback data
            }
        };

        fetchSvg();
    }, [src, color]);

    return (
        <TouchableOpacity
            disabled={!onClick}
            onPress={onClick ? onClick : undefined}
            activeOpacity={onClick ? 0.7 : 1}
            style={[styles.icon, style, { width: size, height: size }]}
        >
            {svgData ? (
                <SvgXml
                    preserveAspectRatio="xMinYMin slice"
                    xml={svgData}
                    width={size}
                    height={size}
                />
            ) : isLoading ? <View style={[styles.placeholder, { width: size, height: size }]} /> : null}
        </TouchableOpacity>
    );
}