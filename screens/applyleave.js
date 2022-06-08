import React, { useState } from "react";
import {
	Button,
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

function ApplyLeave() {
	const [date, setDate] = useState(new Date());
	const [mode, setMode] = useState("date");
	const [show, setShow] = useState(false);

	const onChange = (event, selectedDate) => {
		const currentDate = selectedDate;
		setShow(false);
		setDate(currentDate);
	};

	const showMode = (currentMode) => {
		setShow(true);
		setMode(currentMode);
	};

	const showDatepicker = () => {
		showMode("date");
	};

	const showTimepicker = () => {
		showMode("time");
	};

	return (
		<>
			<View style={styles.main_view}>
				<TouchableOpacity style={styles.button_image} onPress={showDatepicker}>
					<Text>From</Text>
					<Image
						source={require("../assets/calendar.png")}
						style={styles.calender_icon_size}
					/>
				</TouchableOpacity>
				<TouchableOpacity style={styles.button_image} onPress={showDatepicker}>
					<Text>To</Text>
					<Image
						source={require("../assets/calendar.png")}
						style={styles.calender_icon_size}
					/>
				</TouchableOpacity>
			</View>
			{show && (
				<DateTimePicker
					testID="dateTimePicker"
					value={date}
					mode={mode}
					is24Hour={true}
					onChange={onChange}
					style={styles.date_time_picker}
				/>
			)}
			<Text>{date.toDateString()}</Text>
			<Text>{date.toTimeString()}</Text>
		</>
	);
}
const styles = StyleSheet.create({
	main_view: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-around",
	},
	calender_icon_size: {
		height: 20,
		width: 20,
		marginLeft: "4%",
	},
	button_image: {
		flexDirection: "row",
		alignContent: "center",
		alignItems: "center",
		marginLeft: "10%",
		borderWidth: 2,
		marginTop: "5%",
		justifyContent: "space-between",
	},
	date_time_picker: {
		marginRight: 100,
		width: "100%",
	},
});

export default ApplyLeave;
