import { useState } from "react";
import HomeHeader from "../components/Global/HomeHeader";
import LandingHeader from "../components/home/LandingHeader";
import NotificationModal from "../components/Global/NotificationModal";

export default () => {
	return (
		<div className="App">
			<HomeHeader></HomeHeader>
			<LandingHeader></LandingHeader>
			<NotificationModal></NotificationModal>
		</div>
	);
};
