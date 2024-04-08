import { Product } from "@/types";

export const productsData: Product[] = [
{
  id: '1',
  compnay: 'Sparx',
  chemical: 'Imidacloprid 70% W.G',
  description: 'Sparx (Imidacloprid 70% Wg) is a systemic insecticide of Neonicotinoid group which controls the sucking insects and termites very effectively.Sparx is also a suitable insecticide for Integrated Pest Management (IPM) programme.',
  isFeatured: true,
  imageUrl: '/images/products/image_1.jpeg',
  categoryId: 'insecticides',
  crop: [
    {
    crop: 'cotton',
    target: 'Jassids, Aphids, Thrips',
    dose: '12-14 gm'
    },
    {
      crop: 'rice',
      target: 'Brown Plant Hoppers, White Backed Plant hoppers',
      dose: '12-14 gm'
    },
    {
      crop: 'okra',
      target: 'Jassids, Aphids, Thrips',
      dose: '12-14 gm'
    },
    {
      crop: 'Cucumber',
      target: 'Aphids & Jassids',
      dose: '14 gm'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '16 gm , 30 gm, 75 gm , 150 gm'
},
{
  id: '2',
  compnay: 'Excel Fipro SC',
  chemical: 'Fipronil 5% S.C',
  description: 'Excel Fipro SC (Fipronil 5% SC) is a modern insecticide of Phenylpyrazole group which controls the insect pests of rice, chilli, cabbage/cauliflower and sugarcane effectively. It has been proven to offer low dose, highly effective insect control against a broad range of economically important pests.',
  isFeatured: false,
  imageUrl: '/images/products/image_2.png',
  categoryId: 'insecticides',
  crop: [
    {
      crop: 'cotton',
      target: 'Aphid, Jassid, Thrips, White fly, Boll worms',
      dose: '600-800 ml'
    },
    {
      crop: 'rice',
      target: 'Stem borer, Brown plant hopper, Green leaf hopper, Rice leaf hopper, Rice gall midge, Whorl maggot, White backed plant hopper',
      dose: '400-600 ml'
    },
    {
      crop: 'Cabbage',
      target: 'Diamond back moth',
      dose: '320-400 ml'
    },
    {
      crop: 'Chilli',
      target: 'Thrips, Aphids, Fruit borers',
      dose: '400 ml'
    },
    {
      crop: 'Sugarcane',
      target: 'Early shoot borer &root borer',
      dose: '600-800 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100 ml, 250 ml, 500 ml, 1 Ltr'
},
{
  id: '3',
  compnay: 'Excel Fipro GR',
  chemical: 'Fipronil 0.3% G.R',
  description: 'Excel Fipro GR (fipronil 0.3% GR) is recommended for the control of Stem borer, Brown plant hopper, Green leafhopper, Rice leaf folder, Gall midge, White-backed plant hopper, whorl maggot of Rice Early shoot borer, and  Root borer of sugarcane and termites of wheat.',
  isFeatured: true,
  imageUrl: '/images/products/image_3.webp',
  categoryId: 'insecticides',
  crop: [
    {
      crop: 'rice',
      target: 'Stem Borer, Brown Plant Hopper, Leaf Folder, Whorl Maggot, Green Leaf Hopper, White Backed Plant Hopper, Gall midge',
      dose: '50-75 gm'
    },
    {
      crop: 'Sugarcane',
      target: 'Termite',
      dose: '75 gm'
    },
    {
      crop: 'Sugarcane',
      target: 'Early Shoot Borer, Root Borer',
      dose: '75-100 gm'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '1kg, 5kg'
},
{
  id: '4',
  compnay: 'Excel Tara',
  chemical: 'Thiamethoxam 25 % W.G',
  description: 'Excel Tara (Thiamethoxam 25% Wg) is a granular soluble insecticide of Neonicotinoid group. It gives protection against insects for a longer period in comparison to other insecticides. Excel Tara is safe to the environment in comparison to other insecticides because of its lesser dose per acre.',
  isFeatured: true,
  imageUrl: '/images/products/image_4.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Rice',
        target: 'Stem borer, Gall midge, Leaf folder, WBPH, BPH, GLH, Thrips',
        dose: '40 gm'
    },
    {
        crop: 'Cotton',
        target: 'Jassid, Aphid, Thrips, White Flies (WF)',
        dose: '40 gm, 80 gm (WF)'
    },
    {
        crop: 'Okra',
        target: 'Jassid, Aphid, White flies',
        dose: '40 gm'
    },
    {
        crop: 'Mango',
        target: 'Hopper',
        dose: '4 gm/ 15 ltr'
    },
    {
        crop: 'Wheat',
        target: 'Aphid',
        dose: '20 gm'
    },
    {
        crop: 'Mustard',
        target: 'Aphid',
        dose: '20-40 gm'
    },
    {
        crop: 'Tomato',
        target: 'White flies',
        dose: '80 gm'
    },
    {
        crop: 'Brinjal',
        target: 'White flies',
        dose: '80 gm'
    },
    {
        crop: 'Tea',
        target: 'Mosquito bug',
        dose: '40 gm'
    },
    {
        crop: 'Potato',
        target: 'Aphids (Foliar application); Aphids (Soil drench)',
        dose: '40 gm; 80 gm'
    },
    {
        crop: 'Citrus',
        target: 'psylla',
        dose: '40 gm'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '5 gm , 100 gm, 250 gm, 500 gm, 1 kg, 5 kg'
},{
  id: '5',
  compnay: 'Excel Tara FS',
  chemical: 'Thiamethoxam 30% F.S',
  description: 'Excel Tara FS (Thiamethoxam 30% Fs) is a systemic insecticide. Excel Tara FS protects against target pests by interfering with receptors that transmit the message to continue feeding. it acts on different sites of action in the insect. Excel Tara FS is to be used as a SEED DRESSER.',
  isFeatured: true,
  imageUrl: '/images/products/image_5.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Aphids, whiteflies, Jassids',
        dose: '4 ml/ kg seed'
    },
    {
        crop: 'Sorghum',
        target: 'Shoot fly',
        dose: '4 ml/ kg seed'
    },
    {
        crop: 'Wheat',
        target: 'Termites',
        dose: '1.32 ml/ kg seed'
    },
    {
        crop: 'Soybean',
        target: 'Shoot fly',
        dose: '4 ml/ kg seed'
    },
    {
        crop: 'Chilli',
        target: 'Thrips',
        dose: '2.8 ml/ kg seed'
    },
    {
        crop: 'Okra',
        target: 'Jassids',
        dose: '2.28 ml/ kg seed'
    },
    {
        crop: 'Maize',
        target: 'Stem Fly',
        dose: '3.2 ml/ kg seed'
    },
    {
        crop: 'Sunflower',
        target: 'Jassids, Thrips',
        dose: '4 ml/ kg seed'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '500 ml, 1 Ltr'
},
{
  id: '6',
  compnay: 'Alligator',
  chemical: 'Buprofezin 25% S.C',
  description: 'Alligator (Buprofezin 25% Sc) is an Insecticide of " Insect Growth Regulator Group".Alligator inhibits moulting of nymphs and larvae, leading to death.  it is a novel insecticide for integrated pest management ( IPM) and safe for environment. ',
  isFeatured: false,
  imageUrl: '/images/products/image_6.png',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'White Fly, Aphid, Jassid, Thrip',
        dose: '400 ml'
    },
    {
        crop: 'Rice',
        target: 'BPH, GLH, WBPH',
        dose: '320 ml'
    },
    {
        crop: 'Chilli',
        target: 'Yellow Mite',
        dose: '120-240 ml'
    },
    {
        crop: 'Mango',
        target: 'Hopper',
        dose: '1-2 ml/ lit of water'
    },
    {
        crop: 'Grape',
        target: 'Mealy bug',
        dose: '400-600 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250 ml, 500 ml, 1 Ltr'
},
{
  id: '7',
  compnay: 'Dynamite',
  chemical: 'Emamectin Benzoate 5% S.G',
  description: 'Dynamite (Emamectin Benzoate 5% Sg) is a modern insecticide of Avermectin group.Dynamite is a multipurpose world renowned soluble granular insecticid. ',
  isFeatured: true,
  imageUrl: '/images/products/image_7.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Boll worms',
        dose: '76-88 gm'
    },
    {
        crop: 'Okra',
        target: 'Fruit & Shoot Borer',
        dose: '54-68 gm'
    },
    {
        crop: 'Cabbage & Cauliflower',
        target: 'DBM',
        dose: '60-80 gm'
    },
    {
        crop: 'Chilli',
        target: 'Fruit borer, Thrips & Mites',
        dose: '80 gm'
    },
    {
        crop: 'Brinjal',
        target: 'Fruit and Shoot borer',
        dose: '80 gm'
    },
    {
        crop: 'Red gram',
        target: 'Pod borer',
        dose: '88 gm'
    },
    {
        crop: 'Chickpea',
        target: 'Pod borer',
        dose: '88 gm'
    },
    {
        crop: 'Grapes',
        target: 'Thrips',
        dose: '88 gm'
    },
    {
        crop: 'Tea',
        target: 'Tea looper',
        dose: '80 gm'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '10 gm, 50 gm ,100 gm, 250 gm, 500 gm, 1 kg'
},{
  id: '8',
  compnay: 'Intro',
  chemical: 'Pymetrozine 50% W.G',
  description: 'Intro (Pymetrozine 50% WG) has the best known chemistry for effective control on BPH, It is a systemic and trans laminar insecticide which paralysis the hoppers, stops egg-laying and the insects got killed from starvation.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
      crop: 'Paddy',
      target: 'Brown plant hoppers',
      dose: '120 gm'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '120 gm, 250 gm, 500 gm, 1 kg'
},{
  id: '9',
  compnay: 'Bicel',
  chemical: 'Bifenthrin 10% E.C',
  description: 'Bicel (Bifenthrin 10% EC) is a world-renowned, new generation, the broad-spectrum insecticide of Pyrethroid group. Markar through its contact and stomach action controls different types of larvae, whitefly, mites and jassids very effectively. Bicel has strong bonding tendency in the soil thus it persists and exhibits longer duration extraordinary control of termite.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Boll worm, Whitefly',
        dose: '320 ml'
    },
    {
        crop: 'Paddy',
        target: 'Stem Borer, Leaf Folder & Green Leaf hopper',
        dose: '200 ml'
    },
    {
        crop: 'Sugarcane',
        target: 'Termites',
        dose: '400 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100ml, 250ml, 500ml, 1 Ltr & 5 ltr'
},{
  id: '10',
  compnay: 'Sundi SC',
  chemical: 'Chlorantraniliprole 18.5% S.C',
  description: 'Sundi SC (Chlorantraniliprole 18.5% W/W SC) is broad-spectrum insecticide. Sundi SC with its unique mode of action provides effective and long duration protection to different pest.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Paddy',
        target: 'Stem borer, leaf folder',
        dose: '60 ml'
    },
    {
        crop: 'Cotton',
        target: 'American bollworm, Spotted bollworm',
        dose: '60 ml'
    },
    {
        crop: 'Cabbage',
        target: 'Diamond back moth',
        dose: '20 ml'
    },
    {
        crop: 'Sugarcane',
        target: 'Termite (T), Early Shoot Borer (ESB), Top Borer (TB)',
        dose: '200-250 ml, 150 ml'
    },
    {
        crop: 'Tomato',
        target: 'Fruit Borer',
        dose: '60 ml'
    },
    {
        crop: 'Chilli',
        target: 'Fruit Borer',
        dose: '60 ml'
    },
    {
        crop: 'Brinjal',
        target: 'Shoot & Fruit borer',
        dose: '80 ml'
    },
    {
        crop: 'Pigeon pea',
        target: 'Pod borer',
        dose: '60 ml'
    },
    {
        crop: 'Soyabean',
        target: 'Green Semi looper, Stem fly, Girdle beetle',
        dose: '60 ml'
    },
    {
        crop: 'Bengal gram',
        target: 'Pod borer',
        dose: '50 ml'
    },
    {
        crop: 'Black gram',
        target: 'POD borer',
        dose: '40 ml'
    },
    {
        crop: 'Bitter gourd',
        target: 'Fruit Borer & Caterpillars',
        dose: '40-50 ml'
    },
    {
        crop: 'Okra',
        target: 'Fruit Borer',
        dose: '50 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '10 ml, 30 ml, 60 ml, 150 ml'
},{
  id: '11',
  compnay: 'Sundi GR',
  chemical: 'Chlorantraniliprole 0.4% G.R',
  description: 'Sundi GR (Chlorantraniliprole/Rynaxypyr 0.4% GR) is broad-spectrum insecticide to protect paddy crop from stem borers. Sundi GR with its unique mode of action provides an effective and long duration protection from early shoot borer and top borer in paddy crops.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Paddy',
        target: 'Yellow stem borer & leaf folder',
        dose: '4 Kg'
    },
    {
        crop: 'Sugarcane',
        target: 'Early shoot borer, top borer',
        dose: '7.5 Kg'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '4 KG'
},{
  id: '12',
  compnay: 'Leader GR',
  chemical: 'Cartap Hydrochloride 4% G.R',
  description: '',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Paddy',
        target: 'Leaf folder, Stem borer, Whorl maggot',
        dose: '7.5 - 10 kg'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '1 kg, 5 kg, 7.5 kg'
},{
  id: '13',
  compnay: 'Civil-25',
  chemical: 'Cypermethrin 25% E.C',
  description: 'Civil-25 (Cartap Hydrochloride 4% G) is an insecticide of Nereistoxin analogue group, which gives effective control on insects pests through its contact, systemic and stomach poison action. Civil-25 has remarkable capacity to control caterpillars. It is safe for environment and is also suitable for Integrated Pest Management (IPM) system. It is a persistent insecticide and controls the insect pests for a longer period.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Pink Boll Worm of Cotton, American Boll Worm',
        dose: '90-120ml'
    },
    {
        crop: 'Sugarcane',
        target: 'Early Shoot Borer',
        dose: '90-120ml'
    },
    {
        crop: 'Maize',
        target: 'Hairy Caterpillar',
        dose: '100-120ml'
    },
    {
        crop: 'Groundnut',
        target: 'Hairy Caterpillar',
        dose: '100-120ml'
    },
    {
        crop: 'Cabbage & Cauliflower',
        target: 'Diamond Back Moth of Cabbage',
        dose: '100-120ml'
    },
    {
        crop: 'Okra',
        target: 'Okra fruit infested by Fruit Borer',
        dose: '100-120ml'
    },
    {
        crop: 'Brinjal',
        target: 'Shoot and Fruit Borer, Epitechna Beetle Grub and Adults',
        dose: '90-120ml'
    },
    {
        crop: 'Mustard',
        target: 'Sawfly, Aphids',
        dose: ''
    }
  ],
  dose: [],
  targetPest: [],
  packing: '50 ml, 100 ml, 250 ml, 500 ml, 1 ltr, 5 ltr'
},{
  id: '14',
  compnay: 'Excel Lambda EC',
  chemical: 'Lambda Cyhalothrin 5% E.C',
  description: 'Excel Lambda EC ( Lambdacyhalothrin 5% EC ) is a new generation photostable pyrethroid insecticide for the control of a broad spectrum of both chewing and sucking insect pests in cotton. It has contact and systemic action which is effective for the control of pests like bollworms, jassids, Thrips on cotton.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Bollworms, Jassids, thrips',
        dose: '150-200 ml'
    },
    {
        crop: 'Paddy',
        target: 'Leaf folder, Stem borer, GLH, Gall midge, Hispa, Thrips',
        dose: '100 ml'
    },
    {
        crop: 'Brinjal',
        target: 'Shoot and Fruit borer',
        dose: '150 ml'
    },
    {
        crop: 'Tomato',
        target: 'Fruit Borer',
        dose: '150 ml'
    },
    {
        crop: 'Chilli',
        target: 'Thrips, mite, pod borer',
        dose: '150 ml'
    },
    {
        crop: 'Pigeon pea',
        target: 'Pod Borer, Pod',
        dose: '150-200 ml'
    },
    {
        crop: 'Onion',
        target: 'Thrips',
        dose: '150 ml'
    },
    {
        crop: 'Okra',
        target: 'Jassids, Shoot borer',
        dose: '150 ml'
    },
    {
        crop: 'Chick pea',
        target: 'Pod borer',
        dose: '200 ml'
    },
    {
        crop: 'Groundnut',
        target: 'Thrips, leaf hopper, leaf minor',
        dose: '100 -150 ml'
    },
    {
        crop: 'Mango',
        target: 'Hopper',
        dose: '0.5-1 ml per litre of water'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100 ml, 250 ml, 500 ml, 1 ltr'
},{
  id: '15',
  compnay: 'Quilux',
  chemical: 'Quinalphos 25% E.C',
  description: 'Quilux (Quinalphos 25% EC) a broad spectrum organo-phosphatic insecticide containing 25% w/w quinalphose a.l. in the form of emulsifiable concentrate. Quilux is having broad spectrum of activity and good initial and residual toxicity against bollworms on cotton and stem borer, leaf folder, green leaf hopper, hispa on rice.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Bollworm',
        dose: '600-800 ml'
    },
    {
        crop: 'Paddy',
        target: 'Stem borer, Leaf Folder, Hispa Green, Leaf Hopper',
        dose: '500 ml'
    },
    {
        crop: 'Soybean',
        target: 'Stem borer, Girdle beetle, Leaf Miner',
        dose: '250 ml'
    },
    {
        crop: 'Brinjal',
        target: 'Shoot and Fruit Borer, Epilachna Beetle',
        dose: '500 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100 ml, 250 ml, 500 ml, 1 ltr, 5 ltr, 20 ltr'
},{
  id: '16',
  compnay: 'Excel Lambda SC',
  chemical: 'Lambda Cyhalothrin 4.9% C.S',
  description: 'Excel Lambda SC (Lambda Cyhalothrin 4.9% CS) a synthetic pyrethroid having contact and stomach mode of action. It has a new technology due to which it gives long duration control. Excel Lambda SC renders good control over bollworm in Cotton. Chemical is also recommended for stem borer, leaf folder in Paddy, borers in Brinjal, Okra & Tomato, thrips & flea beetle in Grapes and thrips & pod borer in Chilli.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Bollworms',
        dose: '500 ml'
    },
    {
        crop: 'Paddy',
        target: 'Stem borer, Leaf folder',
        dose: '250 ml'
    },
    {
        crop: 'Brinjal',
        target: 'Shoot and fruit borer',
        dose: '300 ml'
    },
    {
        crop: 'Okra',
        target: 'Fruit Borer',
        dose: '300 ml'
    },
    {
        crop: 'Tomato',
        target: 'Fruit Borer',
        dose: '300 ml'
    },
    {
        crop: 'Grapes',
        target: 'Thrips and Flea',
        dose: '250 ml'
    },
    {
        crop: 'Chilli',
        target: 'Thrips and pod borer',
        dose: '500 ml'
    },
    {
        crop: 'Soybean',
        target: 'Stemfly and semilooper',
        dose: '300 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250 ml, 500 ml, 1 ltr,'
},{
  id: '17',
  compnay: 'MISSING',
  chemical: 'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% Z.C',
  description: 'MISSING (Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% Z.C) is a combination of two different groups of insecticide which contains active ingredients of Thiamethoxam 12.6% + Lambda-cyhalothrin 9.5% ZC. having quick stomach and contact activity and is recommended to control Aphids, Jassids, Thrips & Bolworms in Cotton, Aphid, Shootfly, Stem borer in Maize, Leaf hopper, leaf eating caterpillars in groundnut, Stem fly, semilooper, girdle beetle in Soybean, Thrips & fruit borer in Chilii, thrips, semilooper, tea mosquito bug in tea, thrips, whiteflies, fruit borer in tomato crop',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Jassids, Aphids, Thrips, Bollworms',
        dose: '80 ml'
    },
    {
        crop: 'Tea',
        target: 'Tea mosquito bug, Thrips, Semilooper',
        dose: '60 ml'
    },
    {
        crop: 'Tomato',
        target: 'Thrips, Whiteflies & Fruit borer',
        dose: '50 ml'
    },
    {
        crop: 'Maize',
        target: 'Aphids, Shoot fly, Stem borer',
        dose: '50 ml'
    },
    {
        crop: 'Chilli',
        target: 'Thrips, Fruit borer',
        dose: '60 ml'
    },
    {
        crop: 'Groundnut',
        target: 'Leaf hopper, Leaf eating caterpillar',
        dose: '60 ml'
    },
    {
        crop: 'Soybean',
        target: 'Stem fly, Semilooper, Girdle beetle',
        dose: '50 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '80ML, 200ML & 500ML'
},{
  id: '18',
  compnay: 'Fimido',
  chemical: 'Fipronil 40% + Imidacloprid 40% W.G',
  description: 'Fimido (Fipronil 40% + Imidacloprid 40% W.G) Insecticide emerges as a powerful solution. This comprehensive guide delves into the intricacies of Fimido, shedding light on its features, applications, and the positive impact it can have on safeguarding your crops.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
      crop: 'Sugarcane',
      target: 'White grubs',
      dose: '180-200 gm in 400-500 ml'
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100gm, 200gm, 400gm, 800gm, 1 KG, 3 KG, 5 KG'
},{
  id: '19',
  compnay: 'Cobra 550',
  chemical: 'Chlorpyriphos 50% + Cypermethrin 5% E.C',
  description: 'Cobra 550 (Chlorpyriphos 50% + Cypermethrin 5% E.C) is ultimate solution for controlling sucking pests and caterpillars. With high knockdown properties and rapid action, say goodbye to unwanted invaders and protect your crops effortlessly. Choose Cobra 550 for superior pest management today.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
        crop: 'Cotton',
        target: 'Aphid, Jassids, Thrips, Whitefly, Spodoptera litura, Spotted bollworm,Pink Bollworm, American bollworm',
        dose: '300 ml'
    },
    {
        crop: 'Rice',
        target: 'Stem borer, Leaf folder',
        dose: '300 ml'
    },
  ],
  dose: [],
  targetPest: [],
  packing: '1l, 2l, 5l, 10l, 50l'
},{
  id: '20',
  compnay: 'Fenocil Super',
  chemical: 'Profenophos 40% + Cypermethrin 4% E.C',
  description: 'Fenocil Super (Profenophos 40% + Cypermethrin 4% E.C) is a potent combination for insect control. Profenofos inhibits acetylcholinesterase, while Cypermethrin disrupts nerve impulses, providing effective pest paralysis and management for your crops.',
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
      crop: 'Cotton',
      target: 'bollworms',
      dose: '400-500 ml in 200-400 l'
    },
  ],
  dose: [],
  targetPest: [],
  packing: '1 l'
},{
  id: '21',
  compnay: 'Fenocil',
  chemical: 'Profenophos 50% E.C',
  description: `Fenocil (Profenophos 50% EC) is a powerful pesticide formulation designed to combat a wide array of insect pests in agricultural and horticultural settings. With its broad-spectrum control, it effectively targets aphids, thrips, whiteflies, leafhoppers, and certain beetles. Acting as a contact and stomach poison, it disrupts the nervous system of insects and mites, leading to rapid paralysis and death. Experience fast knockdown and residual protection against pests, ensuring continued control over time with Fenocil.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'insecticides',
  crop: [
    {
      crop: 'Tea, Cotton, and Others',
      target: 'Red spider mite, Pink mite, Tea mosquito, bug, looper caterpillar, Thrips, Jassid, Aphids, Whiteflies, Bollworm',
      dose: '30-35 ml/Sprayer or 300-400 ml per Acre'
    },
  ],
  dose: [],
  targetPest: [],
  packing: '250ml, 500ml, 1l'
}
]