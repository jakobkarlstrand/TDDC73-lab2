import React from "react";
import { Text, View } from "react-native";

type Props = {
    text: string;
};

function Button({ text }: Props) {
    return (
        <View
            style={{
                backgroundColor: "#2364d2",
                paddingVertical: 15,
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 4,
            }}
        >
            <Text style={{ color: "white", fontWeight: "500", fontSize: 20 }}>
                {text}
            </Text>
        </View>
    );
}

export default Button;
