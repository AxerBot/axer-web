import { useState } from "react";
import HomeHeader from "../components/HomeHeader";
import LandingHeader from "../components/LandingHeader";
import NotificationModal from "../components/NotificationModal";

export default () => {
	return (
		<div className="App">
			<HomeHeader></HomeHeader>
			<LandingHeader></LandingHeader>
			<NotificationModal></NotificationModal>
		</div>
	);
};
