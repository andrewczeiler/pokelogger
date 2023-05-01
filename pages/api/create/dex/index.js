import prisma from '/lib/prisma.js';
import { allGames } from '@/data/pokedexes/AllGames/AllGames';
import { home } from '@/data/pokedexes/Home/Home';
import { scarletViolet } from '@/data/pokedexes/Gen9/ScarletViolet/ScarletViolet';
import { legendsArceus } from '@/data/pokedexes/Gen8/LegendsArceus/LegendsArceus';
import { bdspRegional } from '@/data/pokedexes/Gen8/BDSP/BDSPRegional';
import { swordShield } from '@/data/pokedexes/Gen8/SwordShield/SwordShield';
import { letsGoPikachuEevee } from '@/data/pokedexes/Gen7/LetsGoPikachuEevee/LetsGoPikachuEevee';
import { ultraSunMoonRegional } from '@/data/pokedexes/Gen7/UltraSunMoon/UltraSunMoonRegional';
import { sunMoonRegional } from '@/data/pokedexes/Gen7/SunMoon/SunMoonRegional';
import { orasRegional } from '@/data/pokedexes/Gen6/ORAS/ORASRegional';
import { xyRegional } from '@/data/pokedexes/Gen6/XY/XYRegional';
import { black2White2Regional } from '@/data/pokedexes/Gen5/Black2White2/Black2White2Regional';
import { blackWhiteRegional } from '@/data/pokedexes/Gen5/BlackWhite/BlackWhiteRegional';
import { hgssRegional } from '@/data/pokedexes/Gen4/HGSS/HGSSRegional';
import { diamondPearlPlatinumRegional } from '@/data/pokedexes/Gen4/DiamondPearlPlatinum/DiamondPearlPlatinumRegional';
import { rubySapphireEmeraldRegional } from '@/data/pokedexes/Gen3/RubySapphireEmerald/RubySapphireEmeraldRegional';
import { frlgRegional } from '@/data/pokedexes/Gen3/FRLG/FRLGRegional';
import { redBlueYellow } from '@/data/pokedexes/Gen1/RedBlueYellow/RedBlueYellow';
import { gen3National } from '@/data/pokedexes/Gen3/Gen3National';
import { gen4National } from '@/data/pokedexes/Gen4/Gen4National';
import { gen5National } from '@/data/pokedexes/Gen5/Gen5National';
import { gen6National } from '@/data/pokedexes/Gen6/Gen6National';
import { gen7National } from '@/data/pokedexes/Gen7/Gen7National';
import { swordShieldDLC } from '@/data/pokedexes/Gen8/SwordShield/SwordShieldDLC';
import { goldSilverCrystal } from '@/data/pokedexes/Gen2/GoldSilverCrystal/GoldSIlverCrystal';

export default async function handle(req, res) {
    let shiny;
    if(req.body.shiny === 'no'){
        shiny = false;
    }
    else{
        shiny = true;
    }

    try{
        if(req.body.dlc === 'yes'){
            req.body.series += 'dlc';
        }
        const result = await prisma.pokedex.create({
            data: {
                userId: req.body.userId,
                type: req.body.series,
                shiny: shiny,
                name: req.body.dexName
            }
        })
    
        let dexData;
    
        switch(req.body.series){
            case "allgames":
                dexData = allGames(req.body.userId, req.body.dexName);
                break;
            case "pokemonhome":
                dexData = home(req.body.userId, req.body.dexName);
                break;
            case "scarletviolet":
                dexData = scarletViolet(req.body.userId, req.body.dexName);
                break;
            case "legendsarceus":
                dexData = legendsArceus(req.body.userId, req.body.dexName);
                break;
            case 'bdsp':
                if(req.body.type === 'regional'){
                    dexData = bdspRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen4National(req.body.userId, req.body.dexName);
                }
                break;
            case "swordshield":
                dexData = swordShield(req.body.userId, req.body.dexName);
                break;
            case "swordshielddlc":
                dexData = swordShieldDLC(req.body.userId, req.body.dexName)
                break;
            case "letsgopikachueevee":
                dexData = letsGoPikachuEevee(req.body.userId, req.body.dexName);
                break;
            case "ultrasunmoon":
                if(req.body.type === 'regional'){
                    dexData = ultraSunMoonRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen7National(req.body.userId, req.body.dexName);
                }
                break;
            case "sunmoon":
                if(req.body.type === 'regional'){
                    dexData = sunMoonRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen7National(req.body.userId, req.body.dexName);
                }
                break;
            case "oras":
                if(req.body.type === 'regional'){
                    dexData = orasRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen6National(req.body.userId, req.body.dexName);
                }
                break;
            case "xy":
                if(req.body.type === 'regional'){
                    dexData = xyRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen6National(req.body.userId, req.body.dexName);
                }
                break;
            case "black2white2":
                if(req.body.type === 'regional'){
                    dexData = black2White2Regional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen5National(req.body.userId, req.body.dexName);
                }
                break;
            case "blackwhite":
                if(req.body.type === 'regional'){
                    dexData = blackWhiteRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen5National(req.body.userId, req.body.dexName);
                }
                break;
            case "hgss":
                if(req.body.type === 'regional'){
                    dexData = hgssRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen4National(req.body.userId, req.body.dexName);
                }
                break;
            case "diamondpearlplatinum":
                if(req.body.type === 'regional'){
                    dexData = diamondPearlPlatinumRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen4National(req.body.userId, req.body.dexName);
                }
                break;
            case "rubysapphireemerald":
                if(req.body.type === 'regional'){
                    dexData = rubySapphireEmeraldRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen3National(req.body.userId, req.body.dexName);
                }
                break;
            case "frlg":
                if(req.body.type === 'regional'){
                    dexData = frlgRegional(req.body.userId, req.body.dexName);
                }
                else{
                    dexData = gen3National(req.body.userId, req.body.dexName);
                }
                break;
            case "goldsilvercrystal":
                dexData = goldSilverCrystal(req.body.userId, req.body.dexName);
                break;
            case "redblueyellow":
                dexData = redBlueYellow(req.body.userId, req.body.dexName);
                break;
            default:
                dexData = allGames(req.body.userId, req.body.dexName);
                break;
        }
    
        const result2 = await prisma.pokemon.createMany({
            data: dexData
        })
    
        res.json({result});
    }
    catch(error) {
        console.log(error)
    }

}