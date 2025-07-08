import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MapPin, Users, BarChart3, Target } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">NeighborFit</h1>
          </div>
          <nav className="flex space-x-6">
            <Link href="/methodology" className="text-gray-600 hover:text-gray-900">
              Methodology
            </Link>
            <Link href="/data" className="text-gray-600 hover:text-gray-900">
              Data Sources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">Find Your Perfect Neighborhood Match</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Using data-driven analysis and algorithmic matching, NeighborFit helps you discover neighborhoods that align
            with your lifestyle preferences, budget, and priorities.
          </p>
          <Link href="/assessment">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Your Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12">The Neighborhood Matching Problem</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="mr-2 h-5 w-5 text-red-500" />
                    The Challenge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Finding the right neighborhood is complex and subjective. Traditional approaches rely on limited
                    criteria like price and location, missing crucial lifestyle factors that determine long-term
                    satisfaction and community fit.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="mr-2 h-5 w-5 text-green-500" />
                    Our Solution
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    A data-driven matching algorithm that considers multiple dimensions: walkability, demographics,
                    amenities, transportation, safety, and cultural fit to provide personalized neighborhood
                    recommendations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">How NeighborFit Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-blue-500" />
                  Lifestyle Assessment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Complete a comprehensive assessment covering your preferences for commute, nightlife, family
                  amenities, outdoor activities, and community characteristics.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="mr-2 h-5 w-5 text-green-500" />
                  Data Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Our algorithm processes real neighborhood data including demographics, walkability scores, crime
                  statistics, and amenity density to create comprehensive profiles.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-purple-500" />
                  Smart Matching
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Receive ranked neighborhood recommendations with detailed explanations of why each area matches your
                  preferences and lifestyle requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Neighborhood?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who have discovered their ideal community through data-driven matching.
          </p>
          <Link href="/assessment">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Take the Assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <MapPin className="h-6 w-6 text-blue-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NeighborFit
                </span>
              </div>
              <p className="text-gray-300">Data-driven neighborhood matching for better living decisions.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-blue-300">Product</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/assessment" className="hover:text-blue-400 transition-colors">
                    Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/methodology" className="hover:text-blue-400 transition-colors">
                    Methodology
                  </Link>
                </li>
                <li>
                  <Link href="/data" className="hover:text-blue-400 transition-colors">
                    Data Sources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-green-300">Research</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/research" className="hover:text-green-400 transition-colors">
                    User Research
                  </Link>
                </li>
                <li>
                  <Link href="/algorithm" className="hover:text-green-400 transition-colors">
                    Algorithm Design
                  </Link>
                </li>
                <li>
                  <Link href="/validation" className="hover:text-green-400 transition-colors">
                    Validation Results
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-purple-300">Project</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/about" className="hover:text-purple-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link href="/documentation" className="hover:text-purple-400 transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">
              &copy; 2025 NeighborFit by <span className="text-blue-400 font-semibold">Awal Manga</span>. Built for
              academic research and demonstration.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
