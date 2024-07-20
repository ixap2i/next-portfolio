import axios from "axios"
import { Article, Articles } from "@/app/ArticleReducer"

export async function GET() {
  try {
    const res = await axios.get<Articles>('https://zenn.dev/api/articles?username=ixap2i')
    const article = res.data
    return Response.json({ article })
  } catch(err) {
    console.error(`Error has occured at fetching article: ${err}`)
    throw err
  }
}