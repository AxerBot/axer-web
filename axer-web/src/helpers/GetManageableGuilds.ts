import { parsePermissionBitfield } from "./CalculatePermissions";

interface Guild {
	features: string[];
	icon: string | null;
	id: string;
	name: string;
	owner: boolean;
	permissions: string;
}

export default (guilds: Guild[]): Guild[] => {
	const moderation_permissions = [
		"ADMINISTRATOR",
		"MANAGE_CHANNELS",
		"MANAGE_GUILD",
		"MANAGE_MESSAGES",
		"MODERATE_MEMBERS",
	];

	const response: any = [];

	guilds.forEach((guild) => {
		parsePermissionBitfield(guild.permissions).forEach((permission) => {
			if (
				moderation_permissions.includes(permission) &&
				!response.includes(guild)
			)
				response.push(guild);
		});
	});

	return response;
};
