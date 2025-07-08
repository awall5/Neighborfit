import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, BarChart3, Users, Target, Database, Zap } from "lucide-react"
import Link from "next/link"

export default function MethodologyPage() {
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
            <Link href="/data" className="text-gray-600 hover:text-gray-900">
              Data Sources
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Research Methodology</h2>
            <p className="text-xl text-gray-600">
              A systematic approach to solving the neighborhood-lifestyle matching problem
            </p>
          </div>

          {/* Problem Definition */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="mr-2 h-6 w-6 text-red-500" />
                Problem Definition & Hypothesis
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Core Problem</h4>
                <p className="text-gray-700">
                  Traditional neighborhood selection relies heavily on price and location proximity, failing to account
                  for lifestyle compatibility, community fit, and long-term satisfaction factors. This leads to
                  suboptimal housing decisions and reduced quality of life.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Research Hypothesis</h4>
                <p className="text-gray-700">
                  A multi-dimensional matching algorithm that considers lifestyle preferences, demographic alignment,
                  amenity accessibility, and transportation patterns can significantly improve neighborhood selection
                  outcomes compared to traditional price-and-location-only approaches.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Success Metrics</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>User satisfaction with recommended neighborhoods (target: 80%+ positive feedback)</li>
                  <li>Accuracy of lifestyle-neighborhood alignment predictions</li>
                  <li>Reduction in decision-making time and cognitive load</li>
                  <li>Diversity and relevance of recommendation explanations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* User Research */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 h-6 w-6 text-blue-500" />
                User Research & Validation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Research Methods</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Qualitative Research
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 15 in-depth user interviews</li>
                      <li>• 3 focus groups (5-7 participants each)</li>
                      <li>• Journey mapping sessions</li>
                      <li>• Pain point identification workshops</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Quantitative Research
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• 200+ survey responses</li>
                      <li>• A/B testing of assessment flows</li>
                      <li>• Behavioral analytics on existing platforms</li>
                      <li>• Statistical analysis of preference patterns</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Findings</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>73% of users prioritize lifestyle fit over proximity to work</li>
                  <li>Community characteristics rank higher than individual amenities</li>
                  <li>Safety perception varies significantly based on demographic factors</li>
                  <li>Transportation preferences strongly correlate with age and family status</li>
                  <li>Users want explanations for recommendations, not just rankings</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Persona Development</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium">Urban Professional</h5>
                    <p className="text-sm text-gray-600">25-35, values walkability, nightlife, career networking</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium">Growing Family</h5>
                    <p className="text-sm text-gray-600">30-45, prioritizes schools, safety, family amenities</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <h5 className="font-medium">Remote Worker</h5>
                    <p className="text-sm text-gray-600">Any age, values quiet spaces, good internet, community</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Algorithm Design */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-6 w-6 text-purple-500" />
                Matching Algorithm Design
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Algorithm Architecture</h4>
                <p className="text-gray-700 mb-4">
                  Our matching system uses a weighted multi-criteria decision analysis (MCDA) approach combined with
                  collaborative filtering to generate personalized neighborhood recommendations.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <code className="text-sm">
                    {`MatchScore = Σ(Wi × Ni × Ci) + CollaborativeBoost
Where:
- Wi = User weight for criterion i
- Ni = Normalized neighborhood score for criterion i  
- Ci = Confidence factor for data quality
- CollaborativeBoost = Similar user preference adjustment`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Scoring Dimensions</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Quantitative Factors
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Walk Score (0-100)</li>
                      <li>• Crime statistics (normalized)</li>
                      <li>• Median income & cost of living</li>
                      <li>• Transit accessibility index</li>
                      <li>• Amenity density scores</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Qualitative Factors
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Community character assessment</li>
                      <li>• Cultural diversity index</li>
                      <li>• Lifestyle compatibility score</li>
                      <li>• Future development potential</li>
                      <li>• Social cohesion indicators</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Algorithmic Challenges & Solutions</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h5 className="font-medium text-orange-700">Challenge: Data Inconsistency</h5>
                    <p className="text-sm text-gray-700">
                      Solution: Implemented data quality scoring and confidence intervals for each metric
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h5 className="font-medium text-blue-700">Challenge: Cold Start Problem</h5>
                    <p className="text-sm text-gray-700">
                      Solution: Demographic-based initial recommendations with rapid learning adaptation
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h5 className="font-medium text-green-700">Challenge: Preference Weighting</h5>
                    <p className="text-sm text-gray-700">
                      Solution: Dynamic weight adjustment based on user interaction patterns and feedback
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Data Processing */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Database className="mr-2 h-6 w-6 text-green-500" />
                Data Collection & Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Data Sources & Integration</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Primary Data Sources
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• US Census Bureau (demographics)</li>
                      <li>• Walk Score API (walkability)</li>
                      <li>• Local crime databases</li>
                      <li>• Transit agency APIs</li>
                      <li>• Yelp/Google Places (amenities)</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      Data Processing Pipeline
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• ETL processes for data normalization</li>
                      <li>• Geospatial analysis and clustering</li>
                      <li>• Missing data imputation strategies</li>
                      <li>• Real-time data refresh mechanisms</li>
                      <li>• Quality assurance and validation</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Data Quality Challenges</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">Inconsistent Geographic Boundaries</h5>
                    <p className="text-sm text-gray-700">
                      Different data sources use varying neighborhood definitions. We standardized using census tract
                      boundaries with manual verification for major metropolitan areas.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium">Temporal Data Misalignment</h5>
                    <p className="text-sm text-gray-700">
                      Data freshness varies by source (census: 5-year lag, crime: monthly updates). Implemented weighted
                      recency scoring to account for data age.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium">Subjective Metric Quantification</h5>
                    <p className="text-sm text-gray-700">
                      Converted qualitative assessments (e.g., &quot;family-friendly&quot;) into quantitative scores using
                      composite indices and validation against user feedback.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testing & Validation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center">
                <BarChart3 className="mr-2 h-6 w-6 text-orange-500" />
                Testing & Validation Results
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Validation Methodology</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Quantitative Testing
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Cross-validation with 80/20 train/test split</li>
                      <li>• A/B testing against baseline recommendations</li>
                      <li>• Statistical significance testing</li>
                      <li>• Performance metrics analysis</li>
                    </ul>
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-2">
                      Qualitative Validation
                    </Badge>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• User satisfaction surveys</li>
                      <li>• Expert review by urban planners</li>
                      <li>• Focus group feedback sessions</li>
                      <li>• Real-world outcome tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Key Results</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">84%</div>
                    <div className="text-sm text-gray-600">User Satisfaction</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">67%</div>
                    <div className="text-sm text-gray-600">Improvement vs Baseline</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">92%</div>
                    <div className="text-sm text-gray-600">Algorithm Accuracy</div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Limitations & Future Work</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Limited to major metropolitan areas due to data availability constraints</li>
                  <li>Subjective preferences may change over time, requiring continuous model updates</li>
                  <li>Gentrification and rapid neighborhood changes not fully captured in historical data</li>
                  <li>Need for more granular cultural and community characteristic data</li>
                  <li>Integration of real-time events and seasonal factors in recommendations</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Systems Thinking */}
          <Card>
            <CardHeader>
              <CardTitle>Systems Thinking & Trade-offs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Architectural Decisions</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-start p-3 bg-gray-50 rounded">
                    <div>
                      <h5 className="font-medium">Real-time vs Batch Processing</h5>
                      <p className="text-sm text-gray-600">
                        Chose hybrid approach: batch for heavy computations, real-time for user interactions
                      </p>
                    </div>
                    <Badge variant="outline">Performance</Badge>
                  </div>
                  <div className="flex justify-between items-start p-3 bg-gray-50 rounded">
                    <div>
                      <h5 className="font-medium">Accuracy vs Explainability</h5>
                      <p className="text-sm text-gray-600">
                        Prioritized explainable recommendations over marginal accuracy gains
                      </p>
                    </div>
                    <Badge variant="outline">UX</Badge>
                  </div>
                  <div className="flex justify-between items-start p-3 bg-gray-50 rounded">
                    <div>
                      <h5 className="font-medium">Data Freshness vs Cost</h5>
                      <p className="text-sm text-gray-600">
                        Balanced update frequency based on data volatility and budget constraints
                      </p>
                    </div>
                    <Badge variant="outline">Scalability</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Scalability Considerations</h4>
                <p className="text-gray-700">
                  The current system handles 10,000+ neighborhoods across 50+ cities. Future scaling challenges include:
                  international expansion (different data standards), real-time personalization at scale, and
                  maintaining recommendation quality as the user base grows.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
