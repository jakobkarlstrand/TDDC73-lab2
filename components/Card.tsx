import React, { useEffect, useState } from "react";
import {
    Image,
    ImageBackground,
    ImageSourcePropType,
    Text,
    View,
} from "react-native";
import { CardData } from "../App";

type Props = {
    cardData: CardData;
    showBack: boolean;
};

const VISA = require("../assets/creditcard/visa.png");
const AmericanExpress = require("../assets/creditcard/amex.png");
const DinersClib = require("../assets/creditcard/dinersclub.png");
const MasterCard = require("../assets/creditcard/mastercard.png");
const Discover = require("../assets/creditcard/discover.png");

function Card({ cardData, showBack }: Props) {
    const [imageType, setImageType] = useState<ImageSourcePropType>(VISA);

    useEffect(() => {
        const numbers = cardData.cardNumber.replaceAll(" ", "");
        if (numbers.length === 0) setImageType(VISA);
        if (numbers.startsWith("5")) {
            setImageType(MasterCard);
            return;
        }
        if (numbers.startsWith("34") || numbers.startsWith("37")) {
            setImageType(AmericanExpress);
            return;
        }
        if (numbers.startsWith("6")) {
            setImageType(Discover);
            return;
        }
        if (
            numbers.startsWith("30") ||
            numbers.startsWith("36") ||
            numbers.startsWith("38")
        ) {
            setImageType(DinersClib);

            return;
        }

        setImageType(VISA);
    }, [cardData]);

    const display = (numbers: string) => {
        const hashes = [
            "#",
            "#",
            "#",
            "#",
            " ",
            "#",
            "#",
            "#",
            "#",
            " ",
            "#",
            "#",
            "#",
            "#",
            " ",
            "#",
            "#",
            "#",
            "#",
            " ",
        ];
        const arr_nums = Array.from(numbers);

        return hashes
            .map((s, idx) => {
                if (idx < arr_nums.length) {
                    if (idx > 4 && idx < 14 && s !== " ") return "*";
                    return arr_nums[idx];
                }
                return s;
            })
            .join("")
            .replaceAll(" ", "    ");
    };
    return (
        <View style={{ borderRadius: 8, overflow: "hidden" }}>
            <ImageBackground
                style={{
                    width: 675 / 2.2,
                    height: 435 / 2.2,
                    borderRadius: 16,
                }}
                resizeMode="cover"
                source={require("../assets/creditcard/18.jpeg")}
            >
                <View
                    style={{
                        height: "100%",
                        justifyContent: "space-between",
                        backgroundColor: "rgba(0,0,0,0.2)",
                        flexDirection: "column",
                        padding: 16,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Image
                            source={require("../assets/creditcard/chip.png")}
                            style={{ width: 101 / 2, height: 82 / 2 }}
                        />
                        <Image
                            source={imageType}
                            resizeMode="contain"
                            style={{ maxWidth: 70, maxHeight: 50 }}
                        />
                    </View>
                    <View>
                        <Text
                            style={{
                                color: "white",
                                textAlign: "center",
                                fontSize: 20,
                                fontWeight: "600",
                            }}
                        >
                            {display(cardData.cardNumber)}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    color: "lightgray",
                                    fontSize: 12,
                                    marginBottom: 4,
                                }}
                            >
                                Card holder
                            </Text>
                            <Text style={{ color: "white", fontWeight: "700" }}>
                                {cardData.name.toUpperCase() || "FULL NAME"}
                            </Text>
                        </View>
                        <View>
                            <Text
                                style={{
                                    color: "lightgray",
                                    fontSize: 12,
                                    marginBottom: 4,
                                }}
                            >
                                Expires
                            </Text>
                            <Text style={{ color: "white", fontWeight: "700" }}>
                                {cardData.expDate.month || "MM"}/
                                {cardData.expDate.year
                                    ? cardData.expDate.year.slice(2, 5)
                                    : "YY"}
                            </Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

export default Card;
