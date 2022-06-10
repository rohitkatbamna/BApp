import react from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	Platform,
} from "react-native";

function PayFees() {
	return (
		<View style={styles.main_view}>
			<View style={styles.new_view}>
				<Text style={styles.text_style}>Total due</Text>
				<Text style={styles.text_style_zero}>:0</Text>
			</View>
			<View style={styles.new_view}>
				<Text style={styles.text_style}>Fine Amount</Text>
				<Text style={styles.text_style_zero}>:0</Text>
			</View>
			<View style={styles.new_view}>
				<Text style={styles.text_style}>Total Payaing Amount</Text>
				<Text style={styles.text_style_zero}>:0</Text>
			</View>
			<TouchableOpacity style={styles.pay_now}>
				<Text style={{ textAlign: "center", fontSize: 30 }}>Pay</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	text_style_header: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
	},
	text_style: {
		fontSize: 20,
		textAlign: "left",
		margin: "5%",
	},
	text_style_zero: {
		textAlign: "right",
		fontSize: 20,
	},
	new_view: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
	},
	main_view: {
		width: Platform.OS === "web" ? "50%" : "100%",
		marginRight: "auto",
		marginLeft: "auto",
	},
	pay_now: {
		borderRadius: 5,
		borderWidth: 3,
		width: "30%",
		backgroundColor: "lightblue",
		marginRight: "auto",
		marginLeft: "auto",
		marginTop: "5%",
		padding: "3%",
		shadowColor: "#000",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 2,
		elevation: 2,
	},
});

export default PayFees;
