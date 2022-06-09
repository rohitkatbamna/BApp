import React, { useState } from "react";
import {
	Button,
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Platform,
} from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";
{
	/*
 USE OF THIS IS WIREDLY FOOLISH IT WORKS BUT YOU HAVE TO JUMPS TO LOOP OF CONNECT PICKER FILES FROM THE PICKER ANDROID AND MAKE IT RIGHT UNTILL THE ERROR GOES ALWAY. USE THIS WISELY ERROR AND OTHER STUFF ARE VERY PROBLEMATIC CHECK YOUR MIND HERE.

 THIS ERROR AND OCARNACE DOES NOT MAKE SENSE CONSIDERING THAT DATE TIME PCIKER SHOULD TAKE STUFF AUTOMATICALY FROM IOS OR ANDROID.

   */
}
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
	if (Platform.OS === "web") {
		return (
			<>
				<div style={{ margin: "10%" }}>
					<input type="date" style={{}} />
				</div>
			</>
		);
	}

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
		justifyContent: "center",
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
		paddingVertical: "5%",
		paddingHorizontal: "2%",
		borderRadius: 20,
	},
	date_time_picker: {
		marginRight: "10%",
		width: "100%",
	},
	cut_me: {
		margin: "50%",
	},
});

export default ApplyLeave;
