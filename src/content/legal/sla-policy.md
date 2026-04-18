---
title: "SLA Policy"
description: "Nelexa Service Level Agreement - Our commitment to service availability and performance."
lastUpdated: 2025-08-05
---
## 1. INTRODUCTION

### 1.1 Purpose and Scope

This Service Level Agreement ("Agreement" or "SLA") is entered into by and between Nelexa, Inc. ("Provider," "Company," "we," "us," or "our"), a corporation, with its principal place of business at Dallas, TX and New York, NY USA, and the client or customer ("Client," "Customer," "you," or "your") who has purchased or subscribed to our services as defined herein.

This Agreement sets forth the terms and conditions under which Provider will deliver and maintain the Services, including but not limited to cloud computing services, dedicated server solutions, managed services, and distributed denial of service ("DDoS") protection services (collectively, the "Services"). This Agreement establishes the expected level of service performance, availability, reliability, responsibilities, and remedies.

### 1.2 Term and Termination

This Agreement shall commence on the date specified in the Order Form or upon activation of Services, whichever occurs first, and shall continue for the initial term as specified in the applicable Order Form ("Initial Term"). Following the Initial Term, this Agreement shall automatically renew for successive periods equal in length to the Initial Term (each a "Renewal Term") unless either party provides written notice of non-renewal at least sixty (60) days prior to the end of the then-current term.

### 1.3 Definitions

For the purposes of this Agreement, the following terms shall have the meanings set forth below:

- **"Availability"** means the percentage of time during a calendar month that the Services are operational and accessible to Customer, excluding Scheduled Maintenance and Force Majeure Events.

- **"Critical Incident"** means an event that results in the complete unavailability of the Services to all users.

- **"Downtime"** means any period of time when the Services are not available, excluding Scheduled Maintenance and Force Majeure Events.

- **"Force Majeure Event"** means any act, event, or occurrence beyond the reasonable control of Provider, including but not limited to acts of God, natural disasters, war, riot, civil unrest, terrorism, labor disputes, failure of third-party services, power outages, internet connectivity issues not attributable to Provider, and governmental actions.

- **"Incident"** means any event that is not part of the standard operation of the Services and that causes, or may cause, an interruption or a reduction in the quality of the Services.

- **"Order Form"** means the document specifying the Services purchased by Customer, the applicable fees, and other terms specific to the Services.

- **"Response Time"** means the period of time between Provider's receipt of notification of an Incident and Provider's acknowledgment of the Incident.

- **"Resolution Time"** means the period of time between Provider's acknowledgment of an Incident and the restoration of the Services to normal operation.

- **"Scheduled Maintenance"** means any maintenance performed by Provider on the Services during a pre-announced timeframe, typically during non-business hours.

- **"Service Credits"** means credits issued to Customer's account as compensation for Provider's failure to meet the Service Level Objectives specified in this Agreement.

- **"Service Level Objectives" or "SLOs"** means the quantitative standards of service performance set forth in this Agreement.

- **"Severity Level"** means the classification of an Incident based on its impact on the Services and Customer operations.

## 2. SERVICE COMMITMENTS

### 2.1 Service Availability

Provider guarantees that the Services will be available and operational according to the following Service Level Objectives:

| Service Type | Availability SLO | Calculation Period |
|--------------|------------------|-------------------|
| Cloud Computing Services | 99.99% | Monthly |
| Dedicated Server Solutions | 99.99% | Monthly |
| Managed Services | 99.9% | Monthly |
| DDoS Protection Services | 99.99% | Monthly |

Availability shall be calculated using the following formula:

```
Availability = ((Total Minutes in Month - Downtime Minutes) / Total Minutes in Month) × 100%
```

For the avoidance of doubt, the Availability calculation excludes:
- Scheduled Maintenance periods;
- Force Majeure Events;
- Downtime caused by Customer's actions or omissions;
- Downtime caused by Customer's equipment, software, or third-party services not within Provider's direct control;
- Downtime attributable to Customer's breach of this Agreement or the Acceptable Use Policy.

### 2.2 Performance Metrics

Provider commits to maintaining the following performance metrics for the Services:

#### 2.2.1 Cloud Computing Services

- **Compute Resources**: Provisioned resources will be available at the contracted capacity.
- **Storage Performance**: 
  - Standard Storage: Minimum of 99.99% read/write availability
  - High-Performance Storage: Minimum of 99.95% read/write availability with latency not exceeding 50ms for 99% of operations
