import {config} from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'bt34c90jntxwfq4qnvtp-mysql.services.clever-cloud.com'
export const BD_DATABASE=process.env.BD_DATABASE || 'bt34c90jntxwfq4qnvtp'
export const BD_USER=process.env.BD_USER || 'ufagmgxdk5azh0zk'
export const BD_PASSWORD=process.env.BD_PASSWORD || 'aDoIXYIUKGHQ38vPTzdD'
export const BD_PORT=process.env.BD_PORT || 3306
export const PORT=process.env.PORT || 3000