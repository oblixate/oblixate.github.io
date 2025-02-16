import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <video autoPlay loop muted className="w-full h-full object-cover">
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">CyberCode Hub</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Empowering developers with cutting-edge coding techniques and cybersecurity insights.
        </p>
        <Button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
          Explore Videos
        </Button>
      </div>
    </section>
  )
}

export default HeroSection

