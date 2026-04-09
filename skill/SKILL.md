---
name: lceda-extension-development
description: 开发嘉立创EDA / EasyEDA 专业版扩展（插件）。覆盖 pro-api-sdk 脚手架、extension.json 配置、eda API 调用、调试模式、独立脚本、构建 .eext、导入安装与扩展广场发布。触发词："立创EDA扩展"、"嘉立创EDA插件"、"EasyEDA extension"、"extension.json"、"pro-api-sdk"、"eda API"。
---

# 嘉立创EDA扩展开发

## 何时使用

当用户要做以下事情时使用：
- 从 0 开始创建嘉立创EDA / EasyEDA 专业版扩展
- 修改已有扩展的 `extension.json`、菜单、入口函数、i18n 或 iframe
- 查询 `eda` 扩展 API 的典型调用方式
- 构建 `.eext` 包并导入编辑器测试
- 整理扩展广场上传与发布流程

## 已核实的官方入口

- 扩展广场：https://ext.lceda.cn/
- 开发指南：https://prodocs.lceda.cn/cn/api/guide/how-to-start.html
- API 调用：https://prodocs.lceda.cn/cn/api/guide/invoke-apis.html
- API 参考：https://prodocs.lceda.cn/cn/api/reference/pro-api.html
- 上传指南：https://prodocs.lceda.cn/cn/api/guide/extensions-marketplace.html
- 安装使用：https://prodocs.lceda.cn/cn/api/user-guide/using-extension.html
- 官方 SDK：https://github.com/easyeda/pro-api-sdk
- 官方示例组织：https://github.com/easyeda

## 核心事实

1. 嘉立创EDA专业版扩展本质上是独立 JavaScript/TypeScript 扩展包，运行在编辑器扩展运行时中。
2. 扩展 API 默认挂在全局 `eda` 对象上；常见调用形态是 `eda.<module>.<method>()`。
3. 官方推荐基于 `pro-api-sdk` 开发。
4. 当前官方 SDK `package.json` 要求 Node.js `>=20.17.0`。
5. `npm run build` 会先编译，再在 `build/dist/` 生成 `.eext` 包。
6. 若 `extension.json.uuid` 为空或非法，SDK 打包脚本会自动生成 32 位 UUID 并回写。
7. 主扩展环境对 DOM、外部请求、本地文件系统等浏览器能力有限；需要自定义 UI 时优先走 iframe。

## 标准工作流

### 1. 初始化脚手架

优先使用官方 SDK：

```bash
git clone --depth=1 https://github.com/easyeda/pro-api-sdk.git my-extension
cd my-extension
npm install
```

如果 GitHub 不通，可用 Gitee 镜像：

```bash
git clone --depth=1 https://gitee.com/jlceda/pro-api-sdk.git my-extension
cd my-extension
npm install
```

### 2. 先改这几个文件

最先检查并修改：
- `extension.json`
- `src/index.ts`
- `README.md`
- `CHANGELOG.md`（若项目需要发布）
- `locales/*.json`（如果要做中英文本地化）
- `iframe/*`（如果需要输入表单、复杂交互或自定义窗口）

### 3. 理解项目结构

官方 SDK 典型结构：

```text
.vscode/
build/
  dist/
config/
dist/
iframe/
images/
locales/
src/
.edaignore
extension.json
package.json
tsconfig.json
```

重点：
- `src/index.ts`：默认入口
- `extension.json`：扩展元信息、菜单、入口映射
- `iframe/`：扩展弹窗/内嵌页面
- `build/dist/*.eext`：最终安装包

### 4. 配置 extension.json

必须重点核查这些字段：
- `name`
- `uuid`
- `displayName`
- `description`
- `version`
- `license`
- `engines.eda`
- `categories`
- `images.logo`
- `entry`
- `headerMenus`

已核实的官方要求：
- 上传到扩展广场时，`extension.json` 至少应包含 `name`、`uuid`、`displayName`、`description`、`version`、`license`
- `categories` 必填且需符合要求
- `entry` 必须存在且有效
- 不同扩展的 `name` 不能重复
- 图标不能直接用 SDK 默认 logo；推荐 1:1 的 PNG/JPEG，大小不超过 5 MiB
- `README.md` 应说明功能和用法
- 如有必要，提供 `CHANGELOG.md`
- 禁止包含个人隐私信息

### 5. 菜单与入口函数绑定

`headerMenus` 里的 `registerFn` 会映射到 `src/index.ts` 中导出的函数名。

原则：
- `registerFn` 名必须与导出函数名完全一致
- `id` 在整个扩展内尽量全局唯一，避免菜单渲染冲突
- 按编辑器场景分菜单：常见是 `home`、`sch`、`pcb`

最小入口示例：

```ts
import * as extensionConfig from '../extension.json';

export function activate(status?: 'onStartupFinished', arg?: string): void {}

export function about(): void {
  eda.sys_Dialog.showInformationMessage(
    eda.sys_I18n.text('EasyEDA extension SDK v', undefined, undefined, extensionConfig.version),
    eda.sys_I18n.text('About'),
  );
}
```

### 6. API 调用规则

已核实的典型调用方式：

```ts
console.log('[DEBUG] eda:', eda);

eda.sys_ToastMessage.showMessage(
  eda.sys_I18n.text('Done'),
  ESYS_ToastMessageType.INFO,
);
```

