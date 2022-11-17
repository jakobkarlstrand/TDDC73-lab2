import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

type Props = {
    title: string;
    data: string[];
    onSelect: (s: string) => void;
    label?: string;
};

function Dropdown({ title, data, onSelect, label }: Props) {
    const [focused, setFocused] = useState<boolean>(false);

    if (focused) {
        styles.input.borderColor = "blue";
    } else {
        styles.input.borderColor = "lightgray";
    }

    return (
        <View style={{ width: "100%" }}>
            <Text style={{ height: 20 }}>{label}</Text>
            <SelectDropdown
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                defaultButtonText={title}
                dropdownOverlayColor="transparent"
                data={data}
                dropdownStyle={styles.dropdown}
                onSelect={(selctedItem) => onSelect(selctedItem)}
                buttonTextAfterSelection={(selctedItem, i) => {
                    return selctedItem;
                }}
                buttonStyle={styles.input}
                rowTextForSelection={(item, index) => item}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 4,
        paddingHorizontal: 5,
        paddingVertical: 10,
        width: "100%",
        fontWeight: "500",
        fontSize: 18,
        height: "auto",
        marginTop: 5,
        borderColor: "lightgray",
    },
    focus: {
        borderWidth: 1,
        borderColor: "blue",

        borderRadius: 4,
    },
    notfocused: {
        borderColor: "lightgray",
    },
    dropdown: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: "lightgray",
        borderTopWidth: 1,
        paddingVertical: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
});

export default Dropdown;
