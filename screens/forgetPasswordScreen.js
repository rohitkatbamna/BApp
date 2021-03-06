import react from "react";
import { View, StyleSheet, Text, Platform } from "react-native";
import { TextInput, Button } from "react-native-paper";

function ForgetPasswordScreen({ navigation }) {
	return (
		<View style={styles.main_View}>
			<TextInput label="User Name" mode="flat" style={styles.input_main} />
			<TextInput label="Official Email" mode="flat" style={styles.input_main} />
			<Button
				mode="contained"
				onPress={() => navigation.navigate("LoginScreen")}
				style={styles.button_submit}>
				Submit
			</Button>
		</View>
	);
}
export default ForgetPasswordScreen;

const styles = StyleSheet.create({
	main_View: {
		flex: Platform.OS === "web" ? 0.5 : 1,
		width: Platform.OS === "web" ? "50%" : "100%",
		marginRight: "auto",
		marginLeft: "auto",
	},
	forgetPassord_Text: {
		textAlign: "center",
		fontSize: 20,
	},
	input_main: {
		fontSize: 20,
		margin: "4%",
	},
	button_submit: {
		marginRight: "30%",
		marginLeft: "30%",
		padding: "2%",
		marginTop: "5%",
		borderRadius: 15,
	},
});
