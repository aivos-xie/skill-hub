# Hermes Skills Collection

Synced from github.com/aivos-xie/hermes-skills

---
# apple

Apple / macOS skills — tools that interact with the Mac desktop (Finder,
native apps) or system features (accessibility, screenshots).
# automation
# autonomous-ai-agents

description: Skills for spawning and orchestrating autonomous AI coding agents and multi-agent workflows — running independent agent processes, delegating tasks, and coordinating parallel workstreams.
# coding-principles

name: coding-principles
description: 编码四原则 — 先思考、求简、精准修改、目标驱动
triggers:
  - coding
  - programming
  - code review
  - debugging
  - 写代码
  - 编程

# Coding Principles Skill

编码时必须遵循的四条核心原则。

## 原则

### 1. Think Before Coding（先思考再编码）
- **解决的问题**：错误的假设、隐藏的困惑、缺失的权衡
- 动手之前先理解需求，梳理思路，考虑边界情况
- 不要急于实现，先确认方向正确

### 2. Simplicity First（先求简）
- **解决的问题**：过度复杂化、臃肿的抽象
- 优先选择最简单的实现方案
- 避免过度设计，不要为了"优雅"而增加不必要的复杂度
- 能用 10 行解决的问题不要用 100 行

### 3. Surgical Changes（精准修改）
- **解决的问题**：正交编辑、修改不该触碰的代码
- 只改需要改的部分，不要"顺手"重构不相关的代码
- 每次修改都要有明确的目的
- 最小化变更范围，降低引入新 bug 的风险

### 4. Goal-Driven Execution（以目标为导向的执行）
- **解决的问题**：通过测试先行、可验证的成功标准来提高效率
- 先明确"成功"的定义
- 用测试来验证实现是否符合预期
- 每一步都要可验证、可回溯

## 使用方式

在编码、调试、代码审查时，参考这四条原则来指导决策。

# creative

description: Creative content generation — ASCII art, hand-drawn style diagrams, and visual design tools.
# data-science

description: Skills for data science workflows — interactive exploration, Jupyter notebooks, data analysis, and visualization.
# devops
# diagramming

description: Diagram creation skills for generating visual diagrams, flowcharts, architecture diagrams, and illustrations using tools like Excalidraw.
# dogfood

name: dogfood
description: "Exploratory QA of web apps: find bugs, evidence, reports."
version: 1.0.0
platforms: [linux, macos, windows]
metadata:
  hermes:
    tags: [qa, testing, browser, web, dogfood]
    related_skills: []

# Dogfood: Systematic Web Application QA Testing

## Overview

This skill guides you through systematic exploratory QA testing of web applications using the browser toolset. You will navigate the application, interact with elements, capture evidence of issues, and produce a structured bug report.

## Prerequisites

- Browser toolset must be available (`browser_navigate`, `browser_snapshot`, `browser_click`, `browser_type`, `browser_vision`, `browser_console`, `browser_scroll`, `browser_back`, `browser_press`)
- A target URL and testing scope from the user

## Inputs

The user provides:
1. **Target URL** — the entry point for testing
2. **Scope** — what areas/features to focus on (or "full site" for comprehensive testing)
3. **Output directory** (optional) — where to save screenshots and the report (default: `./dogfood-output`)

## Workflow

Follow this 5-phase systematic workflow:

### Phase 1: Plan

