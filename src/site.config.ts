/**
 * 全局站点配置
 * 修改此文件即可更新全站信息
 */
export const SITE_CONFIG = {
  // 生产环境域名（用于 canonical、RSS 与 sitemap）
  url: "https://zephyrise.cn",
  // 文章日期的展示时区；frontmatter 中仍应写明 UTC 偏移
  timeZone: "Asia/Shanghai",
  // 博客名称
  title: "数学笔记",
  // 作者名称（顶栏显示）
  author: "风吹已散",
  // 博客简介（首页和 SEO 描述）
  description: "记录数学专业课程笔记、概念梳理、定理证明与专题学习",
  // 头像路径（以 / 开头，相对于网站根目录）
  avatar: "/figure-thumb.png",

  // 联系方式（显示在底栏"联系我"区域）
  contact: {
    email: "yihuan_chen@qq.com",
    github: "https://github.com/fcys3258",
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
    pageSize: 10,
  },
} as const;
