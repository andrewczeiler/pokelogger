import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const ruby = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "ruby",
                }
            ]
        },
    });


    const sapphire = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "sapphire",
                }
            ]
        },
    });

    const emerald = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "emerald",
                }
            ]
        },
    });

    

    res.json({ ruby, sapphire, emerald });
}