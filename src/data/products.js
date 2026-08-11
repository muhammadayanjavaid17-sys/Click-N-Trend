import vacuumCleaner from "../assets/images/vacuum-cleaner.png";
import miniMopCleaner from "../assets/images/mini-mop-cleaner.png";
import miniMosquitoRacket from "../assets/images/mini-mosquito-racket.png";
import miniElectricFoodChopper from "../assets/images/mini-electric-food-chopper.png";
import massageGun from "../assets/images/massage-gun.png";

import multiVegetableFruitCutter from "../assets/images/multi-vegetable-&-fruit-cutter.webp";
import magicWaterBook from "../assets/images/magic-water-book.webp";
import manualFoodGrater from "../assets/images/manual-food-grater.webp";
import drumMultifunctionalRollerVegetableCutter from "../assets/images/drum-multifunctional-roller-vegetable-cutter.webp";
import blackHeadRemoverMachine from "../assets/images/5-in-1-black-head-remover-machine.webp";
import antiTheftCrossBodyBag from "../assets/images/anti-theft-cross-body-bag.webp";

import siliconWashingGloves from "../assets/images/silicon-washing-gloves.webp";
import professionalKnifeSharpener from "../assets/images/professional-knife-sharpener.webp";
import handheldMassageBallForMuscle from "../assets/images/handheld-massage-ball-for-muscle.webp";
import backPostureCorrectorBelt from "../assets/images/back-posture-corrector-belt.webp";
import digitalMassagerForFaceAndNeck from "../assets/images/digital-massager-for-face-and-neck.webp";
import magicMeshMagneticScreenDoor from "../assets/images/magic-mesh-magnetic-screen-door.webp";

import digitalKitchenWeightScale from "../assets/images/digital-kitchen-weight-scale.webp";
import mosquitoCoilStand from "../assets/images/mosquito-coil-stand.webp";
import babyShowerCap from "../assets/images/baby-shower-Cap.webp";
import vegetableCutter5in1 from "../assets/images/5-in-1-vegetable-cutter.webp";
import dynamicSandArtLamp from "../assets/images/dynamic-sand-art-lamp-liquid-motion-(7 inch).webp";
import coldKettle35Litre from "../assets/images/3.5-litre-cold-kettle.webp";
import t9MetalHighQuality from "../assets/images/T9-metal-high-quality.webp";
import studyLamp from "../assets/images/study-lamp.webp";

import siliconeIceRoller from "../assets/images/silicone-ice-roller.webp";
import pandaLamp from "../assets/images/panda-lamp.webp";
import siliconeFoldingBottle from "../assets/images/silicone-folding-bottle.webp";
import portableNeckFan from "../assets/images/portable-neck-fan.webp";
import portableSealingMachine from "../assets/images/portable-sealing-machine.webp";

import mirrorSticker from "../assets/images/mirror-sticker.webp";
import crystalLamp from "../assets/images/crystal-lamp.webp";
import steelPushChopper from "../assets/images/2l-steel-push-chopper.webp";
import windowAirConditionerCover from "../assets/images/window-air-conditioner-cover.webp";
import miniElectricShockInsectRacket from "../assets/images/mini-electric-shock-insect-racket.webp";
import portableMiniMassagerGun from "../assets/images/portable-mini-massager-gun.webp";
import bubbleMiniFan from "../assets/images/bubble-mini-fan.webp";
import foldableMosquitoRacket from "../assets/images/foldable-mosquito-racket.webp";
import flyingBall from "../assets/images/flying-ball.webp";

