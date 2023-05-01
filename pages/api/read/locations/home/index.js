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

    const brilliantdiamond = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "brilliantdiamond",
                }
            ]
        },
    });


    const shiningpearl = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "shiningpearl",
                }
            ]
        },
    });

    const sworddlc = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "sworddlc",
                }
            ]
        },
    });


    const shielddlc = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "shielddlc",
                }
            ]
        },
    });

    const letsgopikachu = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "letsgopikachu",
                }
            ]
        },
    });


    const letsgoeevee = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "letsgoeevee",
                }
            ]
        },
    });

    const ultrasun = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "ultrasun",
                }
            ]
        },
    });

    const ultramoon = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "ultramoon",
                }
            ]
        },
    });

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

    const omegaruby = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "omegaruby",
                }
            ]
        },
    });


    const alphasapphire = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "alphasapphire",
                }
            ]
        },
    });

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

    const black2 = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "black2",
                }
            ]
        },
    });

    const white2 = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "white2",
                }
            ]
        },
    });

    const black = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "black",
                }
            ]
        },
    });

    const white = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "white",
                }
            ]
        },
    });

    const heartgold = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "heartgold",
                }
            ]
        },
    });

    const soulsilver = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "soulsilver",
                }
            ]
        },
    });

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

    const firered = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "firered",
                }
            ]
        },
    });

    const leafgreen = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "leafgreen",
                }
            ]
        },
    }); 

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

    const red = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "red",
                }
            ]
        },
    });

    const blue = await prisma.location.findMany({
        where: { 
            AND: [
                {
                    pokemonName: req.query.pokemonName,
                },
                {
                    game: "blue",
                }
            ]
        },
    });

    const yellow = await prisma.location.findMany({
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

    res.json({ scarlet, violet, legendsarceus, brilliantdiamond, shiningpearl, 
            sworddlc, shielddlc, letsgopikachu, letsgoeevee, ultrasun, ultramoon,
            sun, moon, omegaruby, alphasapphire, x, y, black2, white2, black, white,
            heartgold, soulsilver, diamond, pearl, platinum, emerald, firered, leafgreen,
            ruby, sapphire, gold, silver, crystal, red, blue, yellow
    });
}