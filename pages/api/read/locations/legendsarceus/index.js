import prisma from '/lib/prisma.js';

export default async function handle(req, res) {
    const legendsarceus = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "legendsarceus",
                }
            ]
        },
    });

    

    res.json({ legendsarceus });
}