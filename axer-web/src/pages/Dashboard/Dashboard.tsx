import DashboardPagination from "./DashboardPagination";
import HomeHeader from "../../components/Global/HomeHeader";
import NotificationModal from "../../components/Global/NotificationModal";
import DashboardLayout from "../../components/Dashboard/DashboardLayout";

export default () => {
	return (
		<div className="App">
			<HomeHeader></HomeHeader>
			<DashboardLayout></DashboardLayout>
			<NotificationModal></NotificationModal>
		</div>
	);
};
