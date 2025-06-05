import {config} from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'bpsf9huy8bpext0vlkzm-mysql.services.clever-cloud.com'
export const BD_DATABASE=process.env.BD_DATABASE || 'bpsf9huy8bpext0vlkzm'
export const BD_USER=process.env.BD_USER || 'ukflyyj7xwxmttqm'
export const BD_PASSWORD=process.env.BD_PASSWORD || 'NHrBXRnmsqhJOCrTUXcG'
export const BD_PORT=process.env.BD_PORT || 3306
export const PORT=process.env.PORT || 3000