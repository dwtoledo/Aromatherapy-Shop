import { Helmet } from 'react-helmet-async'

export function Dashboard() {
  return (
    <main className="flex-1">
      <Helmet title="Dashboard" />
      <h1>Dashboard</h1>
    </main>
  )
}
