import { Int } from '@nestjs/graphql'

export const ID = { type: () => Int }

export { User } from './generated/user/user.model'
export { Event } from './generated/event/event.model'
export { Workspace } from './generated/workspace/workspace.model'
