import { motion } from 'framer-motion'
import useGithubStore from '../store/useGithubStore'
import RepoGrid from './RepoGrid'

function ProfileCard() {
  const user = useGithubStore((state) => state.user)
  const repos = useGithubStore((state) => state.repos)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ marginTop: '32px' }}
    >
      <div
        style={{
          background: 'rgba(30, 41, 59, 0.8)',
          borderRadius: '24px',
          padding: '32px',
          border: '1px solid rgba(71, 85, 105, 0.5)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        }}
      >
        {/* Avatar + Info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '28px' }}>
          <div style={{ position: 'relative', flexShrink: 0 }}>
            <img
              src={user.avatar_url}
              alt={user.login}
              style={{
                width: '100px',
                height: '100px',
                borderRadius: '16px',
                border: '3px solid rgba(59,130,246,0.6)',
              }}
            />
            <div
              style={{
                position: 'absolute',
                bottom: '-4px',
                right: '-4px',
                width: '16px',
                height: '16px',
                background: '#22c55e',
                borderRadius: '50%',
                border: '2px solid #0f172a',
              }}
            />
          </div>

          <div>
            <h2 style={{ color: 'white', fontSize: '26px', fontWeight: '700', margin: 0 }}>
              {user.name || user.login}
            </h2>
            <p style={{ color: '#60a5fa', margin: '4px 0', fontSize: '14px' }}>
              @{user.login}
            </p>
            <p style={{ color: '#94a3b8', fontSize: '14px', margin: '8px 0' }}>
              {user.bio || 'No bio available'}
            </p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: 'rgba(59,130,246,0.15)',
                border: '1px solid rgba(59,130,246,0.4)',
                color: '#60a5fa',
                borderRadius: '8px',
                fontSize: '13px',
                textDecoration: 'none',
              }}
            >
              View on GitHub →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(71,85,105,0.4)', marginBottom: '24px' }} />

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '28px' }}>
          {[
            { label: 'Followers', value: user.followers.toLocaleString() },
            { label: 'Following', value: user.following.toLocaleString() },
            { label: 'Repos', value: user.public_repos },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(15,23,42,0.6)',
                borderRadius: '16px',
                padding: '16px',
                textAlign: 'center',
                border: '1px solid rgba(71,85,105,0.3)',
              }}
            >
              <p style={{ color: 'white', fontSize: '22px', fontWeight: '700', margin: 0 }}>
                {stat.value}
              </p>
              <p style={{ color: '#6b7280', fontSize: '11px', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Repos */}
        <h3 style={{ color: 'white', fontWeight: '700', fontSize: '16px', marginBottom: '16px', marginTop: 0 }}>
          Top Repositories
        </h3>
        <RepoGrid repos={repos} />

      </div>
    </motion.div>
  )
}

export default ProfileCard