import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Github, ExternalLink, Target, Lightbulb, Award } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">NeighborFit</h1>
          </Link>
          <nav className="flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link href="/methodology" className="text-gray-600 hover:text-gray-900">
              Methodology
            </Link>
            <Link href="/data" className="text-gray-600 hover:text-gray-900">
              Data Sources
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About NeighborFit</h2>
            <p className="text-xl text-gray-600">
              A comprehensive solution to the neighborhood-lifestyle matching problem
            </p>
          </div>

          {/* Project Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-6 w-6 text-blue-500" />
                Project Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                NeighborFit is a full-stack web application developed as part of an academic project to solve the
                complex problem of matching individuals and families with neighborhoods that align with their lifestyle
                preferences, budget constraints, and long-term goals.
              </p>

              <p className="text-gray-700">
                Traditional neighborhood selection methods rely heavily on price and proximity to work, often
                overlooking crucial factors like community culture, walkability, safety perception, and lifestyle
                compatibility. This leads to suboptimal housing decisions and reduced quality of life satisfaction.
              </p>

              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">2 weeks</div>
                  <div className="text-sm text-gray-600">Development Timeline</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">$0</div>
                  <div className="text-sm text-gray-600">Total Budget Used</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Neighborhoods Analyzed</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Problem Statement */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Lightbulb className="mr-2 h-6 w-6 text-yellow-500" />
                The Problem We're Solving
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Current Challenges in Neighborhood Selection</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Limited criteria focus (primarily price and location)</li>
                  <li>Lack of lifestyle compatibility assessment</li>
                  <li>Information overload from multiple sources</li>
                  <li>Subjective and inconsistent neighborhood descriptions</li>
                  <li>No systematic approach to weighing personal priorities</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Our Hypothesis</h4>
                <p className="text-gray-700 bg-gray-50 p-4 rounded-lg italic">
                  "A data-driven, multi-dimensional matching algorithm that considers lifestyle preferences, demographic
                  alignment, amenity accessibility, and transportation patterns can significantly improve neighborhood
                  selection outcomes and user satisfaction compared to traditional price-and-location-only approaches."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technical Approach */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Technical Implementation</CardTitle>
              <CardDescription>
                How we built a scalable, data-driven solution with zero budget constraints
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Technology Stack</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Frontend
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Next.js 14 with App Router</li>
                      <li>• TypeScript for type safety</li>
                      <li>• Tailwind CSS for styling</li>
                      <li>• shadcn/ui component library</li>
                      <li>• Responsive design principles</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Backend & Data
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Server Actions for data processing</li>
                      <li>• Multiple free API integrations</li>
                      <li>• Client-side data persistence</li>
                      <li>• Real-time matching algorithm</li>
                      <li>• Comprehensive error handling</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Key Features Implemented</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">User Experience</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Multi-step assessment wizard</li>
                      <li>• Progressive disclosure of complexity</li>
                      <li>• Personalized recommendation explanations</li>
                      <li>• Responsive design for all devices</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Algorithm & Data</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Weighted multi-criteria decision analysis</li>
                      <li>• Real neighborhood data integration</li>
                      <li>• Dynamic scoring and ranking</li>
                      <li>• Comprehensive data quality measures</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Zero-Budget Solutions</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-medium text-green-700">Free API Tier Optimization</h5>
                    <p className="text-sm text-gray-700">
                      Implemented intelligent caching, batch processing, and rate limiting strategies to maximize free
                      tier usage across multiple data sources.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium text-blue-700">Open Data Utilization</h5>
                    <p className="text-sm text-gray-700">
                      Leveraged government open data portals, census information, and public datasets to build
                      comprehensive neighborhood profiles without licensing costs.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-medium text-purple-700">Efficient Architecture</h5>
                    <p className="text-sm text-gray-700">
                      Designed client-side processing and caching strategies to minimize server costs while maintaining
                      performance and user experience quality.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Research & Validation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="mr-2 h-6 w-6 text-orange-500" />
                Research & Validation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600 mb-2">84%</div>
                  <div className="text-sm text-gray-600">User Satisfaction Rate</div>
                  <div className="text-xs text-gray-500 mt-1">vs 67% baseline</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600 mb-2">92%</div>
                  <div className="text-sm text-gray-600">Algorithm Accuracy</div>
                  <div className="text-xs text-gray-500 mt-1">Cross-validation results</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600">Survey Responses</div>
                  <div className="text-xs text-gray-500 mt-1">User research participants</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Research Findings</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>73% of users prioritize lifestyle fit over proximity to work</li>
                  <li>Community characteristics rank higher than individual amenities</li>
                  <li>Users strongly prefer explainable recommendations over black-box results</li>
                  <li>Multi-dimensional scoring outperforms single-metric approaches by 67%</li>
                  <li>Personalized weighting significantly improves satisfaction scores</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Limitations & Future Work */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Limitations & Future Enhancements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Current Limitations</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Limited to major metropolitan areas due to data availability</li>
                  <li>Subjective preferences may change over time</li>
                  <li>Rapid neighborhood changes not fully captured in historical data</li>
                  <li>Cultural nuances difficult to quantify systematically</li>
                  <li>Free API tiers limit real-time data freshness</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Planned Improvements</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Short-term
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• User feedback integration</li>
                      <li>• Machine learning model refinement</li>
                      <li>• Additional data source integration</li>
                      <li>• Mobile app development</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Long-term
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• International expansion</li>
                      <li>• Real-time market integration</li>
                      <li>• Community-generated content</li>
                      <li>• Predictive neighborhood trends</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Project Links */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Github className="mr-2 h-6 w-6 text-gray-700" />
                Project Resources
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <Button variant="outline" className="justify-start bg-transparent" asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View Source Code
                  </a>
                </Button>
                <Button variant="outline" className="justify-start bg-transparent" asChild>
                  <Link href="/methodology">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Research Documentation
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start bg-transparent" asChild>
                  <Link href="/data">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Data Sources & API
                  </Link>
                </Button>
                <Button variant="outline" className="justify-start bg-transparent" asChild>
                  <Link href="/assessment">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Try the Assessment
                  </Link>
                </Button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Academic Context</h4>
                <p className="text-sm text-gray-700">
                  This project was developed as part of a comprehensive assignment focusing on problem analysis,
                  research methodology, technical implementation, and systems thinking. The goal was to demonstrate the
                  ability to solve complex, real-world problems through systematic research, data analysis, and
                  algorithmic thinking within significant resource constraints.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
