"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { MapPin, Star, DollarSign, Car, Users, Shield } from "lucide-react"
import Link from "next/link"

interface NeighborhoodMatch {
  id: string
  name: string
  city: string
  matchScore: number
  priceRange: string
  walkScore: number
  safetyScore: number
  demographics: {
    medianAge: number
    familyFriendly: number
    diversity: number
  }
  amenities: string[]
  transportation: string[]
  highlights: string[]
  challenges: string[]
  reasoning: string
}

// Mock neighborhood data - in a real app, this would come from your matching algorithm
const mockResults: NeighborhoodMatch[] = [
  {
    id: "1",
    name: "Capitol Hill",
    city: "Seattle, WA",
    matchScore: 92,
    priceRange: "$2,200 - $3,500",
    walkScore: 95,
    safetyScore: 78,
    demographics: {
      medianAge: 32,
      familyFriendly: 65,
      diversity: 88,
    },
    amenities: ["Coffee Shops", "Restaurants", "Nightlife", "Parks", "Public Transit"],
    transportation: ["Bus Lines", "Light Rail", "Bike Lanes", "Walkable"],
    highlights: [
      "Vibrant arts and culture scene",
      "Excellent walkability and transit access",
      "Diverse dining and entertainment options",
      "Strong sense of community",
    ],
    challenges: ["Higher cost of living", "Limited parking availability", "Can be noisy on weekends"],
    reasoning:
      "Capitol Hill matches your urban lifestyle preferences with excellent walkability, diverse culture, and strong nightlife scene. The neighborhood aligns well with your budget and commute preferences.",
  },
  {
    id: "2",
    name: "Fremont",
    city: "Seattle, WA",
    matchScore: 87,
    priceRange: "$1,800 - $2,800",
    walkScore: 82,
    safetyScore: 85,
    demographics: {
      medianAge: 35,
      familyFriendly: 78,
      diversity: 75,
    },
    amenities: ["Local Markets", "Cafes", "Parks", "Community Events", "Art Galleries"],
    transportation: ["Bus Routes", "Bike Friendly", "Car Access"],
    highlights: [
      "Quirky, artistic community character",
      "Good balance of urban and residential",
      "Strong local business scene",
      "Family-friendly atmosphere",
    ],
    challenges: ["Limited nightlife options", "Fewer transit connections", "Some areas lack amenities"],
    reasoning:
      "Fremont offers a unique blend of artistic culture and community feel that matches your lifestyle preferences, with better affordability than downtown options.",
  },
  {
    id: "3",
    name: "Ballard",
    city: "Seattle, WA",
    matchScore: 84,
    priceRange: "$2,000 - $3,200",
    walkScore: 88,
    safetyScore: 82,
    demographics: {
      medianAge: 33,
      familyFriendly: 72,
      diversity: 70,
    },
    amenities: ["Breweries", "Restaurants", "Farmers Market", "Waterfront", "Shopping"],
    transportation: ["Light Rail (planned)", "Bus Lines", "Bike Lanes"],
    highlights: [
      "Thriving food and brewery scene",
      "Waterfront access and views",
      "Growing tech professional community",
      "Good mix of new and historic",
    ],
    challenges: ["Rapid gentrification", "Construction and development", "Limited current transit options"],
    reasoning:
      "Ballard's emerging tech scene and excellent food culture align with your professional background and lifestyle preferences, though transit access is still developing.",
  },
]

type AssessmentData = {
  budget: number[];
  commute: string;
  lifestyle: string[];
  priorities: Record<string, number[]>;
}


