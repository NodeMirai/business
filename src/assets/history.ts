import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

interface IOption {
  action: 'push' | 'pop' | 'replace';
}

function jump(uri: string, option: IOption = { action: 'push' }) {
  if (/http/.test(uri)) {
    location.href = uri
  } else {
    history[option.action](uri)
  }
}

export default jump
