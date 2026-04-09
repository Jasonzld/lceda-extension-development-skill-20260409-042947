# lceda-extension-development skill

Packaged Hermes skill for 嘉立创EDA / EasyEDA Pro extension development.

Repository:
- Source skill files in `skill/`
- Packaged zip in `artifacts/lceda-extension-development-skill.zip`

What this skill covers:
- pro-api-sdk scaffold and project structure
- `extension.json` key fields and menu binding
- `eda` API usage pattern
- debug mode with `?cll=debug`
- standalone script debugging
- build `.eext` packages
- install/import in LCEDA Pro
- extension marketplace publishing requirements
- official examples and common pitfalls

Contents:
- `skill/SKILL.md`
- `skill/templates/extension.json`
- `skill/templates/src-index.ts`
- `skill/references/official-links.md`
- `artifacts/lceda-extension-development-skill.zip`

## Install in Hermes

User scope:
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

Then use it by name:
- `lceda-extension-development`

## Install in Claude Code / Claude Desktop style skill folders

Example user-scope path:
```bash
mkdir -p ~/.claude/skills/lceda-extension-development
unzip artifacts/lceda-extension-development-skill.zip -d ~/.claude/skills/lceda-extension-development
```

Or copy files manually:
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

## Recommended usage prompt

Examples:
- "做一个立创EDA扩展"
- "帮我写嘉立创EDA插件"
- "修改 extension.json 菜单"
- "查一下 eda API 怎么调"
- "给我做一个可导入的 .eext 扩展"

## Official resources

See:
- `skill/references/official-links.md`

Generated automatically by Hermes, then manually refined for publishing.