export default function ResultsPage() {
  const [results, setResults] = useState<NeighborhoodMatch[]>([])
  const [loading, setLoading] = useState(true)
  const [assessmentData, setAssessmentData] = useState<AssessmentData | null>(null)




  useEffect(() => {
    // Load assessment data from localStorage
    const savedData = localStorage.getItem("neighborfit-assessment")
    if (savedData) {
      setAssessmentData(JSON.parse(savedData))
    }

    // Simulate API call to matching algorithm
    setTimeout(() => {
      setResults(mockResults)
      setLoading(false)
    }, 2000)
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <Card className="w-96">
          <CardHeader>
            <CardTitle className="text-center">Analyzing Your Preferences</CardTitle>
            <CardDescription className="text-center">
              Our algorithm is processing neighborhood data to find your perfect matches...
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={75} className="h-2" />
            <p className="text-sm text-gray-600 mt-2 text-center">Processing data from 500+ neighborhoods</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">NeighborFit</h1>
          </Link>
          <div className="flex space-x-4">
            <Link href="/assessment">
              <Button variant="outline">Retake Assessment</Button>
            </Link>
            <Button>Save Results</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Results Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Neighborhood Matches</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Based on your preferences, we&apos;ve found {results.length} neighborhoods that could be perfect for your
            lifestyle.
          </p>
        </div>

        {/* Assessment Summary */}
        {assessmentData && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Your Assessment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div>
                  <span className="font-medium">Budget:</span> ${assessmentData.budget[0]}/month
                </div>
                <div>
                  <span className="font-medium">Commute:</span> {assessmentData.commute?.replace("-", " to ")} min
                </div>
                <div>
                  <span className="font-medium">Lifestyle:</span> {assessmentData.lifestyle?.slice(0, 2).join(", ")}
                  {assessmentData.lifestyle?.length > 2 && ` +${assessmentData.lifestyle.length - 2} more`}
                </div>
                <div>
                  <span className="font-medium">Top Priority:</span>
                  {Object.entries(assessmentData.priorities || {}).sort(
                    ([, a], [, b]) => (b as number[])[0] - (a as number[])[0],
                  )[0]?.[0] || "N/A"}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        <div className="space-y-6">
          {results.map((neighborhood, index) => (
            <Card key={neighborhood.id} className="overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl flex items-center">
                      <Badge variant="secondary" className="mr-3">
                        #{index + 1}
                      </Badge>
                      {neighborhood.name}
                    </CardTitle>
                    <CardDescription className="text-lg mt-1">{neighborhood.city}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center mb-2">
                      <Star className="h-5 w-5 text-yellow-500 mr-1" />
                      <span className="text-2xl font-bold text-green-600">{neighborhood.matchScore}%</span>
                    </div>
                    <Badge variant="outline">Match Score</Badge>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {/* Key Metrics */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                    <div>
                      <div className="font-medium">Price Range</div>
                      <div className="text-sm text-gray-600">{neighborhood.priceRange}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <div className="font-medium">Walk Score</div>
                      <div className="text-sm text-gray-600">{neighborhood.walkScore}/100</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-purple-500 mr-2" />
                    <div>
                      <div className="font-medium">Safety Score</div>
                      <div className="text-sm text-gray-600">{neighborhood.safetyScore}/100</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-orange-500 mr-2" />
                    <div>
                      <div className="font-medium">Median Age</div>
                      <div className="text-sm text-gray-600">{neighborhood.demographics.medianAge} years</div>
                    </div>
                  </div>
                </div>

                {/* Why This Match */}
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Why This Neighborhood Matches You</h4>
                  <p className="text-gray-700">{neighborhood.reasoning}</p>
                </div>

                {/* Highlights & Challenges */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">Highlights</h4>
                    <ul className="space-y-1">
                      {neighborhood.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-700 mb-2">Considerations</h4>
                    <ul className="space-y-1">
                      {neighborhood.challenges.map((challenge, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="text-orange-500 mr-2">•</span>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Amenities & Transportation */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Key Amenities</h4>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.amenities.map((amenity, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Transportation</h4>
                    <div className="flex flex-wrap gap-2">
                      {neighborhood.transportation.map((transport, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {transport}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center space-x-4">
            <Link href="/assessment">
              <Button variant="outline" size="lg">
                Refine Your Preferences
              </Button>
            </Link>
            <Button size="lg">Save & Share Results</Button>
          </div>
          <p className="text-sm text-gray-600">
            Want to explore more neighborhoods?{" "}
            <Link href="/explore" className="text-blue-600 hover:underline">
              Browse all areas
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
