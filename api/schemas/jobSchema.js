import Job from '../models/Job'
import { EntitySchema } from 'typeorm'

export const jobSchema = new EntitySchema({
    tableName: 'Jobs',
    name: 'Job',
    target: Job,
    columns: {
        id: {
            primary: true,
            generated: true,
            type: 'int'
        },
        fixer: {
            type: 'varchar',
            length: 50,
            nullable: false
        },
        title: {
            type: 'varchar',
            length: 50,
            nullable: false
        },
        description: {
            type: 'varchar',
            length: 500,
            nullable: false
        },
        henchmenCount: {
            type: 'int',
            nullable: false
        },
        reward: {
            type: 'int',
            nullable: false
        },
        isAvailable: {
            type: 'tinyint',
            nullable: false,
            default: 1
        }
    }
})