- **Network Performance**: 
  - Uplink/Downlink Speeds: At least 95% of contracted bandwidth capacity available at all times
  - Packet Loss: Less than 0.1% within Provider's network
  - Latency: Less than 15ms within Provider's network

#### 2.2.2 Dedicated Server Solutions

- **Hardware Availability**: 99.99% hardware component functionality
- **Network Availability**: 99.99% network uptime
- **Power Availability**: 100% power availability (through redundant power systems)

#### 2.2.3 Managed Services

- **Monitoring**: 24/7/365 monitoring with 5-minute alert intervals
- **Backup Services**: 99.9% backup success rate for scheduled backups
- **Patch Management**: Critical security patches applied within 24 hours of release, following testing

#### 2.2.4 DDoS Protection Services

- **Attack Detection**: Detection of volumetric attacks within 30 seconds
- **Mitigation Activation**: Automatic mitigation activated within 60 seconds of attack detection
- **Traffic Filtering**: Legitimate traffic delivery during mitigations with less than 10% false positives

### 2.3 Incident Response and Resolution

Provider shall respond to and resolve Incidents based on their Severity Level according to the following timeframes:

| Severity Level | Description | Response Time | Resolution Time | Updates |
|----------------|-------------|---------------|-----------------|---------|
| 1 - Critical | Complete Service unavailability affecting all users | 15 minutes | 2 hours | Every 30 minutes |
| 2 - High | Major functionality impaired; significant performance degradation | 30 minutes | 4 hours | Every 1 hour |
| 3 - Medium | Limited functionality impaired; minor performance degradation | 2 hours | 8 hours | Every 4 hours |
| 4 - Low | Non-critical issues with minimal impact on Service functionality | 4 hours | 24 hours | Daily |

Resolution Times represent targets and not guarantees. Provider shall use commercially reasonable efforts to resolve Incidents within the specified Resolution Times.

### 2.4 Support Services

Provider shall make available the following support services:

| Support Tier | Hours of Operation | Communication Channels | Initial Response Time |
|--------------|---------------------|------------------------|------------------------|
| Standard | 24/7/365 for Critical/High Severity; Business Hours for Medium/Low | Email, Ticketing System | Critical: 2 hours<br>High: 4 hours<br>Medium: 8 hours<br>Low: 24 hours |
| Premium | 24/7/365 for all Severity Levels | Email, Ticketing System, Phone | Critical: 15 minutes<br>High: 30 minutes<br>Medium: 2 hours<br>Low: 4 hours |
| Enterprise | 24/7/365 for all Severity Levels | Email, Ticketing System, Phone, Dedicated Support Manager | Critical: 15 minutes<br>High: 30 minutes<br>Medium: 1 hour<br>Low: 2 hours |

### 2.5 Scheduled Maintenance

Provider reserves the right to perform Scheduled Maintenance on the Services. Provider shall:

