import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Repo() {
  const repositories = [
    {
      id: 1,
      name: "Ethical Hacking Tools",
      description: "A collection of tools for ethical hacking and penetration testing.",
      stars: 245,
      language: "Python",
    },
    {
      id: 2,
      name: "React Security Patterns",
      description: "Best practices and patterns for securing React applications.",
      stars: 189,
      language: "JavaScript",
    },
    {
      id: 3,
      name: "Cybersecurity Cheat Sheets",
      description: "Quick reference guides for various cybersecurity topics.",
      stars: 412,
      language: "Markdown",
    },
    {
      id: 4,
      name: "ML for Intrusion Detection",
      description: "Machine learning models for network intrusion detection.",
      stars: 156,
      language: "Python",
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Our GitHub Repositories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {repositories.map((repo) => (
          <Card key={repo.id} className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-green-400">{repo.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300 mb-4">{repo.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-blue-400">⭐ {repo.stars}</span>
                <span className="text-green-400">{repo.language}</span>
              </div>
              <Button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white">
                <Link href={`https://github.com/cybercodeHub/${repo.name}`} target="_blank" rel="noopener noreferrer">
                  View on GitHub
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

