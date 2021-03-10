import Dal from './typeOrmDal'




class NightCity {
    constructor() {
        this.dal = new Dal()
        this.generateData()
    }


    async generateData() {
        // this function generates the data into the database
        //await this.dal.restoreDatabase()
        await this.dal.generateData();
    }



    async createMerc(nickname, legalAge) {

        const newMerc = await this.dal.addMerc(nickname, legalAge);

        return {
            merc: newMerc
        }
    }


    async getMercs() {
        const mercs = await this.dal.getMercs();
        return { mercs }
    }

    async updateMerc(idMerc, data) {
        await this.dal.updateMerc(idMerc, data)
    }


    async createJob(fixer, title, description, henchmenCount, reward) {

        const newJob = await this.dal.addJob(fixer, title, description, henchmenCount, reward);

        return {
            job: newJob
        }
    }

    async getJobs() {
        const jobs = await this.dal.getJobs();
        return { jobs }
    }


    async updateJob(idJob, data) {
        await this.dal.updateJob(idJob, data)
    }

    async getJobById(jobId) {
        const job = await this.dal.getJobById(jobId)
        return { job }
    }

    async getMercById(mercId) {
        const merc = await this.dal.getMercById(mercId)
        return { merc }
    }

    async createWeapon(name, description, damage, accuracy, firerate) {

        const newWeapon = await this.dal.addWeapon(name, description, damage, accuracy, firerate);

        return {
            weapon: newWeapon
        }
    }

    async getWeapons() {
        const weapons = await this.dal.getWeapons();
        return { weapons }
    }


    async getWeaponById(weaponId) {
        const weapon = await this.dal.getWeaponById(weaponId)
        return { weapon }
    }

}

const nightCity = new NightCity()

export const getNightCity = () => nightCity
