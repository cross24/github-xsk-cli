const getRepos = require('./getRepos')
const chooseRepo = require('./chooseRepo')

module.exports = async function () {
  const repos = await getRepos()
  const answer = await chooseRepo(repos)
  return answer
}