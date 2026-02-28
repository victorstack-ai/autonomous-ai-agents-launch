# Autonomous AI Agents Launch

A polished landing page and dashboard for an AI agent management platform, built with Next.js 16, React 19, and Framer Motion.

![Screenshot placeholder](https://via.placeholder.com/1200x630?text=Autonomous+AI+Agents+Launch)

## Features

- **Landing Page** -- Hero section with animated gradient headline, stats bar, feature cards with hover animations, CTA section, and a full footer with navigation links
- **Dashboard** -- Sidebar navigation, stat cards (active agents, total tasks, compute usage), and a live agent fleet list with real-time status indicators
- **Smooth Animations** -- Framer Motion entrance animations, hover lift effects on feature cards, and pulsing status indicators for active agents
- **Responsive Design** -- Mobile-first layout with adaptive grid columns, collapsible sidebar, and responsive typography scaling from `text-5xl` to `text-8xl`
- **Reusable Components** -- Extracted `FeatureCard`, `SidebarItem`, `StatCard`, and `AgentRow` components with TypeScript prop types
- **Testing** -- Vitest unit tests with React Testing Library and mocked Framer Motion for reliable component testing

## Tech Stack

| Layer        | Technology                          |
| ------------ | ----------------------------------- |
| Framework    | Next.js 16 (App Router)            |
| UI Library   | React 19                            |
| Language     | TypeScript 5                        |
| Styling      | Tailwind CSS 4                      |
| Animations   | Framer Motion 12                    |
| Icons        | Lucide React                        |
| Utilities    | clsx, tailwind-merge                |
| Testing      | Vitest 4, React Testing Library 16  |
| Linting      | ESLint 9 with eslint-config-next    |

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/autonomous-ai-agents-launch.git
cd autonomous-ai-agents-launch

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.
Navigate to [http://localhost:3000/dashboard](http://localhost:3000/dashboard) to view the agent management dashboard.

## Usage

| Command         | Description                        |
| --------------- | ---------------------------------- |
| `npm run dev`   | Start development server           |
| `npm run build` | Create production build             |
| `npm start`     | Serve production build              |
| `npm run lint`  | Run ESLint                          |
| `npm test`      | Run Vitest test suite               |

## Project Structure

```
autonomous-ai-agents-launch/
├── public/                  # Static assets (favicon, images)
├── src/
│   ├── app/
│   │   ├── dashboard/
│   │   │   └── page.tsx     # Dashboard with sidebar, stats, and agent fleet
│   │   ├── globals.css      # Tailwind CSS imports and global styles
│   │   ├── layout.tsx       # Root layout with metadata and font config
│   │   ├── page.tsx         # Landing page with hero, features, CTA, footer
│   │   └── page.test.tsx    # Unit tests for the landing page
│   ├── lib/
│   │   └── utils.ts         # Utility functions (cn helper for class merging)
│   └── test/
│       └── setup.ts         # Vitest setup with jest-dom matchers
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── postcss.config.mjs       # PostCSS configuration (Tailwind plugin)
├── tailwind.config.ts       # Tailwind CSS configuration (if present)
├── tsconfig.json            # TypeScript configuration
├── vitest.config.ts         # Vitest configuration
└── package.json             # Dependencies and scripts
```

## Testing

Run the test suite with:

```bash
npm test
```

Tests use Vitest with React Testing Library and jsdom. Framer Motion is mocked to ensure stable, animation-free rendering during tests.

## License

This project is licensed under the [MIT License](./LICENSE).
