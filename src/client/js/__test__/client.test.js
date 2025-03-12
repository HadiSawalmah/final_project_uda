    const { getCityData, getWeather, getImage } = require('../formHandler');

    describe('getCityData() function', () => {
    test('should be defined', () => {
        expect(getCityData).toBeDefined();
    });

    test('should be a function', () => {
        expect(typeof getCityData).toBe('function');
    });
    });

    describe('getWeather() function', () => {
    test('should be defined', () => {
        expect(getWeather).toBeDefined();
    });

    test('should be a function', () => {
        expect(typeof getWeather).toBe('function');
    });
    });

    describe('getImage() function', () => {
    test('should be defined', () => {
        expect(getImage).toBeDefined();
    });

    test('should be a function', () => {
        expect(typeof getImage).toBe('function');
    });
    });
