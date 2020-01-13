import fs from 'fs'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import logger from './logger'

export default (mode: string) => {
  const dotenvFiles = [
    `.env.${mode}`,
    '.env'
  ].filter(Boolean)

  dotenvFiles.forEach((filename: string) => {
    if (fs.existsSync(filename)) {
      logger.debug('Using env file:', filename)
      dotenvExpand(
        dotenv.config({
          path: filename
        })
      )
    }
  })
}
