export interface FeatureCard {
  id: string
  title: string
  subtitle?: string
  description: string
  icon: string
  gradient: {
    from: string
    to: string
  }
}
