import fs from 'fs'
import path from 'path'

export const findExisting = (context: string, files: string[]) => {
  for (const file of files) {
    const filePath = path.join(context, file)

    if (fs.existsSync(filePath)) {
      return require(filePath)
    }
  }

  return null;
}
