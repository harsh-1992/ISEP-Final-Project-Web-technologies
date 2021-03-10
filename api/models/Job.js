class Job {
    constructor(id, fixer, title, description, henchmenCount, reward, isAvailable) {
        this.id = id
        this.fixer = fixer
        this.title = title
        this.description = description
        this.henchmenCount = henchmenCount
        this.reward = reward
        this.isAvailable = isAvailable
    }
}

export default Job