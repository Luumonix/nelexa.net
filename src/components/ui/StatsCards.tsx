import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <Card className="bg-white border border-gray-100 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
        <CardContent className="p-6">
          <div className="flex items-baseline mb-2">
            <span className="text-4xl font-bold text-secondary">99.99</span>
            <span className="text-2xl font-bold text-secondary ml-1">%</span>
          </div>
          <div className="font-medium text-gray-700">Uptime SLA</div>
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-gray-100 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
        <CardContent className="p-6">
          <div className="flex items-baseline mb-2">
            <span className="text-4xl font-bold text-secondary">24</span>
            <span className="text-2xl font-bold text-secondary ml-1">/7</span>
          </div>
          <div className="font-medium text-gray-700">Expert Support</div>
        </CardContent>
      </Card>
      
      <Card className="bg-white border border-gray-100 shadow-sm transform transition-all duration-300 hover:shadow-md hover:-translate-y-1 overflow-hidden group">
        <div className="absolute top-0 left-0 w-1 h-full bg-secondary transform origin-left scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
        <CardContent className="p-6">
          <div className="text-4xl font-bold text-secondary mb-2">Global</div>
          <div className="font-medium text-gray-700">Network Reach</div>
        </CardContent>
      </Card>
    </div>
  );
}
