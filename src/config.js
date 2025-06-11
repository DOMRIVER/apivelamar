import {config} from 'dotenv'
config()

export const BD_HOST=process.env.BD_HOST || 'byvvptfjl0vneoi36z3z-mysql.services.clever-cloud.com'
export const BD_DATABASE=process.env.BD_DATABASE || 'byvvptfjl0vneoi36z3z'
export const BD_USER=process.env.BD_USER || 'ujlvschigwwrft2q'
export const BD_PASSWORD=process.env.BD_PASSWORD || 'kgOYWsLIGfkhjqz2VoPB'
export const BD_PORT=process.env.BD_PORT || 3306
export const PORT=process.env.PORT || 3000