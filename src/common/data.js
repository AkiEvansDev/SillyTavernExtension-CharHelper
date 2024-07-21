export const DEFAULT_TEMPLATE =
`[{{char}}'s Background:
Gender: {gender};
Ethnicity: {ethnicity};
Age: {number-age};
Occupation: {text-occupation};
Residence: {text-residence};
Skills: {text-skills};
Appearance: {appearance-face?}, {appearance-hair?}, {appearance-eyes?}, {appearance-tall?}, {appearance-body?}, {appearance-boobs?}; {text-additional*};
Outfit: {outfit-top?} {outfit-bottom?outfit-full}, {outfit-footwear?}, {outfit-underwear*?}, {outfit-additional*?}; {text-additional*};
Personality: {personality-type} - {personality-wings}; {text-additional*};]`;

export const DEFAULT_RESOURCE =
`--appearance
Face:
	- custom: {text-custom}:
	- face: {face-shape} face {text-additional}:

Hair:
	- custom: {text-custom}:
	- hair: {hair-length?} {hair-structure?} {color} hair {hair-features?} {text-additional}, {hair-style?}:

Eyes:
	- custom: {text-custom}:
	- eyes: {eyes-shape?} {eyes-expression?} {color} eyes {text-additional}:

Tall:
	- custom: {text-custom}:
	- tall: {number-tall} centimeters tall:

Body:
	- custom: {text-custom}:
	- body: {body-shape} body:

Boobs:
	- custom: {text-custom}:
	- boobs: {boobs-shape} {boobs-size} boobs:

--outfit
Top:
	- custom: {text-custom}:
	- shirt: {top-neckline?} {top-sleeve?} {top-fabric?} {color?} shirt:
	- blouse: {top-neckline?} {top-sleeve?} {top-fabric?} {color?} blouse:
	- jacket: {color?} jacket:

Bottom:
	- custom: {text-custom}:
	- skirt: {skirt-length?} {skirt-fabric?} {color?} skirt:
	- trousers: {trousers-fit?} {color?} trousers:

Full:
	- custom: {text-custom}:
	- long dress: {long-dress-neckline?} {color-type?} {color?} long dress:
	- maid: {color?} maid {maid-type?} dress:
	- tight clothes: tight {color?} clothes:
	- armored: {color?} armored clothes:

Footwear:
	- custom: {text-custom}:
	- shoes: {shoes-heels?} {color?} {shoes-flats}:
	- boots: {color?} {boots}:

Underwear:
	- custom: {text-custom}:
	- panties: {panties-cut?} {panties-fabric?} {panties-features?} {panties-coverage?} {color-type?} {color?} panties:
	- bra: {bra-style?} {bra-features?} {color-type?} {color?} bra:
	- nightdress: {nightdress-style?} {nightdress-features?} {color-type?} {color?} nightdress:

Additional:
	- custom: {text-custom}:
	- cape: {color?} cape:
	- gloves: {gloves-length?} {color?} gloves:
	- stockings: {stockings-sheerness?} {stockings-pattern?} {stockings-length?} {color?} stockings {stockings-features?}:
	- choker: {choker-material?} {color?} choker:
	- jewelry: {jewelry-type} {text-additional}:
	- bare: {bare-type} {text-additional}:

--gender
Gender:
	- female:
	- male:

--ethnicity
Ethnicity:
	- custom: {text-custom}:
	- human:
	- elf:
	- dark elf:
	- demon:
	- succubus:
	- vampire:

--color
Color:
	- custom: {text-custom}:
Gold:
	- light gold: #F8E231:
	- deep gold: #FFD700:
	- honey gold: #FFC394:
Orange:
	- pastel orange: #FFC2C7:
	- deep orange: #FF9900:
	- tangerine orange: #FFA07A:
Red:
	- ruby red: #E0115F:
	- garnet red: #833333:
	- crimson red: #DC143C:
Pink:
	- pastel pink: #FFC5C5:
	- blush pink: #FF69B4:
	- fuchsia pink: #C154C1:
Purple:
	- lilac purple: #C9C3E4:
	- periwinkle purple: #B2E6CE:
	- deep purple: #6c5ce7:
Blue:
	- sky blue: #87CEEB:
	- royal blue: #4169E1:
	- navy blue: #03055B:
Green:
	- mint green: #ACFF79:
	- forest green: #228B22:
	- lime green: #32CD32:
Brown:
	- caramel brown: #F5DEB3:
	- honey brown: #FFC080:
	- chocolate brown: #964B00:
White:
	- ivory white: #FFFFF0:
Grey:
	- ash grey: #AAAAAA:
	- platinum grey: #AAAAAA:
	- charcoal grey: #AAAAAA:
Black:
	- jet black: #000000:
	- obsidian black: #000000:
	- ebony black: #000000:
	- raven black: #000000:

Type:
	- custom: {text-custom}:
	- sheer:
	- translucent:
	- diaphanous:

--face
Shape:
	- oval:
	- heart-shaped:
	- square:
	- round:
	- triangular:
	- diamond:
	- oblong:
	- pear:
	- hexagonal:

--hair
Length:
	- long:
	- short:
	- chin-length:
	- shoulder-length:
	- mid-back length:
	- waist-length:
	- hip-length:
	- floor-length:

Structure:
	- soft:
	- curly:
	- wavy:
	- straight:
	- rough:

Features:
	- tips: with {color} tips:
	- streaks: with {color} streaks:
	- gradient: with {color} gradient:

Style:
	- custom: {text-custom}:
Ponytail:
	- classic ponytail:
	- high ponytail:
	- low ponytail:
	- side ponytail:
	- braided ponytail:
Twin Tails:
	- mega twin tails:
	- twin ponytails:
	- twin buns:
	- twin pigtails:
Up-Dos:
	- bun:
	- chignon:
	- crown braid:
	- half-up half-down:

--eyes
Shape:
	- almond:
	- round:
	- upturned:
	- down-turned:

Expression:
	- bright:
	- dull:
	- piercing:
	- soft:
	- mischievous:
	- intense:
	- calm:

--body
Shape:
	- slim:
	- toned:
	- hourglass:
	- pear-shaped:
	- rectangular:
	- apple-shaped:
	- androgynous:

--boobs
Shape:
	- conical:
	- teardrop:
	- round:

Size:
Medium:
	- D-cup:
	- DD-cup:
	- DE-cup:
Small:
	- A-cup:
	- B-cup:
	- C-cup:
Large:
	- E-cup:
	- F-cup:
	- FF-cup:
Extra Large:
	- G-cup:
	- GG-cup:
	- H-cup:

--top
Neckline:
	- V-neck:
	- crew neck:
	- scoop neck:
	- high collar:

Sleeve:
	- long sleeves:
	- short sleeves:
	- cap sleeves:

Fabric:
	- silk:
	- cotton:
	- linen:

--skirt
Length:
	- mini:
	- micro:
	- pencil:
	- midi:
	- maxi:

Fabric:
	- silk:
	- cotton:
	- polyester:
	- denim:
	- tartan:
	- armored:

--trousers
Fit:
	- slim fit:
	- classic fit:
	- relaxed fit:
	- wide leg:
	- culottes:

--long dress
Neckline:
	- V-neck:
	- scoop neck:
	- crew neck:
	- off-the-shoulder:
	- halter:

--maid
Type:
	- short:
	- middle:
	- long:

--shoes
Heels:
	- stilettos:
	- pumps heels:
	- kitten heels:
	- block heels:

Flats:
	- shoes:
	- loafers:
	- ballet flats:
	- mules:
	- sandals:

--boots
Boots:
	- ankle boots:
	- knee-high boots:
	- over-the-knee boots:
	- chelsea boots:

--panties
Cut:
	- thong:
	- G-string:
	- cheeky:
	- boyshorts:
	- hipsters:

Fabric:
	- silk:
	- mesh:
	- cotton:
	- lycra:

Features:
	- lace:
	- armored:

Coverage:
	- low coverage:
	- mid coverage:
	- full coverage:

--bra
Style:
	- underwire:
	- wire-free:
	- minimizer:
	- push-up:
	- sports:
	- bikini:

Features:
	- lace:
	- mesh:
	- straps:
	- armored:

--nightdress
Style:
	- short:
	- long:
	- babydoll:
	- camisole:
	- peignoir:

Features:
	- lace:
	- ruffles:
	- adjustable straps:
	- soft fabrics:

--gloves
Length:
	- short:
	- mid-cuff:
	- over-the-elbow:
	- gauntlet:

--stockings
Sheerness:
	- sheer:
	- semi-sheer:
	- opaque:

Pattern:
	- solid:
	- striped:
	- polka dots:
	- geometric prints:
	- fishnet:

Length:
	- thigh-high:
	- mid-calf:
	- ankle:

Features:
	- with suspenders:
	- reinforced heel and toe:

--choker
Material:
	- velvet:
	- satin:
	- lace:
	- leather:
	- velvet ribbon:
	- chain:

--jewelry
Type:
	- earrings:
	- rings:

--bare
Type:
	- bare belly:
	- bare thighs:

--personality
Type:
	- ISTJ:
	- ISFJ:
	- INFJ:
	- INTJ:
	- ISTP:
	- ISFP:
	- INFP:
	- INTP:
	- ESTP:
	- ESFP:
	- ENFP:
	- ENTP:
	- ESTJ:
	- ESFJ:
	- ENFJ:
	- ENTJ:

Wings:
	- 1w9:
	- 1w2:
	- 2w1:
	- 2w3:
	- 3w2:
	- 3w4:
	- 4w3:
	- 4w5:
	- 5w4:
	- 5w6:
	- 6w5:
	- 6w7:
	- 7w6:
	- 7w8:
	- 8w7:
	- 8w9:
	- 9w8:
	- 9w1:
`;
