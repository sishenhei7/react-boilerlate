import path from 'path'
import { findExisting } from './utils/util'
import validate from './utils/validate'

export default class Core {
  constructor() {
    const userConfig = findExisting(path.resolve('.'), ['react.config.js'])
    console.log('userConfig', userConfig);
    validate(userConfig)
  }
}
