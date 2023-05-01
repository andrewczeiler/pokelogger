import prisma from '/lib/prisma.js';
import { scarletLocations } from '@/data/locations/ScarletLocations';
import { violetLocations } from '@/data/locations/VioletLocations';
import { legendsArceusLocations } from '@/data/locations/LegendsArceusLocations';
import { brilliantDiamondLocations } from '@/data/locations/BrilliantDiamondLocations';
import { shiningPearlLocations } from '@/data/locations/ShiningPearlLocations';
import { swordLocations } from '@/data/locations/SwordLocations';
import { shieldLocations } from '@/data/locations/ShieldLocations';
import { swordDLCLocations } from '@/data/locations/SwordDLCLocations';
import { shieldDLCLocations } from '@/data/locations/ShieldDLCLocations';
import { letsGoEeveeLocations } from '@/data/locations/LetsGoEeveeLocations';
import { letsGoPikachuLocations } from '@/data/locations/LetsGoPikachuLocations';
import { ultraMoonLocations } from '@/data/locations/UltraMoonLocations';
import { ultraSunLocations } from '@/data/locations/UltraSunLocations';
import { sunLocations } from '@/data/locations/SunLocations';
import { moonLocations } from '@/data/locations/MoonLocations';
import { alphaSapphireLocations } from '@/data/locations/AlphaSapphireLocations';
import { omegaRubyLocations } from '@/data/locations/OmegaRubyLocations';
import { yLocations } from '@/data/locations/YLocations';
import { xLocations } from '@/data/locations/XLocations';
import { black2Locations } from '@/data/locations/Black2Locations';
import { white2Locations } from '@/data/locations/White2Locations';
import { blackLocations } from '@/data/locations/BlackLocations';
import { whiteLocations } from '@/data/locations/WhiteLocations';
import { soulSilverLocations } from '@/data/locations/SoulSilverLocations';
import { heartGoldLocations } from '@/data/locations/HeartGoldLocations';
import { platinumLocations } from '@/data/locations/PlatinumLocations';
import { diamondLocations } from '@/data/locations/DiamondLocations';
import { pearlLocations } from '@/data/locations/PearlLocations';
import { emeraldLocations } from '@/data/locations/EmeraldLocations';
import { fireRedLocations } from '@/data/locations/FireRedLocations';
import { leafGreenLocations } from '@/data/locations/LeafGreenLocations';
import { rubyLocations } from '@/data/locations/RubyLocations';
import { sapphireLocations } from '@/data/locations/SapphireLocations';
import { crystalLocations } from '@/data/locations/CrystalLocations';
import { goldLocations } from '@/data/locations/GoldLocations';
import { silverLocations } from '@/data/locations/SilverLocations';
import { yellowLocations } from '@/data/locations/YellowLocations';
import { redLocations } from '@/data/locations/RedLocations';
import { blueLocations } from '@/data/locations/BlueLocations';

export default async function handle(req, res) {
    await prisma.location.createMany({
        data: scarletLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: violetLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: legendsArceusLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: brilliantDiamondLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: shiningPearlLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: swordLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: shieldLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: swordDLCLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: shieldDLCLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: letsGoEeveeLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: letsGoPikachuLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: ultraMoonLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: ultraSunLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: sunLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: moonLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: alphaSapphireLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: omegaRubyLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: xLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: yLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: black2Locations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: white2Locations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: blackLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: whiteLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: soulSilverLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: heartGoldLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: platinumLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: diamondLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: pearlLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: emeraldLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: fireRedLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: leafGreenLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: rubyLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: sapphireLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: crystalLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: goldLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: silverLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: yellowLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: redLocations,
        skipDuplicates: true,
    });

    await prisma.location.createMany({
        data: blueLocations,
        skipDuplicates: true,
    });


    res.json({ test: "true" });
}