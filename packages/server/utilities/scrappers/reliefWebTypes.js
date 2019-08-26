// Conversion tables for ReliefWeb codes

const jobTypes = [
  {
    id: 266,
    name: "Volunteer Opportunity",
    reliefJobsName: "volunteer",
    className: "t_contrats-volontariat-service-civique",
    classNameAlternate: "t_contrats-benevolat"
  },
  {
    id: 265,
    name: "Internship",
    reliefJobsName: "internship",
    className: "t_contrats-stage-alternance",
    classNameAlternate: ""
  },
  {
    id: 264,
    name: "Consultancy",
    reliefJobsName: "consultancy",
    className: "",
    classNameAlternate: ""
  },
  {
    id: 263,
    name: "Job",
    reliefJobsName: "job",
    className: "t_contrats-cdd",
    classNameAlternate: "t_contrats-cdi"
  }
];

const careerTypes = [
  {
    id: 36601,
    name: "Logistics/Procurement",
    reliefJobsName: "logistics_procurement"
  },
  {
    id: 20971,
    name: "Information Management",
    reliefJobsName: "information_management"
  },
  {
    id: 20966,
    name: "Donor Relations/Grants Management",
    reliefJobsName: "donor_relations_grants_management"
  },
  {
    id: 6868,
    name: "Monitoring and Evaluation",
    reliefJobsName: "monitoring_evaluation"
  },
  {
    id: 6867,
    name: "Program/Project Management",
    reliefJobsName: "program_project_management"
  },
  {
    id: 6866,
    name: "Information and Communications Technology",
    reliefJobsName: "information_communications_technology"
  },
  {
    id: 6865,
    name: "Advocacy/Communications",
    reliefJobsName: "advocacy_communications"
  },
  {
    id: 6864,
    name: "Administration/Finance",
    reliefJobsName: "administration_finance"
  },
  { id: 6863, name: "Human Resources", reliefJobsName: "human_resources" }
];

const experienceTypes = [
  { id: 261, name: "10+ years", reliefJobsName: "10+" },
  { id: 260, name: "5-9 years", reliefJobsName: "5-9" },
  { id: 259, name: "3-4 years", reliefJobsName: "3-4" },
  { id: 258, name: "0-2 years", reliefJobsName: "0-2" }
];

const organizationTypes = [
  {
    id: 276,
    name: "Red Cross/Red Crescent Movement",
    reliefJobsName: "red_cross"
  },
  { id: 275, name: "Other", reliefJobsName: "other" },
  { id: 274, name: "Non-governmental Organization", reliefJobsName: "NGO" },
  { id: 273, name: "Media", reliefJobsName: "media" },
  {
    id: 272,
    name: "International Organization",
    reliefJobsName: "international_organization"
  },
  { id: 271, name: "Government", reliefJobsName: "government" },
  {
    id: 270,
    name: "Academic and Research Institution",
    reliefJobsName: "academic_research"
  }
];

// const themeTypes = [
//   {
//     id: 12033,
//     name: "Mine Action",
//     reliefJobsName: "mine_action"
//   },
//   {
//     id: 4604,
//     name: "Water Sanitation Hygiene",
//     reliefJobsName: "water_sanitation_hygiene"
//   },
//   {
//     id: 4603,
//     name: "Shelter and Non-Food Items",
//     reliefJobsName: "shelter_NFI"
//   },
//   {
//     id: 4602,
//     name: "Safety and Security",
//     reliefJobsName: "safety_security"
//   },
//   {
//     id: 4601,
//     name: "Recovery and Reconstruction",
//     reliefJobsName: "recovery_reconstruction"
//   },
//   {
//     id: 4600,
//     name: "Protection and Human Rights",
//     reliefJobsName: "protection_human_rights"
//   },
//   {
//     id: 4599,
//     name: "Peacekeeping and Peacebuilding",
//     reliefJobsName: "peacekeeping_peacebuilding"
//   },
//   {
//     id: 4598,
//     name: "Logistics and Telecommunications",
//     reliefJobsName: "logistics_telecom"
//   },
//   {
//     id: 4597,
//     name: "Humanitarian Financing",
//     reliefJobsName: "humanitarian_financing"
//   },
//   {
//     id: 4596,
//     name: "HIV/Aids",
//     reliefJobsName: "HIV_aids"
//   },
//   {
//     id: 4595,
//     name: "Health",
//     reliefJobsName: "health"
//   },
//   {
//     id: 4594,
//     name: "Gender",
//     reliefJobsName: "gender"
//   },
//   {
//     id: 4593,
//     name: "Food and Nutrition",
//     reliefJobsName: "food_nutrition"
//   },
//   {
//     id: 4592,
//     name: "Education",
//     reliefJobsName: "education"
//   },
//   {
//     id: 4591,
//     name: "Disaster Management",
//     reliefJobsName: "disaster_management"
//   },
//   {
//     id: 4590,
//     name: "Coordination",
//     reliefJobsName: "coordination"
//   },
//   {
//     id: 4589,
//     name: "Contributions",
//     reliefJobsName: "contributions"
//   },
//   {
//     id: 4588,
//     name: "Climate Change and Environment",
//     reliefJobsName: "climate_change_environment"
//   },
//   {
//     id: 4587,
//     name: "Agriculture",
//     reliefJobsName: "agriculture"
//   }
// ];

module.exports = {
  jobTypes,
  careerTypes,
  experienceTypes,
  organizationTypes
};
