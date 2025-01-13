import { Code, Palette, Database } from 'lucide-react'

const skills = [
  { name: 'Web Development', icon: Code, description: 'Proficient in HTML, CSS, JavaScript, and modern frameworks like React and Next.js' },
  { name: 'UI/UX Design', icon: Palette, description: 'Creating intuitive and visually appealing user interfaces' },
  { name: 'Database Management', icon: Database, description: 'Experienced in working with SQL and NoSQL databases' },
]

export default function Skills() {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-10">My Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skills.map((skill) => (
          <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md transition-transform hover:scale-105">
            <skill.icon className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
            <p className="text-gray-600">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

