import { Types, Schema, model, Document } from 'mongoose'
import { IUser, userModel } from './user'
import { ITicket, ticketModel } from './ticket'

export type IProject = Document & {
    name: String,
    description: String,
    createdBy: Types.ObjectId[] | IUser[],
    associatedUsers: Types.ObjectId[] | IUser[],
    tickets: Types.ObjectId[] | ITicket[]
}

export const projectSchema: Schema<any> = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdBy: [{ type: Types.ObjectId, required: true, ref: 'users' }],
    associatedUsers: [{ type: Types.ObjectId, required: true, ref: 'users' }],
    tickets: [{ type: Types.ObjectId, required: true, ref: 'tickets' }]
})

export const projectModel = model<IProject>('projects', projectSchema)