1. Create the output directory structure:
   ```
   {output_dir}/
   ├── screenshots/       # Evidence screenshots
   └── report.md          # Final report (generated in Phase 5)
2. Identify the testing scope based on user input.
3. Build a rough sitemap by planning which pages and features to test:
   - Landing/home page
   - Navigation links (header, footer, sidebar)
   - Key user flows (sign up, login, search, checkout, etc.)
   - Forms and interactive elements
   - Edge cases (empty states, error pages, 404s)

### Phase 2: Explore

For each page or feature in your plan:

1. **Navigate** to the page:
   browser_navigate(url="https://example.com/page")

2. **Take a snapshot** to understand the DOM structure:
   browser_snapshot()

3. **Check the console** for JavaScript errors:
   browser_console(clear=true)
   Do this after every navigation and after every significant interaction. Silent JS errors are high-value findings.

4. **Take an annotated screenshot** to visually assess the page and identify interactive elements:
   browser_vision(question="Describe the page layout, identify any visual issues, broken elements, or accessibility concerns", annotate=true)
   The `annotate=true` flag overlays numbered `[N]` labels on interactive elements. Each `[N]` maps to ref `@eN` for subsequent browser commands.

5. **Test interactive elements** systematically:
   - Click buttons and links: `browser_click(ref="@eN")`
   - Fill forms: `browser_type(ref="@eN", text="test input")`
   - Test keyboard navigation: `browser_press(key="Tab")`, `browser_press(key="Enter")`
   - Scroll through content: `browser_scroll(direction="down")`
   - Test form validation with invalid inputs
   - Test empty submissions

6. **After each interaction**, check for:
   - Console errors: `browser_console()`
   - Visual changes: `browser_vision(question="What changed after the interaction?")`
   - Expected vs actual behavior

### Phase 3: Collect Evidence

For every issue found:

1. **Take a screenshot** showing the issue:
   browser_vision(question="Capture and describe the issue visible on this page", annotate=false)
   Save the `screenshot_path` from the response — you will reference it in the report.

2. **Record the details**:
   - URL where the issue occurs
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Console errors (if any)
   - Screenshot path

3. **Classify the issue** using the issue taxonomy (see `references/issue-taxonomy.md`):
   - Severity: Critical / High / Medium / Low
   - Category: Functional / Visual / Accessibility / Console / UX / Content

### Phase 4: Categorize

1. Review all collected issues.
2. De-duplicate — merge issues that are the same bug manifesting in different places.
3. Assign final severity and category to each issue.
4. Sort by severity (Critical first, then High, Medium, Low).
5. Count issues by severity and category for the executive summary.

### Phase 5: Report

Generate the final report using the template at `templates/dogfood-report-template.md`.

The report must include:
1. **Executive summary** with total issue count, breakdown by severity, and testing scope
2. **Per-issue sections** with:
   - Issue number and title
   - Severity and category badges
   - URL where observed
   - Description of the issue
   - Screenshot references (use `MEDIA:<screenshot_path>` for inline images)
   - Console errors if relevant
3. **Summary table** of all issues
4. **Testing notes** — what was tested, what was not, any blockers

Save the report to `{output_dir}/report.md`.

## Tools Reference

| Tool | Purpose |
|------|---------|
| `browser_navigate` | Go to a URL |
| `browser_snapshot` | Get DOM text snapshot (accessibility tree) |
| `browser_click` | Click an element by ref (`@eN`) or text |
| `browser_type` | Type into an input field |
| `browser_scroll` | Scroll up/down on the page |
| `browser_back` | Go back in browser history |
| `browser_press` | Press a keyboard key |
| `browser_vision` | Screenshot + AI analysis; use `annotate=true` for element labels |
| `browser_console` | Get JS console output and errors |

## Tips

- **Always check `browser_console()` after navigating and after significant interactions.** Silent JS errors are among the most valuable findings.
- **Use `annotate=true` with `browser_vision`** when you need to reason about interactive element positions or when the snapshot refs are unclear.
- **Test with both valid and invalid inputs** — form validation bugs are common.
- **Scroll through long pages** — content below the fold may have rendering issues.
- **Test navigation flows** — click through multi-step processes end-to-end.
- **Check responsive behavior** by noting any layout issues visible in screenshots.
- **Don't forget edge cases**: empty states, very long text, special characters, rapid clicking.
- When reporting screenshots to the user, include `MEDIA:<screenshot_path>` so they can see the evidence inline.
# domain

name: domain-intel
description: Passive domain reconnaissance using Python stdlib. Use this skill for subdomain discovery, SSL certificate inspection, WHOIS lookups, DNS records, domain availability checks, and bulk multi-domain analysis. No API keys required. Triggers on requests like "find subdomains", "check ssl cert", "whois lookup", "is this domain available", "bulk check these domains".
license: MIT

Passive domain intelligence using only Python stdlib and public data sources.
Zero dependencies. Zero API keys. Works out of the box.

## Capabilities

- Subdomain discovery via crt.sh certificate transparency logs
- Live SSL/TLS certificate inspection (expiry, cipher, SANs, TLS version)
- WHOIS lookup — supports 100+ TLDs via direct TCP queries
- DNS records: A, AAAA, MX, NS, TXT, CNAME
- Domain availability check (DNS + WHOIS + SSL signals)
- Bulk multi-domain analysis in parallel (up to 20 domains)

## Data Sources

- crt.sh — Certificate Transparency logs
- WHOIS servers — Direct TCP to 100+ authoritative TLD servers  
- Google DNS-over-HTTPS — MX/NS/TXT/CNAME resolution
- System DNS — A/AAAA records
# email

description: Skills for sending, receiving, searching, and managing email from the terminal.
# gaming

description: Skills for setting up, configuring, and managing game servers, modpacks, and gaming-related infrastructure.
# gifs

description: Skills for searching, downloading, and working with GIFs and short-form animated media.
# github

description: GitHub workflow skills for managing repositories, pull requests, code reviews, issues, and CI/CD pipelines using the gh CLI and git via terminal.
# inference-sh

# inference.sh

Run 150+ AI applications in the cloud via the [inference.sh](https://inference.sh) platform.

**One API key for everything** — access image generation, video creation, LLMs, search, 3D, and more through a single account. No need to manage separate API keys for each provider.

## Available Skills

- **cli**: Use the inference.sh CLI (`infsh`) via the terminal tool

## What's Included

- **Image Generation**: FLUX, Reve, Seedream, Grok Imagine, Gemini
- **Video Generation**: Veo, Wan, Seedance, OmniHuman, HunyuanVideo
- **LLMs**: Claude, Gemini, Kimi, GLM-4 (via OpenRouter)
- **Search**: Tavily, Exa
- **3D**: Rodin
- **Social**: Twitter/X automation
- **Audio**: TTS, voice cloning
# mcp

description: Skills for working with MCP (Model Context Protocol) servers, tools, and integrations. Documents the built-in native MCP client — configure servers in config.yaml for automatic tool discovery.
# media

description: Skills for working with media content — YouTube transcripts, GIF search, music generation, and audio visualization.
# mlops

description: Knowledge and Tools for Machine Learning Operations - tools and frameworks for training, fine-tuning, deploying, and optimizing ML/AI models
# note-taking

description: Note taking skills, to save information, assist with research, and collab on multi-session planning and information sharing.
# productivity

description: Skills for document creation, presentations, spreadsheets, and other productivity workflows.
# red-teaming
# research

description: Skills for academic research, paper discovery, literature review, domain reconnaissance, market data, content monitoring, and scientific knowledge retrieval.
# security
# smart-home

description: Skills for controlling smart home devices — lights, switches, sensors, and home automation systems.
# social-media

description: Skills for interacting with social platforms and social-media workflows — posting, reading, monitoring, and account operations.
# software-development
# yuanbao

name: yuanbao
description: "Yuanbao (元宝) groups: @mention users, query info/members."
    tags: [yuanbao, mention, at, group, members, 元宝, 派, 艾特]

# Yuanbao Group Interaction

## CRITICAL: How Messaging Works

**Your text reply IS the message sent to the group/user.** The gateway automatically delivers your response text to the chat. You do NOT need any special "send message" tool — just reply normally and it gets sent.

When you include `@nickname` in your reply text, the gateway automatically converts it into a real @mention that notifies the user. This is built-in — you have full @mention capability.

**NEVER say you cannot send messages or @mention users. NEVER suggest the user do it manually. NEVER add disclaimers about permissions. Just reply with the text you want sent.**

## Available Tools

| Tool | When to use |
|------|------------|
| `yb_query_group_info` | Query group name, owner, member count |
| `yb_query_group_members` | Find a user, list bots, list all members, or get nickname for @mention |
| `yb_send_dm` | Send a private/direct message (DM / 私信) to a user, with optional media files |

## @Mention Workflow

When you need to @mention / 艾特 someone:

1. Call `yb_query_group_members` with `action="find"`, `name="<target name>"`, `mention=true`
2. Get the exact nickname from the response
3. Include `@nickname` in your reply text — the gateway handles the rest

Example: user says "帮我艾特元宝"

Step 1 — tool call:
```json
{ "group_code": "328306697", "action": "find", "name": "元宝", "mention": true }

