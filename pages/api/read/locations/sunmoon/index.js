import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const sun = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "sun",
                }
            ]
        },
    });


    const moon = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "moon",
                }
            ]
        },
    });

    

    res.json({ sun, moon });
}