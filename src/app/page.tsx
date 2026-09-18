import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code } from "lucide-react"
import Link from "next/link"

// Modular data array: Add new projects here in the future without touching the UI code.
const projects = [
  {
    id: 1,
    title: "Voice-Shield",
    description: "Deep learning audio classification application designed to detect synthetic deepfake audio using Mel-Spectrogram analysis.",
    tech: ["Python", "TensorFlow", "Librosa", "Deep Learning"],
    githubUrl: "#",
    liveUrl: "/projects/voice-shield"
  },
  {
    id: 2,
    title: "Industrial Safety Monitor",
    description: "Real-time computer vision model trained to detect safety helmet usage on worksites using custom datasets.",
    tech: ["YOLOv8", "OpenCV", "Python", "Computer Vision"],
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    id: 3,
    title: "QR-Shield",
    description: "Open-source security tool that extracts URLs from static QR code images and evaluates them against threat detection APIs.",
    tech: ["Python", "Security APIs", "Open Source"],
    githubUrl: "#",
    liveUrl: "#"
  }
]

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
      
      {/* Hero Section */}
      <section className="flex flex-col items-start gap-4 max-w-[800px] mb-24">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Engineering intelligent systems <br className="hidden md:block" />
          <span className="text-muted-foreground">and secure architectures.</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-[600px]">
          I'm an Artificial Intelligence and Machine Learning Engineer specializing in computer vision, deep learning, and scalable software solutions.
        </p>
        <div className="flex gap-4 mt-6">
          <Button asChild size="lg">
            <Link href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="https://github.com" target="_blank">
              <Code className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        </div>
      </section>

      {/* Projects Grid Section */}
      <section id="projects" className="scroll-mt-20">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-muted-foreground">Technical case studies and open-source contributions.</p>
        </div>
        
        {/* CSS Grid: 1 column on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="pt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4 border-t pt-6">
                <Link href={project.githubUrl} className="text-sm font-medium hover:underline flex items-center">
                  <Code className="mr-2 h-4 w-4" /> Code
                </Link>
                <Link href={project.liveUrl} className="text-sm font-medium hover:underline flex items-center">
                  Case Study <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

    </div>
  )
}