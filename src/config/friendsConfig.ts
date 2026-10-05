import type { FriendLink, FriendsPageConfig } from "../types/config";

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,

	// 友链申请链接，填写后会在友链页面显示申请按钮
	// 使用模板参数直接跳转到友链申请模板
	applyLink:
		"https://github.com/VTESLEK/my-blog/issues/new?template=friend-link.yml",

	// 本站信息，用于友链申请指南弹窗中的站点信息展示
	siteInfo: {
		name: "xane",
		desc: "Keep going.",
		url: "https://xane.eu.cc",
		avatar:
			"https://cloudflare-imgbed-d88.pages.dev/file/1784102742642_头像.jpg",
		email: "vteslek@outlook.com",
	},

	// 注意事项，用于友链申请指南弹窗中的注意事项展示
	notes: [
		{
			title: "互换原则",
			content: "请先将本站添加到您的友链页面，确认后会添加您的友链",
		},
		{
			title: "链接维护",
			content: "友链网站长期无法访问或内容违规，将会被移除",
		},
		{
			title: "内容要求",
			content: "内容积极向上，不含有任何含色情/反动/暴力等违法违规内容",
		},
		{
			title: "站点要求",
			content: "支持 HTTPS，以原创内容为主，能够正常访问且有持续更新",
		},
	],

	// 对话气泡文案，滚动到申请区时逐个弹出并打字机显示
	// role: "cat" = 左侧（作者头像）；"owner" = 站长（右侧，文字头像）
	chat: [
		{
			role: "cat",
			name: "站长",
			text: "来者何人？报上名号，本站可不收无名之辈。",
		},
		{
			role: "owner",
			name: "站长",
			text: "欢迎各位大佬来小破站，友链在下面，请自取~",
		},
	],
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "xane",
		imgurl: "https://cloudflare-imgbed-d88.pages.dev/file/1784102742642_头像.jpg",
		desc: "Keep going.",
		siteurl: "https://xane.eu.cc/",
		tags: ["Blog"],
		weight: 10,
		enabled: false,
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 9,
		enabled: false,
	},
	{
		title: "Astro",
		imgurl: "https://avatars.githubusercontent.com/u/44914786?v=4&s=640",
		desc: "The web framework for content-driven websites. ⭐️ Star to support our work!",
		siteurl: "https://github.com/withastro/astro",
		tags: ["Framework"],
		weight: 100,
		enabled: true,
	},
	{
		title: "Olinl Blog",
		imgurl: "https://blog.olinl.com/assets/images/avatar.webp",
		desc: "分享、实践、学习",
		siteurl: "https://blog.olinl.com",
		tags: ["Astro"],
		weight: 99,
		enabled: true,
	},
	{
		title: "番茄主理人",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=20447289&s=640",
		desc: "坐而言不如起而行.",
		siteurl: "https://fqzlr.com/",
		tags: ["Blog"],
		weight: 98,
		enabled: true,
	},
	{
		title: "年华",
		imgurl: "https://q1.qlogo.cn/g?b=qq&nk=1323860289&s=640",
		desc: "分享生活和技术。",
		siteurl: "https://blog.amamo.top",
		tags: ["Astro"],
		weight: 97,
		enabled: true,
	},
	{
		title: "Phantomxjc",
		imgurl: "https://xjc.ccwu.cc/img/uploads/2026/06/image1.jpg",
		desc: "记录个人生活和学习的一个网站。",
		siteurl: "https://xjc.ccwu.cc",
		tags: ["Astro"],
		weight: 96,
		enabled: true,
	},
	{
		title: "MmzMing的知识库",
		imgurl: "https://i.stardots.io/784774835/StarDots-2026052116374135506.jpg",
		desc: "哈基米，南北绿豆",
		siteurl: "https://tblog.mmzhiku.xyz",
		tags: ["Astro"],
		weight: 110,
		enabled: true,
	},

];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	// 权重降序；同权重时保留配置列表中的原始顺序
	return friends
		.map((friend, index) => ({ friend, index }))
		.sort((a, b) => b.friend.weight - a.friend.weight || a.index - b.index)
		.map(({ friend }) => friend);
};
