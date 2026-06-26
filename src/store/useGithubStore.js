import { create } from 'zustand'
import axios from 'axios'

const useGithubStore = create((set) => ({
  user: null,
  repos: [],
  loading: false,
  error: null,

  fetchUser: async (username) => {
    set({ loading: true, error: null, user: null, repos: [] })
    try {
      const userRes = await axios.get(`https://api.github.com/users/${username}`)
      const reposRes = await axios.get(`https://api.github.com/users/${username}/repos`)
      set({
        user: userRes.data,
        repos: reposRes.data.slice(0, 4),
        loading: false,
      })
    } catch (err) {
      if (err.response?.status === 404) {
        set({ error: 'User not found. Please check the username.', loading: false })
      } else {
        set({ error: 'Something went wrong. Please try again.', loading: false })
      }
    }
  },
}))

export default useGithubStore