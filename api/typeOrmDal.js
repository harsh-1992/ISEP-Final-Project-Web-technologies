import { createConnection, getConnection } from 'typeorm'
import Merc from './models/Merc'
import Job from './models/Job'
import Weapon from './models/Weapon'

import { mercSchema } from './schemas/mercSchema'
import { jobSchema } from './schemas/jobSchema'
import { weaponSchema } from './schemas/weaponSchema'

import mercsTable from './tables/mercsTable'
import weaponsTable from './tables/weaponsTable'
import jobsTable from './tables/jobsTable'


class TypeOrmDal {
  async connect() {
    try {
      const connection = await createConnection({
        type: 'mysql',
        host: '0.0.0.0',
        port: 3306,
        username: 'root',
        password: 'root',
        database: 'db_cyberpunk2077',
        entities: [mercSchema, jobSchema, weaponSchema]
      })
      await connection.synchronize(); // creating tables automatically
      return connection
    } catch (err) {
      console.error('Unable to connect')
      throw err
    }
  }



  async addMerc(nickname, legalAge) {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Merc)
      const newData = new Merc(null, nickname, legalAge, 1, 0, 1)

      await dataRepository.save(newData)
      return newData
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async getMercs() {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Merc)

      return await dataRepository.find()
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async updateMerc(idMerc, data) {
    const connection = await this.connect()

    try {
      await getConnection()
        .createQueryBuilder()
        .update(Merc)
        .set(data)
        .where("id = :id", { id: idMerc })
        .execute();

    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }

  }

  async updateJob(idJob, data) {
    const connection = await this.connect()

    try {
      await getConnection()
        .createQueryBuilder()
        .update(Job)
        .set(data)
        .where("id = :id", { id: idJob })
        .execute();

    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }

  }


  async addJob(fixer, title, description, henchmenCount, reward) {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Job)
      const newData = new Job(null, fixer, title, description, henchmenCount, reward, 1)

      await dataRepository.save(newData)
      return newData
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }


  async getJobs() {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Job)

      return await dataRepository.find()
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }


  async getJobById(jobId) {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Job)

      return await dataRepository.findOne(jobId)
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async getMercById(mercId) {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Merc)

      return await dataRepository.findOne(mercId)
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async getWeaponById(weaponId) {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Weapon)

      return await dataRepository.findOne(weaponId)
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }



  async addWeapon(name, description, damage, accuracy, firerate) {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Weapon)
      const newData = new Weapon(null, name, description, damage, accuracy, firerate, 1)

      await dataRepository.save(newData)
      return newData
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }


  async getWeapons() {
    const connection = await this.connect()

    try {
      const dataRepository = connection.getRepository(Weapon)

      return await dataRepository.find()
    } catch (err) {
      console.error(err.message)
      throw err
    } finally {
      await connection.close()
    }
  }

  async generateData() {

    // this function is called initially to insert weapons, mercs and jobs
    const mercs = await this.getMercs()
    if (mercs.length == 0) {
      const connection = await this.connect()

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Merc)
        .values(mercsTable)
        .execute();

      await connection.close()

    }

    const weapons = await this.getWeapons()
    if (weapons.length == 0) {
      const connection = await this.connect()

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Weapon)
        .values(weaponsTable)
        .execute();
      await connection.close()

    }

    const jobs = await this.getJobs()
    if (jobs.length == 0) {
      const connection = await this.connect()
      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Job)
        .values(jobsTable)
        .execute();
      await connection.close()
    }

  }

  async restoreDatabase() {
    const connection = await this.connect()

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Merc)
      .execute();

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Weapon)
      .execute();

    await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Job)
      .execute();

    await connection.close()
  }

}

export default TypeOrmDal
