/**
 * 全局站点配置
 * 修改此文件即可更新全站信息
 */
export const SITE_CONFIG = {
  // 博客名称
  title: "数值笔记",
  // 作者名称（顶栏显示）
  author: "Fcys",
  // 头像路径（相对于 public/ 目录）
  avatar: "/figure.png",

  // 联系方式（显示在底栏"联系我"区域）
  contact: {
    email: "your-email@example.com",
    github: "https://github.com/your-username",
    // 可以添加更多联系方式
    // twitter: "https://twitter.com/...",
    // orcid: "https://orcid.org/...",
  },

  // 搜索配置
  search: {
    indexPath: "/search-index.json",
  },

  // 分页配置
  pagination: {
    // 每页显示文章数
    pageSize: 2,
  },
} as const;
