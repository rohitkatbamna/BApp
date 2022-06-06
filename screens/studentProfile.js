import react from "react";
import { View, Text, Image, StyleSheet } from "react-native";

function StudentProfile() {
	return (
		<View>
			<View>
				<Image
					style={styles.image_style}
					source={require("../assets/account.png")}
				/>
				<Text style={styles.main_text}>Name</Text>
				<Text style={styles.main_text}>Roll No.</Text>
				<Text style={styles.main_text}>Email Id</Text>
				<Text style={styles.main_text}>Contact No.</Text>
				<Text style={styles.main_text}>Email Id</Text>
				<Text style={styles.main_text}>Contact No.</Text>
				<Text style={styles.main_text}>Hostel Name</Text>
				<Text style={styles.main_text}>Address</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	image_style: {
		width: 75,
		height: 75,
		marginLeft: "auto",
		marginRight: "auto",
		marginTop: "5%",
	},
	main_text: {
		textAlign: "left",
		fontWeight: "bold",
		marginTop: "10%",
		marginLeft: "5%",
		fontSize: 20,
	},
});
export default StudentProfile;
