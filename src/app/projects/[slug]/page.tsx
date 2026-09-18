import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

// 1. Tell Next.js where to find the markdown files
const contentDir = path.join(process.cwd(), "src", "content", "projects")

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  // 2. Get the URL slug (e.g., "voice-shield")
  const { slug } = await params;
  
  // 3. Read the exact markdown file
  const filePath = path.join(contentDir, `${slug}.mdx`)
  const fileContent = fs.readFileSync(filePath, "utf8")
  
  // 4. Extract the frontmatter (metadata) and the actual text content
  const { data, content } = matter(fileContent)

  // 5. Render the page using Tailwind Typography (prose)
  return (
    <article className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
      <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to portfolio
      </Link>
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">{data.title}</h1>
        <p className="text-xl text-muted-foreground">{data.description}</p>
      </div>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </article>
  )
}