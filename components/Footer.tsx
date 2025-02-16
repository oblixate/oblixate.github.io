import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-lg font-semibold text-blue-400">CyberCode Hub</span>
            <p className="mt-2 text-sm">Empowering developers in coding and cybersecurity</p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="hover:text-blue-400 transition duration-150 ease-in-out">
              YouTube
            </Link>
            <Link href="#" className="hover:text-blue-400 transition duration-150 ease-in-out">
              GitHub
            </Link>
            <Link href="#" className="hover:text-blue-400 transition duration-150 ease-in-out">
              Twitter
            </Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 text-center text-sm">
          © {new Date().getFullYear()} CyberCode Hub. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer

