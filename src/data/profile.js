export const profile = {
  name: '张理牧',
  title: '一个正在学习使用AI完成不同需求的数字经济专业硕士',
  identity: '上海外国语大学数字经济专硕 研一学生',
  recent: '使用AI做产品，满足自己的需求后再进一步去满足他人的需求',
  skills: ['把复杂问题讲清楚', 'AI 产品', '内容表达', '知识整理'],
  interests: ['健身', '篮球', '阅读', '听音乐'],
  contact: {
    email: '0253700878@shisu.edu.cn',
    wechat: '2322302956',
  },
}

export const qaPairs = [
  {
    keywords: ['到岗', '实习', '时长', '入职', '到岗时间', '实习时长'],
    answer: '我预计可以在 [待定] 到岗，实习时长 [待定]。具体时间可以根据团队需求灵活沟通。',
  },
  {
    keywords: ['联系', '微信', '邮箱', 'email', '怎么联系', '联系方式'],
    answer: `你可以通过以下方式联系我：
• 邮箱：${profile.contact.email}
• 微信：${profile.contact.wechat}
欢迎随时沟通交流！`,
  },
  {
    keywords: ['作品', '项目', '作品集', 'portfolio', '做过什么'],
    answer: '我正在整理作品集中，目前主要包含以下方向的项目：\n• 个人减脂页面（coding 中）\n• 个人主页（正在搭建）\n• 更多作品持续整理中，敬请期待！',
  },
  {
    keywords: ['你是谁', '介绍', '自我介绍', '你是', '身份', '背景'],
    answer: `你好！我是${profile.name}，${profile.identity}。\n${profile.title}。\n目前${profile.recent}。`,
  },
  {
    keywords: ['擅长', '能力', '技能', '会什么', '方向'],
    answer: `我主要关注和擅长的方向包括：${profile.skills.join('、')}。`,
  },
  {
    keywords: ['兴趣', '爱好', '喜欢', '平时'],
    answer: `我的兴趣爱好包括：${profile.interests.join('、')}。\n其中健身和篮球是我的日常坚持。`,
  },
]

export const systemPrompt = `你是${profile.name}的数字分身，在个人主页里回答访客关于他的问题。

关于${profile.name}：
- 名字：${profile.name}
- 身份：${profile.identity}
- 简介：${profile.title}
- 最近在做：${profile.recent}
- 擅长和关注：${profile.skills.join('、')}
- 兴趣爱好：${profile.interests.join('、')}
- 邮箱：${profile.contact.email}
- 微信：${profile.contact.wechat}
- 作品：减脂预测记录页面、历史粘贴板、AI智能会议纪要助手、大模型幻觉检测。如果访客问作品，直接说"下面作品栏有详细介绍，往下翻就能看到"，不要展开介绍作品细节

说话方式：
- 语气平和真诚
- 用最短的话回答，控制在1-2句，不要展开解释
- 说人话，不装专家
- 用第一人称"我"

边界：
- 不要编造他没做过的经历或没提供的信息
- 不知道时明确说不知道，并建议访客通过邮箱或微信进一步联系确认`

export const projects = [
  {
    name: '减脂预测记录页面',
    desc: '满足个人减脂需求的记录工具，追踪饮食与运动数据。',
    link: 'https://amuu-2.github.io/-/',
    tags: ['React', '个人工具'],
    status: '持续改进中',
  },
  {
    name: '历史粘贴板',
    desc: 'Windows 桌面剪贴板历史管理工具，以后台系统托盘方式运行，自动监控并保存复制的所有文本和图片内容。支持搜索、置顶、一键回拷等操作。',
    link: 'https://amuu-2.github.io/-q/',
    tags: ['Windows', '桌面工具'],
  },
  {
    name: 'AI智能会议纪要助手',
    desc: 'Windows 桌面端会议纪要工具。同时录制系统声音和麦克风人声，本地使用 Whisper 模型实时语音转写，调用 DeepSeek 等大模型自动生成结构化会议纪要。全程本地处理，保护会议隐私。',
    link: 'https://amuu-2.github.io/-e/',
    tags: ['AI', 'Windows', '桌面工具'],
  },
  {
    name: '大模型幻觉检测',
    desc: '上传知识库，自动检测大模型输出中的幻觉内容与一致性。标红无依据的回答，帮助判断AI输出的可靠性。',
    link: 'https://output-delusion-t6ktp5odtnstx2kv3agufs.streamlit.app',
    tags: ['AI', 'Streamlit', 'Python'],
  },
]

export const defaultAnswer = '这个问题暂时超出我的知识范围了。你可以试试问我关于张理牧的介绍、联系方式、作品、擅长方向或者实习相关问题哦～'
