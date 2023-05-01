import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const diamond = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "diamond",
                }
            ]
        },
    });


    const pearl = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "pearl",
                }
            ]
        },
    });

    const platinum = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "platinum",
                }
            ]
        },
    });

    

    res.json({ diamond, pearl, platinum });
}