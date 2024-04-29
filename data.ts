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
  compnay: 'Excel Lambda SC',
  chemical: 'Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% Z.C',
  description: 'Excel Lambda SC (Thiamethoxam 12.6% + Lambda Cyhalothrin 9.5% Z.C) is a combination of two different groups of insecticide which contains active ingredients of Thiamethoxam 12.6% + Lambda-cyhalothrin 9.5% ZC. having quick stomach and contact activity and is recommended to control Aphids, Jassids, Thrips & Bolworms in Cotton, Aphid, Shootfly, Stem borer in Maize, Leaf hopper, leaf eating caterpillars in groundnut, Stem fly, semilooper, girdle beetle in Soybean, Thrips & fruit borer in Chilii, thrips, semilooper, tea mosquito bug in tea, thrips, whiteflies, fruit borer in tomato crop',
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
},{
  id: '22',
  compnay: 'MISSING',
  chemical: 'Azoxystrobin 18.2% + Difenoconazole 11.4% S.C',
  description: `MISSING (Azoxystrobin 18.2% + Difenoconazole 11.4% S.C) is a cutting-edge combination fungicide with Azoxystrobin 18.2% W/W & Difenoconazole 11.4% W/W SC, offering dual systemic action for broad-spectrum disease control, while enhancing crop health, quality, and yield.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Paddy",
        "target": "Sheath blight, Blast",
        "dose": "200 ml"
    },
    {
        "crop": "Tomato",
        "target": "Early blight, Late blight",
        "dose": "200 ml"
    },
    {
        "crop": "Chilli",
        "target": "Anthracnose, Powdery Mildew",
        "dose": "200 ml"
    },
    {
        "crop": "Maize",
        "target": "Blight, Downey Mildew",
        "dose": "200 ml"
    },
    {
        "crop": "Wheat",
        "target": "Powdery Mildew, Rust",
        "dose": "200 ml"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '200ml, 500ml, 1l'
},{
  id: '23',
  compnay: 'Dhanu',
  chemical: 'Azoxystrobin 11% + Tebuconazole 18.3% S.C',
  description: `Dhanu(Azoxystrobin 11% + Tebuconazole 18.3% S.C) is a premier fungicide featuring Azoxystrobin 11% & Tebuconazole 18.3% w/w SC, effectively targeting fungal respiration and ergosterol synthesis. This potent blend combines Triazole and Strobilurin chemistries, offering systemic and translaminar movement for rapid dispersion within the plant system.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Apple",
        "target": "Scab, Powdery Mildew & pre mature leaf fall disease",
        "dose": "300 ml/acre"
    },
    {
        "crop": "Onion",
        "target": "Purple Blotch",
        "dose": "300 ml/acre"
    },
    {
        "crop": "Chilli",
        "target": "Anthracnose, Die Back",
        "dose": "300 ml/acre"
    },
    {
        "crop": "Paddy",
        "target": "Blast of paddy, Sheath Blight",
        "dose": "300 ml/acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250ml, 500ml, 1l'
},{
  id: '24',
  compnay: 'Tesu',
  chemical: 'Tebuconazole 10% + Sulphur 63% W.G',
  description: `Tesu (Tebuconazole 10% + Sulphur 63% W.G) is an efficient and cost-effective solution for fungal disease control in chilli and soybean, harnessing a phytotonic effect to enhance yield and produce quality. Equipped with protective, curative, and eradicative properties, it ensures comprehensive crop protection and optimal results.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Chilli",
        "target": "Powdery mildew and Fruit rot",
        "dose": "1250 /Ha"
    },
    {
        "crop": "Soybean",
        "target": "Leaf spot and Pod blight",
        "dose": "1250 /Ha"
    },
  ],
  dose: [],
  targetPest: [],
  packing: '250ml, 500ml, 1l'
},{
  id: '25',
  compnay: 'Profit',
  chemical: 'Propiconazole 25% E.C',
  description: `Profit (Propiconazole 25% EC) is a systemic fungicide belonging to the Triazole group, renowned for its broad spectrum of activity. This potent formulation offers comprehensive control against various leaf and stem diseases in cereals, ensuring optimal crop protection and health.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop:[
    {
        "crop": "Wheat",
        "target": "Karnal Bunt, Brown rust, Black rust, Yellow rust",
        "dose": "200 ml/acre"
    },
    {
        "crop": "Paddy",
        "target": "Sheath blight, Black dirty Grains",
        "dose": "200 ml/acre"
    },
    {
        "crop": "Groundnut",
        "target": "Tikka disease, Rust",
        "dose": "200 ml/acre"
    },
    {
        "crop": "Tea",
        "target": "Blister blight",
        "dose": "50-100 ml/acre"
    },
    {
        "crop": "Soybean",
        "target": "Rust",
        "dose": "200 ml/acre"
    },
    {
        "crop": "Banana",
        "target": "Sigatoka leaf spots",
        "dose": "200 ml/acre"
    },
    {
        "crop": "Coffee",
        "target": "Leaf rust",
        "dose": "320 ml/acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250ml, 500ml, 1l'
},{
  id: '26',
  compnay: 'Hexcel',
  chemical: 'Hexaconazole 5% S.C',
  description: `Hexcel (Hexaconazole 5% SC) is a distinctive systemic triazole fungicide, renowned for its protective, curative, and eradicant properties, coupled with potent antisporulant and translaminar action for comprehensive disease control.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Paddy",
        "target": "Sheath blight",
        "dose": "0.2% or 200 ml/100 lt. water"
    },
    {
        "crop": "Mango",
        "target": "Powdery mildew",
        "dose": "0.2% or 200 ml/100 lt. water"
    },
    {
        "crop": "Grapes",
        "target": "Powdery mildew",
        "dose": "500-1000 ml"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100ml, 250ml, 500ml, 1l, 5l'
},{
  id: '27',
  compnay: 'Swift',
  chemical: 'Carbendazim 12% + Mancozeb 63% W.P',
  description: `Sixer (Carbendazim 12% + Mancozeb 63% W.P) is a sophisticated blend comprising Mancozeb 63%WP, a contact fungicide from the dithiocarbamate group, and Carbendazim 12%WP, a systemic fungicide from the Benzimidazole carbamate group. With its multisite protective and curative action, Sixer inhibits spore germination, providing dual protection both internally and externally for enhanced disease control.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Paddy",
        "target": "Blast",
        "dose": "300 gm"
    },
    {
        "crop": "Groundnut",
        "target": "For seed treated groundnut- Tilkka, Leaf Spot, Collar Rot, Dry Root Rot",
        "dose": "2.5 gm/ Kg Seed"
    },
    {
        "crop": "Potato",
        "target": "Late Blight. Early blight, Black Scurf",
        "dose": "300 gm"
    },
    {
        "crop": "Grapes",
        "target": "Powdery and Downy Mildew, Anthracnose",
        "dose": "0.15 % ( Depending on the crop canopy)"
    },
    {
        "crop": "Mango",
        "target": "Anthranose, Powdery Mildew",
        "dose": "0.15 % ( Depending on the crop canopy)"
    },
    {
        "crop": "Tea",
        "target": "Blister Blight, Grey Blight, Red Rot, Die Back, Black Rot",
        "dose": "500-600 gm"
    },
    {
        "crop": "Groundnut",
        "target": "In Foliar spray groundnut - Leaf Spot And Blast",
        "dose": "300 gm"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '20 gm, 100 gm, 250 gm, 500 gm, 1 kg'
},{
  id: '28',
  compnay: 'Excel M-45',
  chemical: 'Mancozeb 75% W.P',
  description: `Excel M-45 (Mancozeb 75% WP): a potent contact fungicide belonging to the Dithiocarbamate group. It effectively inhibits fungal growth and disease spread by reducing enzyme activity, thus disrupting energy production and ultimately leading to fungal death.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Paddy",
        "target": "Blast",
        "dose": "600-800 gm"
    },
    {
        "crop": "Wheat",
        "target": "Brown and Black rust",
        "dose": "600-800 gm"
    },
    {
        "crop": "Potato",
        "target": "Early and Late Blight",
        "dose": "600-800 gm"
    },
    {
        "crop": "Tomato",
        "target": "Early blight, Leaf spot",
        "dose": "600-800 gm"
    },
    {
        "crop": "Groundnut",
        "target": "Tikka and rust",
        "dose": "600-800 gm"
    },
    {
        "crop": "Grapes",
        "target": "Downy mildew, Anthracnose",
        "dose": "600-800 gm"
    },
    {
        "crop": "Chilli",
        "target": "Fruit rot, Leaf spot",
        "dose": "600-800 gm"
    },
    {
        "crop": "Banana",
        "target": "Sigatoka leaf spot",
        "dose": "600-800 gm"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100gm, 250gm, 500gm, 1kg'
},{
  id: '29',
  compnay: 'Themis',
  chemical: 'Thiophanate Methyl 70% W.P',
  description: `Themis (Thiophanate Methyl 70% W.P) is a potent fungicide containing Thiophanate Methyl 70% WP, offering broad-spectrum preventive, curative, and systemic action against a wide array of fungal pathogens and leaf spot diseases.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Papaya",
        "weed": "Powdery mildew",
        "dose": "250 gm/Acre"
    },
    {
        "crop": "Apple",
        "weed": "Scab",
        "dose": "250 gm/Acre"
    },
    {
        "crop": "Tomato",
        "weed": "Ring rot",
        "dose": "250 gm/Acre"
    },
    {
        "crop": "Bottle gourd",
        "weed": "Anthracnose",
        "dose": "250 gm/Acre"
    },
    {
        "crop": "Grapes",
        "weed": "Powdery mildew, Anthracnose, Rust",
        "dose": "250 gm/Acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100gm, 250gm'
},{
  id: '30',
  compnay: 'Max Sulf Gold',
  chemical: 'Sulphur 80% W.D.G',
  description: `Max Sulf Gold Joker is a groundbreaking formulation enriched with Fipronil 80% WDG, redefining pest control with modern precision and ease of use. Its innovative dust-free particles guarantee effortless handling, accurate measurement, and efficient dosing, ensuring superior solubility in water for optimal crop coverage. Beyond its powerful pest control capabilities, Joker also fosters plant growth, providing extended protection and increased crop yields.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'fungicides',
  crop: [
    {
        "crop": "Grape",
        "target": "Powdery Mildew",
        "dose": "1.50-2.00 kg/ha (ai), 1.875-2.50 kg/Ha (foundation)"
    },
    {
        "crop": "Cowpea, Guar, Pea",
        "target": "Powdery Mildew",
        "dose": "1.50-2.00 kg/ha (ai), 1.875-2.50 kg/Ha (foundation)"
    },
    {
        "crop": "Apple",
        "target": "Powdery Mildew",
        "dose": "1.50-2.00 kg/ha (ai), 1.875-2.50 kg/Ha (foundation)"
    },
    {
        "crop": "Cumin",
        "target": "Powdery Mildew",
        "dose": "1.50-2.00 kg/ha (ai), 1.875-2.50 kg/Ha (foundation)"
    },
    {
        "crop": "Mango",
        "target": "Powdery Mildew",
        "dose": "1.50-2.00 kg/ha (ai), 1.875-2.50 kg/Ha (foundation)"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '1kg, 20kg, 25kg, 50kg'
},{
  id: '31',
  compnay: 'Pyri Star',
  chemical: 'Bispyribac Sodium 10% S.C',
  description: `Pyri Star (Bispyribac-sodium 10% S.C) is the organic sodium salt of bispyribac: a versatile post-emergent herbicide renowned for its broad-spectrum efficacy against grasses, sedges, and broadleaf weeds in rice crops.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
        "crop": "Rice (Nursery)",
        "target": "Echinochloa crusgalli, Echinochloa colonum",
        "dose": "200 ml/Ha"
    },
    {
        "crop": "Rice (Transplanted)",
        "target": "Ischaemum rugosum, Cyperus difformis, Cyperus iria",
        "dose": "200 ml/Ha"
    },
    {
        "crop": "Rice (Directly seeded)",
        "target": "Fimbristylis miliacea, Eclipta alba, Ludwigia parviflora, Monochoria vaginalis, Alternanthera philoxeroides, Sphenoclcea zeylenica",
        "dose": "200 ml/Ha"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100ml, 300ml, il, 5l, 10l'
},{
  id: '32',
  compnay: 'Creta',
  chemical: 'Pretilachlor 50% E.C',
  description: `Creta (Pretilachlor 50% EC) is a pre-emergence herbicide belonging to the Chloroacetamide group, offering broad-spectrum control against all types of weeds in rice fields. Creta is absorbed primarily by germinating shoots and secondarily by roots, with translocation throughout the plant, leading to higher concentrations in vegetative parts than in reproductive parts.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      crop: "Paddy",
      target: "All narrow and broad leaf weeds- Echinochloa crusgalli, Echinochloa colonum Cyperusdifformis Cyperusiria Fimbristylismilliacea Eclipta alba Ludwigiapulviflora Leptochloachinensis Monochorea vaginalis Panicumrepens",
      dose: "500ml/Acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100 ml, 250 ml, 500 ml,1 ltr, 5 ltr'
},{
  id: '33',
  compnay: 'Creta Super',
  chemical: 'Pretilachlor 37% E.W',
  description: `Creta Super (Pretilachlor 37% E.W) is fortified with Pretilachlor 37% EW, it stands as a pre-emergence selective herbicide tailored for transplanted rice fields. Effectively targeting grass, broadleaf, and sedge weeds, Creta Super ensures crop safety while delivering optimal control. With a recommended application rate equivalent to 600ml per acre, it provides reliable and efficient weed management for enhanced rice cultivation.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "Transplanted Rice",
      "target": "Echinochloa crusgalli, Echinochloa colonum, Cyperus difformis, Cyperus iria, Digitaria sanguinalis, Fimbristylis miliaceae, Eclipta alba, Ludwigia parviflora, Monochoria vaginalis",
      "dose": "1500-1875 ml/Ha"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250ml, 600ml, 1.2l, 3l'
},{
  id: '34',
  compnay: 'Weedomil 58',
  chemical: '2,4-d Amine Salt 58% S.L',
  description: `Weedomil 58 (2,4-d Amine Salt 58% S.L) is a solution of the dimethylammonium salt of the organic acid 2,4-Dichlorophenoxyacetic acid, functioning as a selective systemic phenoxy herbicide. This post-emergent herbicide effectively targets both annual and perennial broadleaf weeds in cereals, maize, rice, sorghum, and sugarcane crops.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "Transplanted Rice",
      "target": "Echinochloa crusgalli, Echinochloa colonum, Cyperus difformis, Cyperus iria, Digitaria sanguinalis, Fimbristylis miliaceae, Eclipta alba, Ludwigia parviflora, Monochoria vaginalis",
      "dose": "1500-1875 ml/Ha"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250 ml, 500 ml, 1 ltr, 2.5 ltr, 5 ltr'
},{
  id: '35',
  compnay: 'Weedomil 38',
  chemical: '2,4-d Ethyl Ester 38% E.C',
  description: `Creta Super (Pretilachlor 37% E.W) is fortified with Pretilachlor 37% EW, it stands as a pre-emergence selective herbicide tailored for transplanted rice fields. Effectively targeting grass, broadleaf, and sedge weeds, Creta Super ensures crop safety while delivering optimal control. With a recommended application rate equivalent to 600ml per acre, it provides reliable and efficient weed management for enhanced rice cultivation.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "Sorghum",
      "target": "Cyperus Iria, Digera Arvensis, Convolvulus Arvensis, Trianthema Sp., Tridax Procumbens, Euphorbia Hirta, Phyllanthus Niruri.",
      "dose": "600 ml/acre"
    },
    {
      "crop": "Maize",
      "target": "Trianthema Monogyna, Amaranthus Sp., Tribulus Terrestris, Boerhaavia Diffusa, Euphorbia Hirta, Portulaca Oleracea, Cyperus Sp",
      "dose": "600 ml/acre"
    },
    {
      "crop": "Wheat",
      "target": "Chenopodium Album, Fumaria Parviflora, Melillotus Alba , Vicia Sative , Asphodelus Tenuifolius , Convolvulus Arvensi;S",
      "dose": "300-500 ml/acre"
    },
    {
      "crop": "Sugarcane",
      "target": "Cyperus Iria Digitaria Sp. Dactylactenium Aegyptium Digera Arvensis Portulaca Oleracea Commelina Benghalensis Convolvulus Arvensis",
      "dose": "300-500 ml/acre"
    },
    {
      "crop": "Potato",
      "target": "Chenopodium Album, Asphodelus Tenuifolius, Anagallis Arvensis, Convolvulus Arvensis, Cyperus Iria, Portulaca Oleracea.",
      "dose": "500 ml/acre"
    },
    {
      "crop": "Aquatic Weeds non Crop Area",
      "target": "Eichhornia Crassipes., Parthenium Hysterophorus, Cyperus Rotundus",
      "dose": "600 ml/acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250 ml, 500 ml, 1 ltr, 2 ltr, 5 ltr'
},{
  id: '36',
  compnay: 'Excel 71',
  chemical: 'Ammonium Salt of Glyphosate 71% S.G',
  description: `Excel 71 is a powerful non-selective, non-residual post-emergence herbicide that swiftly absorbs through foliage and travels throughout the plant. This highly effective solution targets numerous annual and perennial grasses, broadleaf weeds, trees, and woody brush species in both cropland and non-crop areas. Ideal for general weed control in industrial, recreational, and public spaces, as well as farmsteads, it also serves to manage unwanted vegetation in row crops, vine crops, and tree orchards. Notably, Excel 71 exhibits low toxicity towards birds and aquatic organisms and is safe for bees.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "Tea and Non-cropped areas",
      "target": "Acalypha indica, sida acuta, Ipomoea digitata, Cichorium intybus, Digera arvensis, Digitaria sanguinalis, Paspalum conjugatum, Ageratum conyzoides, Cynodon dactylon, Cyperus rotundus, eragrostis spp.",
      "dose": "2.13 gm/ha (a.i.), 3 l/ha (Formulation) || 60 gm per 15 ltr water"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '100gm, 250gm, 500gm, 1kg, 2kg, 4kg, 5kg, 10kg'
},{
  id: '37',
  compnay: 'Glyexcel Ultra',
  chemical: 'Glyphosate 54% S.L',
  description: `Glyexcel Ultra is a systemic, non-selective, high-loaded Glyphosate formulation featuring IPA salt, delivering 'More Power - More Coverage' for consistent control of all weed types in non-crop situations. This broad-spectrum solution ensures efficient weed management with enhanced efficacy and coverage.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "General weed control in non cropped areas",
      "target": "Ageratum conyoides, Alternenthera sessile, Echinochloa spp., Eclipta alba, Ischaemum rugosum, Setaria spp., Commelina spp., Cyperus spp.",
      "dose": "1400 ml Per Acre || 100 ml for 15 liters of water"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '1l'
},{
  id: '38',
  compnay: 'Glyexcel',
  chemical: 'Glyphosate 41% S.L',
  description: `Glyexcel (Glyphosate 41% SL) is a potent non-selective systemic herbicide from the Organophosphorus group, disrupting EPSP synthesis in weed plants for effective control of both annual and perennial weeds. Upon application, Glyexcel is swiftly absorbed by weed plants and translocates to their roots, ensuring complete eradication. Widely utilized in plantation crops, water channels, bunds, and open fields, Glyexcel offers comprehensive weed management for diverse agricultural environments.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "Tea",
      "target": "All types of narrow and broad leaves",
      "dose": "0.8 to 1.2 ltr/acre"
    },
    {
      "crop": "Open Fields",
      "target": "Different types of weeds",
      "dose": "0.8 to 1.2 ltr/acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '500 ml, 1 ltr, 5 ltr'
},{
  id: '39',
  compnay: 'Pendicil',
  chemical: 'Pendimethalin 30% E.C',
  description: `Pendicil (Pendimethalin 30% EC) is an effective herbicide classified under the dinitroaniline group, utilized for both pre-emergence and post-emergence applications to combat annual grasses and specific broadleaf weeds. Its mechanism involves inhibiting cell division and elongation, alongside microtubule assembly inhibition, ensuring thorough weed control.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "Onion",
      "target": "Echinochloa, Euphorbia, Wild Amaranthus, Phyllanthus, etc",
      "dose": "1.0 – 1.5 lt/acre"
    },
    {
      "crop": "Cotton",
      "target": "Echinochloa, Euphorbia, Wild Amaranthus, Phyllanthus, Paspalum, etc",
      "dose": "1.0 – 1.5 lt/acre"
    },
    {
      "crop": "Soybean",
      "target": "Echinochloa, Euphorbia, Wild Amaranthus",
      "dose": "1.0 – 1.5 lt/acre"
    },
    {
      "crop": "Wheat",
      "target": "Phalaris, Carnoplus, Poa, Chenopodium, Portuluca, Anagallis",
      "dose": "1.0 – 1.5 lt/acre"
    },
    {
      "crop": "Paddy",
      "target": "Wild Rice, Echinochloa, Cyperus, Eclipta",
      "dose": "1.5 – 2.0 lt/acre"
    },
    {
      "crop": "Black gram",
      "target": "Echinochloa, Euphorbia, Wild Amaranthus",
      "dose": "1.0 – 1.5 lt/acre"
    },
    {
      "crop": "Green gram",
      "target": "Echinochloa, Euphorbia, Wild Amaranthus",
      "dose": "1.0 – 1.5 lt/acre"
    },
    {
      "crop": "Garlic",
      "target": "Echinochloa, Euphorbia, Wild Amaranthus, Phyllanthus, etc",
      "dose": "1.0 – 1.5 lt/acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '250ml, 500 ml, 1 ltr, 5 ltr'
},{
  id: '40',
  compnay: 'Hilquat',
  chemical: 'Paraquat Di-chloride 24% S.L',
  description: `Hilquat (Paraquat Dichloride 24% SL) is a potent broad-spectrum, non-selective contact herbicide featuring 24% Paraquat dichloride AI, renowned for its efficacy in controlling broadleaved weeds and grasses. It's mechanism involves generating superoxide during photosynthesis, which subsequently damages cell membranes and cytoplasm, ensuring effective weed control.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'herbicides',
  crop: [
    {
      "crop": "Tea",
      "target": "Imperata cylindrica, Seteria sp., Commelina benhgalensis, Boerhavia hispida, Paspalum conjugatum",
      "dose": "340-1700 ml/acre"
    },
    {
      "crop": "Potato",
      "target": "Chenopodium sp., Angallis arvensis, Trianthema monogyna, Cyperus rotundus",
      "dose": "424-850 ml/acre"
    },
    {
      "crop": "Cotton",
      "target": "Digera arvensis, Cyperus iria",
      "dose": "500-850 ml/acre"
    },
    {
      "crop": "Rubber",
      "target": "Digitaria Sp., Eragrostis Sp., Fimbristylis Sp",
      "dose": "500-1000 ml/acre"
    },
    {
      "crop": "Paddy",
      "target": "Ageratum conyzoides, Commelina benghalensis, Echinochloa crusgalli, Panicum repens, Cyperus iria, Brachiaria mutoca",
      "dose": "850-1600 ml/acre"
    },
    {
      "crop": "Wheat",
      "target": "Grassy & Broadleaved weeds",
      "dose": "1700 ml/acre"
    },
    {
      "crop": "Grapes",
      "target": "Cyperus rotundus, Cynodon dactylon, Convolvulus sp. portulaca sp. Tridax Sp.",
      "dose": "1000 ml/acre"
    },
    {
      "crop": "Aquatic Weeds",
      "target": "Eichhonia crassipes, Hydrilla",
      "dose": "17000-1000, 1680 ml/acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '500 ml, 1 ltr, 5 ltr'
},{
  id: '41',
  compnay: 'Runner Gold',
  chemical: 'Triacontanol 0.05% G.R',
  description: `Runner Gold (Triacontanol 0.05% GR) is a potent compound known for enhancing photosynthesis, plant growth, and reproduction. As a naturally occurring plant growth promoter, it elevates cell division rates, resulting in larger root and shoot mass. This PGR serves as an effective metabolic activator. Available in both GR and EC formulations, our company offers a versatile solution to boost crop productivity and vitality.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'plant-growth-regulators',
  crop: [
    {
      "crop": "Cotton, Rice, Tomato, Chilli, Groundnut",
      "target": "increasing the yield",
      "dose": "5 Kg/acre"
    },
    {
      "crop": "Mango, Pineapple etc and various vegetables etc",
      "target": "Enlarging Fruit size",
      "dose": "5 Kg/acre"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '5kg'
},{
  id: '42',
  compnay: 'Runner Gold L',
  chemical: 'Triacontanol 0.1% E.W',
  description: `Runner Gold L (Triacontanol 01% EW) is a specialized solution aimed at boosting crop yields in various crops such as cotton, chilies, tomatoes, rice, and groundnuts. This formulation plays a crucial role in enlarging fruit size, ensuring enhanced productivity and quality.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'plant-growth-regulators',
  crop: [
    {
      crop: 'Cotton',
      target: '1st spray - 45 days after planting. 2nd spray - 65 days after planting. 3rd spray - 85 days after planting',
      dosage: '100 ml per acre in 160-200l of water'
    },
    {
      crop: 'Tomato',
      target: '1st spray - 25 days after planting. 2nd spray - 45 days after planting. 3rd spray - 65 days after planting',
      dosage: '100 ml per acre in 160-200l of water'
    },
    {
      crop: 'Rice',
      target: '1st spray - 25 days after planting. 2nd spray - 45 days after planting. 3rd spray - 65 days after planting',
      dosage: '100 ml per acre in 160-200l of water'
    },
    {
      crop: 'Chillies',
      target: '1st spray - 25 days after planting. 2nd spray - 45 days after planting. 3rd spray - 65 days after planting',
      dosage: '100 ml per acre in 160-200l of water'
    },
    {
      crop: 'Groundnut',
      target: '1st spray - 25 days after planting. 2nd spray - 45 days after planting. 3rd spray - 65 days after planting',
      dosage: '100 ml per acre in 160-200l of water'
    }
  ],
  dose:[],
  targetPest: [],
  packing: '1l'
},{
  id: '43',
  compnay: 'Profit',
  chemical: 'Paclobutrazole 23% S.C',
  description: `Profit (Paclobutrazole 23% S.C) is a widely employed plant growth regulator, particularly favored in mango cultivation. Its primary function involves inhibiting gibberellin synthesis while promoting flowering and fruiting. This dual action results in reduced vegetative growth, enhanced transfer of assimilates to reproductive organs, and increased yield potential.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'plant-growth-regulators',
  crop: [
    {
      "crop": "Mango (trees 7 – 15 Years)",
      "target": "Applied after the harvest of fruits. Any time from July to Oct will be ideal",
      "dose": "15 ml/tree in 5l water"
    },
    {
      "crop": "Mango (tree 16- 25yrs)",
      "target": "Applied after the harvest of fruits. Any time from July to Oct will be ideal",
      "dose": "20 ml/tree in 5l water"
    },
    {
      "crop": "Mango (tree >25yrs)",
      "target": "Applied after the harvest of fruits. Any time from July to Oct will be ideal",
      "dose": "30 ml/tree in 5l water"
    }
  ],
  dose: [],
  targetPest: [],
  packing: '1l'
},{
  id: '44',
  compnay: 'Profit Super',
  chemical: 'Paclobutrazole 40% S.C',
  description: `Profit Sugar (Paclobutrazole 40% S.C) is a vital nutrient channelizer that optimizes the utilization of fertilizers, facilitating proper growth, fruit development, branch formation, and flowering in crops.`,
  isFeatured: true,
  imageUrl: '/images/products/image_8.webp',
  categoryId: 'plant-growth-regulators',
  crop: [
    {
      "crop": "Red Gram",
      "target": "Increases Tillering Or Branching, Increasing Flowering Results To Increase Yield, Bushy Plant Shape, Thicker & Healthy Stem, Reduced Internodal Distance, Development Of Better Fruit Color And Size.",
      "dose": " 30ml per Acre"
    },
  ],
  dose: [],
  targetPest: [],
  packing: '30ml, 50ml, 100ml'
}

]