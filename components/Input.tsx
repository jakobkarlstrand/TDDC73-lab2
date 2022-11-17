import React, { useContext, useEffect, useState } from "react";
import {
    Dimensions,
    KeyboardTypeOptions,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
type InputProps = {
    label: string;
    value: string;
    onChange: (s: string) => void;
    keyboardType: KeyboardTypeOptions;
};

function Input({ label, value, onChange, keyboardType }: InputProps) {
    const [focused, setFocused] = useState<boolean>(false);

    return (
        <View style={styles.container}>
            <Text style={{ height: 20 }}>{label}</Text>
            <TextInput
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                keyboardType={keyboardType}
                style={[
                    styles.input,
                    focused && styles.focus,
                    !focused && styles.notfocused,
                ]}
                onChangeText={(text: string) => onChange(text)}
                value={value}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,

        borderRadius: 4,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: "100%",
        fontWeight: "500",
        fontSize: 18,
        marginTop: 5,
    },
    focus: {
        borderWidth: 1,
        borderColor: "blue",

        borderRadius: 4,
    },
    notfocused: {
        borderColor: "lightgray",
    },
    container: {
        width: "100%",
    },
});

export default Input;
