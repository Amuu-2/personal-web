export const profile = {
  name: '张理牧',
  title: '一个正在学习使用AI完成不同需求的数字经济专业硕士',
  identity: '上海外国语大学数字经济专硕 27届毕业生',
  recent: '搭建个人主页，制作、整理作品集',
  skills: ['内容表达', 'AI 产品', '知识整理'],
  interests: ['健身', '篮球', '阅读', '听音乐'],
  trait: '外向善于交际',
  contact: {
    email: 'example@email.com',
    wechat: 'wx_example',
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
    answer: `我主要关注和擅长的方向包括：${profile.skills.join('、')}。\n另外，我的特点是${profile.trait}，喜欢与人交流合作。`,
  },
  {
    keywords: ['兴趣', '爱好', '喜欢', '平时'],
    answer: `我的兴趣爱好包括：${profile.interests.join('、')}。\n其中健身和篮球是我的日常坚持。`,
  },
]

export const defaultAnswer = '这个问题暂时超出我的知识范围了。你可以试试问我关于张理牧的介绍、联系方式、作品、擅长方向或者实习相关问题哦～'
