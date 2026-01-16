# 内容更新指南

本文档指导你如何更新网站内容。所有内容数据存储在 `src/data/` 目录下的 JSON 文件中。

---

## 更新方式

1. 在 VS Code 或任意文本编辑器中打开对应的 JSON 文件
2. 按照下方模板添加/修改条目
3. 保存文件
4. 提交并推送到 GitHub：`git add . && git commit -m "更新内容" && git push`
5. Vercel 会自动部署，约 1-2 分钟后生效

---

## 1. 提示词库 (`src/data/prompts.json`)

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 唯一标识，用英文，如 `prompt-1` |
| title | string | 提示词标题 |
| description | string | 简短描述，用于列表展示 |
| content | string | 完整提示词内容 |
| tags | string[] | 标签数组 |
| model | string | 模型：`GPT` / `Claude` / `Midjourney` |

### 添加示例
```json
{
  "id": "my-new-prompt",
  "title": "写作助手",
  "description": "帮助你快速生成高质量文章",
  "content": "你是一位资深的内容创作者...(完整提示词)",
  "tags": ["写作", "效率"],
  "model": "Claude"
}
```

---

## 2. 教育闪卡 (`src/data/flashcards.json`)

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 唯一标识 |
| title | string | 闪卡集标题 |
| description | string | 描述 |
| thumbnail | string | 缩略图URL |
| category | string | 分类：`英语` / `语文` / `数学` / `科学` |
| count | number | 闪卡数量 |
| type | string | `iframe`(内嵌) 或 `link`(外链) |
| url | string | 目标地址 |

### 添加示例
```json
{
  "id": "fruits-vocab",
  "title": "水果词汇",
  "description": "常见水果英语单词学习",
  "thumbnail": "https://你的图床/fruits.png",
  "category": "英语",
  "count": 30,
  "type": "iframe",
  "url": "https://你的闪卡地址"
}
```

---

## 3. AI教程 (`src/data/tutorials.json`)

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 唯一标识 |
| title | string | 教程标题 |
| description | string | 描述 |
| thumbnail | string | 缩略图URL |
| duration | string | 时长，如 `15:30` |
| category | string | 分类：`Claude` / `提示词` / `Midjourney` / `效率` |
| type | string | `iframe`(内嵌) 或 `link`(外链) |
| url | string | 视频地址 |

### 添加示例
```json
{
  "id": "claude-basics",
  "title": "Claude 入门教程",
  "description": "从零开始学习 Claude",
  "thumbnail": "https://你的图床/video-thumb.png",
  "duration": "20:00",
  "category": "Claude",
  "type": "iframe",
  "url": "https://视频嵌入地址"
}
```

---

## 4. H5应用 (`src/data/apps.json`)

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 唯一标识 |
| title | string | 应用名称 |
| description | string | 描述 |
| thumbnail | string | 缩略图URL |
| category | string | 分类：`英语` / `数学` / `语文` / `思维` |
| type | string | `iframe`(内嵌) 或 `link`(外链) |
| url | string | 应用地址 |

### 添加示例
```json
{
  "id": "math-quiz",
  "title": "数学小测验",
  "description": "趣味数学练习游戏",
  "thumbnail": "https://你的图床/math.png",
  "category": "数学",
  "type": "iframe",
  "url": "https://应用地址"
}
```

---

## 5. 工具集 (`src/data/tools.json`)

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| id | string | 唯一标识 |
| title | string | 工具名称 |
| thumbnail | string | 缩略图URL |
| type | string | `iframe`(内嵌) 或 `link`(外链) |
| url | string | 工具地址 |
| description | string | 描述 |

### 添加示例
```json
{
  "id": "image-gen",
  "title": "AI图片生成",
  "thumbnail": "https://你的图床/tool.png",
  "type": "link",
  "url": "https://工具地址",
  "description": "AI图片生成工具"
}
```

---

## 6. 知识库文章 (`src/data/posts.json`)

### 字段说明
| 字段 | 类型 | 说明 |
|------|------|------|
| slug | string | URL标识，用英文小写+连字符 |
| title | string | 文章标题 |
| description | string | 摘要 |
| date | string | 日期，格式 `YYYY-MM-DD` |
| tags | string[] | 标签数组 |
| coverImage | string | 封面图URL（可选） |

### 添加示例
```json
{
  "slug": "how-to-use-claude",
  "title": "如何高效使用 Claude",
  "description": "分享 Claude 的使用技巧和最佳实践",
  "date": "2024-01-15",
  "tags": ["Claude", "AI", "效率"],
  "coverImage": "https://你的图床/cover.png"
}
```

---

## 7. 站点配置 (`src/config/site.ts`)

修改个人信息：
```typescript
export const siteConfig: SiteConfig = {
  name: "你的名字",
  slogan: "你的标语",
  avatar: "/avatar.svg",  // 或图床URL
  social: {
    wechat: "/qrcode-wechat.png",  // 微信二维码
    zhishixingqiu: "/qrcode-zsxq.png",  // 知识星球二维码
    github: "https://github.com/你的用户名",
    email: "你的邮箱",
  },
};
```

---

## 常见问题

### Q: 图片应该存在哪里？
A: 推荐使用图床服务（如阿里云OSS、腾讯云COS、七牛云等），上传图片后获取URL填入JSON文件。

### Q: type 选 iframe 还是 link？
A:
- `iframe`: 内容会在网站内嵌入显示（适合可嵌入的H5页面）
- `link`: 点击后在新窗口打开外部链接

### Q: 添加的内容没有显示？
A:
1. 检查 JSON 格式是否正确（可用在线JSON校验工具）
2. 确认已保存文件并推送到 GitHub
3. 等待 Vercel 自动部署完成（1-2分钟）

### Q: 如何删除内容？
A: 直接在 JSON 文件中删除对应条目即可。

---

## 快速命令

```bash
# 本地预览
npm run dev

# 提交更新
git add .
git commit -m "更新内容"
git push
```
