import React, { useState } from "react";

export function AboutTabs() {
  const sectionSubtitleStyles = `
    .section-subtitle {
      display: inline-block;
      font-family: 'Montserrat', sans-serif;
      font-size: 0.875rem;
      font-weight: 600;
      color: #0090EA;
      margin-bottom: 0.5rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      position: relative;
      padding-bottom: 0.5rem;
      border-bottom: none;
    }
    
    .section-subtitle::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: #0090EA;
      transition: width 0.3s ease;
    }
    
    .section-subtitle.active::after {
      width: 100%;
    }
    
    .section-subtitle.active {
      color: #0090EA;
    }
  `;
  const [activeTab, setActiveTab] = useState("story");
  
  return (
    <div className="space-y-6">
      <style dangerouslySetInnerHTML={{ __html: sectionSubtitleStyles }} />
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        <button 
          onClick={() => setActiveTab("story")}
          className={`px-4 py-2 transition-colors duration-200 section-subtitle ${
            activeTab === "story" 
              ? "active" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          OUR STORY
        </button>
        <button 
          onClick={() => setActiveTab("values")}
          className={`px-4 py-2 transition-colors duration-200 section-subtitle ${
            activeTab === "values" 
              ? "active" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          OUR VALUES
        </button>
        <button 
          onClick={() => setActiveTab("approach")}
          className={`px-4 py-2 transition-colors duration-200 section-subtitle ${
            activeTab === "approach" 
              ? "active" 
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          OUR APPROACH
        </button>
      </div>
      
      {/* Tab Content */}
      <div className="tab-content">
        {/* Our Story Tab */}
        {activeTab === "story" && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-gray-600 leading-relaxed">
              Founded in 2023 by a team who experienced firsthand how technical failures affect real lives, we approach infrastructure differently. Our solutions aren't just about uptime statistics—they're about the doctor who needs patient records at 2AM, the family whose precious memories are stored in the cloud, and the business owner whose livelihood depends on their systems staying online.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We believe the best technology is the kind you don't have to think about—it just works, reliably, when you need it. That's why we've built Charged IT Solutions with reliability and human-centered design at its core.
            </p>
          </div>
        )}
        
        {/* Our Values Tab */}
        {activeTab === "values" && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-gray-600 leading-relaxed">
              At Charged IT Solutions, our values guide every decision we make. We believe in <span className="text-secondary-500 font-semibold">reliability above all</span> — understanding that downtime isn't just an inconvenience, but a critical failure that affects real people. That's why we've built our entire infrastructure with multiple redundancies and failsafes.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We practice <span className="text-secondary-500 font-semibold">radical transparency</span> by being completely honest with our customers about our capabilities, our limitations, and especially when things go wrong. No technical jargon to hide behind, just clear communication.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              <span className="text-secondary-500 font-semibold">Security by design</span> means security isn't a feature we add on—it's the foundation everything is built upon. We implement industry-leading security practices at every level of our infrastructure.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Our <span className="text-secondary-500 font-semibold">human-centered approach</span> recognizes that technology exists to serve people, not the other way around. We design all our systems and interfaces with the human experience in mind, ensuring they're intuitive and accessible.
            </p>
          </div>
        )}
        
        {/* Our Approach Tab */}
        {activeTab === "approach" && (
          <div className="space-y-4 animate-fadeIn">
            <p className="text-gray-600 leading-relaxed">
              Our approach to infrastructure is built on <span className="text-secondary-500 font-semibold">proactive monitoring</span>. We don't wait for problems to occur. Our systems continuously monitor every aspect of your infrastructure, often detecting and resolving issues before they impact your operations.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              When you need support, you'll experience our <span className="text-secondary-500 font-semibold">expert-led support</span> model. You speak directly with engineers who understand your systems—not script-following agents. This means faster resolutions and fewer escalations.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              We believe in <span className="text-secondary-500 font-semibold">continuous improvement</span>. We're constantly evaluating and upgrading our infrastructure, implementing new technologies and methodologies to ensure you always have access to the best solutions available.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Every business is unique, which is why we focus on <span className="text-secondary-500 font-semibold">tailored solutions</span>. Rather than offering one-size-fits-all packages, we work with you to develop customized solutions that address your specific challenges.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
