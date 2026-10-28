// ============================================================
// 站点内容数据 —— 全部文案集中于此，改文案只动这一个文件
// 数据来源：王有发应聘PM简历.docx
// ============================================================

export const profile = {
  name: '王有发',
  nameEn: 'WANG YOUFA',
  brand: 'HYPERION',
  role: '游戏项目经理',
  roleEn: 'GAME PROJECT MANAGER',
  tagline: '懂视觉、能上手的版本交付者',
  intro: [
    '荆州学院软件工程专业毕业，大学期间自学 C++ 与 UE4 开发，能读懂客户端逻辑，也能和程序用同一套语言对话。',
    '2024/4 – 2026/5 任职于腾讯《和平精英》项目（V 岗），负责设置界面版本需求管理与三端适配统筹，习惯以数据、清单和验收标准驱动交付。',
    '求职方向：游戏项目经理。擅长把模糊的需求拆成清晰的任务，把跨职能的协作拧成一股绳，让版本如期、干净地上线。',
  ],
  email: 'hyperioni@163.com',
  location: '腾讯《和平精英》项目 · V 岗',
  education: '荆州学院 · 软件工程',
}

export const stats = [
  { value: '1.5', unit: '年+', label: '《和平精英》版本经验' },
  { value: '100', unit: '+', label: '三端适配界面统筹' },
  { value: '0', unit: '', label: '阻塞性缺陷 · 0 回滚上线' },
  { value: '60', unit: '%', label: '重构后开发周期缩短' },
]

export const marquee = [
  '版本需求拆解', '任务优先级排序', '里程碑节点把控', '需求澄清与确认',
  '变更影响评估', '风险提前识别', '依赖关系梳理', '跨职能四方对齐',
  '冲突协调推进', '信息同步机制', '流程规范建设', '知识库沉淀',
]

export const projects = [
  {
    id: '01',
    title: '设置界面 · 新旧改版',
    subtitle: '《和平精英》设计系统重构',
    desc: '原设置界面架构陈旧、体验落后，需在不改后端核心逻辑的前提下整体替换。参与需求评审，协同策划梳理逻辑变更范围近 20 个问题、重新规划信息架构；识别十余处需同步改造的逻辑关联点，提前与开发对齐接口变更方案；明确分阶段验收标准，按标准推进每一步。',
    tags: ['需求评审', '信息架构', '分阶段验收'],
    results: ['0 阻塞性缺陷 · 0 回滚', '如期上线', '沉淀《设置界面重构规范》，后续新增设置项开发周期缩短约 60%'],
    image: '/assets/pubgm/pubgm-01.jpg',
    wide: true,
  },
  {
    id: '02',
    title: '三端版本适配',
    subtitle: '《和平精英》移动端 → PC / 模拟器',
    desc: '将移动端内容同步适配至 PC 端及模拟器平台，涉及百余个界面的分辨率适配，同时保障原端体验不受影响。统筹 20+ 界面适配需求拆解，按性能优化分类建立任务清单；识别 10+ 处 PC 端特有问题；协调视觉输出 20 套适配资源，协商交付规范与验收标准；维护适配问题跟踪表，全部问题在封板前闭环。',
    tags: ['需求统筹', '资源协调', '问题闭环'],
    results: ['三端版本同步上线', '0 平台特异性阻塞缺陷', '沉淀《蓝图路径资源对齐表》'],
    image: '/assets/pubgm/pubgm-05.jpg',
    wide: true,
  },
  {
    id: '03',
    title: '《艾尔登法环》UI 复刻',
    subtitle: 'UE4 · UMG / C++ 自研练习',
    desc: '基于 UE4 UMG 复刻《艾尔登法环》装备与角色数据界面：装备栏位布局、物品选中态、属性面板数据绑定与层级导航，还原原作的暗金视觉氛围与信息密度控制。',
    tags: ['UE4', 'UMG', 'C++', 'UI 还原'],
    results: ['装备 / 置物包 / 角色数据三大面板', '像素级视觉还原', 'UE4 实机操作演示'],
    video: '/assets/eldenring-demo.mp4',
    poster: '/assets/eldenring-poster.jpg',
    wide: false,
  },
  {
    id: '04',
    title: 'MyDMC 引擎预览',
    subtitle: 'UE4 · 网络模式 Standalone 实机预览',
    desc: '自研 UE4 项目的实机运行预览：D3D Shader Model 6 渲染管线下的场景表现与交互逻辑验证。',
    tags: ['UE4', 'D3D SM6', 'Standalone'],
    results: ['64-bit D3D 实机运行验证'],
    video: '/assets/hero-reel.mp4',
    wide: false,
  },
]

export const strengths = [
  {
    id: '01',
    title: '版本需求拆解',
    desc: '把版本级需求拆解为可执行的任务分解与交付排期，核心功能界面 0 遗漏上线，版本界面全部按时交付。',
    items: ['需求拆解', '优先级排序', '里程碑把控'],
  },
  {
    id: '02',
    title: '跨职能四方对齐',
    desc: '对接策划评审与澄清，协同视觉对齐还原度标准，配合程序完成逻辑联调，协同 QA 完成走查验收。',
    items: ['需求澄清', '还原度对齐', '联调走查'],
  },
  {
    id: '03',
    title: '风险与流程建设',
    desc: '变更影响评估、风险提前识别、依赖关系梳理；识别流程痛点并推动配置项规范落地，让效率成为常态。',
    items: ['变更评估', '风险识别', '规范建设'],
  },
  {
    id: '04',
    title: '技术理解与视觉实现',
    desc: '软件工程科班 + 自学 C++ / UE4，读懂客户端逻辑；能用引擎把视觉想法做成实物，和程序说同一种语言。',
    items: ['C++', 'UE4', 'UMG'],
  },
]

export const toolbelt = ['TAPD / Jira', '飞书文档 / Wiki', 'XMind / ProcessOn', 'Excel 数据跟踪']

// 实机记录画廊（分组）
export const galleries = [
  {
    id: 'pubgm',
    title: '设置界面',
    subtitle: '《和平精英》设置界面 · 手游端实机走查',
    images: [
      '/assets/pubgm/pubgm-01.jpg',
      '/assets/pubgm/pubgm-03.jpg',
      '/assets/pubgm/pubgm-05.jpg',
      '/assets/pubgm/pubgm-07.jpg',
      '/assets/pubgm/pubgm-09.jpg',
      '/assets/pubgm/pubgm-11.jpg',
    ],
  },
  {
    id: 'activity',
    title: '活动界面',
    subtitle: '《和平精英》运营活动 · 界面与视觉呈现',
    images: [
      '/assets/activity/activity-01-shuisui.jpg',
      '/assets/activity/activity-02-mofang.jpg',
      '/assets/activity/activity-03-shengling.jpg',
      '/assets/activity/activity-04-rongtu.jpg',
    ],
  },
]

export const nav = [
  { id: 'about', label: '经历', en: 'ABOUT' },
  { id: 'projects', label: '项目', en: 'WORK' },
  { id: 'strengths', label: '优势', en: 'STRENGTHS' },
  { id: 'contact', label: '联系', en: 'CONTACT' },
]
