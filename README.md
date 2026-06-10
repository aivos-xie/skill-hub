# Skill Hub — 模块化AI知识与工具中心

> 一个关于模块化的AI知识与工具中心。这里汇集了我整理的学习笔记、命令速查、以及可以直接使用的AI编程助手工具。

---

## 🌐 访问地址

- **Skill Hub**: [https://aivos-xie.github.io/skill-hub/](https://aivos-xie.github.io/skill-hub/)
- **主站**: [https://aivos-xie.github.io/](https://aivos-xie.github.io/)
- **MCP服务器**: aivios-coding-coach（需要在IDE中配置MCP Client连接）

---

## 📦 项目结构

```
skill-hub/
├── index.html              # 首页
├── download.html         # 下载中心（8个Skill卡片）
├── mcp.html            # MCP配置说明
├── search.html         # 搜索页面
├── about.html          # 关于页面
├── README.md           # 本文档
│
├── assets/
│   ├── style.css       # 科幻主题样式（玻璃态、渐变、动画）
│   ├── app.js        # 共享脚本（SKILLS数据 / 搜索 / 下载 / 交互）
│   ├── tip-qr.jpg     # 赞赏二维码
│   ├── skills/       # 8个Skill模块Markdown文件
│   │   ├── skill-python.md       # Python学习笔记
│   │   ├── skill-algorithms.md   # 数据结构与算法
│   │   ├── skill-git.md          # Git命令速查
│   │   ├── skill-linux.md        # Linux基础
│   │   ├── skill-docker.md       # Docker入门
│   │   ├── skill-courses.md      # OS与网络课程
│   │   ├── skill-reading.md      # 读书笔记
│   │   └── skill-resources.md    # 资源合集
│   └── ai-knowledge/   # 预留AI知识框架
│
└── docs/               # 可选的详细文档目录
    ├── programming/
    ├── tools/
    ├── courses/
    ├── reading/
    └── resources/
```

---

## 🎯 核心功能

### 5个静态页面

| 页面 | 功能 |
|------|------|
| 首页 index.html | 项目介绍、功能导航 |
| 下载中心 download.html | 8个Skill卡片、搜索框、全选/下载按钮 |
| MCP配置 mcp.html | 3种MCP配置方式说明 |
| 搜索页面 search.html | Skill内容搜索 |
| 关于 about.html | 关于项目与联系方式 |

### 8个Skill模块

| Skill | 内容 | 用途 |
|-------|------|------|
| **python | 语法、标准库、虚拟环境、最佳实践 | Python开发者 |
| **algorithms** | Big-O、数据结构、经典题、DP | 算法学习与面试 |
| **git** | 工作流、分支、远程、冲突 | Git速查 |
| **linux** | 命令、shell脚本、权限、进程 | Linux运维 |
| **docker** | 镜像、容器、compose、Dockerfile | 容器入门 |
| **courses** | OS（进程/内存/TCP | 课程复习 |
| **reading** | Clean Code/设计模式/Pragmatic | 提升代码质量 |
| **resources** | 推荐书/网站/工具/VSCode扩展 | 资源导航 |

### MCP服务器（AIVIOS Coding Coach）

与 `aivios-coding-coach/` 项目提供8个MCP Tools：

- `search_knowledge` — 搜索知识库
- `get_document` — 获取完整文档
- `list_categories` — 列出分类
- `list_skills` — 列出Skill列表
- `code_review` — 代码审查
- `suggest_architecture` — 架构建议
- `debug_workflow` — 调试工作流
- `refactor_guide` — 重构指南

---

## 🚀 本地预览

```bash
# 方法1：npx serve（推荐）
cd skill-hub
npx serve .
# 访问 http://localhost:3000

# 方法2：Python内置
cd skill-hub
python -m http.server 8080

# 方法3：VSCode Live Server插件
# 在VSCode中右键 index.html → Open with Live Server
```

---

## 📝 内容更新流程

### 自动生成（推荐）

知识库 Markdown 文件由 `../knowledge-harvest/scripts/harvest.py` 生成：

```bash
cd ../knowledge-harvest
python scripts/harvest.py all
# → 8/8 模块成功生成到 skill-hub/assets/skills/
```

### 手动编辑

如果你只想更新某个Skill，直接编辑 `assets/skills/skill-*.md`。下次运行 harvest.py 会覆盖，因此如果想保留手动修改，请勿运行 harvest.py。

---

## 🔧 添加新Skill

1. 在 `knowledge-harvest/scripts/harvest.py` 的 `KnowledgeHarvester` 类中添加生成器方法（参考 `generate_xxx_knowledge()`）
2. 在 `generate_module()` 的 generators 字典中注册
3. 在 `knowledge-harvest/config/harvest-config.json` 中添加配置块
4. 在 `assets/app.js` 的 `SKILLS` 数组中添加卡片信息
5. 运行 `python scripts/harvest.py all` 重新生成

---

## 📦 部署到 GitHub Pages

1. 将 skill-hub 目录推送到 GitHub 仓库
2. 仓库 Settings → Pages → 选择 main 分支 / docs 目录
3. 等待几分钟，访问 `https://用户名.github.io/仓库名/`

---

## 🌟 项目状态

- 8个Skill Markdown文件已生成
- 5个HTML页面已完成
- JavaScript交互功能已实现
- 科幻主题CSS已完成
- MCP服务器代码已完成
- 知识采集系统已完成
- 内容持续补充中
- MCP服务器扩展中

---

## 📚 更多资源

- 主站：[https://aivos-xie.github.io/](https://aivos-xie.github.io/)
- 知识采集：`../knowledge-harvest/scripts/harvest.py`
- MCP服务器：`../aivios-coding-coach/index.js`
- 部署文档：`../DEPLOYMENT.md`
- 完整交付清单：`../DELIVERY-CHECKLIST.md`

---

*维护者：aivos
*版本：2.0.0
*最后更新：2026-06-10
