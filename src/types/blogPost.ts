export interface BlogPost {
  title: string
  description: string
  image: { file: { url: string } }
  author: string
  date: string
  content: { content: any }
}
