export function health (healthscore) {
    if (healthscore.health <= 15) {
        return 'critical';
    } else if (healthscore.health > 15 && healthscore.health<= 50) {
        return 'wounded';
    } else {
        return 'healthy';
    }
}