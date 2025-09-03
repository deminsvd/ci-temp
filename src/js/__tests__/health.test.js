import { health } from "../health";

test('health test healthy', () => {
    const gamerHealth = {
        name: 'Маг',
        health: 90
    };
    const result = health(gamerHealth);
    expect(result).toBe('healthy');

})

test('health test wounded', () => {
    const gamerHealth = {
        name: 'Орк',
        health: 40
    };
    const result = health(gamerHealth);
    expect(result).toBe('wounded');

})


test('health test critical', () => {
    const gamerHealth = {
        name: 'Берсерк',
        health: 10
    };
    const result = health(gamerHealth);
    expect(result).toBe('critical');

})