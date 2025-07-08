import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Database, Globe, BarChart3, Shield, Users, Car, Home } from "lucide-react"
import Link from "next/link"

export default function DataPage() {
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
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Data Sources & Integration</h2>
            <p className="text-xl text-gray-600">
              Comprehensive neighborhood data from trusted sources, processed with zero-budget constraints
            </p>
          </div>

          {/* Data Overview */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-6 w-6 text-blue-500" />
                Data Architecture Overview
              </CardTitle>
              <CardDescription>
                Our data pipeline integrates multiple free and public data sources to create comprehensive neighborhood
                profiles
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-sm text-gray-600">Neighborhoods Analyzed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <div className="text-sm text-gray-600">Data Sources Integrated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Metrics Per Neighborhood</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Primary Data Sources */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-orange-500" />
                  Demographics & Census Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    US Census Bureau
                  </Badge>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Population demographics by age, income, education</li>
                    <li>• Household composition and family statistics</li>
                    <li>• Employment and commuting patterns</li>
                    <li>• Housing characteristics and costs</li>
                  </ul>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">
                    <strong>Update Frequency:</strong> Annual (ACS 5-year estimates)
                    <br />
                    <strong>Coverage:</strong> All US census tracts
                    <br />
                    <strong>Cost:</strong> Free via Census API
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Car className="mr-2 h-5 w-5 text-blue-500" />
                  Walkability & Transportation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    Walk Score API
                  </Badge>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Walk Score (0-100) for pedestrian friendliness</li>
                    <li>• Transit Score for public transportation access</li>
                    <li>• Bike Score for cycling infrastructure</li>
                    <li>• Nearby amenities and services mapping</li>
                  </ul>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">
                    <strong>Update Frequency:</strong> Real-time
                    <br />
                    <strong>Coverage:</strong> Major US cities
                    <br />
                    <strong>Cost:</strong> Free tier (1,000 calls/day)
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-red-500" />
                  Safety & Crime Statistics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    Local Police Departments
                  </Badge>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Crime incident reports by category</li>
                    <li>• Historical crime trends and patterns</li>
                    <li>• Emergency response times</li>
                    <li>• Community policing initiatives</li>
                  </ul>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">
                    <strong>Update Frequency:</strong> Monthly
                    <br />
                    <strong>Coverage:</strong> 25+ major cities
                    <br />
                    <strong>Cost:</strong> Free via open data portals
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Home className="mr-2 h-5 w-5 text-green-500" />
                  Amenities & Points of Interest
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Badge variant="secondary" className="mb-2">
                    Google Places API
                  </Badge>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Restaurants, cafes, and dining options</li>
                    <li>• Shopping centers and retail locations</li>
                    <li>• Healthcare facilities and pharmacies</li>
                    <li>• Entertainment and recreational venues</li>
                  </ul>
                </div>
                <div className="p-3 bg-gray-50 rounded">
                  <div className="text-xs text-gray-600">
                    <strong>Update Frequency:</strong> Real-time
                    <br />
                    <strong>Coverage:</strong> Global
                    <br />
                    <strong>Cost:</strong> Free tier ($200 monthly credit)
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Data Processing Pipeline */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-6 w-6 text-purple-500" />
                Data Processing & Quality Assurance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Processing Pipeline</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="font-semibold text-blue-700">1. Extract</div>
                    <div className="text-sm text-gray-600 mt-1">API calls & data collection</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="font-semibold text-green-700">2. Transform</div>
                    <div className="text-sm text-gray-600 mt-1">Normalization & cleaning</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <div className="font-semibold text-orange-700">3. Validate</div>
                    <div className="text-sm text-gray-600 mt-1">Quality checks & scoring</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="font-semibold text-purple-700">4. Load</div>
                    <div className="text-sm text-gray-600 mt-1">Database storage & indexing</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Data Quality Measures</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium mb-2">Completeness Scoring</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Missing data percentage tracking</li>
                      <li>• Imputation strategies for gaps</li>
                      <li>• Confidence intervals for estimates</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">Accuracy Validation</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cross-source verification</li>
                      <li>• Outlier detection and handling</li>
                      <li>• Manual spot-checking samples</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Challenges & Solutions</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h5 className="font-medium text-red-700">Rate Limiting</h5>
                    <p className="text-sm text-gray-700">
                      Free API tiers have strict rate limits. Solution: Intelligent caching, batch processing, and
                      distributed collection across multiple time periods.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-medium text-orange-700">Geographic Inconsistency</h5>
                    <p className="text-sm text-gray-700">
                      Different sources use varying boundary definitions. Solution: Standardized to census tracts with
                      spatial interpolation for mismatched boundaries.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium text-blue-700">Data Freshness</h5>
                    <p className="text-sm text-gray-700">
                      Some sources update infrequently. Solution: Weighted scoring based on data age and volatility,
                      with priority refresh for high-change metrics.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Metrics & Scoring */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Neighborhood Scoring Metrics</CardTitle>
              <CardDescription>How we quantify and normalize different aspects of neighborhood quality</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Quantitative Metrics</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Walk Score</span>
                      <Badge variant="outline">0-100</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Crime Rate</span>
                      <Badge variant="outline">Per 1000 residents</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Median Income</span>
                      <Badge variant="outline">USD (normalized)</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Amenity Density</span>
                      <Badge variant="outline">Per sq mile</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Transit Access</span>
                      <Badge variant="outline">0-100</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Composite Indices</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Family Friendliness</span>
                      <Badge variant="outline">Weighted composite</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Cultural Diversity</span>
                      <Badge variant="outline">Shannon index</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Nightlife Score</span>
                      <Badge variant="outline">Venue density + hours</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Green Space Access</span>
                      <Badge variant="outline">Distance + area</Badge>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm font-medium">Affordability Index</span>
                      <Badge variant="outline">Cost vs income ratio</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* API Documentation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="mr-2 h-6 w-6 text-indigo-500" />
                API Integration Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Free Tier Optimization Strategies</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Intelligent caching with 24-hour TTL for static data</li>
                    <li>Batch processing during off-peak hours</li>
                    <li>Geographic clustering to minimize redundant calls</li>
                    <li>Fallback to cached data when rate limits exceeded</li>
                    <li>Progressive data loading based on user interaction</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Data Refresh Schedule</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-3 bg-green-50 rounded">
                      <div className="font-medium text-green-700">Daily</div>
                      <div className="text-sm text-gray-600">Crime data, transit updates</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded">
                      <div className="font-medium text-blue-700">Weekly</div>
                      <div className="text-sm text-gray-600">Amenity changes, new businesses</div>
                    </div>
                    <div className="p-3 bg-purple-50 rounded">
                      <div className="font-medium text-purple-700">Monthly</div>
                      <div className="text-sm text-gray-600">Demographics, housing costs</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Future Enhancements */}
          <Card>
            <CardHeader>
              <CardTitle>Future Data Enhancements</CardTitle>
              <CardDescription>
                Planned improvements and additional data sources for enhanced matching accuracy
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Short-term Goals (3-6 months)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Integration with school district APIs for education quality metrics
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Weather and climate data for outdoor lifestyle preferences
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Social media sentiment analysis for community vibe assessment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      Real estate market trends and price predictions
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Long-term Vision (6-12 months)</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      User-generated content and neighborhood reviews
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Environmental quality indices (air, noise, water)
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      Future development plans and zoning changes
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      International expansion with localized data sources
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
