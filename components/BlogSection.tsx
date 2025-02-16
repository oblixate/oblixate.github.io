import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Cybersecurity Tips",
      excerpt: "Protect your digital life with these crucial cybersecurity practices...",
    },
    {
      id: 2,
      title: "The Future of Coding: AI and Machine Learning",
      excerpt: "Explore how AI is reshaping the landscape of software development...",
    },
    {
      id: 3,
      title: "Ethical Hacking: A Beginner's Guide",
      excerpt: "Learn the basics of ethical hacking and its importance in today's digital world...",
    },
  ]

  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Latest Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="bg-gray-800 hover:bg-gray-700 transition duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-blue-400">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.id}`}
                  className="text-green-400 hover:text-green-300 transition duration-150 ease-in-out"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogSection

