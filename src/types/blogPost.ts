export interface BlogPost {
  title: string
  image: { file: { url: string } }
  author: string
  date: string
  content: { content: any }
}
