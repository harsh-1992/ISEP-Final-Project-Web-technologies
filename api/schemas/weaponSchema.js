import Weapon from '../models/Weapon'
import { EntitySchema } from 'typeorm'

export const weaponSchema = new EntitySchema({
    tableName: 'Weapons',
    name: 'Weapon',
    target: Weapon,
    columns: {
        id: {
            primary: true,
            generated: true,
            type: 'int'
        },
        name: {
            type: 'varchar',
            length: 50,
            nullable: false
        },
        description: {
            type: 'varchar',
            length: 500,
            nullable: false
        },
        damage: {
            type: 'int',
            nullable: false
        },
        accuracy: {
            type: 'int',
            nullable: false
        },
        firerate: {
            type: 'int',
            nullable: false
        },
        price: {
            type: 'int',
            nullable: false
        }

    }
})
