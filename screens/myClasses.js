import react, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import CourseModal from "../components/coursemodal";

function Myclasses() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<>
			<View style={styles.main_view}>
				<CourseModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
				<TouchableOpacity
					style={styles.touch_style}
					onPress={() => setModalVisible(true)}>
					<Text style={styles.touch_text}>
						A101 - Proficiency in Business Tools
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.main_view}>
				<CourseModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
				<TouchableOpacity
					style={styles.touch_style}
					onPress={() => setModalVisible(true)}>
					<Text style={styles.touch_text}>
						A101 - Proficiency in Business Tools
					</Text>
				</TouchableOpacity>
			</View>

			<View style={styles.main_view}>
				<CourseModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
				<TouchableOpacity
					style={styles.touch_style}
					onPress={() => setModalVisible(true)}>
					<Text style={styles.touch_text}>
						A101 - Proficiency in Business Tools
					</Text>
				</TouchableOpacity>
			</View>
		</>
	);
}
const styles = StyleSheet.create({
	main_view: {
		margin: "8%",
	},
	touch_style: {
		borderWidth: 4,
		marginTop: "5%",
	},
	touch_text: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
		margin: "5%",
	},
});
export default Myclasses;
