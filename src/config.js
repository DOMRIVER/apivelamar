import {config} from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'sql107.infinityfree.com'
export const BD_DATABASE=process.env.BD_DATABASE || 'if0_39153125_velamar'
export const BD_USER=process.env.BD_USER || 'if0_39153125'
export const BD_PASSWORD=process.env.BD_PASSWORD || 'JVZUd2Xa7JxD'
export const BD_PORT=process.env.BD_PORT || 3306
export const PORT=process.env.PORT || 3000