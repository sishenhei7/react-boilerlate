import spinner from './utils/spinner'
import loadEnvs from './utils/loadEnvs'

const mode = 'production'
spinner.start('开始测试')
setTimeout(() => {
  spinner.succeed()
  loadEnvs(mode)
}, 3000);



