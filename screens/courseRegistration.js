import react from "react";
import { View, Text, StyleSheet } from "react-native";

function CourseRegistration() {
	return (
		<View>
			<View style={styles.credit_view}>
				<Text style={styles.credit_text}>
					F309 - Rural Banking and Micro {"\n"} Finance {"\n"} Elective {"\n"}{" "}
					Credit -3
				</Text>
			</View>
			<View style={styles.credit_view}>
				<Text style={styles.credit_text}>
					F309 - Rural Banking and Micro {"\n"} Finance {"\n"} Elective {"\n"}{" "}
					Credit -3
				</Text>
			</View>
			<View style={styles.credit_view}>
				<Text style={styles.credit_text}>
					F309 - Rural Banking and Micro {"\n"} Finance {"\n"} Elective {"\n"}{" "}
					Credit -3
				</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	credit_view: {
		borderWidth: 4,
		margin: "3%",
		borderRadius: 10,
	},
	credit_text: {
		margin: "2%",
		fontSize: 20,
	},
});
export default CourseRegistration;