要点：
- `eda` 是每个扩展独立实例，不与其他扩展共用
- 先去官方 API 参考确认类名、挂载名、方法签名，再写代码
- 类名不一定等于挂载属性名；按文档中的 `eda.xxx_YYY` 为准
- 复杂能力优先找官方示例仓库参考，不要凭空猜 API

### 7. 调试方式

#### A. 打开调试模式

网页版编辑器 URL 添加参数：

```text
https://pro.lceda.cn/editor?cll=debug
```

然后打开开发者工具：
- Web：F12
- 客户端：F12；若版本较新，可能需要快速按三次 F12

客户端也可在控制台执行：

```js
window.location.href = 'https://client/editor?cll=debug';
```

#### B. 用独立脚本快速试 API

官方文档说明可用“独立脚本”功能调试。
- V2：顶部菜单 -> 设置 -> 扩展 -> 独立脚本
- V3：顶部菜单 -> 高级 -> 运行脚本

适合：
- 小段 API 验证
- 输出 `eda` 对象结构
- 快速验证逻辑片段

注意：
- 独立脚本每次运行都会得到新的 `eda` 对象
- 部分依赖扩展包能力的接口在独立脚本里不可用，例如 `SYS_IFrame`
- 独立脚本存储在浏览器本地存储中，不适合作为唯一备份

### 8. 构建与产物检查

标准构建：

```bash
npm run build
```

已核实的官方 SDK 脚本行为：
- `compile`：清空并编译到 `dist/`
- `build`：编译后再打包
- 最终产物位于：

```text
build/dist/<name>_v<version>.eext
```

打包脚本会读取 `.edaignore` 过滤文件，再把需要内容压入 `.eext`。

### 9. 在编辑器中安装测试

已核实的安装路径：

V3：
- 顶部菜单 -> 高级 -> 扩展管理器
- 可搜索在线安装，也可点击“导入”导入本地 `.eext`
- 在“已安装”里可配置：启用、外部交互（联网）、是否显示在顶部菜单

V2：
- 顶部菜单 -> 设置 -> 扩展 -> 扩展管理器
- 导入 `.eext`

如果扩展涉及联网，记得在安装后启用“外部交互”。

### 10. 发布到扩展广场

流程：
1. 访问 `https://ext.lceda.cn/`
2. 进入“扩展管理”
3. 上传构建好的 `.eext`
4. 填写/校验元信息
5. 等待审核
6. 审核通过后上架

发布前检查清单：
- [ ] `extension.json` 关键字段完整
- [ ] 自定义图标已替换
- [ ] `README.md` 已写清功能/用法
- [ ] `CHANGELOG.md` 已更新（若有版本迭代）
- [ ] 入口文件有效
- [ ] 菜单可见、点击可执行
- [ ] 若依赖联网，已验证“外部交互”开启后的行为
- [ ] 无隐私信息、硬编码密钥、个人联系方式

## 推荐实现策略

1. 先用官方 SDK 初始化。
2. 先做一个最小可运行菜单项，比如 `about()` 或简单 toast。
3. 再逐步加入真实业务 API。
4. 若需要用户输入、复杂界面或表单，优先用 iframe 页面，不要强行塞进主运行时。
5. 每加一个 API，就到官方参考页或官方示例仓库核实一次。
6. 先确保本地导入可用，再考虑扩展广场发布。

## 常用官方示例仓库

这些仓库已确认存在于 `easyeda` 官方组织，可用来找范式：
- `eext-extension-demo`
- `eext-api-debug-tool`
- `eext-batch-place-components`
- `eext-chat-with-ai-kimi`
- `eext-export-design-report`
- `eext-generate-schematic-from-netlist`
- `eext-qrcode-generator`
- `eext-interactive-bom`
- `eext-pcb-render-with-blender`

其中 `eext-extension-demo` 很适合先看菜单绑定、iframe 调用、SCH/PCB 双场景菜单组织。

## 典型坑点

- 不要把类名当作 `eda` 的挂载名直接猜
- 不要忘记 `registerFn` 与导出函数名一一对应
- 不要忽略 `engines.eda` 版本约束
- 不要在未开启“外部交互”时排查联网功能异常
- 不要把复杂 UI 逻辑直接写在主入口里；优先拆到 iframe
- 不要发布带默认 logo、缺 README、缺版本信息的包
- 不要假定所有 API 都能在独立脚本里运行

## 当用户让我“做一个立创EDA扩展”时的执行模板

1. 确认目标场景：`home` / `sch` / `pcb`
2. 明确功能：只读分析、批量修改、导入导出、联网调用、AI 辅助、报表生成等
3. 初始化/检查 `pro-api-sdk`
4. 修改 `extension.json`
5. 修改 `src/index.ts`，先做最小菜单
6. 如需 UI，增加 `iframe/*`
7. 构建 `.eext`
8. 指导或协助导入调试
9. 完成 README / CHANGELOG
10. 如需发布，再补充扩展广场上传材料

## 如果当前任务需要我直接写代码

默认采用这个节奏：
- 先读 `extension.json` 和 `src/index.ts`
- 再确认要改的编辑器场景和菜单位置
- 需要 iframe 时同时规划 `iframe/` 文件
- 写完后执行构建命令
- 最后检查 `.eext` 是否生成在 `build/dist/`
