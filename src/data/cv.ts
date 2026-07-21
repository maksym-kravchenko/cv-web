import type { ComponentType } from 'react'
import { Mail, Phone, Globe, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/icons/BrandIcon'
import type { TechId } from '@/components/icons/TechIcon'

type IconType = ComponentType<{ className?: string; strokeWidth?: number }>

export type Contact = {
  key: 'email' | 'phone' | 'website' | 'github' | 'linkedin' | 'location'
  icon: IconType
  value?: string
  href?: string
}

export const contacts: Contact[] = [
  { key: 'email', icon: Mail, value: 'info@kravix.ch', href: 'mailto:info@kravix.ch' },
  { key: 'phone', icon: Phone, value: '+41 (0) 76 529 38 75', href: 'tel:0041765293875' },
  { key: 'website', icon: Globe, value: 'kravix.ch', href: 'https://kravix.ch' },
  { key: 'github', icon: GithubIcon, value: 'maksym-kravchenko', href: 'https://github.com/maksym-kravchenko' },
  {
    key: 'linkedin',
    icon: LinkedinIcon,
    value: 'Maksym Kravchenko',
    href: 'https://www.linkedin.com/in/maksym-kravchenko-16j07/',
  },
  { key: 'location', icon: MapPin },
]

export type Stack = { labelKey?: 'frontend' | 'backend'; tech: TechId[] }

const webFrontend: TechId[] = ['nextdotjs', 'react', 'typescript', 'tailwindcss']

export const beatBucherStacks: Stack[] = [
  { labelKey: 'frontend', tech: webFrontend },
  {
    labelKey: 'backend',
    tech: ['dotnet', 'csharp', 'swagger', 'ef', 'sqlserver', 'githubactions', 'docker'],
  },
]

export type Project = { key: 'led' | 'kinetika' | 'k8s'; stacks: Stack[] }

export const projects: Project[] = [
  {
    key: 'led',
    stacks: [
      { labelKey: 'frontend', tech: webFrontend },
      {
        labelKey: 'backend',
        tech: ['dotnet', 'ef', 'csharp', 'swagger', 'sqlserver', 'githubactions', 'docker'],
      },
    ],
  },
  {
    key: 'kinetika',
    stacks: [
      { labelKey: 'frontend', tech: webFrontend },
      { labelKey: 'backend', tech: ['php', 'laravel', 'filament', 'mysql', 'docker'] },
    ],
  },
  {
    key: 'k8s',
    stacks: [{ tech: ['kubernetes', 'rancher', 'githubactions', 'docker', 'prometheus', 'grafana'] }],
  },
]

export type SkillGroup = { key: 'languages' | 'backend' | 'frontend' | 'data' | 'devops'; tech: TechId[] }

export const skillGroups: SkillGroup[] = [
  { key: 'languages', tech: ['csharp', 'java', 'kotlin', 'typescript', 'php', 'python'] },
  { key: 'backend', tech: ['dotnet', 'laravel', 'filament', 'swagger', 'blazor', 'restapis'] },
  { key: 'frontend', tech: ['react', 'nextdotjs', 'tailwindcss', 'blazor', 'bootstrap'] },
  { key: 'data', tech: ['sqlserver', 'mysql', 'ef'] },
  { key: 'devops', tech: ['github', 'docker', 'kubernetes', 'rancher', 'githubactions', 'prometheus', 'grafana'] },
]

export const educationKeys = ['bzt', 'nus', 'itschool'] as const
export const languageKeys = ['english', 'german', 'ukrainian', 'russian'] as const
