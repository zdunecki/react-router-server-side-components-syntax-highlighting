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