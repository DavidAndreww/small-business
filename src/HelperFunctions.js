import cookie from 'cookie';

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie)
  console.log(cookies)
  return cookies.loggedIn ? true : false
}

export { checkAuth }