# React Router Server Side Components Syntax Highlighting

A modern React application demonstrating React Router with Server Components and syntax highlighting using Code Hike. This project showcases how to build a full-stack React application with server-side rendering capabilities and beautiful code syntax highlighting.

## 🚀 Features

- **React Router v7** - Latest routing with server-side rendering
- **Server Components** - React Server Components for improved performance
- **Syntax Highlighting** - Beautiful code highlighting with Code Hike
- **TypeScript** - Full TypeScript support
- **Tailwind CSS** - Modern styling with Tailwind CSS
- **Vite** - Fast build tool and development server
- **Express Server** - Production-ready Node.js server

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd react-router-server-side-components-syntax-highlighting
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Development

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 🏗️ Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🎨 Syntax Highlighting

The project uses Code Hike for syntax highlighting. Here's how it's implemented:

```tsx
import { highlight, Pre } from "codehike/code"

export async function CodeSnippet() {
  const codeblock = `
export async function HomePage() {
  const data = await fetchData()
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  )
}
`

  const highlighted = await highlight({
    value: codeblock,
    lang: "tsx",
    meta: "Server Component",
  }, "github-dark")

  return <Pre code={highlighted} />
}
```
