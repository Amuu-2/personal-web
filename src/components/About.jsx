import { profile } from '../data/profile'
import './About.css'

const cards = [
  { label: '身份', value: profile.identity },
  { label: '近期在做', value: profile.recent },
  { label: '擅长方向', value: profile.skills.join(' · ') },
  { label: '兴趣爱好', value: profile.interests.join(' · ') },
  { label: '个人特点', value: profile.trait },
  { label: '联系方式', value: null, extra: true },
]

export default function About() {
  return (
    <section className="about">
      <h2 className="section-title">关于我</h2>
      <div className="about-grid">
        {cards.map((card) => (
          <div className="about-card" key={card.label}>
            <span className="about-label">{card.label}</span>
            {card.extra ? (
              <div className="about-contact">
                <span>邮箱：{profile.contact.email}</span>
                <span>微信：{profile.contact.wechat}</span>
              </div>
            ) : (
              <span className="about-value">{card.value}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
