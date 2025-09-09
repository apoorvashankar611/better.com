'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Calculator, Home, DollarSign, Percent } from 'lucide-react';

export function MortgageCalculatorPage() {
  const [homePrice, setHomePrice] = useState(400000);
  const [downPayment, setDownPayment] = useState(80000);
  const [loanTerm, setLoanTerm] = useState(30);
  const [interestRate, setInterestRate] = useState(6.5);
  const [propertyTax, setPropertyTax] = useState(265);
  const [homeInsurance, setHomeInsurance] = useState(100);
  const [pmi, setPmi] = useState(200);
  
  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [principalInterest, setPrincipalInterest] = useState(0);

  const downPaymentPercent = (downPayment / homePrice) * 100;
  const loanAmount = homePrice - downPayment;

  useEffect(() => {
    // Calculate monthly principal and interest
    const monthlyRate = interestRate / 100 / 12;
    const numPayments = loanTerm * 12;
    
    if (loanAmount > 0 && monthlyRate > 0) {
      const pi = loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, numPayments)) / 
                 (Math.pow(1 + monthlyRate, numPayments) - 1);
      setPrincipalInterest(pi);
      
      // Total monthly payment including taxes and insurance
      const total = pi + propertyTax + homeInsurance + (downPaymentPercent < 20 ? pmi : 0);
      setMonthlyPayment(total);
    }
  }, [homePrice, downPayment, loanTerm, interestRate, propertyTax, homeInsurance, pmi, downPaymentPercent, loanAmount]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Calculator className="h-8 w-8 text-green-600" />
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Mortgage Calculator
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Calculate your monthly mortgage payments and see how much home you can afford
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calculator Form */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Home className="h-5 w-5 text-green-600" />
                <span>Loan Details</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Home Price */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Home Price</Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    value={homePrice}
                    onChange={(e) => setHomePrice(Number(e.target.value))}
                    className="pl-10"
                  />
                </div>
                <Slider
                  value={[homePrice]}
                  onValueChange={(value) => setHomePrice(value[0])}
                  max={2000000}
                  min={50000}
                  step={5000}
                  className="w-full"
                />
              </div>

              {/* Down Payment */}
              <div className="space-y-3">
                <Label className="text-base font-medium">
                  Down Payment ({downPaymentPercent.toFixed(1)}%)
                </Label>
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="pl-10"
                  />
                </div>
                <Slider
                  value={[downPayment]}
                  onValueChange={(value) => setDownPayment(value[0])}
                  max={homePrice * 0.5}
                  min={homePrice * 0.03}
                  step={1000}
                  className="w-full"
                />
              </div>

              {/* Interest Rate */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Interest Rate</Label>
                <div className="relative">
                  <Percent className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="pl-10"
                  />
                </div>
                <Slider
                  value={[interestRate]}
                  onValueChange={(value) => setInterestRate(value[0])}
                  max={10}
                  min={3}
                  step={0.1}
                  className="w-full"
                />
              </div>

              {/* Loan Term */}
              <div className="space-y-3">
                <Label className="text-base font-medium">Loan Term (years)</Label>
                <Input
                  type="number"
                  value={loanTerm}
                  onChange={(e) => setLoanTerm(Number(e.target.value))}
                />
                <Slider
                  value={[loanTerm]}
                  onValueChange={(value) => setLoanTerm(value[0])}
                  max={30}
                  min={10}
                  step={5}
                  className="w-full"
                />
              </div>

              {/* Additional Costs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Property Tax</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                    <Input
                      type="number"
                      value={propertyTax}
                      onChange={(e) => setPropertyTax(Number(e.target.value))}
                      className="pl-8 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">Home Insurance</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                    <Input
                      type="number"
                      value={homeInsurance}
                      onChange={(e) => setHomeInsurance(Number(e.target.value))}
                      className="pl-8 text-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium">PMI</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
                    <Input
                      type="number"
                      value={pmi}
                      onChange={(e) => setPmi(Number(e.target.value))}
                      className="pl-8 text-sm"
                      disabled={downPaymentPercent >= 20}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-6">
            <Card className="p-6 bg-green-50 border-green-200">
              <CardHeader>
                <CardTitle className="text-center text-2xl text-green-800">
                  Monthly Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-green-600 mb-2">
                    ${monthlyPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </div>
                  <p className="text-green-700">per month</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Payment Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Principal & Interest</span>
                  <span className="font-semibold">
                    ${principalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Property Tax</span>
                  <span className="font-semibold">${propertyTax}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Home Insurance</span>
                  <span className="font-semibold">${homeInsurance}</span>
                </div>
                {downPaymentPercent < 20 && (
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="text-gray-600">PMI</span>
                    <span className="font-semibold">${pmi}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardHeader>
                <CardTitle>Loan Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Loan Amount</span>
                  <span className="font-semibold">
                    ${loanAmount.toLocaleString('en-US')}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Total Interest</span>
                  <span className="font-semibold">
                    ${((principalInterest * loanTerm * 12) - loanAmount).toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  </span>
                </div>
              </CardContent>
            </Card>

            <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
              Get Pre-Approved
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}