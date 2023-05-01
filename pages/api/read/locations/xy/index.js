import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const x = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "x",
                }
            ]
        },
    });


    const y = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "y",
                }
            ]
        },
    });

    

    res.json({ x, y });
}