1. Provide at least forty-eight (48) hours advance notice for routine maintenance.
2. Provide at least twenty-four (24) hours advance notice for urgent maintenance.
3. Schedule maintenance during non-business hours (typically between 12:00 AM and 5:00 AM in Customer's local time zone) whenever possible.
4. Limit Scheduled Maintenance to a maximum of eight (8) hours per calendar month.

Emergency maintenance may be performed with shorter or no notice in the event of urgent security issues or to prevent imminent Service failure.

## 3. SERVICE LEVEL REMEDIES

### 3.1 Service Credits

In the event that Provider fails to meet the Service Level Objectives specified in this Agreement, Customer shall be eligible for Service Credits according to the following schedule:

#### 3.1.1 Availability Service Credits

| Service Type | Actual Availability | Service Credit (% of Monthly Fee) |
|--------------|---------------------|-----------------------------------|
| Cloud Computing Services | 99.9% to < 99.95% | 5% |
| | 99.5% to < 99.9% | 10% |
| | 99.0% to < 99.5% | 15% |
| | < 99.0% | 25% |
| Dedicated Server Solutions | 99.5% to < 99.9% | 5% |
| | 99.0% to < 99.5% | 10% |
| | 98.5% to < 99.0% | 15% |
| | < 98.5% | 25% |
| Managed Services | 99.5% to < 99.9% | 5% |
| | 99.0% to < 99.5% | 10% |
| | 98.5% to < 99.0% | 15% |
| | < 98.5% | 25% |
| DDoS Protection Services | 99.5% to < 99.9% | 5% |
| | 99.0% to < 99.5% | 10% |
| | 98.5% to < 99.0% | 15% |
| | < 98.5% | 25% |

### 3.2 Service Credit Request Process

To receive Service Credits, Customer must:

1. Submit a request within thirty (30) days of the end of the calendar month in which the failure to meet Service Level Objectives occurred.
2. Provide documented evidence of the Service Level Objective failure.
3. Submit the request via the Provider's ticketing system or by emailing [support@nelexa.net].

Provider will review Service Credit requests and respond within fifteen (15) business days. If approved, Service Credits will be applied to Customer's account within thirty (30) days of approval.

### 3.3 Service Credit Limitations

1. Service Credits are Customer's sole and exclusive remedy for Provider's failure to meet Service Level Objectives.
2. Service Credits may not exceed 100% of Customer's monthly fee for the affected Service in any calendar month.
3. Service Credits have no cash value and cannot be refunded.
4. Service Credits expire twelve (12) months after issuance if not used.
5. Service Credits do not apply to free trial services, beta services, or any services explicitly excluded from SLA coverage.
6. Customer shall not be eligible for Service Credits if Customer is in breach of this Agreement, including payment obligations.

## 4. INTEGRATION WITH TERMS OF SERVICE

This SLA is a supplement to and forms part of the Terms of Service between Provider and Customer. In the event of any conflict between this SLA and the Terms of Service, the Terms of Service shall prevail except with respect to the specific service level commitments and remedies set forth in this SLA.

Customer responsibilities, warranties, disclaimers, limitations of liability, dispute resolution procedures, and general legal provisions are governed by the Terms of Service and are not duplicated in this SLA.

## APPENDIX A: SERVICE-SPECIFIC TERMS

### A.1 Cloud Computing Services

#### A.1.1 Resource Allocation

Provider shall provision and maintain the computing resources specified in the Order Form, including but not limited to virtual CPUs, memory, storage, and bandwidth. Resources shall be available for Customer's use 24/7/365, subject to the availability guarantees in Section 2.1.

#### A.1.2 Data Backups

Unless explicitly stated otherwise in the Order Form, Provider's standard backup policy applies, which includes:

1. Bi-weekly full snapshots, retained for four (4) weeks.

Customer is responsible for verifying the integrity and suitability of backups for its particular applications. Provider shall not be liable for data loss due to backup failures unless such failures result from Provider's gross negligence or willful misconduct.

### A.2 Dedicated Server Solutions

#### A.2.1 Hardware Specifications

Provider shall provide and maintain the physical hardware specified in the Order Form. Hardware shall conform to the specifications provided in the Order Form and shall be maintained in good working condition.

#### A.2.2 Hardware Replacement

In the event of hardware failure, Provider shall:

1. Begin diagnosis within one (8) hours of notification;
2. Replace failed components within twenty-four (24) hours of diagnosis for critical components (e.g., storage devices, power supplies); and
3. Replace failed components within seventy-two (72) hours of diagnosis for non-critical components.

#### A.2.3 Operating System Support

If Provider is responsible for operating system installation and maintenance, Provider shall:

1. Install and configure the operating system specified in the Order Form;
2. Apply security patches according to the schedule specified in Section 2.2.3; and
3. Provide basic troubleshooting and support for operating system issues.

### A.4 DDoS Protection Services

#### A.4.1 Detection and Mitigation

Provider shall:

1. Continuously monitor Customer's traffic for signs of DDoS attacks;
2. Automatically activate mitigation measures upon detection of attack signatures;
3. Filter malicious traffic while allowing legitimate traffic to pass through; and
4. Scale mitigation capabilities as needed to counter attacks of increasing size and complexity.

#### A.4.2 Traffic Analysis

Provider shall:

1. Analyze attack patterns and vectors;
2. Provide Customer with reports of attack characteristics, including duration, size, and type;
3. Recommend mitigation strategies for recurring attack patterns; and
4. Continuously update detection and mitigation capabilities based on evolving threats.

#### A.4.3 Clean Traffic Delivery

Provider shall:

1. Maintain sufficient capacity to absorb and mitigate large-scale DDoS attacks;
2. Minimize latency impact during mitigation activities; and
3. Minimize false positives in traffic filtering.

## 5. ACKNOWLEDGMENT AND ACCEPTANCE

BY USING OUR SERVICES, YOU ACKNOWLEDGE THAT YOU HAVE READ AND UNDERSTAND THIS SLA AND THAT YOU AGREE TO BE BOUND BY ITS TERMS AND CONDITIONS. THIS SLA SHOULD BE READ IN CONJUNCTION WITH OUR TERMS OF SERVICE, WHICH CONTAINS ADDITIONAL IMPORTANT TERMS GOVERNING YOUR USE OF OUR SERVICES.
