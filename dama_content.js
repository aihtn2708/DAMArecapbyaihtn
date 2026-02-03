// dama_content.js
// This file acts as your "Database". Edit text here, and it updates the whole site.

const damaData = [
    {
        id: 0,
        title: "Data Governance",
        tag: "Oversight",
        // 1. ESSENTIAL COMPONENTS
        essential_components: [
            "Authority & Control", 
            "Data Stewardship", 
            "Operating Models (Centralized/Federated)"
        ],
        // 2. KEY DELIVERABLES
        key_deliverables: [
            "Data Strategy", 
            "Policies & Standards", 
            "Business Glossary"
        ],
        // 3. EXAM PITFALL
        exam_pitfall: "Governance is Planning/Oversight. Management is Execution. Don't mix them up!",
        
        // Extra info for the Deep Dive page (optional)
        definition: "The exercise of authority, control, and shared decision-making (planning, monitoring, and enforcement) over the management of data assets.",
        goals: ["Enable an organization to manage data as an asset.", "Define, approve, communicate, and implement principles, policies, and standards."],
        activities: ["Define Data Strategy", "Establish Data Governance Framework", "Develop Policies & Standards", "Manage Regulatory Compliance"],
        inputs: ["Business Strategy", "IT Strategy", "Regulatory Requirements"],
        outputs: ["Data Strategy", "Data Policies", "Stewardship Community", "Glossary"],
        tip: "Memorize the Operating Models: Centralized (one command), Federated (centralized policy, local execution), and Hybrid. Know that DG is a 'Business Program', not an IT project."
    },
    {
        id: 1,
        title: "Data Architecture",
        tag: "Structure",
        essential_components: [
            "Enterprise Data Model", 
            "Data Flows", 
            "Zachman Framework"
        ],
        key_deliverables: [
            "Data Flow Diagrams", 
            "Implementation Roadmap", 
            "Value Chain"
        ],
        exam_pitfall: "Don't confuse Architecture (City Planning) with Modeling (Blueprints).",
        definition: "Identifying the data needs of the enterprise (regardless of structure) and designing and maintaining the master blueprints to meet those needs.",
        goals: ["Identify data storage and processing requirements.", "Design structures and plans to meet current and long-term data needs."],
        activities: ["Create Enterprise Data Model", "Design Data Flows", "Implement Architecture Roadmap"],
        inputs: ["Enterprise Architecture", "Business Strategy"],
        outputs: ["Enterprise Data Model (EDM)", "Data Flow Diagrams", "Implementation Roadmap"],
        tip: "Zachman Framework is key here. It's a taxonomy for organizing architectural artifacts (Who, What, Where, When, Why, How)."
    },
    {
        id: 2,
        title: "Data Modeling",
        tag: "Design",
        essential_components: [
            "Relational vs. Dimensional", 
            "Levels: Conceptual, Logical, Physical", 
            "Normalization"
        ],
        key_deliverables: [
            "DDL (Data Definition Language)", 
            "Data Dictionary", 
            "Entity Relationship Diagrams (ERD)"
        ],
        exam_pitfall: "Conceptual = Business concepts. Logical = Attributes but tech-agnostic. Physical = DB specific.",
        definition: "The process of discovering, analyzing, representation and communication of data requirements in a precise form called the data model.",
        goals: ["Confirm and document understanding of different perspectives.", "Formalize data requirements for applications."],
        activities: ["Plan for Data Modeling", "Build Conceptual Model", "Build Logical Model", "Build Physical Model"],
        inputs: ["Data Requirements", "Data Standards"],
        outputs: ["Conceptual/Logical/Physical Models", "Data Definition Language (DDL)"],
        tip: "Master Normalization (1NF, 2NF, 3NF). Know the difference between Relational (3NF - reducing redundancy) and Dimensional (Star Schema - optimized for retrieval)."
    },
    {
        id: 3,
        title: "Data Storage & Ops",
        tag: "Operations",
        essential_components: [
            "DBA Activities", 
            "CAP Theorem", 
            "ACID vs. BASE"
        ],
        key_deliverables: [
            "Database Recovery Plans", 
            "Performance Reports", 
            "Purge Scripts"
        ],
        exam_pitfall: "ACID is for Relational (strict). BASE is for NoSQL (eventual consistency).",
        definition: "The design, implementation, and support of stored data to maximize its value. Involves the database lifecycle.",
        goals: ["Ensure data availability and performance.", "Manage data integrity throughout the lifecycle."],
        activities: ["Database Installation", "Performance Tuning", "Backup and Recovery", "Purging/Archiving"],
        inputs: ["Physical Data Model", "Service Level Agreements (SLAs)"],
        outputs: ["Operational Databases", "Recovery Plans", "Performance Logs"],
        tip: "Focus on the CAP Theorem: You can only have 2 of 3 (Consistency, Availability, Partition Tolerance). Relational = CA; NoSQL = AP or CP."
    },
    {
        id: 4,
        title: "Data Security",
        tag: "Protection",
        essential_components: [
            "CIA Triad", 
            "Regulatory (GDPR, HIPAA)", 
            "Authentication vs. Authorization"
        ],
        key_deliverables: [
            "Access Control Matrix", 
            "Encryption Standards", 
            "Risk Assessment"
        ],
        exam_pitfall: "Privacy is a right; Security is the mechanism. You can have security without privacy.",
        definition: "Planning, development, and execution of security policies and procedures to provide proper authentication, authorization, access, and auditing.",
        goals: ["Enable appropriate access and prevent inappropriate access.", "Ensure compliance with privacy regulations."],
        activities: ["Define Data Security Policy", "Manage User Access", "Audit Data Security", "Classify Information Sensitivity"],
        inputs: ["Regulatory Requirements", "Privacy Policies"],
        outputs: ["Security Architecture", "Access Logs", "Audit Reports"],
        tip: "Remember the CIA Triad: Confidentiality (Secret), Integrity (Unaltered), Availability (Accessible). Know the difference between Authentication (Who are you?) and Authorization (What can you do?)."
    },
    {
        id: 5,
        title: "Data Integration",
        tag: "Movement",
        essential_components: [
            "ETL vs. ELT", 
            "Batch vs. Real-time", 
            "Orchestration"
        ],
        key_deliverables: [
            "Data Lineage Maps", 
            "Interface Agreements", 
            "Source-to-Target Mappings"
        ],
        exam_pitfall: "ELT is for Big Data/Cloud. ETL is for traditional on-prem Data Warehouses.",
        definition: "Processes related to the movement and consolidation of data within and between data stores, applications, and organizations.",
        goals: ["Provide data securely in the format and timeframe needed.", "Lower cost/complexity of managing interfaces."],
        activities: ["Define Integration Architecture", "Implement ETL/ELT flows", "Manage Data Hubs"],
        inputs: ["Source Data", "Interface Requirements"],
        outputs: ["Integrated Data", "Data Lineage", "Transformation Rules"],
        tip: "Understand Latency terms: Batch (periodic), Micro-batch (small bursts), Real-time (event-driven). ELT loads raw data then transforms (Cloud/Big Data). ETL transforms before loading."
    },
    {
        id: 6,
        title: "Docs & Content",
        tag: "Unstructured",
        essential_components: [
            "Taxonomies", 
            "Lifecycle Management", 
            "Unstructured Data"
        ],
        key_deliverables: [
            "Content Strategy", 
            "Retention Schedule", 
            "E-Discovery Records"
        ],
        exam_pitfall: "Records are immutable evidence of the past. Documents can be edited.",
        definition: "Planning, implementation, and control activities for the lifecycle of data and information found in a range of unstructured media (documents, videos, emails).",
        goals: ["Safeguard and ensure availability of unstructured data.", "Comply with legal obligations (Retention)."],
        activities: ["Plan Content Lifecycle", "Create Taxonomies", "Manage Records Retention", "E-Discovery"],
        inputs: ["Regulatory Requirements", "Business Content"],
        outputs: ["Records Retention Schedule", "Content Management System", "Audit Trails"],
        tip: "The distinction between a Document and a Record is critical. A record is 'evidence of a business activity' and must be immutable (cannot change)."
    },
    {
        id: 7,
        title: "Reference & Master",
        tag: "Shared Data",
        essential_components: [
            "Golden Record", 
            "Reference Codes", 
            "Master Entities"
        ],
        key_deliverables: [
            "MDM Hub", 
            "Trusted Source", 
            "Stewardship Hierarchy"
        ],
        exam_pitfall: "Reference data (State Codes) rarely changes. Master data (Customers) changes often.",
        definition: "Managing shared data to reduce redundancy and ensure better data quality through standardized definition and use of data values.",
        goals: ["Enable data sharing across the enterprise.", "Provide a 'Golden Record' or 'Single Source of Truth'."],
        activities: ["Identify Reference Data", "Define Master Data Entities", "Implement MDM Solutions", "Match and Merge Records"],
        inputs: ["Data Quality Rules", "Business Glossaries"],
        outputs: ["Golden Records", "Master Data Hub", "Cross-Reference Tables"],
        tip: "Reference Data = Classification values (Country codes, Currencies). Master Data = Business Entities (Customer, Product, Employee). Transaction Data = Events (Sales, Logs)."
    },
    {
        id: 8,
        title: "Data Warehousing",
        tag: "Analytics",
        essential_components: [
            "Inmon vs. Kimball", 
            "OLAP Cubes", 
            "Fact vs. Dimension"
        ],
        key_deliverables: [
            "Star Schemas", 
            "Dashboards", 
            "Data Marts"
        ],
        exam_pitfall: "Inmon = Hub & Spoke (EDW first). Kimball = Bottom-up (Marts first).",
        definition: "Planning, implementation, and control processes to provide decision support data and support knowledge workers engaged in reporting and analysis.",
        goals: ["Support business decision making.", "Provide a historical context for data."],
        activities: ["Design Data Warehouse", "Implement BI Tools", "Process Dimensions and Facts"],
        inputs: ["Operational Data", "Business Requirements"],
        outputs: ["Data Marts", "Reports/Dashboards", "Analytics Models"],
        tip: "Kimball vs Inmon is the #1 exam topic here. Inmon (CIF) builds the EDW first (Normalized). Kimball (Bus Matrix) builds Data Marts first (Dimensional Star Schemas)."
    },
    {
        id: 9,
        title: "Metadata Mgmt",
        tag: "Context",
        essential_components: [
            "Technical/Business/Operational", 
            "Data Lineage", 
            "Repositories"
        ],
        key_deliverables: [
            "Metadata Repository", 
            "Impact Analysis", 
            "Data Dictionary"
        ],
        exam_pitfall: "Metadata gives data meaning. Without it, data is just noise.",
        definition: "Planning, implementation, and control activities to enable access to high quality, integrated metadata.",
        goals: ["Provide context and meaning to data.", "Track data lineage (provenance)."],
        activities: ["Define Metadata Strategy", "Implement Metadata Repository", "Ingest Metadata", "Manage Lineage"],
        inputs: ["Data Models", "Data Dictionaries", "Process Flows"],
        outputs: ["Metadata Repository", "Lineage Visualization", "Impact Analysis"],
        tip: "Understand the types: Technical (Format, length), Business (Definitions, owners), Operational (Run logs, latencies). Lineage answers 'Where did this number come from?'"
    },
    {
        id: 10,
        title: "Data Quality",
        tag: "Trust",
        essential_components: [
            "6 Dimensions of DQ", 
            "Data Profiling", 
            "Remediation"
        ],
        key_deliverables: [
            "DQ Scorecards", 
            "Profiling Reports", 
            "DQ Rules"
        ],
        exam_pitfall: "Quality = 'Fit for Purpose'. It does not mean 'Perfect'.",
        definition: "Planning and implementation of quality management techniques to measure, assess, and improve the fitness of data for use.",
        goals: ["Measurably improve the value of data.", "Ensure data is fit for purpose."],
        activities: ["Define DQ Requirements", "Profile Data", "Define DQ Rules", "Monitor and Report DQ"],
        inputs: ["Data Standards", "Business Rules"],
        outputs: ["DQ Scorecards", "Data Issues Log", "Cleansed Data"],
        tip: "Memorize the core dimensions: Accuracy, Completeness, Consistency, Timeliness, Uniqueness, Validity. Remember: You cannot fix everything; prioritize based on business impact."
    }
];