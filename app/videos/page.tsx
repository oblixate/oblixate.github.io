import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Videos() {
  // This would typically be fetched from the YouTube API
  const videos = [
    {
      id: 1,
      title: "Introduction to Ethical Hacking",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Learn the basics of ethical hacking and its importance in cybersecurity.",
    },
    {
      id: 2,
      title: "Advanced React Patterns",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Explore advanced React patterns to build scalable and maintainable applications.",
    },
    {
      id: 3,
      title: "Cybersecurity Best Practices",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Discover essential cybersecurity practices to protect your digital assets.",
    },
    {
      id: 4,
      title: "Building RESTful APIs with Node.js",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Learn how to create robust RESTful APIs using Node.js and Express.",
    },
    {
      id: 5,
      title: "Machine Learning for Cybersecurity",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Explore the applications of machine learning in enhancing cybersecurity measures.",
    },
    {
      id: 6,
      title: "Web Application Penetration Testing",
      thumbnail: "/placeholder.svg?height=200&width=300",
      description: "Dive into the techniques used for testing and securing web applications.",
    },
  ]

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-400">Latest Videos</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => (
          <Card key={video.id} className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-blue-400">{video.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img
                src={video.thumbnail || "/placeholder.svg"}
                alt={video.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <p className="text-gray-300">{video.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

