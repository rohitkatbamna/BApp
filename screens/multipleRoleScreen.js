import react from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Button } from "react-native-paper";

function MultipleRoleScreen({ navigation }) {
	return (
		<View style={styles.main_View}>
			<Text style={styles.selectRole_Text}>Select Role</Text>
			<Button mode="contained" style={styles.button_style}>
				Faculty
			</Button>
			<Button mode="contained" style={styles.button_style}>
				Admin
			</Button>
			<Image
				source={require("../assets/fastforward.png")}
				style={styles.fast_forward}
			/>
		</View>
	);
}
export default MultipleRoleScreen;
const styles = StyleSheet.create({
	main_View: {
		flex: 1,
	},
	selectRole_Text: {
		fontSize: 20,
		fontWeight: "bold",
		textAlign: "center",
		marginTop: "5%",
	},
	button_style: {
		marginTop: "12%",
		marginLeft: "30%",
		marginRight: "30%",
		padding: "2%",
		borderRadius: 15,
	},
	fast_forward: {
		width: "15%",
		height: "5%",
		marginTop: "10%",
		marginLeft: "auto",
		marginRight: "auto",
	},
});
