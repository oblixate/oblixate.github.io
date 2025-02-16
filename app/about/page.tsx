import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">About CyberCode Hub</h1>
      <Card className="bg-gray-800">
        <CardHeader>
          <CardTitle className="text-2xl text-green-400">Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-300">
            CyberCode Hub is dedicated to empowering developers and cybersecurity enthusiasts with cutting-edge
            knowledge and practical skills. Our YouTube channel serves as a hub for in-depth tutorials, insightful
            discussions, and the latest trends in coding and cybersecurity.
          </p>
        </CardContent>
      </Card>
      <Card className="bg-gray-800 mt-8">
        <CardHeader>
          <CardTitle className="text-2xl text-green-400">What We Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Comprehensive coding tutorials for various programming languages</li>
            <li>In-depth cybersecurity analysis and best practices</li>
            <li>Ethical hacking techniques and demonstrations</li>
            <li>Industry insights and emerging technology trends</li>
            <li>Q&A sessions and community engagement</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}

