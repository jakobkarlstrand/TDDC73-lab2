import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    StyleSheet,
    Text,
    TouchableHighlight,
    TouchableOpacity,
    View,
} from "react-native";
import Button from "./components/Button";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";

export type CardData = {
    cardNumber: string;
    name: string;
    expDate: {
        year: string;
        month: string;
    };
    cvv: string;
};

const defaultData: CardData = {
    cardNumber: "",
    name: "",
    expDate: {
        year: "",
        month: "",
    },
    cvv: "",
};

export default function App() {
    const [cardData, setCardData] = useState<CardData>(defaultData);
    const formatAndValidateCardNumber = (txt: string) => {
        const numbers = txt.replace(/[^0-9]/g, "");

        const arr = Array.from(numbers);
        if (arr.length > 16) return;

        const newText = arr
            .map((num, idx) => {
                if ((idx + 5) % 4 === 0 && idx !== arr.length - 1) {
                    return num + " ";
                }
                return num;
            })
            .join("");

        setCardData((prev) => {
            return { ...prev, cardNumber: newText };
        });
    };

    console.log(cardData);
    return (
        <View style={styles.container}>
            <View
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: -100,
                    zIndex: 999,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 8,
                    },
                    shadowOpacity: 0.44,
                    shadowRadius: 10.32,

                    elevation: 16,
                }}
            >
                <Card cardData={cardData} showBack={false} />
            </View>

            <View style={styles.inputwrapper}>
                <Input
                    keyboardType="numeric"
                    label="Card number"
                    value={cardData.cardNumber}
                    onChange={(t: string) => formatAndValidateCardNumber(t)}
                />
                <View style={{ height: 20 }}></View>
                <Input
                    keyboardType="ascii-capable"
                    label="Card name"
                    value={cardData.name}
                    onChange={(t: string) =>
                        setCardData((prev) => {
                            return { ...prev, name: t };
                        })
                    }
                />
                <View style={{ height: 20 }}></View>
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{ width: "37%" }}>
                        <Dropdown
                            data={[
                                "01",
                                "02",
                                "03",
                                "04",
                                "05",
                                "06",
                                "07",
                                "08",
                                "09",
                                "10",
                                "11",
                                "12",
                            ]}
                            title="Month"
                            label="Expiration date"
                            onSelect={(s: string) => {
                                setCardData((prev) => {
                                    return {
                                        ...prev,
                                        expDate: {
                                            month: s,
                                            year: prev.expDate.year,
                                        },
                                    };
                                });
                            }}
                        />
                    </View>
                    <View style={{ width: "37%" }}>
                        <Dropdown
                            label=""
                            data={[
                                "2022",
                                "2023",
                                "2024",
                                "2025",
                                "2026",
                                "2027",
                                "2028",
                                "2029",
                                "2030",
                                "2031",
                                "2032",
                                "2033",
                            ]}
                            title="Year"
                            onSelect={(s: string) => {
                                setCardData((prev) => {
                                    return {
                                        ...prev,
                                        expDate: {
                                            month: prev.expDate.month,
                                            year: s,
                                        },
                                    };
                                });
                            }}
                        />
                    </View>
                    <View style={{ width: "17%" }}>
                        <Input
                            keyboardType="ascii-capable"
                            label="CVV"
                            value={cardData.cvv}
                            onChange={(t: string) =>
                                setCardData((prev) => {
                                    return { ...prev, cvv: t };
                                })
                            }
                        />
                    </View>
                </View>
                <View style={{ height: 30 }}></View>
                <Button text="Submit" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ddeefc",
        paddingTop: 100,
        paddingHorizontal: 10,
    },
    inputwrapper: {
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderRadius: 8,
        paddingTop: 150,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.24,
        shadowRadius: 10.32,

        elevation: 16,
    },
});
