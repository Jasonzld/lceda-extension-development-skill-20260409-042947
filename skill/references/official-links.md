官方与示例资源

文档
- 开发指南: https://prodocs.lceda.cn/cn/api/guide/how-to-start.html
- API 调用: https://prodocs.lceda.cn/cn/api/guide/invoke-apis.html
- API 参考: https://prodocs.lceda.cn/cn/api/reference/pro-api.html
- 上传指南: https://prodocs.lceda.cn/cn/api/guide/extensions-marketplace.html
- 安装使用: https://prodocs.lceda.cn/cn/api/user-guide/using-extension.html

站点
- 扩展广场: https://ext.lceda.cn/
- 嘉立创EDA专业版: https://pro.lceda.cn/

官方仓库
- SDK: https://github.com/easyeda/pro-api-sdk
- 官方组织: https://github.com/easyeda

可参考的官方示例仓库
- https://github.com/easyeda/eext-extension-demo
- https://github.com/easyeda/eext-api-debug-tool
- https://github.com/easyeda/eext-batch-place-components
- https://github.com/easyeda/eext-chat-with-ai-kimi
- https://github.com/easyeda/eext-export-design-report
- https://github.com/easyeda/eext-generate-schematic-from-netlist
- https://github.com/easyeda/eext-qrcode-generator
- https://github.com/easyeda/eext-interactive-bom
- https://github.com/easyeda/eext-pcb-render-with-blender

已核实的 SDK 要点
- Node.js >= 20.17.0
- npm run build 输出 build/dist/<name>_v<version>.eext
- uuid 为空或非法时，打包脚本会自动生成并回写 extension.json
