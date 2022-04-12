import { Express, json } from "express";
import Authenticate from "../authorization/user/Authenticate";
import GetGuild from "../data/guild/GetGuild";
import GetGuildChannels from "../data/guild/GetGuildChannels";
import GetUserData from "../data/user/GetUserData";
import GetUserGuilds from "../data/user/GetUserGuilds";
import UpdateGuild from "../data/guild/UpdateGuild";

export default async (router: Express) => {
	router.get("/api/authenticate", Authenticate);
	router.get("/api/@me", GetUserData);
	router.get("/api/@me/guilds", GetUserGuilds);
	router.get("/api/guild/:guild", GetGuild);
	router.get("/api/guild/:guild/channels", GetGuildChannels);
	router.post("/api/guild/:guild/update", json(), UpdateGuild);
};
