import axios from "axios"
import config from '../config'

class APIService {
    constructor() {
        this.url = config.urlApi;
    }

    getJobs = async () => {
        return axios.get(this.url + "/job")
    }

    createJob = async (fixer, title, description, henchmenCount, reward) => {
        return axios.post(this.url + "/job", { fixer, title, description, henchmenCount, reward })
    }

    getJobById = async (jobId) => {
        return axios.get(this.url + "/job/get/" + jobId)
    }

    getMercs = async () => {
        return axios.get(this.url + "/merc")
    }

    createMerc = async (nickname, legalAge) => {
        return axios.post(this.url + "/merc", { nickname, legalAge })
    }

    getMercById = async (mercId) => {
        return axios.get(this.url + "/merc/get/" + mercId)
    }

    getWeapons = async () => {
        return axios.get(this.url + "/weapon")
    }

    getWeaponById = async (idWeapon) => {
        return axios.get(this.url + "/weapon/get/" + idWeapon)
    }

    buyWeapon = async (idMerc, idWeapon) => {
        return axios.post(this.url + "/weapon/buy", { idMerc, idWeapon })
    }

    getJobDone = async (idJob, idMerc) => {
        return axios.post(this.url + "/job/get-done", { idJob, idMerc })
    }

}

const apiService = new APIService()

export default apiService