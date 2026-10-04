import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "公告",

	// 公告列表（sort 越大越靠前）
	items: [
		{
			tag: "友链",
			title: "互换友链",
			content: "欢迎各位大佬互换友链，要求内容原创、稳定更新。申请前请先看友链页的说明，期待和你交换链接。",
			time: "2026-10-04",
			link: "/friends/",
			sort: 2,
		},
	],

	// 是否允许用户关闭公告
	closable: true,
};
