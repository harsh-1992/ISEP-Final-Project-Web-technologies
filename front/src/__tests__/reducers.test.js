import reducer from '../redux/reducers'

const initialState = {
    jobs: [],
    mercs: []
};

const MERCS = [{
    id: 1,
    nickname: 'Morgan Blackhand',
    legalAge: 81,
    idWeapon: 6,
    eddies: 9999999,
    isAlive: 1
}, {
    id: 2,
    nickname: 'V',
    legalAge: 27,
    idWeapon: 4,
    eddies: 2751,
    isAlive: 1
}, {
    id: 3,
    nickname: 'Newbie',
    legalAge: 18,
    idWeapon: 1,
    eddies: 0,
    isAlive: 1
}, {
    id: 4,
    nickname: 'B@d@ss Roxxo',
    legalAge: 17,
    idWeapon: 7,
    eddies: 0,
    isAlive: 0
}]


const JOBS = [{
    id: 1,
    fixer: "Rogue",
    title: "Simple theft",
    description: "Simple job: a ripperdoc working with the 6thStreet gang stole a microchip from one of his customers, and the customer wants it back.\nWe know the thief bastards did not yet gave it to the gang, so the job is to retrieve it before it happens.\nThe microchip is the only priority, the lives of the ripperdoc and his bodyguard are not.",
    henchmenCount: 2,
    reward: 500,
    isAvailable: 1
}, {
    id: 2,
    fixer: "Dexter Deshawn",
    title: "Retrieve bot",
    description: "Yo!\nJob to be done: Maelstrom attacked a Militech convoy and stole some shit to them. Typical.\nHowever, they took one prototype of bot called 'Flathead', and I need it.\nThey are stationed at the abandonned garage just above the Pacifica district. You can go there and buy the bot (the reward will cover the payment), or you can just go and start blasting.\nYour call. Don't care.",
    henchmenCount: 6,
    reward: 2000,
    isAvailable: 1
}, {
    id: 3,
    fixer: "Totally_Reli@ble",
    title: "Infiltrate little corp building for a month",
    description: 'Hey!!!\n\nIf YOU want to becom a legend then HERE is were you wil find your job!\n\nNeed ya to infiltrate a corpo building for a month and send me data about what theyre doin. Eazy! Expect lille risistance if your caught...\nThe building is the one with "Arasaka" writtn on it.',
    henchmenCount: 1000,
    reward: 40000,
    isAvailable: 1
}, {
    id: 4,
    fixer: "Rogue",
    title: "Burn Night City",
    description: "Time to give Arasaka what it deserves!\nWe will gather a team to invade their siege and plant a nuclear device inside, on Aug. 20, 2023.\nJob is risky, yeah, I won't lie. But it will be worth it. Expect a fair compensation if you manage to survive.\nMorgan Blackhand, Johnny Silverhand, Spider Murphy and myself are going.\nJoin us!",
    henchmenCount: 10000,
    reward: 1,
    isAvailable: 0
}]

describe('testing reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                jobs: [],
                mercs: []
            }
        )
    })

    it('should handle setJobs', () => {
        expect(
            reducer(initialState, {
                type: "setJobs",
                value: JOBS
            })
        ).toEqual({
            ...initialState,
            "jobs": JOBS
        })
    })

    it('should handle setMercs', () => {
        expect(
            reducer(initialState, {
                type: "setMercs",
                value: MERCS
            })
        ).toEqual({
            ...initialState,
            "mercs": MERCS
        })
    })
})