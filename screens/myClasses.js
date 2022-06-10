import react, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Modal,
	Platform,
} from "react-native";
import CourseModal from "../components/coursemodal";

function Myclasses() {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View>
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
		</View>
	);
}
const styles = StyleSheet.create({
	main_view: {
		width: Platform.OS === "web" ? "50%" : "100%",
		marginRight: "auto",
		marginLeft: "auto",
	},
	touch_style: {
		borderWidth: 4,
		marginTop: "5%",
		borderRadius: 10,
	},
	touch_text: {
		fontSize: 20,
		textAlign: "center",
		fontWeight: "bold",
		margin: "5%",
	},
});
export default Myclasses;
