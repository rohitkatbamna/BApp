import React from "react";
import { View, Text, StyleSheet } from "react-native";

function AlertsNotices() {
	return (
		<View>
			<View style={styles.sub_main_view}>
				<Text style={styles.sub_main_view_text}>
					Fee Remainder only for students
				</Text>
			</View>
			<View style={styles.sub_main_view}>
				<Text style={styles.sub_main_view_text}>
					Fee Remainder only for students
				</Text>
			</View>
			<View style={styles.sub_main_view}>
				<Text style={styles.sub_main_view_text}>
					Fee Remainder only for students
				</Text>
			</View>
		</View>
	);
}
export default AlertsNotices;

const styles = StyleSheet.create({
	sub_main_view: {
		borderWidth: 4,
		borderRadius: 10,
		padding: "4%",
		marginTop: "3%",
	},
	sub_main_view_text: {
		fontSize: 20,
	},
});
