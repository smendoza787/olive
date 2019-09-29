import { BlogPost } from '../types/blogPost'

export const transformAllContentfulBlogPost = (obj: any): BlogPost[] => obj.allContentfulBlogPost.edges.map((x: any) => x.node)
