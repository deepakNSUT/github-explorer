import { motion } from 'framer-motion'

function RepoGrid({ repos }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
      {repos.map((repo, index) => (
        <motion.a
          key={repo.id}
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          style={{
            display: 'block',
            padding: '16px',
            background: 'rgba(15,23,42,0.7)',
            borderRadius: '14px',
            border: '1px solid rgba(71,85,105,0.4)',
            textDecoration: 'none',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59,130,246,0.6)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(71,85,105,0.4)'}
        >
          <h3 style={{ color: '#60a5fa', fontWeight: '600', fontSize: '13px', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {repo.name}
          </h3>
          <p style={{ color: '#6b7280', fontSize: '12px', marginTop: '6px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
            {repo.description || 'No description provided'}
          </p>
          <div style={{ display: 'flex', gap: '12px', marginTop: '10px', fontSize: '12px', color: '#6b7280' }}>
            <span>⭐ {repo.stargazers_count}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#60a5fa', display: 'inline-block' }}></span>
              {repo.language || 'N/A'}
            </span>
          </div>
        </motion.a>
      ))}
    </div>
  )
}

export default RepoGrid