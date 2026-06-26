import useGithubStore from './store/useGithubStore'
import SearchBar from './components/SearchBar'
import ProfileCard from './components/ProfileCard'
import Loader from './components/Loader'

function App() {
  const user = useGithubStore((state) => state.user)
  const loading = useGithubStore((state) => state.loading)
  const error = useGithubStore((state) => state.error)

  return (
    <div
      style={{
        minHeight: '100vh',
        paddingBottom: '80px',
        backgroundImage: 'radial-gradient(ellipse at top, #1d2a4a 0%, #0f172a 60%)',
      }}
    >
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '0 24px',
        }}
      >
        <SearchBar />

        {loading && <Loader />}

        {!loading && error && (
          <div style={{ marginTop: '64px', textAlign: 'center' }}>
            <div
              style={{
                background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)',
                borderRadius: '16px',
                padding: '32px',
              }}
            >
              <p style={{ fontSize: '40px', marginBottom: '12px' }}>😕</p>
              <p style={{ color: '#f87171', fontWeight: '600', fontSize: '18px' }}>
                {error}
              </p>
              <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '8px' }}>
                Please check the username and try again
              </p>
            </div>
          </div>
        )}

        {!loading && !error && user && <ProfileCard />}

        {!loading && !error && !user && (
          <div style={{ textAlign: 'center', marginTop: '80px' }}>
            <p style={{ fontSize: '60px', marginBottom: '16px' }}>🔍</p>
            <p style={{ color: '#d1d5db', fontSize: '20px', fontWeight: '500' }}>
              Search for a GitHub user
            </p>
            <p style={{ color: '#4b5563', fontSize: '14px', marginTop: '8px' }}>
              Enter any GitHub username above to explore their profile
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App