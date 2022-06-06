import react from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Dashboard({ navigation }) {
	return (
		<View style={styles.main_view}>
			<View style={styles.first_row}>
				<Image
					source={require("../assets/ReactNative.png")}
					style={styles.tinyLogo}
				/>
				<Text style={styles.text_bschool}>B School</Text>
			</View>
			<View style={styles.second_row}>
				<View style={styles.first_column}>
					<Text style={styles.first_column_text}>Services</Text>
				</View>
				<View style={styles.second_column}>
					<Text style={styles.second_column_text}>My Classes</Text>
				</View>
			</View>
		</View>
	);
}
export default Dashboard;
const styles = StyleSheet.create({
	main_view: {
		flex: 1,
		marginTop: "4%",
	},
	first_row: {
		flex: 0.7,
		borderWidth: 5,
		marginLeft: "3%",
		marginRight: "3%",
	},
	tinyLogo: {
		height: "70%",
		width: "50%",
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "10%",
	},
	text_bschool: {
		textAlign: "center",
		marginTop: "3%",
		fontSize: 20,
		fontWeight: "bold",
	},
	second_row: {
		flex: 1,
		flexDirection: "row",
		marginLeft: "3%",
		marginRight: "3%",
		marginTop: "5%",
		justifyContent: "space-between",
	},
	first_column: {
		width: "45%",
		height: "45%",
		borderWidth: 3,
	},
	first_column_text: {
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "auto",
		marginTop: "auto",
		fontSize: 20,
	},
	second_column: {
		width: "45%",
		height: "45%",
		borderWidth: 3,
	},
	second_column_text: {
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: "auto",
		marginTop: "auto",
		fontSize: 20,
	},
});
