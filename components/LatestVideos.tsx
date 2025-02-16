import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const LatestVideos = () => {
  // This would typically be fetched from the YouTube API
  const videos = [
    { id: 1, title: "Introduction to Ethical Hacking", thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 2, title: "Advanced React Patterns", thumbnail: "/placeholder.svg?height=200&width=300" },
    { id: 3, title: "Cybersecurity Best Practices", thumbnail: "/placeholder.svg?height=200&width=300" },
  ]

  return (
    <section className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Latest Videos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card
              key={video.id}
              className="bg-gray-700 hover:bg-gray-600 transition duration-300 ease-in-out transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="text-blue-400">{video.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <img
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  className="w-full h-48 object-cover rounded-md"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestVideos

