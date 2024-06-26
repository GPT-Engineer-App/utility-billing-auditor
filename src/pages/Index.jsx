import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    accountNumber: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    bills: Array(12).fill({
      startGasMeterReadDate: '',
      totalThermsUsed: '',
      kWhUsage: '',
      totalKWhMonthlyCost: ''
    })
  });

  const handleChange = (e, index, field) => {
    if (index !== undefined) {
      const newBills = [...formData.bills];
      newBills[index][field] = e.target.value;
      setFormData({ ...formData, bills: newBills });
    } else {
      setFormData({ ...formData, [field]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Analyze the data and generate a report
    console.log(formData);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <Card className="w-full max-w-4xl p-4">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Utility Bill Auditor</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={formData.name} onChange={(e) => handleChange(e, undefined, 'name')} />
              </div>
              <div>
                <Label htmlFor="accountNumber">Account Number</Label>
                <Input id="accountNumber" value={formData.accountNumber} onChange={(e) => handleChange(e, undefined, 'accountNumber')} />
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" value={formData.address} onChange={(e) => handleChange(e, undefined, 'address')} />
              </div>
              <div>
                <Label htmlFor="city">City</Label>
                <Input id="city" value={formData.city} onChange={(e) => handleChange(e, undefined, 'city')} />
              </div>
              <div>
                <Label htmlFor="state">State</Label>
                <Input id="state" value={formData.state} onChange={(e) => handleChange(e, undefined, 'state')} />
              </div>
              <div>
                <Label htmlFor="zip">Zip Code</Label>
                <Input id="zip" value={formData.zip} onChange={(e) => handleChange(e, undefined, 'zip')} />
              </div>
            </div>
            <div className="space-y-4">
              {formData.bills.map((bill, index) => (
                <div key={index} className="grid grid-cols-4 gap-4">
                  <div>
                    <Label htmlFor={`startGasMeterReadDate-${index}`}>Start Gas Meter Read Date</Label>
                    <Input id={`startGasMeterReadDate-${index}`} value={bill.startGasMeterReadDate} onChange={(e) => handleChange(e, index, 'startGasMeterReadDate')} />
                  </div>
                  <div>
                    <Label htmlFor={`totalThermsUsed-${index}`}>Total Therms Used</Label>
                    <Input id={`totalThermsUsed-${index}`} value={bill.totalThermsUsed} onChange={(e) => handleChange(e, index, 'totalThermsUsed')} />
                  </div>
                  <div>
                    <Label htmlFor={`kWhUsage-${index}`}>kWh Usage</Label>
                    <Input id={`kWhUsage-${index}`} value={bill.kWhUsage} onChange={(e) => handleChange(e, index, 'kWhUsage')} />
                  </div>
                  <div>
                    <Label htmlFor={`totalKWhMonthlyCost-${index}`}>Total kWh Monthly Cost</Label>
                    <Input id={`totalKWhMonthlyCost-${index}`} value={bill.totalKWhMonthlyCost} onChange={(e) => handleChange(e, index, 'totalKWhMonthlyCost')} />
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button type="submit">Generate Report</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;