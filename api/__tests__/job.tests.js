import request from 'supertest'
import app from '../app'

import * as nightCity from '../nightCity'

const JOB = {
    id: 1,
    fixer: "Rogue",
    title: "Simple theft",
    description: "Simple job: a ripperdoc working with the 6thStreet gang stole a microchip from one of his customers, and the customer wants it back.\nWe know the thief bastards did not yet gave it to the gang, so the job is to retrieve it before it happens.\nThe microchip is the only priority, the lives of the ripperdoc and his bodyguard are not.",
    henchmenCount: 2,
    reward: 500,
    isAvailable: 1
}

beforeEach(() => {
    nightCity.getNightCity = jest.fn().mockReturnValue({
        create: jest.fn()
    })
})

describe('Get job test', () => {
    it('When data is fine', (done) => {
        const expectedResponseBody = {
            job: JOB
        }

        const get = jest.fn().mockReturnValue(expectedResponseBody)

        nightCity.getNightCity.mockReturnValue({
            get
        })


        request(app)
            .get('/job/test')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(response => {
                expect(response.body).toEqual(expectedResponseBody)
            })
            .end(done)
    })
})