export const DEFAULT_TEMPLATE =
`[{{char}}'s Background:
Gender: {gender};
Ethnicity: {ethnicity};
Age: {number-age};
Occupation: {occupation};
Residence: {residence};
Skills: {skills};
Story: {story};
Secret: {secret};
Likes: {likes};
Dislikes: {dislikes};
Speech: {speech};
Sex Practices and Fetishes: {sex-practices-and-fetishes};
Relationship: {relationship};
Appearance: {appearance-face?} + {appearance-hair?} + {hair-style?} + {appearance-eyes?} + {appearance-tall?} + {appearance-body?} + {appearance-boobs?} + {text-additional*};
Outfit: {outfit-top?} + {outfit-full?outfit-bottom} + {outfit-footwear?} + {outfit-underwear*?} + {outfit-additional*?} + {text-additional*};
Personality: {personality?} + {text-custom} + {text-additional*};]`;

export const DEFAULT_RESOURCE =
`--gender
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

--occupation
Occupation:
    - no:
    - text: {text-occupation}:
    - unemployed:

--residence
Residence:
    - no:
    - text: {text-residence}:

--skills
Skills:
    - no:
    - text: {text-skills}:

--story
Story:
    - no:
    - text: {text-story}:

--secret
Secret:
    - no:
    - text: {text-secret}:

--likes
Likes:
    - no:
    - text: {text-likes}:

--dislikes
Dislikes:
    - no:
    - text: {text-dislikes}:

--speech
Speech:
    - no:
    - text: {text-speech}:
    - variants: {speech-variants*}:

--sex
Practices and Fetishes:
    - no:
    - text: {text-sex}:

--relationship
Relationship:
    - no:
    - text: {text-relationship}:

Variants:
	- direct: Straightforward, to-the-point, and unambiguous in communication.
	- indirect: Subtle, hinting, and often using circumlocution or euphemisms.
	- formal: Polite, precise, and adhering to strict linguistic conventions.
	- informal: Casual, colloquial, and often using slang or colloquialisms.
	- sarcastic: Using irony, understatement, or mocking tone to convey a message.
	- rhetorical: Emphasizing style and persuasive techniques over literal meaning.
	- concise: Using the fewest words necessary to convey the intended message.
	- elaborate: Providing detailed, extensive explanations or descriptions.
	- humorous: Incorporating wit, irony, or playful language for comedic effect.
	- authoritative: Speaking with confidence, assertiveness, and a commanding presence.
	- confrontational: Engaging in arguments or discussions with a challenging, sometimes aggressive tone.
	- empathetic: Expressing understanding, compassion, and emotional support in speech.
	- persuasive: Using language to influence opinions, beliefs, or actions.
	- whimsical: Incorporating playful, fanciful, or nonsensical elements in speech for creative effect.
	- toxic: Using speech to manipulate, gaslight, or belittle others, often with malicious intent.
	- uncensored: forthrightly expressing thoughts and opinions without restraint or tact, potentially causing offense.
	- blunt: Speaking honestly and straightforwardly, often without concern for others' feelings.
	- candor: Openness, honesty, and sincerity in communication.
	- clarity: Articulating thoughts clearly and effectively, with minimal confusion.
	- eloquence: Fluent, persuasive, and captivating speech, often with a touch of artistry.
	- mannered: Adopting a distinctive, often affected or artificial, speech pattern.
	- vivacious: Speaking with energy, enthusiasm, and a lively, engaging personality.

--appearance
Face:
	- face: {face-shape} face:
	- custom: {text-custom}:

Hair:
	- hair: {hair-length?} {hair-structure?} {color} hair {hair-features?}:
	- custom: {text-custom}:

Eyes:
	- eyes: {eyes-shape?} {eyes-expression?} {color} eyes {eyes-features?}:
	- custom: {text-custom}:

Tall:
	- tall: {number-tall} centimeters tall:
	- custom: {text-custom}:

Body:
	- body: {body-shape} body:
	- custom: {text-custom}:

Boobs:
	- boobs: {boobs-shape} {boobs-size} boobs:
	- custom: {text-custom}:

--outfit
Top:
	- custom: {text-custom}:
	- shirt: {top-neckline?} {top-sleeve?} {top-features?} {color?} shirt:
	- blouse: {top-neckline?} {top-sleeve?} {top-features?} {color?} blouse:
	- jacket: {text-additional} {color?} jacket:

Bottom:
	- custom: {text-custom}:
	- skirt: {skirt-length?} {skirt-fabric?} {color?} skirt:
	- trousers: {trousers-fit?} {color?} trousers:

Full:
	- custom: {text-custom}:
	- long dress: {long-dress-neckline?} {color?} {material-type?} long dress:
	- maid: {color?} {maid-type?} maid dress:
	- tight clothes: tight {color?} {material-type?} clothes:
	- armored: {text-additional} {color?} armored clothes:
    - toga: {color?} {material-type?} toga:

Footwear:
	- custom: {text-custom}:
	- shoes: {text-additional} {color?} {shoes-flats?shoes-heels}:
	- boots: {text-additional} {color?} {boots}:

Underwear:
	- custom: {text-custom}:
	- bra: {bra-style?} {bra-features?} {color?} {material-type?} bra:
	- without bra: No bra
	- panties: {panties-cut?panties-coverage} {panties-features?} {color?} {material-type?} panties:
	- without panties: No panties
	- nightdress: {nightdress-style?} {nightdress-features?} {color?} {material-type?} nightdress:

Additional:
	- custom: {text-custom}:
	- cape: {color?} cape:
	- gloves: {gloves-length?} {color?} gloves:
	- stockings: {stockings-sheerness?} {stockings-pattern?} {stockings-length?} {color?} stockings {stockings-features?}:
	- choker: {text-additional} {choker-material?} {color?} choker:
	- jewelry: {text-additional} {jewelry-type}:
	- bare: {bare-type}:

--personality
Personality:
    - four letters and wings: {personality-type} - {personality-wings}:

--color
Color:
	- custom: {text-custom}:
    - gold: #D4AF37:
    - orange: #FFA500:
    - red: #FF0000:
    - pink: #FFC0CB:
    - purple: #A020F0:
    - blue: #0000FF:
    - green: #00FF00:
    - white: #FFFFFF:
    - grey: #AAAAAA:
	- black: #000000:
	- light gold: #F8E231:
	- deep gold: #FFD700:
	- honey gold: #FFC394:
	- pastel orange: #FFC2C7:
	- deep orange: #FF9900:
	- tangerine orange: #FFA07A:
	- ruby red: #E0115F:
	- garnet red: #833333:
	- crimson red: #DC143C:
	- pastel pink: #FFC5C5:
	- blush pink: #FF69B4:
	- fuchsia pink: #C154C1:
	- lilac purple: #C9C3E4:
	- periwinkle purple: #B2E6CE:
	- deep purple: #6c5ce7:
	- sky blue: #87CEEB:
	- royal blue: #4169E1:
	- navy blue: #03055B:
	- mint green: #ACFF79:
	- forest green: #228B22:
	- lime green: #32CD32:
	- caramel brown: #F5DEB3:
	- honey brown: #FFC080:
	- chocolate brown: #964B00:
	- ivory white: #FFFFF0:
	- ash grey: #AAAAAA:
	- platinum grey: #AAAAAA:
	- charcoal grey: #AAAAAA:
	- jet black: #000000:
	- obsidian black: #000000:
	- ebony black: #000000:
	- raven black: #000000:

--material
Type:
	- custom: {text-custom}:
	- sheer: Extremely thin and lightweight, allowing light to pass through and providing little opacity or coverage.
	- translucent: Allowing light to pass through while obscuring details, often appearing as a pale or washed-out version of the underlying material.
	- diaphanous: Exceedingly thin and delicate, with a gossamer-like quality that allows light to filter through and creates an ethereal, almost transparent appearance.

--face
Shape:
	- oval: Considered the ideal face shape, an oval face is symmetrical, with the forehead width approximately equal to the width of the cheekbones and chin. The jawline is smooth and curved.
	- heart-shaped: A heart-shaped face is widest at the temples, tapering down to a pointed chin. The forehead and cheekbones are narrower than the jawline, giving the appearance of a heart when viewed from the side.
	- square: A square face has equal width and length, with a strong, angular jawline and prominent cheekbones. Forehead, cheekbones, and chin are of similar proportions.
	- round: A round face is characterized by fullness throughout, with no distinct angles or sharp lines. The width and length are nearly equal, and the jawline is soft and curved.
	- triangular: In a triangular face, the widest part is at the temples, narrowing down to a pointed chin. The forehead and cheekbones are much narrower than the jawline.
	- diamond: A diamond face is narrow at the temples and forehead, with a broad, square jawline. The cheekbones are high and prominent.
	- oblong: An oblong face is longer than it is wide, with a rectangular shape. The forehead, cheekbones, and chin are of similar proportions, with a straight jawline.
	- pear: A pear-shaped face is widest at the temples and forehead, narrowing down to a pointed chin. The jawline is soft and curved, with the lower half of the face being narrower than the upper half.
	- hexagonal: A hexagonal face is rare and has six distinct facial features, with the widest part at the temples and forehead, and a narrow, pointed chin. The jawline is angular and prominent.

--hair
Length:
	- long: Hair that reaches the lower back or below, often requiring regular trims to maintain a neat appearance.
	- short: Hair that is cut close to the head, usually no longer than 2-3 inches.
	- chin-length: Hair that extends to the chin or just below, often framing the face.
	- shoulder-length: Hair that reaches the shoulders or slightly above, providing a balance between style and practicality.
	- mid-back length: Hair that falls between the shoulder blades and the lower back, typically between 18-22 inches.
	- waist-length: Hair that reaches the natural waistline, usually between 22-26 inches.
	- hip-length: Hair that extends to the hips or just above, typically between 26-30 inches.
	- floor-length: Hair that drapes down to the floor or below.

Structure:
	- soft: Hair with a gentle, silky texture that easily conforms to touch or styling.
	- curly: Hair that naturally forms coils or spirals, often with a defined pattern and varying tightness.
	- wavy: Hair that has a loose, undulating pattern, neither straight nor tightly curled.
	- straight: Hair with a linear, uncurled shape that lies flat against the head.
	- rough: Coarse, unmanageable hair with a dry, brittle texture that can be prone to tangling or breakage.

Features:
	- custom: {text-custom}:
	- color ends: with {color} ends:
	- streaks: with {color} streaks:
	- gradient: with {color} gradient:

Style:
Other:
	- custom: {text-custom}:
Ponytail:
	- classic ponytail: A timeless style where the hair is gathered at the nape of the neck, secured with an elastic band.
	- high ponytail: The hair is swept up high on the crown, creating a sleek and polished look.
	- low ponytail: Instead of gathering the hair at the nape, it's secured lower down, often near the shoulders or chest.
	- side ponytail: The hair is gathered to one side of the head, creating an asymmetrical yet stylish look.
	- braided ponytail: A combination of a regular ponytail and a braid, adding an extra layer of texture and visual interest.
Twin Tails:
	- mega twin tails: Exaggerated, long, and flowing twin tails that often reach the lower back or even the hips.
	- twin ponytails: Similar to regular ponytails, but with two separate ones, one on each side of the head.
	- twin buns: Two small buns, one on each side of the head, often adorned with hairpins or other decorative elements.
	- twin pigtails: Twin versions of the classic pigtail, where the hair is divided into two sections and twisted into tight, rounded buns.
Up-Dos:
	- bun: A versatile updo where the hair is coiled and secured at the top of the head, often with bobby pins or a hair tie.
	- chignon: A low, sleek bun typically worn at the back of the head, often with a center part.
	- crown braid: A braided updo that starts at the crown of the head and weaves its way down, often ending in a small bun or loose tail.
	- half-up half-down: A style that combines both up and down elements. The top half of the hair is secured in a bun, chignon, or ponytail, while the bottom half flows freely.

--eyes
Shape:
	- custom: {text-custom}:
	- almond: Eyes that are elongated and narrow, with a pointed outer corner. This shape is often associated with Asian and Middle Eastern features.
	- round: Eyes with a circular shape, typically found in people of European and African descent. Round eyes can appear larger and more expressive.
	- upturned: Eyes with an upward tilt at the outer corner, giving a slightly feline or innocent appearance.
	- down-turned: Eyes with a downward tilt at the outer corner, often conveying a more serious or melancholic expression.

Expression:
	- bright: Shining with lively energy and enthusiasm, often accompanied by a warm, engaging smile.
	- dull: Lacking luster and vitality, appearing lifeless or uninterested.
	- piercing: Direct, intense, and unwavering, as if the gaze could see right through to the soul.
	- soft: Gentle, warm, and non-threatening, often conveying a sense of kindness and empathy.
	- mischievous: Playful, cunning, and slightly roguish, suggesting a playful or even devious intent.
	- intense: Focused, concentrated, and powerful, as if the person is deeply engaged or passionate about something.
	- calm: Serene, tranquil, and composed, exuding a sense of inner peace and control.

Features:
	- custom: {text-custom}:
	- heterochromia: with {color} heterochromia:

--body
Shape:
	- slim: Characterized by a narrow, lean physique with minimal body fat. The silhouette is often straight and linear.
	- toned: Refers to well-defined muscles, typically achieved through regular exercise. The body has a fit, athletic appearance.
	- hourglass: Describes a curvy figure with a narrow waist, wider bust and hips. The overall shape resembles an hourglass when viewed from the side.
	- pear-shaped: Involves a larger bottom half compared to the upper body, often with a smaller bust and wider hips. The torso is narrower than the lower half.
	- rectangular: A straight, boxy shape with little to no curves. The bust, waist, and hips are relatively equal in size, creating a flat, angular appearance.
	- apple-shaped: Characterized by a larger midsection (abdomen) compared to the upper and lower body. The waist is often less defined, giving a rounded, apple-like silhouette.
	- androgynous: A neutral or ambiguous body shape that doesn't clearly fit traditional male or female categories. The figure may be slender, lean, or athletic with minimal curves or definition.

--boobs
Shape:
	- round: Evenly curved and symmetrical, with a similar width at both the base and the top, often characteristic of larger busts.
	- conical: Narrow at the base and tapering to a point, often associated with smaller busts.
	- teardrop: Elongated, with a wider base and a narrower, pointed top, typically found on medium to larger busts.

Size:
Medium:
	- D size: Full and rounded, providing ample cleavage without being overly large.
	- DD size: Noticeably larger than D-cup, offering generous curves and deep cleavage.
	- DE size: At the upper end of the medium range, DE-cup breasts are substantial and voluptuous.
Small:
	- A size: Very petite and flat, often requiring special bras for support.
	- B size: Slightly larger than A-cup, still on the smaller side.
	- C size: The smallest of the larger cup sizes, C-cup breasts are still relatively small but provide a bit more volume and cleavage compared to A and B cups.
Large:
	- E size: Considered the starting point of the larger cup sizes.
	- F size: Noticeably larger than E-cup, F-cup breasts are quite ample.
	- FF size: At the upper end of the large range, FF-cup breasts are extremely full.
Extra Large:
	- G size: The largest standard cup size, G-cup breasts are extremely large.
	- GG size: Considered the next size up from G-cup, GG-cup breasts are among the largest in the world.
	- H size: The largest commercially available cup size, H-cup breasts are truly enormous.

--top
Neckline:
	- V-neck: A neckline that forms a "V" shape, typically starting at the collarbone and ending at the chest. V-necks can add a touch of elegance and sophistication to an outfit.
	- crew neck: A round, unadorned neckline that sits just below the collarbone. Crew necks are a classic and versatile choice, suitable for both casual and dressy ensembles.
	- scoop neck: A slightly curved, U-shaped neckline that dips lower than a crew neck but not as low as a V-neck. Scoop necks can add a feminine touch to tops and dresses.
	- high collar: A tall, closed neckline that covers the neck and often extends up to the chin or even the jawline. High collars can add a dramatic, formal, or even regal touch to an outfit, often seen in traditional or historical clothing.

Sleeve:
	- long sleeves: Extend from the shoulder to the wrist, providing full arm coverage.
	- short sleeves: End above the elbow, leaving the forearm exposed.
	- cap sleeves: Very short sleeves that only cover the top of the shoulder.

 Features:
    - unbuttoned: The shirt is partially opened, revealing the wearer's chest and upper torso.
    - open collar: The top buttons of the shirt are left unfastened, creating a slightly more relaxed and approachable demeanor.
    - untucked: The shirt hangs loose outside the pants, giving a more relaxed and informal look.
    - tucked in: The shirt is securely fastened into the pants, creating a neat and polished appearance.

--skirt
Length:
	- mini: A very short skirt that reaches just above the knee, usually no longer than 10-12 inches (25-30 cm) in length.
	- micro: An extremely short skirt, often no more than 6-8 inches (15-20 cm) in length, providing minimal coverage.
	- pencil: A narrow, straight skirt that hugs the leg, typically reaching just below the knee, around 18-20 inches (45-50 cm) long.
	- midi: A skirt that falls between the knee and mid-calf, usually between 21-24 inches (53-61 cm) in length, offering a balance between modesty and style.
	- maxi: A long, floor-sweeping skirt that reaches the ankles or even the floor, often 36 inches (91 cm) or longer, providing complete coverage and a dramatic look.

Fabric:
	- silk: A luxurious, smooth, and soft natural protein fiber obtained from silkworms. Silk skirts are often associated with elegance, sophistication, and high-end fashion.
	- cotton: A natural, breathable, and absorbent fiber derived from the cotton plant. Cotton skirts are popular for their comfort, practicality, and affordability.
	- polyester: A synthetic fabric made from petroleum-based materials. Polyester skirts are known for their durability, wrinkle resistance, and easy care.
	- denim: A sturdy, cotton twill textile commonly used for making jeans and other casual clothing.
	- tartan: A type of plaid fabric, often associated with traditional Scottish and Irish clothing.
	- armored: In fantastical contexts, an armored skirt could refer to a protective garment worn for combat or defensive purposes. This might involve a skirt made from metal plates, leather, or other strong materials.

--trousers
Fit:
	- slim fit: Trousers that are tailored closely to the leg, typically fitting snugly around the thighs and knees.
	- classic fit: A traditional, balanced cut that provides a comfortable, versatile fit without being too tight or loose.
	- relaxed fit: Trousers with a slightly looser cut through the thigh and knee, offering more room and comfort.
	- wide leg: Trousers with an exaggerated, loose cut through the leg, often reaching the ankle or even the floor.
	- culottes: A style of trousers that resemble a skirt, with a split or opening in the crotch area, creating a flowy, feminine silhouette.

--long dress
Neckline:
	- V-neck: A V-shaped opening at the front of the dress, typically starting at the collarbone and deepening towards the chest.
	- scoop neck: A curved, U-shaped neckline that dips slightly below the collarbone, providing a modest yet alluring view of the upper chest.
	- crew neck: A round, unadorned neckline that sits at the base of the neck, providing coverage and a clean, classic look.
	- off-the-shoulder: A style where the dress straps rest on the upper arms rather than the shoulders, often creating a romantic, feminine appearance.
	- halter: A type of neckline that ties or fastens behind the neck, leaving the shoulders and upper back exposed. This style can add a touch of sensuality to the overall look.

--maid
Type:
	- short: A short maid dress typically falls just above the knee, often reaching mid-thigh. This style is more revealing and may be preferred for warmer environments or to showcase the maid's legs.
	- middle: A middle-length maid dress usually reaches the mid-calf or just below the knee. This is a versatile option that provides coverage while still maintaining a feminine, elegant appearance.
	- long: A long maid dress extends to the ankles or even the floor. This style is often chosen for a more conservative or formal look, as it provides complete coverage from the waist down. Long dresses can also add a touch of vintage charm to the overall aesthetic.

--shoes
Heels:
	- stilettos: Extremely thin, long heels, typically 3 inches (7.6 cm) or more, providing a dramatic, elegant look.
	- pumps heels: Classic, closed-toe heels, usually 2-3 inches (5-7.6 cm) high, designed for formal or business attire.
	- kitten heels: Short, low heels, typically 1-2 inches (2.5-5 cm) high, offering a more modest, versatile alternative to higher heels.
	- block heels: Heels with a thicker, solid block of material, often 2-4 inches (5-10 cm) high, providing stability and a modern aesthetic.

Flats:
	- shoes: Closed-toe, low-heeled shoes suitable for everyday wear.
	- loafers: Slip-on shoes with no laces or buckles, often made of leather.
	- ballet flats: Soft, lightweight shoes with a round or square toe, inspired by ballet dancing.
	- mules: Shoes with no back or heel strap, typically worn with dresses or skirts.
	- sandals: Footwear that exposes the foot and toes, often held on by straps or thongs.

--boots
Boots:
	- boots: Basic, unadorned boots that provide protection and support for the foot and lower leg.
	- ankle boots: Boots that reach just above the ankle bone, often worn for casual or dressy occasions.
	- knee-high boots: Boots that extend up to the knee, providing additional warmth and protection. They can be worn for both formal and informal events.
	- over-the-knee boots: Boots that reach above the knee, often worn for fashion statements or to add a touch of elegance to an outfit.

--bra
Style:
	- underwire: Features a flexible wire running along the underside of the cups to provide additional support and lift. This style helps maintain breast shape and prevents sagging.
	- wire-free: Does not contain any underwires, instead relying on soft, padded cups for comfort and support. Wire-free bras are ideal for sensitive skin or those who prefer a more relaxed fit.
	- minimizer: Designed to reduce the apparent size of the breasts, minimizer bras have wider, shallower cups that compress the bust. They are suitable for women who want a more modest appearance.
	- push-up: Intended to enhance cleavage and create the illusion of larger breasts, push-up bras have thicker padding and often a higher center gore (the part between the cups).
	- sports: A specialized bra designed specifically for physical activity, sports bras provide extra support and stability to prevent breast movement and discomfort during exercise.
	- bikini: A type of bra that exposes the midriff, typically worn with a thong or boyshort bottom. Bikini bras have a lower cut and shorter straps compared to traditional bras, offering a more provocative look.
    - bandeau: A minimalist, strapless or lightly-strapped bralette made of stretchy fabric that provides minimal coverage and support for the breasts.

Features:
	- lace: A delicate, ornamental fabric used for the bra's trim, often adding a touch of elegance and femininity to the design.
	- mesh: A lightweight, breathable fabric woven in a net-like pattern, commonly used for the bra's back panel and sides to enhance ventilation and comfort.
	- straps: Shoulder straps that secure the bra to the wearer, usually adjustable for a customizable fit.
	- armored: In fantastical contexts, an armored bra might refer to a magical or protective undergarment that enhances the wearer's physical attributes or provides additional defense against attacks.

--panties
Cut:
	- thong: A thong is a type of panty that has a narrow strip of fabric that passes between the buttocks, typically with a small piece of fabric covering the front genital area. It provides minimal coverage and is often worn for its provocative or sensual appeal.
	- G-string: A G-string is similar to a thong but has an even narrower strip of fabric between the buttocks, resembling the shape of the letter "G." It offers very little coverage and is designed for style rather than practicality.
	- cheeky: Cheeky panties have a higher cut on the leg, typically reaching just above the hip bone. They provide more coverage than thongs or G-strings but still expose a significant portion of the buttocks, making them a popular choice for those who want a balance between style and modesty.
	- boyshorts: Boyshorts are a style of panty that resembles men's briefs but is designed for women. They have a wider, more substantial fabric coverage compared to thongs or G-strings, providing better support and coverage for the buttocks and genital area. They often have a flat front and a curved back for a comfortable fit.
	- hipsters: Hipster panties have a lower rise than boyshorts, typically sitting just below the hip bone. They provide more coverage than thongs or G-strings but less than boyshorts, making them a versatile option for those who want a mix of style and practicality.

Coverage:
	- low coverage: Minimal fabric, often sheer or mesh, providing a barely-there feel while still offering some discreetness.
	- mid coverage: Standard panties with a moderate amount of fabric that covers the essential areas without being too revealing or constricting.
	- full coverage: High-waisted or boyshort-style panties that extend higher on the waist and provide more comprehensive coverage.

Features:
	- lace: A delicate, intricate fabric pattern woven from yarn or thread, often used in feminine undergarments for a romantic or sensual look.
	- mesh: A fabric made of interwoven yarns or threads, creating a net-like structure.
	- armored: In fantastical context, armored panties might refer to undergarments with built-in protection, such as metal plates or reinforced materials, designed for characters engaging in combat.

--nightdress
Style:
	- short: A shorter version that typically reaches mid-thigh, often with a flared skirt. This style is more revealing and can be worn with or without panties.
	- long: A longer version that extends to the ankles or even the floor, providing more coverage. Long nightdresses are often preferred for colder climates or by those who prefer a more modest look.
	- babydoll: A short, loose-fitting nightgown with a short, ruffled skirt that resembles a babydoll. This style is designed to be playful and flirtatious.
	- camisole: A sleeveless, tight-fitting top with a loose skirt or shorts. Camisole nightdresses are ideal for warm weather and provide a smooth, comfortable base layer.
	- peignoir: A long, flowing, often sheer robe worn over a nightgown or lingerie. Peignoirs are designed for a romantic, elegant look and can be worn for sleeping or as a seductive outer layer.

Features:
	- lace: Delicate, intricate patterns of lace often adorn the neckline, hem, or sleeves of a nightdress for a touch of elegance and romance.
	- soft fabrics: Nightdresses typically consist of soft, breathable materials like cotton, silk, or modal to provide comfort against the skin during sleep.
	- ruffles: Gathered or pleated fabric at the neckline, hem, or sleeves adds a feminine, playful touch to the overall design.
	- adjustable straps: Some nightdresses have straps that can be adjusted to accommodate different body types and preferences for a secure, comfortable fit.

--gloves
Length:
	- short: Reaches only the wrist, leaving the forearm exposed.
	- mid-cuff: Covers the wrist and extends about halfway up the forearm.
	- over-the-elbow: Encompasses the entire forearm, reaching above the elbow joint.
	- gauntlet: A long, full-length glove that extends from the wrist to the base of the fingers, often reaching the mid-forearm or higher.
    - cuff: A shorter version of the mid-cuff, typically ending just below the elbow.
    - chopper: A type of gauntlet glove designed for heavy, protective use.

--stockings
Sheerness:
	- sheer: Extremely thin and transparent, allowing the skin to show through.
	- semi-sheer: Thicker than sheer but still somewhat translucent, offering a balance between coverage and visibility.
	- opaque: Completely solid and non-transparent, providing full coverage of the legs.

Pattern:
	- fishnet: A mesh-like fabric with a grid pattern, often worn for a more provocative or fetish-inspired look, particularly with revealing clothing.
	- solid: A single, uniform color, often black, navy, or flesh-toned for everyday wear.
	- striped: Horizontal or vertical bands of different colors, adding visual interest to outfits.
	- polka dots: Small, evenly spaced dots on a solid background, creating a playful, whimsical look.
	- geometric prints: Intricate designs featuring shapes like chevrons, zigzags, or abstract patterns that add a touch of style to the legs.

Length:
	- thigh-high: Stockings that reach up to the upper thigh, typically just below the hip joint.
	- mid-calf: Stockings that extend to the middle of the calf, usually around the midpoint between the knee and ankle.
	- ankle: The shortest type, reaching only to the ankle bone, not covering the calf at all.

Features:
    - with garters: Stockings held up by fabric straps (garters) that wrap around the leg, typically above the knee.
	- with suspenders: Stockings secured by fabric straps (suspenders) that connect to the waistband or a belt.
	- with waistband: Stockings have an elastic or fabric band that encircles the natural waist for support and stability.
    - with top band: A narrow, usually elastic band at the top of the stocking, often used in combination with garters or suspenders.

--choker
Material:
	- velvet: A soft, luxurious fabric often used for high-end or formal chokers. Velvet chokers can add a touch of elegance and sophistication to an outfit.
	- satin: A smooth, shiny fabric commonly used for evening wear or special occasions. Satin chokers can create a glamorous, eye-catching look.
	- lace: A delicate, intricate fabric often associated with feminine, romantic styles. Lace chokers can add a whimsical, vintage flair to an ensemble.
	- leather: A durable, edgy material suitable for casual or punk-inspired outfits. Leather chokers can make a bold fashion statement.
	- velvet ribbon: A wide, soft ribbon made from velvet, often used for more relaxed, bohemian or rustic looks. Velvet ribbon chokers can add a cozy, laid-back feel.
	- chain: A classic, versatile material for chokers that can range from simple and minimalist to ornate and statement-making. Chain chokers work well with both casual and formal attire.

--jewelry
Type:
	- earrings: Small decorative items worn on or in the ears, often made of precious metals, gemstones, or other materials.
	- ring: Circular piece of jewelry worn on the fingers or sometimes on other parts of the body, typically made of metal and sometimes featuring gemstones.
    - necklace: A piece of jewelry worn around the neck, often made of a chain or cord with a pendant or other decorative elements attached.

--bare
Type:
	- bare belly: Exposed abdominal area, typically showing the skin and muscles of the stomach without any clothing or covering.
	- bare thighs: Exposed lower legs, typically showing the skin and muscles of the upper legs without any clothing or covering from the groin to the knees.
    - bare shoulders: Exposed upper arms, typically showing the skin and muscles of the shoulders without any clothing or covering from the neck to the upper arm.

--personality
Type:
	- ISTJ: Practical, detail-oriented, and organized individuals who value tradition and stability. They can be reserved and prefer a structured environment.
	- ISFJ: Compliant, empathetic, and hardworking, ISFJs prioritize harmony and loyalty. They often excel in supportive roles and may struggle with assertiveness.
	- INFJ: Idealistic, compassionate, and creative, INFJs aim to understand people deeply. They can be perfectionistic and may struggle with setting boundaries.
	- INTJ: Strategic, independent, and innovative, INTJs are natural leaders who value knowledge and efficiency. They can come across as aloof or dismissive of others' feelings.
	- ISTP: Resourceful, analytical, and adaptable, ISTPs enjoy hands-on activities and solving problems. They may appear detached or unemotional due to their focus on logic.
	- ISFP: Artistic, empathetic, and flexible, ISFPs value individuality and authenticity. They can be indecisive and may struggle with asserting their needs.
	- INFP: Imaginative, idealistic, and sensitive, INFPs seek meaning and personal growth. They can be prone to self-doubt and may struggle with conflict resolution.
	- INTP: Curious, logical, and independent, INTPs enjoy exploring abstract ideas and solving complex problems. They can come across as detached or unemotional due to their focus on logic.
	- ESTP: Adventurous, energetic, and action-oriented, ESTPs thrive on excitement and new experiences. They can be impulsive and may lack follow-through on long-term commitments.
	- ESFP: Outgoing, spontaneous, and people-oriented, ESFPs live in the moment and enjoy socializing. They can be scattered and may struggle with planning and organization.
	- ENFP: Charismatic, imaginative, and adaptable, ENFPs are natural communicators who inspire others with their ideas. They can be disorganized and may struggle with follow-through.
	- ENTP: Innovative, strategic, and quick-witted, ENTJs are natural debaters who enjoy exploring new ideas. They can come across as manipulative or insensitive due to their focus on winning arguments.
	- ESTJ: Confident, decisive, and organized, ESTJs prioritize efficiency and tradition. They can be domineering and may struggle with empathy and emotional understanding.
	- ESFJ: Social, supportive, and detail-oriented, ESFJs value harmony and stability in their relationships and work environments. They can be overly concerned with others' opinions and may struggle with assertiveness.
	- ENFJ: Charismatic, empathetic, and visionary, ENFJs are natural leaders who inspire others with their ideas and passion. They can be overly invested in others' well-being and may struggle with setting boundaries.
	- ENTJ: Confident, strategic, and commanding, ENTJs are natural-born leaders who excel at achieving their goals. They can come across as abrasive or dismissive of others' feelings due to their focus on results.

Wings:
	- 1w9: Confident, assertive, and charismatic leaders who value individuality and freedom. They can come across as aloof or unemotional at times.
	- 1w2: Ambitious, driven, and perfectionistic individuals who set high standards for themselves and others. They may struggle with self-doubt and people-pleasing.
	- 2w1: Analytical, logical, and strategic thinkers who prioritize efficiency and effectiveness. They can be detached and unemotional in their interactions.
	- 2w3: Creative, adaptable, and unconventional problem-solvers who enjoy exploring new ideas and experiences. They may struggle with commitment and follow-through.
	- 3w2: Emotionally intelligent, empathetic, and nurturing individuals who excel at building strong relationships. They can be overly sensitive to the feelings of others.
	- 3w4: Perfectionistic, detail-oriented, and hardworking individuals who set high expectations for themselves and others. They may struggle with self-criticism and stress.
	- 4w3: Innovative, imaginative, and unconventional thinkers who value individuality and nonconformity. They can be moody and unpredictable at times.
	- 4w5: Introspective, creative, and emotionally complex individuals who explore the depths of their own psyche. They may struggle with self-doubt and social anxiety.
	- 5w4: Confident, charismatic, and decisive leaders who value independence and self-reliance. They can come across as aloof or unemotional to others.
	- 5w6: Ambitious, driven, and adaptable individuals who excel in fast-paced environments. They may struggle with work-life balance and setting healthy boundaries.
	- 6w5: Emotionally intelligent, empathetic, and perceptive individuals who understand the motivations and feelings of others. They can be overly sensitive to conflict and stress.
	- 6w7: Adventurous, spontaneous, and unconventional individuals who thrive in dynamic, unpredictable situations. They may struggle with commitment and stability.
	- 7w6: Analytical, strategic, and adaptable thinkers who excel at finding creative solutions to complex problems. They can be detached and unemotional in their personal relationships.
	- 7w8: Innovative, imaginative, and unconventional problem-solvers who enjoy exploring new ideas and experiences. They may struggle with self-discipline and follow-through.
	- 8w7: Confident, charismatic, and decisive leaders who value independence and self-reliance. They can come across as aloof or unemotional to others.
	- 8w9: Introspective, creative, and emotionally complex individuals who explore the depths of their own psyche. They may struggle with self-doubt and social anxiety.
	- 9w8: Perfectionistic, hardworking, and detail-oriented individuals who set high expectations for themselves and others. They may struggle with self-criticism and stress.
	- 9w1: Ambitious, driven, and strategic thinkers who excel at planning and executing complex projects. They can be detached and unemotional in their personal relationships.`;
