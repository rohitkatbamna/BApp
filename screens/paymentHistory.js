import React from "react";
import { View, Text, StyleSheet } from "react-native";

function PaymentHistory() {
	return (
		<View>
			<View style={styles.main_view}>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Payment Date</Text>
					<Text style={styles.sub_main_view_text}>11/06/2016</Text>
				</View>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Total paid Amount</Text>
					<Text style={styles.sub_main_view_text}>364000</Text>
				</View>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Regular Paid Amount</Text>
					<Text style={styles.sub_main_view_text}>364000</Text>
				</View>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Late Fine Amount</Text>
					<Text style={styles.sub_main_view_text}>0</Text>
				</View>
			</View>
			<View style={styles.main_view}>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Payment Date</Text>
					<Text style={styles.sub_main_view_text}>11/06/2016</Text>
				</View>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Total paid Amount</Text>
					<Text style={styles.sub_main_view_text}>364000</Text>
				</View>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Regular Paid Amount</Text>
					<Text style={styles.sub_main_view_text}>364000</Text>
				</View>
				<View style={styles.sub_main_view}>
					<Text style={styles.sub_main_view_text}>Late Fine Amount</Text>
					<Text style={styles.sub_main_view_text}>0</Text>
				</View>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	main_view: {
		borderWidth: 3,
		borderRadius: 10,
		margin: "3%",
	},
	sub_main_view: {
		flexDirection: "row",
		justifyContent: "space-between",
		margin: "4%",
	},
	sub_main_view_text: {
		fontSize: 20,
	},
});
export default PaymentHistory;
