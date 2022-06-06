import react from "react";
import { Modal, View, Text, StyleSheet, Pressable } from "react-native";

function CourseModal({ modalVisible, setModalVisible }) {
	return (
		<Modal
			animationType="slide"
			transparent={true}
			visible={modalVisible}
			onRequestClose={() => {
				Alert.alert("Modal has been closed.");
				setModalVisible(!modalVisible);
			}}>
			<View style={styles.centeredView}>
				<View style={styles.modalView}>
					<Pressable
						style={[styles.button, styles.buttonClose]}
						onPress={() => setModalVisible(!modalVisible)}>
						<Text style={styles.textStyle}>Close</Text>
					</Pressable>

					<Text style={styles.modalText}>
						Upcoming Exam schedule(flash) {"\n"}
						Live sessions (flash) {"\n"}
						Attendance {"\n"}
						Total schedule class
					</Text>
				</View>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	modalView: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
		marginTop: "3%",
		fontWeight: "bold",
		fontSize: 20,
	},
});
export default CourseModal;
