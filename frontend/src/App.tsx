/**
 * App.tsx — NCAA College Basketball Teams
 * Main React app that displays a list of college basketball teams
 * loaded from CollegeBasketballTeams.json.
 */

import './App.css'
// Import team data from JSON file (Vite bundles this at build time)
import teamsData from './CollegeBasketballTeams.json'

// Type definition for a single team; matches the shape of each object in the JSON
type Team = {
  tid: number
  cid: number
  did: number
  school: string
  name: string
  abbrev: string
  pop: number
  city: string
  state: string
  latitude: number
  longitude: number
}

/**
 * Heading — intro section at the top of the page.
 * Welcomes the user and describes what the site shows.
 */
function Heading() {
  return (
    <header className="heading">
      <h1>NCAA College Basketball Teams</h1>
      <p>Explore Division I college basketball teams and view their info</p>
    </header>
  )
}

// Props for TeamCard: a single team object to display
type TeamCardProps = {
  team: Team
}

/**
 * TeamCard — displays one team's info in a card.
 * Shows school name, mascot name, and location (city, state).
 */
function TeamCard({ team }: TeamCardProps) {
  return (
    <article className="team-card">
      <h2 className="team-card__school">{team.school}</h2>
      <p className="team-card__mascot">
        Mascot: <span>{team.name}</span>
      </p>
      <p className="team-card__location">
        Location: <span>{team.city}, {team.state}</span>
      </p>
    </article>
  )
}

// Props for TeamList: array of teams to render as cards
type TeamListProps = {
  teams: Team[]
}

/**
 * TeamList — renders a grid of TeamCard components for all teams.
 * Uses team.tid as the React key for each card.
 */
function TeamList({ teams }: TeamListProps) {
  return (
    <section className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  )
}

/**
 * App — root component.
 * Loads teams from the JSON and renders Heading plus TeamList.
 */
function App() {
  // Pull the teams array from the imported JSON
  const teams: Team[] = teamsData.teams

  return (
    <div className="app-container">
      <Heading />
      <TeamList teams={teams} />
    </div>
  )
}

export default App
