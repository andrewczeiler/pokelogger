import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const gold = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "gold",
                }
            ]
        },
    });


    const silver = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "silver",
                }
            ]
        },
    });

    const crystal = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "yellow",
                }
            ]
        },
    });

    

    res.json({ gold, silver, crystal });
}