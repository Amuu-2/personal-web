import { profile } from '../data/profile'
import avatar from '../../am.jpg'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-avatar">
        <img src={avatar} alt={profile.name} />
      </div>
      <h1 className="header-name">{profile.name}</h1>
      <p className="header-title">{profile.title}</p>
    </header>
  )
}
