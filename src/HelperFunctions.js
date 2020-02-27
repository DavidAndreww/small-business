import cookie from 'cookie';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  console.log(cookies)
  console.log(cookies['loggedIn=true'])
  return cookies.loggedIn ? true : false
}

export { checkAuth }