# 王有发 · 个人作品集

游戏项目经理（PM × 视觉）个人作品集网站。暗色系、科技感、克制设计，PC 优先。

## 技术栈

- **Vite 5 + React 18**
- 纯手写 CSS（无 UI 框架），设计系统集中在 `src/styles/global.css`
- 字体：Space Grotesk（@fontsource 本地化，无外链依赖）
- 动效：IntersectionObserver 渐入 + CSS 过渡 + marquee，`prefers-reduced-motion` 兜底

## 目录结构

```
portfolio/
├─ public/
│  ├─ favicon.svg
│  └─ assets/           # 头像/作品图/视频/实机截图
├─ src/
│  ├─ data/content.js   # ★ 全部文案数据，改文案只动这个文件
│  ├─ hooks/useReveal.js
│  ├─ styles/global.css
│  └─ components/       # Navbar / Hero / About / Projects / Strengths / Contact
└─ vite.config.js
```

## 本地运行

```bash
npm install
npm run dev      # 开发
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 部署（Vercel 示例）

1. 把本仓库推到 GitHub。
2. 登录 [vercel.com](https://vercel.com)，点 **Add New → Project → Import**，选择本仓库。
3. 框架自动识别 Vite，构建命令 `npm run build`、输出目录 `dist`（通常自动填好，无需改）。
4. 点 **Deploy**，几十秒后拿到 `https://xxx.vercel.app` 免费子域名。
5. （可选）在 **Settings → Domains** 绑定自己的域名。

> 国内访问若想更稳定，可用 Cloudflare Pages（连 GitHub 同款流程，送 `pages.dev` 子域名）。
