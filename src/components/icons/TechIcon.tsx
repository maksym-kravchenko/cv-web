import cm from '@/utils/cm'
import { techPaths } from './tech-paths'

type PathTech = { label: string; color: string }
type BadgeTech = { label: string; badge: string; badgeColor: string }
type PlainTech = { label: string }

const techMeta = {
  react: { label: 'React', color: '#61DAFB' },
  nextdotjs: { label: 'Next.js', color: '#000000' },
  typescript: { label: 'TypeScript', color: '#3178C6' },
  javascript: { label: 'JavaScript', color: '#F7DF1E' },
  tailwindcss: { label: 'Tailwind CSS', color: '#06B6D4' },
  docker: { label: 'Docker & Docker Compose', color: '#2496ED' },
  kubernetes: { label: 'Kubernetes', color: '#326CE5' },
  rancher: { label: 'Rancher', color: '#0075A8' },
  githubactions: { label: 'GitHub Actions', color: '#2088FF' },
  prometheus: { label: 'Prometheus', color: '#E6522C' },
  grafana: { label: 'Grafana', color: '#F46800' },
  dotnet: { label: '.NET', color: '#512BD4' },
  bootstrap: { label: 'Bootstrap', color: '#7952B3' },
  mysql: { label: 'MySQL', color: '#4479A1' },
  kotlin: { label: 'Kotlin', color: '#7F52FF' },
  python: { label: 'Python', color: '#3776AB' },
  blazor: { label: 'Blazor', color: '#512BD4' },
  swagger: { label: 'Swagger', color: '#85EA2D' },
  php: { label: 'PHP', color: '#777BB4' },
  laravel: { label: 'Laravel', color: '#FF2D20' },
  filament: { label: 'Filament', color: '#FDAE4B' },
  github: { label: 'GitHub', color: '#181717' },
  csharp: { label: 'C#', badge: 'C#', badgeColor: '#68217A' },
  ef: { label: 'Entity Framework', badge: 'EF', badgeColor: '#512BD4' },
  sqlserver: { label: 'SQL Server' },
  java: { label: 'Java' },
  restapis: { label: 'REST APIs' },
} satisfies Record<string, PathTech | BadgeTech | PlainTech>

export type TechId = keyof typeof techMeta

export const techLabel = (id: TechId) => techMeta[id].label

export function TechIcon({ id, className }: { id: TechId; className?: string }) {
  const meta = techMeta[id]

  if ('badge' in meta) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden className={cm('h-[15px] w-[15px] shrink-0', className)}>
        <rect x="1" y="1" width="22" height="22" rx="5" fill={meta.badgeColor} />
        <text
          x="12"
          y="16.7"
          fontFamily="Arial, Segoe UI, sans-serif"
          fontSize="11"
          fontWeight="700"
          fill="#fff"
          textAnchor="middle"
        >
          {meta.badge}
        </text>
      </svg>
    )
  }

  if ('color' in meta) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden
        fill={meta.color}
        className={cm('h-3 w-3 shrink-0', className)}
      >
        <path d={techPaths[id as keyof typeof techPaths]} />
      </svg>
    )
  }

  return null
}
