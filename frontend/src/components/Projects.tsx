import { motion } from 'framer-motion'
import { FaGithub, FaArrowRight } from 'react-icons/fa'
import { fadeUpVariants, staggerContainerVariants, viewportOptions } from '../animations'
import portfolioPilotPreview from '../assets/portfolio-pilot-preview.png'
import emergentSocietiesPreview from '../assets/emergent-societies-preview.png'

type ProjectType = 'project' | 'experience'

type Project = {
  title: string
  description: string
  techStack: string[]
  githubUrl?: string
  demoUrl?: string
  demoCtaLabel?: string
  featured?: boolean
  type?: ProjectType
  highlights?: string[]
  previewImage?: string
}

const projects: Project[] = [
  {
    title: 'Software Engineer Intern — Sensatronix (Svistas)',
    description:
      'Worked as a Software Engineer Intern at Sensatronix, building production-grade AI onboarding systems for the Svistas platform using multi-agent workflows, backend APIs, and full-stack integrations.',
    techStack: ['Go', 'React', 'Vertex AI', 'Gemini', 'GCP', 'REST APIs', 'ADK'],
    type: 'experience',
    highlights: [
      'Shipped production features across backend and AI systems in a startup environment, contributing 30+ pull requests',
      'Built and deployed Go-based REST APIs powering onboarding workflows and multi-step AI-driven user flows',
      'Designed and debugged multi-agent onboarding systems using Google ADK and Vertex AI Agent Engine',
      'Engineered persistent state management for AI agents, enabling structured multi-step workflows and reliable data collection',
      'Developed internal service tools (address lookup, category resolution, validation) to improve system accuracy and user input quality',
      'Resolved production issues in INT environment including session mismatches, payload limits, and model failures',
      'Collaborated across backend, AI systems, and frontend layers to deliver end-to-end features in a distributed architecture',
    ],
  },
  {
    title: 'Portfolio Pilot',
    description:
      'Built and deployed a full-stack AI-powered portfolio analysis platform that provides real-time insights into stock performance, portfolio metrics, and user investments. End-to-end system including authentication, financial data integration, and AI-driven insights.',
    techStack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'Groq', 'Finnhub API'],
    githubUrl: 'https://github.com/gdoeg/portfolio-pilot',
    demoUrl: 'https://portfoliopilotai.dev',
    demoCtaLabel: 'Open App ->',
    featured: true,
    type: 'project',
    previewImage: portfolioPilotPreview,
    highlights: [
      'Designed and built full-stack application with FastAPI backend and React frontend',
      'Implemented portfolio analytics engine (cost basis, P&L, holdings aggregation)',
      'Integrated external financial APIs (Finnhub) for real-time market data',
      'Built AI-powered insights system using LLMs (Groq) to analyze portfolio performance and generate investment recommendations',
      'Enabled AI-assisted portfolio actions including buy/sell decision suggestions and automated trade execution flows',
      'Developed REST APIs with authentication (JWT) and database modeling (PostgreSQL)',
      'Deployed and tested full application with production-ready architecture',
    ],
  },
  {
    title: 'Emergent Societies',
    description:
      'Developed a full-stack multi-agent simulation platform to study emergent social behavior and resource dynamics, inspired by real-world societal systems. Designed to explore inequality, power distribution, and network effects in autonomous agent systems.',
    techStack: ['Python', 'FastAPI', 'React', 'Simulation Systems'],
    githubUrl: 'https://github.com/gdoeg/emergent-societies',
    demoUrl: 'https://emergent-societies.vercel.app/',
    demoCtaLabel: 'Open Dashboard ->',
    type: 'project',
    previewImage: emergentSocietiesPreview,
    highlights: [
      'Built simulation engine modeling agent interactions, resource exchange, and emergent behavior',
      'Implemented real-time analytics dashboard (Gini coefficient, wealth distribution, network metrics)',
      'Designed system to explore inequality and power concentration in multi-agent environments',
      'Optimized simulation performance to handle scaling constraints and prevent system overload',
      'Developed full-stack interface for controlling simulations and visualizing results',
    ],
  },
]

function Projects() {
  return (
    <motion.section
      id="projects"
      className="content projects-section"
      variants={staggerContainerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOptions}
    >
      <motion.h2 variants={fadeUpVariants}>Projects</motion.h2>
      <div className="projects-list">
        {projects.map((project) => {
          const itemType = project.type ?? 'project'

          return (
            <motion.article
              key={project.title}
              className={`project-card${project.featured ? ' project-card-featured' : ''}`}
              variants={fadeUpVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <div className="project-card-header">
                <span className="project-type">{itemType === 'experience' ? 'Experience' : 'Project'}</span>
                <h3>{project.title}</h3>
              </div>

              <p>{project.description}</p>

              {project.previewImage ? (
                <div className="project-preview-wrapper">
                  <img
                    src={project.previewImage}
                    alt={`${project.title} app preview`}
                    className="project-preview-img"
                  />
                </div>
              ) : null}

              <div className="project-tech-stack" aria-label={`${project.title} tech stack`}>
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {project.highlights ? (
                <ul className="project-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              ) : null}

              {project.githubUrl || project.demoUrl ? (
                <div className="project-links">
                  {project.githubUrl ? (
                    <a href={project.githubUrl} className="btn" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      <FaGithub style={{ fontSize: '1rem' }} />
                      GitHub
                    </a>
                  ) : null}
                  {project.demoUrl ? (
                    <a href={project.demoUrl} className="btn" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                      {project.demoCtaLabel?.replace(' ->', '') ?? 'Open App'}
                      <FaArrowRight style={{ fontSize: '0.875rem' }} />
                    </a>
                  ) : null}
                </div>
              ) : null}
            </motion.article>
          )
        })}
      </div>
    </motion.section>
  )
}

export default Projects