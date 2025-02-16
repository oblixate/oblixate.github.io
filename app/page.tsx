import HeroSection from "@/components/HeroSection"
import LatestVideos from "@/components/LatestVideos"
import BlogSection from "@/components/BlogSection"
import MatrixBackground from "@/components/MatrixBackground"

export default function Home() {
  return (
    <div className="relative pt-16">
      <MatrixBackground />  {/* 🚀 Matrix arka planını buraya ekle */}
      <HeroSection />
      <LatestVideos />
      <BlogSection />
    </div>
  )
}

