---
icon: edit
date: 2023-07-10
category:
- 应用篇
tag:
- VSCode
---

# VSCode的插件和错误排查

## 常见错误排查

### 插件安装失败

```[error] end of central directory record signature not found```

I was able to resolve this problem by eliminating the following folders.

```
C:\Users\UserName\AppData\Roaming\Code\CachedExtensionVSIXs
C:\Users\UserName\AppData\Roaming\Code\CachedData
```

Attempting to directly download and install the VSIX produced the same issue, thus I presume vscode ignores the download if a VSIX is already cached.