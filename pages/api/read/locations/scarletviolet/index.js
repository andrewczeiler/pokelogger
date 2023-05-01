import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const scarlet = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "scarlet",
                }
            ]
        },
    });


    const violet = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "violet",
                }
            ]
        },
    });

    

    res.json({ scarlet, violet });
}