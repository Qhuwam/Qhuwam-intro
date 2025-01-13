import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: 'Task Management App',
    description: 'A productivity app built with React and Firebase',
    emoji: '📋',
  },
  {
    title: 'E-commerce Website',
    description: 'A fully functional online store built with React and Node.js',
    emoji: '🛒',
  },
  {
    title: 'Weather Dashboard',
    description: 'A real-time weather application using a weather API',
    emoji: '🌦️',
  },
]

export default function Projects() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Card key={project.title} className="overflow-hidden">
            <CardHeader>
              <div className="text-6xl text-center mb-4">{project.emoji}</div>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}