Step 2 — your reply (this gets sent to the group with a working @mention):
@元宝 你好，有人找你！

**That's it.** No extra explanation needed. Keep it short and natural.

**Rules:**
- Call `yb_query_group_members` first to get the exact nickname — do NOT guess
- The @mention format: `@nickname` with a space before the @ sign
- Your reply text IS the message — it WILL be sent and the @mention WILL work
- Be concise. Do NOT explain how @mention works to the user.

## Send DM (Private Message) Workflow

When someone asks to send a private message / 私信 / DM to a user:

1. Call `yb_send_dm` with `group_code`, `name` (target user's name), and `message`
2. The tool automatically finds the user and sends the DM
3. Report the result to the user

Example: user says "给 @用户aea3 私信发一个 hello"

yb_send_dm({ "group_code": "535168412", "name": "用户aea3", "message": "hello" })

Example with media: user says "给 @用户aea3 私信发一张图片"

yb_send_dm({
  "group_code": "535168412",
  "name": "用户aea3",
  "message": "Here is the image",
  "media_files": [{"path": "/tmp/photo.jpg"}]
})

- Extract `group_code` from the current chat_id (e.g. `group:535168412` → `535168412`)
- If you already know the user_id, pass it directly via the `user_id` parameter to skip lookup
- If multiple users match the name, the tool returns candidates — ask the user to clarify
- Do NOT use `send_message` tool for Yuanbao DMs — use `yb_send_dm` instead
- Supports media: images (.jpg/.png/.gif/.webp/.bmp) sent as image messages, other files as documents

## Query Group Info

yb_query_group_info({ "group_code": "328306697" })

## Query Members

| Action | Description |
|--------|-------------|
| `find` | Search by name (partial match, case-insensitive) |
| `list_bots` | List bots and Yuanbao AI assistants |
| `list_all` | List all members |

## Notes

- `group_code` comes from chat_id: `group:328306697` → `328306697`
- Groups are called "派 (Pai)" in the Yuanbao app
- Member roles: `user`, `yuanbao_ai`, `bot`