const products = [
  {
    id: 1,
    name: "Portable Vacuum Cleaner",
    price: 1499,
    image: vacuumCleaner,
    description:
      "Powerful portable vacuum cleaner for home, office and car cleaning. Compact design with strong suction power.",
      category: "Home Essentials",
      rating: 4.9,
badge: "BEST SELLER",
  },
  {
    id: 2,
    name: "Mini Mop Cleaner",
    price: 999,
    image: miniMopCleaner,
    description:
      "Mini mop cleaner with highly absorbent sponge for quick cleaning of glass, kitchen and bathroom surfaces.",
      category: "Home Essentials",
      rating: 4.8,
badge: "NEW ARRIVAL",
  },
  {
    id: 3,
    name: "Mini Mosquito Racket",
    price: 1299,
    image: miniMosquitoRacket,
    description:
      "Rechargeable mosquito racket with electric grid to eliminate mosquitoes and flying insects safely.",
      category: "Home Essentials",
      rating: 4.7,
badge: "HOT",
  },
  {
    id: 4,
    name: "Mini Electric Food Chopper",
    price: 1799,
    image: miniElectricFoodChopper,
    description:
      "USB rechargeable food chopper perfect for vegetables, garlic, onions, nuts and daily kitchen preparation.",
      category: "Kitchen Gadgets",
      rating: 4.9,
badge: "TRENDING",
  },
  {
    id: 5,
    name: "Massage Gun",
    price: 2999,
    image: massageGun,
    description:
      "Deep tissue massage gun with multiple speed levels for muscle recovery, pain relief and relaxation.",
      category: "Beauty & Personal Care",
  },
  {
    id: 6,
    name: "Multi Vegetable & Fruit Cutter",
    price: 790,
    image: multiVegetableFruitCutter,
    description:
      "Multi-purpose vegetable and fruit cutter designed for fast, safe and effortless slicing and chopping.",
      category: "Kitchen Gadgets",
  },
  {
    id: 7,
    name: "Magic Water Book",
    price: 490,
    image: magicWaterBook,
    description:
      "Reusable magic water coloring book for kids. Just fill the pen with water and enjoy mess-free drawing.",
      category: "Kids Products",
  },
  {
    id: 8,
    name: "Manual Food Grater",
    price: 880,
    image: manualFoodGrater,
    description:
      "Multi-function manual food grater with interchangeable blades for slicing, shredding and grating vegetables.",
      category: "Kitchen Gadgets",
  },
  {
    id: 9,
    name: "Drum Multifunctional Roller Vegetable Cutter",
    price: 1790,
    image: drumMultifunctionalRollerVegetableCutter,
    description:
      "Rotary drum vegetable cutter with multiple stainless steel blades for quick slicing and grating.",
      category: "Kitchen Gadgets",
  },
    {
    id: 10,
    name: "5 In 1 Black Head Remover Machine",
    price: 1180,
    image: blackHeadRemoverMachine,
    description:
      "5-in-1 facial pore vacuum cleaner for removing blackheads, acne and dead skin with adjustable suction levels.",
      category: "Beauty & Personal Care",
  },
  {
    id: 11,
    name: "Anti Theft Cross Body Bag",
    price: 2480,
    image: antiTheftCrossBodyBag,
    description:
      "Premium anti-theft cross body bag with password lock, USB charging port and spacious compartments.",
      category: "Smart Gadgets",
  },
  {
    id: 12,
    name: "Silicon Washing Gloves",
    price: 790,
    image: siliconWashingGloves,
    description:
      "Premium silicone washing gloves perfect for dish washing, kitchen cleaning, fruit washing and pet grooming.",
      category: "Home Essentials",
  },
  {
    id: 13,
    name: "Professional Knife Sharpener",
    price: 760,
    image: professionalKnifeSharpener,
    description:
      "Professional 3-stage knife sharpener for sharpening kitchen knives quickly and safely.",
      category: "Kitchen Gadgets",
  },
  {
    id: 14,
    name: "Handheld Massage Ball For Muscle",
    price: 780,
    image: handheldMassageBallForMuscle,
    description:
      "Handheld 5-bead massage roller for relieving muscle pain, stress and improving blood circulation.",
      category: "Beauty & Personal Care",
  },
  {
    id: 15,
    name: "Back Posture Corrector Belt",
    price: 770,
    image: backPostureCorrectorBelt,
    description:
      "Adjustable posture corrector belt designed to improve posture and reduce back and shoulder pain.",
      category: "Beauty & Personal Care",
  },
  {
    id: 16,
    name: "Digital Massager For Face And Neck",
    price: 1780,
    image: digitalMassagerForFaceAndNeck,
    description:
      "LED facial and neck massager with heating and vibration technology for skin tightening and relaxation.",
      category: "Beauty & Personal Care",
  },
  {
    id: 17,
    name: "Magic Mesh Magnetic Screen Door",
    price: 980,
    image: magicMeshMagneticScreenDoor,
    description:
      "Magnetic mesh screen door that keeps insects outside while allowing fresh air inside your home.",
      category: "Home Essentials",
  },
    {
    id: 18,
    name: "Digital Kitchen Weight Scale",
    price: 1290,
    image: digitalKitchenWeightScale,
    description:
      "High precision digital kitchen weighing scale perfect for cooking, baking and meal preparation.",
      category: "Kitchen Gadgets",
  },
  {
    id: 19,
    name: "Mosquito Coil Stand",
    price: 580,
    image: mosquitoCoilStand,
    description:
      "Premium mosquito coil stand designed for safe, clean and stable burning of mosquito coils.",
      category: "Home Essentials",
  },
  {
    id: 20,
    name: "Baby Shower Cap",
    price: 560,
    image: babyShowerCap,
    description:
      "Soft adjustable baby shower cap that protects children's eyes and ears while washing hair.",
      category: "Kids Products",
  },
  {
    id: 21,
    name: "5 In 1 Vegetable Cutter",
    price: 980,
    image: vegetableCutter5in1,
    description:
      "Multi-functional vegetable cutter with interchangeable blades for slicing, shredding and chopping.",
      category: "Kitchen Gadgets",
  },
  {
    id: 22,
    name: "Dynamic Sand Art Lamp (7 Inch)",
    price: 1390,
    image: dynamicSandArtLamp,
    description:
      "Beautiful moving sand art decoration that creates relaxing landscapes for home and office.",
      category: "Home Essentials",
  },
  {
    id: 23,
    name: "3.5 Litre Cold Kettle",
    price: 1070,
    image: coldKettle35Litre,
    description:
      "3.5 litre beverage dispenser with tap, perfect for juice, lemonade, iced tea and cold drinks.",
      category: "Kitchen Gadgets",
  },
  {
    id: 24,
    name: "T9 Metal High Quality Trimmer",
    price: 1390,
    image: t9MetalHighQuality,
    description:
      "Professional cordless T9 metal trimmer for hair cutting, beard grooming and precise styling.",
      category: "Beauty & Personal Care",
  },
  {
    id: 25,
    name: "Study Lamp",
    price: 870,
    image: studyLamp,
    description:
      "Flexible LED study lamp with adjustable neck, perfect for reading, studying and office work.",
      category: "Home Essentials",
  },
{
  id: 26,
  name: "Silicone Ice Roller",
  price: 730,
  image: siliconeIceRoller,
  description:
    "Reusable silicone ice roller for facial massage, reducing puffiness, soothing skin and improving blood circulation.",
    category: "Beauty & Personal Care",
},
{
  id: 27,
  name: "Panda Silicone Lamp",
  price: 730,
  image: pandaLamp,
  description:
    "Cute rechargeable panda night lamp with soft LED light, perfect for bedrooms, kids and home decoration.",
    category: "Kids Products",
},
{
  id: 28,
  name: "Silicone Folding Bottle",
  price: 1280,
  image: siliconeFoldingBottle,
  description:
    "Portable foldable silicone water bottle, lightweight, leak-proof and perfect for travel, gym and outdoor use.",
    category: "Home Essentials",
},
{
  id: 29,
  name: "Portable Neck Fan",
  price: 1850,
  image: portableNeckFan,
  description:
    "Hands-free rechargeable neck fan with powerful airflow and quiet operation for indoor and outdoor comfort.",
    category: "Smart Gadgets",
},
{
  id: 30,
  name: "Portable Sealing Machine",
  price: 730,
  image: portableSealingMachine,
  description:
    "USB rechargeable mini bag sealing machine to keep snacks and food fresh by sealing plastic bags instantly.",
    category: "Kitchen Gadgets",
},
{
  id: 31,
  name: "Mirror Sticker",
  price: 740,
  image: mirrorSticker,
  description:
    "Premium acrylic mirror sticker for bedrooms, bathrooms and home decoration. Easy to install with a modern stylish look.",
    category: "Home Essentials",
},
{
  id: 32,
  name: "Crystal Lamp",
  price: 1290,
  image: crystalLamp,
  description:
    "Elegant crystal table lamp with beautiful 3D lighting effect, perfect for bedrooms, living rooms and gifts.",
    category: "Home Essentials",
},
{
  id: 33,
  name: "2L Steel Push Chopper",
  price: 1380,
  image: steelPushChopper,
  description:
    "2 litre stainless steel push chopper with sharp blades for fast chopping of vegetables, fruits, meat and herbs.",
    category: "Kitchen Gadgets",
},
{
  id: 34,
  name: "Window Air Conditioner Cover",
  price: 620,
  image: windowAirConditionerCover,
  description:
    "Protective cover for outdoor air conditioner units, designed to reduce direct sunlight, dust and rain exposure.",
    category: "Home Essentials",
},
{
  id: 35,
  name: "Mini Electric Shock Insect Racket",
  price: 980,
  image: miniElectricShockInsectRacket,
  description:
    "USB rechargeable electric insect racket that quickly eliminates mosquitoes and flying insects with powerful protection.",
    category: "Home Essentials",
},
{
  id: 36,
  name: "Portable Mini Massager Gun",
  price: 1640,
  image: portableMiniMassagerGun,
  description:
    "Compact rechargeable massage gun for muscle relaxation, pain relief and post-workout recovery anytime, anywhere.",
    category: "Beauty & Personal Care",
},
{
  id: 37,
  name: "Bubble Mini Fan",
  price: 1340,
  image: bubbleMiniFan,
  description:
    "Cute rechargeable bubble mini fan with strong airflow and bubble maker, perfect for kids and summer fun.",
    category: "Smart Gadgets",
},
{
  id: 38,
  name: "Foldable Mosquito Racket",
  price: 2080,
  image: foldableMosquitoRacket,
  description:
    "Foldable rechargeable mosquito racket with UV light for effective indoor insect control and convenient storage.",
    category: "Home Essentials",
},
{
  id: 39,
  name: "Flying Ball",
  price: 1360,
  image: flyingBall,
  description:
    "Magic flying spinner ball with colorful LED lights, rechargeable design and exciting interactive fun for kids and adults.",
    category: "Kids Products",
},
];

export default products;