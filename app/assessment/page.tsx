"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

interface AssessmentData {
  budget: number[]
  commute: string
  lifestyle: string[]
  priorities: {
    walkability: number[]
    safety: number[]
    nightlife: number[]
    familyFriendly: number[]
    diversity: number[]
    greenSpace: number[]
  }
  demographics: {
    ageGroup: string
    householdSize: string
    hasChildren: boolean
    hasPets: boolean
  }
  transportation: string[]
  amenities: string[]
}

const initialData: AssessmentData = {
  budget: [2000],
  commute: "",
  lifestyle: [],
  priorities: {
    walkability: [5],
    safety: [5],
    nightlife: [5],
    familyFriendly: [5],
    diversity: [5],
    greenSpace: [5],
  },
  demographics: {
    ageGroup: "",
    householdSize: "",
    hasChildren: false,
    hasPets: false,
  },
  transportation: [],
  amenities: [],
}

export default function AssessmentPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [data, setData] = useState<AssessmentData>(initialData)
  const router = useRouter()
  const totalSteps = 5

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    } else {
      // Save data and redirect to results
      localStorage.setItem("neighborfit-assessment", JSON.stringify(data))
      router.push("/results")
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const updateLifestyle = (value: string, checked: boolean) => {
    if (checked) {
      setData((prev) => ({ ...prev, lifestyle: [...prev.lifestyle, value] }))
    } else {
      setData((prev) => ({ ...prev, lifestyle: prev.lifestyle.filter((item) => item !== value) }))
    }
  }

  const updateTransportation = (value: string, checked: boolean) => {
    if (checked) {
      setData((prev) => ({ ...prev, transportation: [...prev.transportation, value] }))
    } else {
      setData((prev) => ({ ...prev, transportation: prev.transportation.filter((item) => item !== value) }))
    }
  }

  const updateAmenities = (value: string, checked: boolean) => {
    if (checked) {
      setData((prev) => ({ ...prev, amenities: [...prev.amenities, value] }))
    } else {
      setData((prev) => ({ ...prev, amenities: prev.amenities.filter((item) => item !== value) }))
    }
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
          <div className="text-sm text-gray-600">
            Step {currentStep} of {totalSteps}
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <Progress value={(currentStep / totalSteps) * 100} className="h-2" />
            <p className="text-sm text-gray-600 mt-2 text-center">
              {Math.round((currentStep / totalSteps) * 100)}% Complete
            </p>
          </div>

          {/* Step 1: Budget & Basic Info */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Budget & Basic Information</CardTitle>
                <CardDescription>Let&apos;s start with your housing budget and basic preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Monthly Housing Budget</Label>
                  <div className="mt-2">
                    <Slider
                      value={data.budget}
                      onValueChange={(value) => setData((prev) => ({ ...prev, budget: value }))}
                      max={5000}
                      min={500}
                      step={100}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>$500</span>
                      <span className="font-medium">${data.budget[0]}</span>
                      <span>$5000+</span>
                    </div>
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Preferred Commute Time</Label>
                  <RadioGroup
                    value={data.commute}
                    onValueChange={(value) => setData((prev) => ({ ...prev, commute: value }))}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="under-15" id="under-15" />
                      <Label htmlFor="under-15">Under 15 minutes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="15-30" id="15-30" />
                      <Label htmlFor="15-30">15-30 minutes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="30-45" id="30-45" />
                      <Label htmlFor="30-45">30-45 minutes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="45-60" id="45-60" />
                      <Label htmlFor="45-60">45-60 minutes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="over-60" id="over-60" />
                      <Label htmlFor="over-60">Over 60 minutes</Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Demographics */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Demographics & Household</CardTitle>
                <CardDescription>Help us understand your household composition</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Age Group</Label>
                  <Select
                    value={data.demographics.ageGroup}
                    onValueChange={(value) =>
                      setData((prev) => ({
                        ...prev,
                        demographics: { ...prev.demographics, ageGroup: value },
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your age group" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="18-25">18-25</SelectItem>
                      <SelectItem value="26-35">26-35</SelectItem>
                      <SelectItem value="36-45">36-45</SelectItem>
                      <SelectItem value="46-55">46-55</SelectItem>
                      <SelectItem value="56-65">56-65</SelectItem>
                      <SelectItem value="65+">65+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label className="text-base font-medium">Household Size</Label>
                  <Select
                    value={data.demographics.householdSize}
                    onValueChange={(value) =>
                      setData((prev) => ({
                        ...prev,
                        demographics: { ...prev.demographics, householdSize: value },
                      }))
                    }
                  >
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select household size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">Just me</SelectItem>
                      <SelectItem value="2">2 people</SelectItem>
                      <SelectItem value="3">3 people</SelectItem>
                      <SelectItem value="4">4 people</SelectItem>
                      <SelectItem value="5+">5+ people</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasChildren"
                      checked={data.demographics.hasChildren}
                      onCheckedChange={(checked) =>
                        setData((prev) => ({
                          ...prev,
                          demographics: { ...prev.demographics, hasChildren: checked as boolean },
                        }))
                      }
                    />
                    <Label htmlFor="hasChildren">I have children</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasPets"
                      checked={data.demographics.hasPets}
                      onCheckedChange={(checked) =>
                        setData((prev) => ({
                          ...prev,
                          demographics: { ...prev.demographics, hasPets: checked as boolean },
                        }))
                      }
                    />
                    <Label htmlFor="hasPets">I have pets</Label>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Lifestyle Preferences */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Lifestyle Preferences</CardTitle>
                <CardDescription>What describes your ideal lifestyle? (Select all that apply)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Urban Explorer",
                    "Quiet Suburban",
                    "Nightlife Enthusiast",
                    "Family-Oriented",
                    "Fitness Focused",
                    "Foodie Culture",
                    "Arts & Culture",
                    "Tech Professional",
                    "Student Life",
                    "Remote Worker",
                    "Outdoor Adventurer",
                    "Community Volunteer",
                  ].map((lifestyle) => (
                    <div key={lifestyle} className="flex items-center space-x-2">
                      <Checkbox
                        id={lifestyle}
                        checked={data.lifestyle.includes(lifestyle)}
                        onCheckedChange={(checked) => updateLifestyle(lifestyle, checked as boolean)}
                      />
                      <Label htmlFor={lifestyle} className="text-sm">
                        {lifestyle}
                      </Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Priorities */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Neighborhood Priorities</CardTitle>
                <CardDescription>
                  Rate how important these factors are to you (1 = Not Important, 10 = Very Important)
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(data.priorities).map(([key, value]) => (
                  <div key={key}>
                    <Label className="text-base font-medium capitalize">
                      {key === "familyFriendly" ? "Family Friendly" : key === "greenSpace" ? "Green Space" : key}
                    </Label>
                    <div className="mt-2">
                      <Slider
                        value={value}
                        onValueChange={(newValue) =>
                          setData((prev) => ({
                            ...prev,
                            priorities: { ...prev.priorities, [key]: newValue },
                          }))
                        }
                        max={10}
                        min={1}
                        step={1}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-gray-500 mt-1">
                        <span>1</span>
                        <span className="font-medium">{value[0]}</span>
                        <span>10</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Step 5: Transportation & Amenities */}
          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>Transportation & Amenities</CardTitle>
                <CardDescription>What transportation options and amenities are important to you?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label className="text-base font-medium">Transportation Preferences</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {[
                      "Public Transit",
                      "Bike Friendly",
                      "Car Parking",
                      "Walkable",
                      "Ride Share Access",
                      "Highway Access",
                    ].map((transport) => (
                      <div key={transport} className="flex items-center space-x-2">
                        <Checkbox
                          id={transport}
                          checked={data.transportation.includes(transport)}
                          onCheckedChange={(checked) => updateTransportation(transport, checked as boolean)}
                        />
                        <Label htmlFor={transport} className="text-sm">
                          {transport}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <Label className="text-base font-medium">Important Amenities</Label>
                  <div className="grid grid-cols-2 gap-4 mt-2">
                    {[
                      "Grocery Stores",
                      "Restaurants",
                      "Coffee Shops",
                      "Gyms",
                      "Parks",
                      "Schools",
                      "Healthcare",
                      "Shopping",
                      "Libraries",
                      "Entertainment",
                      "Banks",
                      "Pharmacies",
                    ].map((amenity) => (
                      <div key={amenity} className="flex items-center space-x-2">
                        <Checkbox
                          id={amenity}
                          checked={data.amenities.includes(amenity)}
                          onCheckedChange={(checked) => updateAmenities(amenity, checked as boolean)}
                        />
                        <Label htmlFor={amenity} className="text-sm">
                          {amenity}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <Button onClick={handleNext}>
              {currentStep === totalSteps ? "Get Results" : "Next"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
