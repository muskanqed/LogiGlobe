import { type FeatureCard } from "@/types/feature-card"

export const featureCards: FeatureCard[] = [
  {
    id: "digital-twin",
    title: "Digital Twin",
    icon: "😊",
    description: "Complete virtual replica",
    gradient: {
      from: "yellow-100",
      to: "yellow-200",
    },
  },
  {
    id: "scenario-simulation",
    title: "Scenario Simulation",
    subtitle: '("What-If")',
    icon: "💡",
    description: "Test disruptions beforehand",
    gradient: {
      from: "blue-100",
      to: "blue-200",
    },
  },
  {
    id: "route-optimization",
    title: "Route & Network",
    subtitle: "Optimization",
    icon: "🔗",
    description: "Cost, SLA, constraints",
    gradient: {
      from: "cyan-100",
      to: "cyan-200",
    },
  },
  {
    id: "seamless-integrations",
    title: "Seamless",
    subtitle: "Integrations",
    icon: "🔌",
    description: "ERP, TMS, GPS, IoT",
    gradient: {
      from: "purple-100",
      to: "purple-200",
    },
  },
  {
    id: "risk-monitoring",
    title: "Risk & Delay",
    subtitle: "Monitoring",
    icon: "⚠️",
    description: "Alerts before failures",
    gradient: {
      from: "orange-100",
      to: "orange-200",
    },
  },
  {
    id: "control-tower",
    title: "Control Tower",
    subtitle: "Dashboard",
    icon: "📊",
    description: "Unified visibility & KPIs",
    gradient: {
      from: "green-100",
      to: "green-200",
    },
  },
  {
    id: "real-time-twin",
    title: "Real-Time",
    subtitle: "Logistics Twin",
    icon: "👁️",
    description: "Live view: shipment, route & hub",
    gradient: {
      from: "indigo-100",
      to: "indigo-200",
    },
  },
]
