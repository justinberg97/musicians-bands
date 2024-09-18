const  db = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create({ name: 'The Beatles', genre: 'Rock'});
        expect (band.name).toBe('The Beatles');
        expect (band.genre).toBe('Rock');
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create({ name: 'John Lennon', instrument: 'Guitar'});
        expect(musician.name).toBe('John Lennon');
        expect(musician.instrument).toBe('Guitar')
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const band = await Band.create({ name: 'The Beatles', genre: 'Rock'});
        band.genre = 'Pop Rock';
        await band.save();
        expect(band.genre).toBe('Pop Rock');
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const musician = await Musician.create({ name: 'John Lennon', instrument: 'Piano'});
        musician.instrument = 'Piano';
        await musician.save();
        expect(musician.instrument).toBe('Piano');
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const band = await Band.create({ name: 'The Beatles', genre: 'Rock'});
        await band.destroy();
        const foundBand = await Band.findByPk(band.id);
        expect(foundBand).toBeNull();
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const musician = await Musician.create({ name: 'John Lennon', instrument: 'Guitar'});
        await musician.destroy();
        const findMusician = await Musician.findByPk(musician.id);
        expect(findMusician).toBeNull();
        // expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })
})