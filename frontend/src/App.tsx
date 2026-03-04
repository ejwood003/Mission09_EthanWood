import './App.css'

import teamsData from './CollegeBasketballTeams.json'

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

function Heading() {
  return (
    <header className="heading">
      <h1>NCAA College Basketball Teams</h1>
      <p>Explore Division I college basketball teams and view their info</p>
    </header>
  )
}

type TeamCardProps = {
  team: Team
}

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

type TeamListProps = {
  teams: Team[]
}

function TeamList({ teams }: TeamListProps) {
  return (
    <section className="team-list">
      {teams.map((team) => (
        <TeamCard key={team.tid} team={team} />
      ))}
    </section>
  )
}

function App() {
  const teams: Team[] = teamsData.teams

  return (
    <div className="app-container">
      <Heading />
      <TeamList teams={teams} />
    </div>
  )
}

export default App
