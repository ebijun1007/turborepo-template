import { Hono } from 'hono'
import { adminApp } from './routes/admin'
import { webApp } from './routes/web'

const app = new Hono()
  .route('/admins', adminApp)
  .route('/web', webApp)

type AppType = typeof app

export default app
export type { AppType }