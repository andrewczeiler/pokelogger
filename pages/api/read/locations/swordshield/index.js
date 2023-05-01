import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const sword = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "sword",
                }
            ]
        },
    });


    const shield = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "shield",
                }
            ]
        },
    });

    

    res.json({ sword, shield });
}