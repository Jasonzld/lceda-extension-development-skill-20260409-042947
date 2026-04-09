# lceda-extension-development skill

中文 | [English](#english)

面向 嘉立创EDA / EasyEDA Pro 扩展开发的 Hermes skill 打包仓库。

仓库内容：
- `skill/`：skill 源文件
- `artifacts/lceda-extension-development-skill.zip`：可直接分发的打包产物

这个 skill 覆盖：
- `pro-api-sdk` 脚手架与项目结构
- `extension.json` 关键字段与菜单绑定
- `eda` API 调用方式
- `?cll=debug` 调试模式
- 独立脚本调试
- `.eext` 构建流程
- LCEDA Pro 内导入与安装
- 扩展广场发布要求
- 官方示例与常见坑点

目录说明：
- `skill/SKILL.md`
- `skill/templates/extension.json`
- `skill/templates/src-index.ts`
- `skill/references/official-links.md`
- `artifacts/lceda-extension-development-skill.zip`

## 安装到 Hermes

用户级安装：
```bash
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development
cp skill/SKILL.md ~/.hermes/skills/software-development/lceda-extension-development/
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development/templates
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development/references
cp skill/templates/* ~/.hermes/skills/software-development/lceda-extension-development/templates/
cp skill/references/* ~/.hermes/skills/software-development/lceda-extension-development/references/
```

如果你下载的是 zip 产物：
```bash
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ~/.hermes/skills/software-development/lceda-extension-development
```

调用名：
- `lceda-extension-development`

## 安装到 Claude Code / Claude Desktop 风格 skill 目录

示例用户目录：
```bash
mkdir -p ~/.claude/skills/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ~/.claude/skills/lceda-extension-development
```

手动复制也可以：
```bash
mkdir -p ~/.claude/skills/lceda-extension-development/templates
mkdir -p ~/.claude/skills/lceda-extension-development/references
cp skill/SKILL.md ~/.claude/skills/lceda-extension-development/
cp skill/templates/* ~/.claude/skills/lceda-extension-development/templates/
cp skill/references/* ~/.claude/skills/lceda-extension-development/references/
```

如果你的 Claude 环境使用的是别的 skill 根目录，把同样的目录结构复制进去即可。

## 安装到 OpenCode

项目级：
```bash
mkdir -p ./.opencode/skills/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ./.opencode/skills/lceda-extension-development
```

用户级：
```bash
mkdir -p ~/.config/opencode/skills/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ~/.config/opencode/skills/lceda-extension-development
```

## 推荐使用提示词

例如：
- “做一个立创EDA扩展”
- “帮我写嘉立创EDA插件”
- “修改 extension.json 菜单”
- “查一下 eda API 怎么调”
- “给我做一个可导入的 .eext 扩展”

## 官方资源

见：
- `skill/references/official-links.md`

---

## English

Packaged Hermes skill repository for 嘉立创EDA / EasyEDA Pro extension development.

Repository layout:
- `skill/`: source files for the skill
- `artifacts/lceda-extension-development-skill.zip`: packaged distributable artifact

This skill covers:
- `pro-api-sdk` scaffold and project structure
- `extension.json` key fields and menu binding
- `eda` API usage pattern
- debug mode with `?cll=debug`
- standalone script debugging
- `.eext` build flow
- import/install in LCEDA Pro
- extension marketplace publishing requirements
- official examples and common pitfalls

Contents:
- `skill/SKILL.md`
- `skill/templates/extension.json`
- `skill/templates/src-index.ts`
- `skill/references/official-links.md`
- `artifacts/lceda-extension-development-skill.zip`

## Install in Hermes

User-scope install:
```bash
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development
cp skill/SKILL.md ~/.hermes/skills/software-development/lceda-extension-development/
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development/templates
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development/references
cp skill/templates/* ~/.hermes/skills/software-development/lceda-extension-development/templates/
cp skill/references/* ~/.hermes/skills/software-development/lceda-extension-development/references/
```

If you downloaded the zip artifact instead:
```bash
mkdir -p ~/.hermes/skills/software-development/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ~/.hermes/skills/software-development/lceda-extension-development
```

Skill name:
- `lceda-extension-development`

## Install in Claude Code / Claude Desktop style skill folders

Example user-scope path:
```bash
mkdir -p ~/.claude/skills/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ~/.claude/skills/lceda-extension-development
```

Manual copy also works:
```bash
mkdir -p ~/.claude/skills/lceda-extension-development/templates
mkdir -p ~/.claude/skills/lceda-extension-development/references
cp skill/SKILL.md ~/.claude/skills/lceda-extension-development/
cp skill/templates/* ~/.claude/skills/lceda-extension-development/templates/
cp skill/references/* ~/.claude/skills/lceda-extension-development/references/
```

If your Claude environment uses a different skill root, copy the same folder structure into that root.

## Install in OpenCode

Project scope:
```bash
mkdir -p ./.opencode/skills/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ./.opencode/skills/lceda-extension-development
```

User scope:
```bash
mkdir -p ~/.config/opencode/skills/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ~/.config/opencode/skills/lceda-extension-development
```

## Suggested prompts

Examples:
- "Build an LCEDA extension"
- "Help me write a 嘉立创EDA plugin"
- "Modify the extension.json menu"
- "How do I call this eda API?"
- "Make me an importable .eext extension"

## Official resources

See:
- `skill/references/official-links.md`

Generated by Hermes and then refined for public publishing.
