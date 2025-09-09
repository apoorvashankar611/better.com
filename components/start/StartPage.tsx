'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, Home, RefreshCw, TrendingUp } from 'lucide-react';

const loanPurposes = [
  { id: 'purchase', label: 'Purchase a home', icon: Home, description: 'Buying your first home or next home' },
  { id: 'refinance', label: 'Refinance', icon: RefreshCw, description: 'Lower your rate or get cash out' },
  { id: 'heloc', label: 'HELOC', icon: TrendingUp, description: 'Tap into your home equity' }
];

export function StartPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    purpose: '',
    zipCode: '',
    homePrice: '',
    downPayment: '',
    credit: '',
    income: '',
    employment: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Get Started</h1>
            <span className="text-sm text-gray-600">Step {step} of 4</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: Loan Purpose */}
        {step === 1 && (
          <Card className="p-8">
            <CardHeader className="text-center mb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                What would you like to do?
              </CardTitle>
              <p className="text-lg text-gray-600">
                Tell us about your home loan needs
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {loanPurposes.map((purpose) => (
                  <button
                    key={purpose.id}
                    onClick={() => {
                      updateFormData('purpose', purpose.id);
                      handleNext();
                    }}
                    className={`p-6 border-2 rounded-lg transition-all hover:border-green-500 hover:shadow-lg text-left ${
                      formData.purpose === purpose.id ? 'border-green-500 bg-green-50' : 'border-gray-200'
                    }`}
                  >
                    <purpose.icon className="h-12 w-12 text-green-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{purpose.label}</h3>
                    <p className="text-gray-600">{purpose.description}</p>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Property Details */}
        {step === 2 && (
          <Card className="p-8">
            <CardHeader className="text-center mb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Tell us about the property
              </CardTitle>
              <p className="text-lg text-gray-600">
                We'll use this to give you accurate rates and terms
              </p>
            </CardHeader>
            <CardContent className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="zipCode">Property ZIP code</Label>
                <Input
                  id="zipCode"
                  placeholder="e.g. 10001"
                  value={formData.zipCode}
                  onChange={(e) => updateFormData('zipCode', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="homePrice">Estimated home price</Label>
                <Input
                  id="homePrice"
                  placeholder="e.g. 400000"
                  value={formData.homePrice}
                  onChange={(e) => updateFormData('homePrice', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="downPayment">Down payment</Label>
                <Input
                  id="downPayment"
                  placeholder="e.g. 80000"
                  value={formData.downPayment}
                  onChange={(e) => updateFormData('downPayment', e.target.value)}
                />
              </div>

              <div className="flex space-x-4 pt-6">
                <Button variant="outline" onClick={handlePrevious} className="flex-1">
                  Previous
                </Button>
                <Button onClick={handleNext} className="flex-1 bg-green-600 hover:bg-green-700">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Financial Information */}
        {step === 3 && (
          <Card className="p-8">
            <CardHeader className="text-center mb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Financial information
              </CardTitle>
              <p className="text-lg text-gray-600">
                This helps us determine what you can afford
              </p>
            </CardHeader>
            <CardContent className="space-y-6 max-w-md mx-auto">
              <div className="space-y-2">
                <Label htmlFor="credit">Credit score range</Label>
                <Select value={formData.credit} onValueChange={(value) => updateFormData('credit', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your credit score range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="excellent">Excellent (740+)</SelectItem>
                    <SelectItem value="good">Good (670-739)</SelectItem>
                    <SelectItem value="fair">Fair (580-669)</SelectItem>
                    <SelectItem value="poor">Poor (below 580)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="income">Annual household income</Label>
                <Input
                  id="income"
                  placeholder="e.g. 75000"
                  value={formData.income}
                  onChange={(e) => updateFormData('income', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="employment">Employment status</Label>
                <Select value={formData.employment} onValueChange={(value) => updateFormData('employment', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select employment status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="employed">Employed</SelectItem>
                    <SelectItem value="self-employed">Self-employed</SelectItem>
                    <SelectItem value="retired">Retired</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-4 pt-6">
                <Button variant="outline" onClick={handlePrevious} className="flex-1">
                  Previous
                </Button>
                <Button onClick={handleNext} className="flex-1 bg-green-600 hover:bg-green-700">
                  Continue
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Contact Information */}
        {step === 4 && (
          <Card className="p-8">
            <CardHeader className="text-center mb-8">
              <CardTitle className="text-3xl font-bold text-gray-900 mb-4">
                Almost done!
              </CardTitle>
              <p className="text-lg text-gray-600">
                Get your personalized rate quote
              </p>
            </CardHeader>
            <CardContent className="space-y-6 max-w-md mx-auto">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData('firstName', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData('lastName', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData('email', e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData('phone', e.target.value)}
                />
              </div>

              <div className="flex space-x-4 pt-6">
                <Button variant="outline" onClick={handlePrevious} className="flex-1">
                  Previous
                </Button>
                <Button className="flex-1 bg-green-600 hover:bg-green-700">
                  Get My Rate
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <p className="text-sm text-gray-500 text-center pt-4">
                By continuing, you agree to our Terms of Service and Privacy Policy
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}