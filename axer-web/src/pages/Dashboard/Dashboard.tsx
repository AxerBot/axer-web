import DashboardPagination from "./DashboardPagination";
import HomeHeader from "../../components/HomeHeader";
import NotificationModal from "../../components/NotificationModal";
import DashboardLayout from "../../components/DashboardLayout";

export default () => {
	return (
		<div className="App">
			<HomeHeader></HomeHeader>
			<DashboardLayout></DashboardLayout>
			<NotificationModal></NotificationModal>
		</div>
	);
};
