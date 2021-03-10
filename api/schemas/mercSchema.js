import Merc from '../models/Merc'
import { EntitySchema } from 'typeorm'

export const mercSchema = new EntitySchema({
    tableName: 'Mercs',
    name: 'Merc',
    target: Merc,
    columns: {
        id: {
            primary: true,
            generated: true,
            type: 'int'
        },
        nickname: {
            type: 'varchar',
            length: 50,
            nullable: false
        },
        legalAge: {
            type: 'int',
            nullable: false
        },
        idWeapon: {
            type: 'int',
            nullable: false,
            default: 1
        },
        eddies: {
            type: 'int',
            nullable: false,
            default: 0
        },
        isAlive: {
            type: 'tinyint',
            nullable: false,
            default: 1
        }
    }
})
