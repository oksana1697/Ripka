import { schema } from "normalizr"

export const event = new schema.Entity("events")
export const arrayOfEvents = new schema.Array(event)

export const user = new schema.Entity("users")
export const arrayOfUsers = new schema.Array(user)
