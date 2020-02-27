import spinner from './utils/spinner'
import loadEnvs from './utils/loadEnvs'
import Core from './build'

const mode = 'production'
spinner.start('开始测试')
setTimeout(() => {
  spinner.succeed()
  loadEnvs(mode)
  new Core()
}, 3000);
