export const DEFAULT_TEMPLATE = `[{{char}}'s Background:
Gender: {gender};
Ethnicity: {ethnicity};
Age: {number-age};
Occupation: {text-occupation};
Residence: {text-residence};
Skills: {text-skills};
Appearance: {appearance-face?}, {appearance-hair?}, {appearance-eyes?}, {appearance-tall?}, {appearance-body}, {appearance-boobs?}; {text-additional*};
Outfit: {outfit-top?} {outfit-bottom?outfit-full}, {outfit-footwear?}, {outfit-underwear*?}, {outfit-additional*?}; {text-additional*};
Personality: {personality-type} - {personality-wings}; {text-additional*};]`;

export const DEFAULT_RESOURCE = `--color
Color:
Gold:
	- light gold: #F8E231: A soft, warm, and inviting golden hue.
	- deep gold: #FFD700: A rich, vibrant, and regal yellow–gold color.
	- honey gold: #FFC394: A warm, sweet, and radiant golden shade.
Orange:
	- pastel orange: #FFC2C7: A delicate, soft, and gentle orange tone with a hint of pink.
	- deep orange: #FF9900: A bold, lively, and energetic orange color.
	- tangerine orange: #FFA07A: A bright, juicy, and vibrant orange shade with a slight yellow undertone.
Red:
	- ruby red: #E0115F: A deep, rich, and intense red hue with a slight blue undertone.
	- garnet red: #833333: A dark, warm, and earthy red color with a hint of brown.
	- crimson red: #DC143C: A bright, passionate, and almost purplish red shade.
Pink:
	- pastel pink: #FFC5C5: A soft, delicate, and gentle pink tone with a hint of peach.
	- blush pink: #FF69B4: A light, rosy, and innocent pink color with a touch of coral.
	- fuchsia pink: #C154C1: A bright, vibrant, and purplish pink shade with a hint of magenta.
Purple:
	- lilac purple: #C9C3E4: A light, soft, and pastel purple hue with a blue undertone.
	- periwinkle purple: #B2E6CE: A pale, calming, and delicate purple color with a hint of blue.
	- deep purple: #6c5ce7: A rich, dark, and luxurious purple shade with a slight red undertone.
Blue:
	- sky blue: #87CEEB: A light, serene, and gentle blue tone with a hint of green.
	- royal blue: #4169E1: A deep, vibrant, and majestic blue color with a slight purple undertone.
	- navy blue: #03055B: A dark, deep, and mysterious blue shade with a hint of black.
Green:
	- mint green: #ACFF79: A pale, soft, and refreshing green hue.
	- forest green: #228B22: A deep, rich, and earthy green color.
	- lime green: #32CD32: A bright, vibrant, and citrusy green shade.
Brown:
	- caramel brown: #F5DEB3: A light, warm, and golden brown hue with a hint of cream.
	- honey brown: #FFC080: A medium, soft, and inviting brown color with a touch of orange.
	- chocolate brown: #964B00: A deep, rich, and dark brown shade with a hint of red.
White:
	- ivory white: #FFFFF0: A creamy, soft, and slightly yellowish white hue.
Grey:
	- ash grey: #AAAAAA: A light, cool, and ashy grey color.
	- platinum grey: #AAAAAA: A bright, shiny, and silvery grey tone.
	- charcoal grey: #AAAAAA: A dark, deep, and almost black grey shade.
Black:
	- jet black: #000000: A deep, pure, and absolute black hue.
	- obsidian black: #000000: A dark, glossy, and volcanic black color.
	- ebony black: #000000: A deep, rich, and glossy black shade.
	- raven black: #000000: A dark, cool, and slightly blueish black hue.

Type:
	- sheer: A color that is extremely light and barely visible, often appearing as a faint hue or wash.
	- translucent: A color that is semi–transparent, allowing some light to pass through and giving an ethereal or ghostly quality.
	- diaphanous: A color that is very light and delicate, often having a gossamer or filmy appearance, as if it could easily be blown away.

--gender
Gender:
    - female:
    - male:

--ethnicity
Ethnicity:
	- human:
	- elf:
	- dark elf:
	- demon:
	- succubus:
	- vampire:

--face
Shape:
	- oval: A symmetrical, egg-like face shape, often considered the ideal, with a balanced ratio of length to width.
	- heart-shaped: A face with broad, full cheekbones and a pointed, slightly upturned chin, resembling a heart in profile.
	- square: A strong, angular face with equal width and height, featuring a prominent, chiseled jawline and a square, defined chin.
	- round: A soft, circular face with no sharp angles or prominent facial features, often characterized by a rounded, full appearance.
	- triangular: A narrow, pointed face with a wide, broad forehead and temples, and a narrow, pointed chin, creating a triangular silhouette.
	- diamond: A face with a narrow, pointed forehead and temples, and a wider, square, and slightly angular jawline, forming a diamond-like shape.
	- oblong: A long, elliptical face with minimal facial structure and features, often appearing slender and streamlined.
	- pear: A face with a wider, rounder forehead and temples, and a narrower, pointed chin, giving a pear-like appearance in profile.
	- hexagonal: An extremely angular face with six distinct planes, often characterized by prominent, high cheekbones and a sharp, chiseled jawline.

--hair
Length:
	- long: Hair that extends down to the lower back or mid-thigh, often flowing in loose waves or worn in various up-dos and braids.
	- short: Hair that reaches the ears or the back of the neck, often styled in a neat, trimmed manner with a slight layering for texture.
	- chin-length: Hair that reaches the chin, providing coverage for the neck while still being relatively short and manageable, with a slight layering for volume.
	- shoulder-length: Hair that falls just above the shoulders, offering a balance between style and practicality, with a center parting and a sleek, smooth finish.
	- mid-back length: Hair that reaches the lower to mid-back, often worn in loose, flowing styles or tied up in a ponytail or bun, with a few loose strands framing the face.
	- waist-length: Hair that extends down to the natural waistline, providing a dramatic, elegant look when worn down or styled up with intricate braids and adornments.
	- hip-length: Hair that reaches the hip area, offering a versatile length for various hairstyles, such as sleek straight styles, wavy looks, or curly up-dos.
	- floor-length: Hair that drapes all the way to the floor, often worn in a sleek, straight style or adorned with elaborate braids, twists, and accessories.
	
Structure:
	- soft: Hair with a gentle, silky texture that easily falls into place, often with a subtle sheen and a light, airy feel.
	- curly: Hair with defined, bouncy curls that can range from tight spirals to loose, beachy waves, with a natural, effortless look.
	- wavy: Hair with soft, flowing waves that add volume and texture to the overall style, often with a relaxed, undone appearance.
	- straight: Hair with a linear, flat structure that lies flat against the scalp, often with a center parting and a sleek, polished finish.
	- rough: Hair with a coarse, unruly texture that can be prone to frizz, tangling, or flyaways, often requiring more styling products and effort to manage.

Style:
Ponytail:
	- classic ponytail: A simple, straightforward style where the hair is gathered at the back of the head and secured with an elastic band, often with a few loose strands framing the face for a relaxed look.
	- high ponytail: The hair is swept upwards and tied close to the crown, often leaving a few strands loose for a more effortless, undone appearance.
	- low ponytail: The hair is gathered at the nape of the neck, creating a sleek, low profile that elongates the neck and frames the face.
	- side ponytail: The hair is secured to one side of the head, often with a few loose strands framing the face for a youthful, playful look.
	- braided ponytail: The hair is braided before being tied into a ponytail, adding a touch of elegance, complexity, and whimsy to the style.
Twin Tails:
	- mega twin tails: Two long, flowing tails of hair that extend down the back, often with volume and texture at the ends, adding a dramatic, regal touch to the overall look.
	- twin ponytails: Two separate ponytails, one on each side of the head, creating a symmetrical and youthful appearance that works well for both casual and formal occasions.
	- twin buns: Two small buns, one on each side of the head, often with a few loose strands framing the face for a polished, put-together look.
	- twin pigtails: Two small, tied sections of hair on each side of the head, resembling traditional pigtails, often with a playful, whimsical touch.
Up-Dos:
	- bun: A coil of hair gathered at the top of the head, often secured with bobby pins and hairspray for a sleek, polished look that works well for formal events or special occasions.
	- chignon: A low, sleek bun at the back of the head, often with a few loose strands framing the face for a romantic, elegant appearance that adds a touch of sophistication to any outfit.
	- crown braid: A braid that starts at the crown of the head and weaves its way down, often with a few loose strands framing the face for a whimsical, bohemian touch.
	- half-up half-down: A style where the top section of hair is gathered and secured, while the bottom half flows freely, offering versatility and a touch of undone charm that works well for both everyday wear and special occasions.

--eyes
Shape:
	- almond: An elongated, teardrop-like eye shape with a pointed outer corner and a rounded inner corner, often considered the most aesthetically pleasing due to its balance and symmetry.
	- round: A circular eye shape with no sharp angles or distinct outer or inner corners, providing a soft, gentle appearance that can add a touch of innocence or youthfulness to the overall look.
	- upturned: Eyes that slant upwards at the outer corners, giving a perpetually smiling or curious appearance that can convey a sense of friendliness and approachability.
	- down-turned: Eyes that angle downwards at the outer corners, potentially conveying a more serious, melancholic, or introspective mood that adds depth and complexity to the individual's character.
	
Expression:
	- bright: Eyes that sparkle with energy, curiosity, and enthusiasm, often appearing lively and engaging, as if reflecting the person's inner light and zest for life.
	- dull: Eyes lacking luster, appearing lifeless, and conveying a sense of apathy or disinterest, which can be a sign of emotional exhaustion, boredom, or a lack of motivation.
	- piercing: Intense, sharp, and direct gaze that seems to see right through to the soul, often associated with confidence, authority, and a strong sense of perception and understanding.
	- soft: Gentle, warm, and tender eyes that exude kindness, empathy, and a caring nature, making the individual appear approachable, compassionate, and genuinely concerned for others.
	- mischievous: Playful, cunning, and slightly roguish eyes that hint at a sense of humor and a willingness to bend the rules, often accompanied by a charming, flirtatious, or subversive attitude.
	- intense: Deep, concentrated, and focused eyes that convey strong emotions, determination, and a keen intellect, suggesting a person who is passionate, driven, and mentally sharp.
	- calm: Serene, tranquil, and composed eyes that radiate inner peace, stability, and a sense of control, often giving the impression of a centered, wise, and emotionally balanced individual.

--body
Shape:
	- slim: A lean, narrow physique with minimal body fat and a slender build, often appearing elongated and elegant, with a focus on clean lines and a streamlined silhouette.
	- toned: A fit, well-muscled body with visible definition from regular exercise and a balanced diet, showcasing a strong, athletic build with a mix of lean muscle mass and a low body fat percentage.
	- hourglass: A curvaceous figure with a narrow waist, broad shoulders, and ample bust and hips, creating a striking contrast that accentuates the feminine form and can be both alluring and powerful.
	- pear-shaped: A body with a larger lower half (hips, thighs, and bottom) compared to the upper half (torso, arms, and bust), a classic feminine silhouette that can be both sensual and elegant when styled appropriately.
	- rectangular: A straight, boxy shape with minimal curves and a similar width and height throughout the body, often appearing strong, solid, and unassuming, with a focus on practicality and comfort over aesthetics.
	- apple-shaped: A figure with a larger midsection (abdomen) compared to the upper and lower body, often with a rounder silhouette, which can be balanced with a fitted top and a flared bottom to create a more harmonious, hourglass-inspired look.
	- androgynous: A physique that doesn't clearly conform to traditional male or female body types, often with a slender, athletic build and minimal curves, suggesting a blend of masculine and feminine characteristics that can be both intriguing and versatile in terms of style and expression.

--boobs
Shape:
	- conical: Tapering from the base to the nipple, with a narrow top and a wider bottom, creating a pointed or triangular silhouette that can be both alluring and provocative when accentuated by the right clothing or styling.
	- teardrop: Similar to conical but with a more gradual, smooth transition from the base to the nipple, resulting in a more natural, rounded appearance that can be both elegant and feminine.
	- round: Breasts that are roughly the same size and shape from the base to the nipple, with no distinct tapering, providing a soft, symmetrical, and balanced look that can be both attractive and versatile in terms of style options.

Size:
Medium:
	- D-cup: A more substantial size, often measuring 85-90 cm in circumference, which can add a sense of confidence and allure to the wearer, especially when paired with the right clothing and accessories.
	- DD-cup: Close to average, typically between 90-95 cm in circumference, providing a comfortable, balanced volume that works well for a wide range of fashion choices and body types.
	- DE-cup: A larger than average size, usually around 95-100 cm in circumference, which can create a bold, eye-catching presence that demands attention and appreciation.
Small:
	- A-cup: Relatively tiny, often measuring 65-75 cm in circumference, which can create a delicate, demure appearance that works well for petite frames and certain fashion styles.
	- B-cup: Slightly larger, typically ranging from 75-80 cm in circumference, providing a touch more volume and a more feminine silhouette without overpowering the overall figure.
	- C-cup: A moderate size, usually between 80-85 cm in circumference, offering a proportional balance between the bust and the rest of the body, making it a versatile size for various clothing options and styles.
Large:
	- E-cup: A significant size, often exceeding 100 cm in circumference, which can be both empowering and alluring, especially when styled to accentuate the curves and create a dramatic, sensual effect.
	- F-cup: Very large, typically measuring 105-110 cm in circumference, providing an impressive, statuesque presence that can command respect and admiration in both intimate and public settings.
	- FF-cup: Extremely large, usually above 110 cm in circumference, which can be both overwhelming and awe-inspiring, often requiring specialized clothing and support to maintain comfort and confidence.
Extra Large:
	- G-cup: One of the largest sizes, often over 115 cm in circumference, which can create a truly dramatic, attention-grabbing effect that borders on the exotic and the extraordinary.
	- GG-cup: Exceptionally large, typically above 120 cm in circumference, providing a truly massive, imposing presence that can be both intimidating and alluring, often requiring custom-made clothing and extensive support to accommodate the size and weight.
	- H-cup: The largest common size, usually exceeding 125 cm in circumference, which can be both thrilling and challenging, requiring a high level of self-acceptance, confidence, and specialized care to maintain comfort and style.

--appearance
Face:
    - face: {face-shape} face:

Hair:
    - hair: {hair-length?} {hair-structure?} {color} hair, {hair-style?}:

Eyes:
    - eyes: {eyes-shape?} {eyes-expression?} {color} eyes:

Tall:
    - tall: {number-tall} centimeters tall:

Body:
    - body: {body-shape} body:

Boobs:
    - boobs: {boobs-shape} {boobs-size} boobs:

--outfit
Top:
	- shirt: {top-neckline?} {top-sleeve?} {top-fabric?} {color?} shirt: A standard upper body garment, typically made of fabric and worn for warmth, modesty, and style.
	- blouse: {top-neckline?} {top-sleeve?} {top-fabric?} {color?} blouse: A type of shirt, usually more form-fitting and designed for women, often with a collar and buttons.
	- jacket: {color?} jacket: A outerwear piece, typically made of heavier materials, worn for warmth, protection, and fashion.
	
Bottom:
	- skirt: {skirt-length?} {skirt-fabric?} {color?} skirt: A piece of clothing that hangs from the waist, often made of lightweight materials, worn for fashion and modesty.	
	- trousers: {trousers-fit?} {color?} trousers: A lower body garment, usually made of fabric, worn for comfort, practicality, and style.

Full:
	- long dress: {long-dress-neckline?} {color-type?} {color?} long dress: A single-piece garment that covers the upper and lower body, often floor-length, worn for formal or casual occasions, with a concentration on flowing, comfortable designs, and a variety of necklines, sleeves, and embellishments to suit individual tastes.
	- maid: {color?} maid {maid-type?} dress: A traditional uniform consisting of a crisp, high-collared blouse, a short, pleated skirt, and sometimes a cap or apron, typically associated with domestic service, with a modern twist emphasizing comfort, practicality, and a touch of whimsy.
	- tight clothes: tight {color?} clothes: Form-fitting attire that accentuates the wearer's figure, often used for performance, exercise, or sensual purposes, with a focus on high-quality, stretchy materials, bold colors, and bold designs that make a statement.
	- armored: {color?} armored clothes: A complete set of protective clothing, typically made of metal plates, leather, or a combination of both, worn by warriors and knights for battle, with a focus on rugged, durable designs, intricate details, and a sense of historical authenticity that evokes a strong, powerful image.

Footwear:
	- shoes: {shoes-heels?} {color?} {shoes-flats}: A type of footwear that covers the foot and is designed for various activities, such as walking, running, or dancing, with an emphasis on comfort, durability, and stylish designs that complement the overall outfit.
	- boots: {color?} {boots}: Sturdy, protective footwear that covers the foot and lower leg, often made of leather, worn for outdoor activities, fashion, or as part of a uniform, with a focus on sleek, modern silhouettes and versatile colors that can be dressed up or down.

Underwear:
	- panties: {panties-cut?} {panties-fabric?} {panties-features?} {panties-coverage?} {color-type?} {color?} panties: A type of women's undergarment that covers the genital area and is designed for comfort and modesty, with a focus on soft, breathable materials, cute designs, and a range of colors and patterns to suit individual preferences.
	- bra: {bra-style?} {bra-features?} {color-type?} {color?} bra: A women's undergarment that supports and holds the breasts in place, often with cups and straps, emphasizing comfort, quality, and a variety of styles to accommodate different body types and personal preferences.
	
Additional:
	- cape: {color?} cape: A piece of fabric worn over the shoulders, often for fashion, to add a dramatic touch, or as part of a costume, with a focus on bold colors, striking patterns, and flowing designs that command attention.
	- gloves: {gloves-length?} {color?} gloves: A type of clothing worn on the hands for warmth, protection, or as an accessory, with a concentration on stylish, modern designs, high-quality materials, and a range of colors and textures to suit various occasions and personal styles.
	- stockings: {stockings-sheerness?} {stockings-pattern?} {stockings-length?} {color?} stockings {stockings-features?}: Hosiery worn to cover and warm the legs, often for fashion or as part of a uniform, with a focus on seamless, comfortable designs, vibrant colors, and playful patterns that add a touch of whimsy to the overall look.
	- choker: {choker-material?} {color?} choker:  A type of jewelry worn around the neck, typically made of fabric, leather, or metal, and designed to draw attention to the face and neck, with a concentration on delicate, understated designs that complement a variety of outfits and personal styles.
	- jewelry: {jewelry-type} {text-additional}: Adornments worn on the body to express personal style, convey status, or symbolize beliefs, made from various materials like gold, silver, gemstones, and more, with a focus on high-quality craftsmanship, unique designs, and statement pieces that make a lasting impression.
	- bare: {bare-type} {text-additional}: Wearing minimal or no clothing, often for comfort, practicality, or as a fashion statement in certain contexts, emphasizing confidence, self-expression, and a connection with one's natural form.

--top
Neckline:
	- V-neck: A deep, inverted "V" shape at the front of the shirt, often used for more stylish or formal designs that add a touch of sophistication and elegance to the overall look.
	- crew neck: A classic, round neckline that sits just below the collarbone and is typically found on plain, comfortable shirts for everyday wear, emphasizing simplicity and practicality.
	- scoop neck: A U-shaped neckline that dips lower than a crew neck but not as deep as a V-neck, providing a balance between modesty and fashion, suitable for both casual and dressy occasions.
	- high collar: A taller, more structured collar that covers a larger portion of the neck and chest, often seen on dress shirts, business attire, or more conservative styles that exude professionalism and refinement.
	
Sleeve:
	- long sleeves: Shirts with sleeves that extend down to the wrist, offering full arm coverage and a polished, put-together appearance, often preferred for formal events, job interviews, or business meetings.
	- short sleeves: Shirts with sleeves that end above the elbow, typically reaching the upper arm, providing a comfortable, versatile option for various activities and settings, from work to leisure.
	- cap sleeves: Shirts with very short sleeves that cover only the top of the shoulder, leaving the arm bare below, allowing for a stylish, modern look that adds visual interest and can be dressed up or down.
	
Fabric:
	- silk: A luxurious, smooth, and lustrous natural fiber, prized for its elegance, lightweight feel, and ability to drape beautifully. Silk shirts are ideal for formal events, special occasions, or adding a touch of sophistication to an outfit, as they exude refinement and glamour.
	- cotton: A natural, breathable, and absorbent fabric, often used for casual, everyday wear due to its comfort, durability, and versatility in various styles and colors. Cotton shirts can be soft and relaxed or crisp and tailored, making them suitable for a wide range of occasions.
	- linen: A natural, lightweight, and textured fabric made from flax, known for its breathability, cooling properties, and classic, summery look. Linen shirts are perfect for warm weather and add a stylish, effortless vibe, making them suitable for casual, outdoor activities or relaxed social gatherings.

--skirt
Length:
	- mini: Extremely short, usually above mid-thigh level, often worn for formal or fashion events when paired with the right top and accessories to maintain modesty and style.
	- micro: Even shorter than mini, typically just above the knee or even higher, reserved for daring, fashion-forward, and confident individuals who can pull off the look with panache.
	- pencil: A classic, straight, and narrow cut that reaches just above the knee, providing a sleek, streamlined look that flatters the legs and creates a polished, put-together appearance.
	- midi: A mid-length skirt that falls between the upper and lower calf, offering a balance of modesty and style that makes it versatile for various occasions, from work to social gatherings.
	- maxi: An extremely long, floor-sweeping skirt that drapes elegantly, often worn for evening events or as a statement piece that adds drama and sophistication to an outfit.
	
Fabric:
	- silk: A luxurious, smooth, and lustrous natural protein fiber ideal for formal, elegant skirts that exude refinement and glamour. It drapes beautifully and retains warmth, making it perfect for cooler weather or indoor events.
	- cotton: A natural, breathable fiber often used for casual, everyday skirts that provide comfort and practicality. It can be lightweight or heavy depending on the weave, suitable for various seasons and activities.
	- polyester: A synthetic material commonly used for durable, easy-care skirts suitable for active wear or work attire when a more modern, low-maintenance look is desired. It can mimic the look of natural fibers while offering added strength and stain resistance.
	- denim: A rugged, thick cotton twill fabric typically used for jeans and sometimes for skirts with a casual, edgy, or retro-inspired look that adds a touch of rebelliousness to an outfit.
	- tartan: A woven plaid pattern, often made from wool or a wool blend, commonly associated with traditional Scottish and Irish kilts and skirts. Tartan skirts can add a bold, cultural touch to an ensemble while paying homage to heritage.
	- armored: A skirt made from a protective, durable material, likely designed for combat or high-impact activities requiring full coverage and flexibility. Armored skirts are a unique, functional piece that combines style with practicality for specific situations.

--trousers
Fit:
	- slim fit: Trousers that hug the leg closely, often with a narrower cut through the thigh and knee, and a more form-fitting seat and waist, emphasizing a streamlined, modern look that elongates the leg and creates a sleek, put-together appearance.
	- classic fit: A traditional, balanced cut that provides a comfortable, versatile fit without being overly tight or loose. The leg width and seat are generally proportionate, making these trousers suitable for both formal and casual occasions.
	- relaxed fit: Trousers with more room in the thigh, knee, and seat, providing a looser, comfortable fit that allows for a full range of motion. The waist may also be slightly looser, creating a relaxed, casual vibe.
	- wide leg: Trousers with an extremely loose, baggy fit through the leg, often with a flared or bell-bottom style, adding a playful, fashion-forward touch to the overall look. The seat and waist may still be relatively snug, preventing the trousers from looking too sloppy or unflattering.
	- culottes: A type of loose, wide-legged pant that resembles a skirt when worn, often with an elastic waistband and a flowy, feminine cut, ideal for creating a stylish, androgynous look or adding a touch of whimsy to an outfit.

--long dress
Neckline:
	- V-neck: A classic, deep V-shape that plunges from the collarbone, often accentuating the bust and drawing the eye downward, creating a bold, sophisticated look that can be both elegant and alluring, depending on the style and occasion.
	- scoop neck: A U-shaped opening that curves from the center of the chest, providing a modest yet alluring display of cleavage, ideal for those who want to add a touch of femininity and allure to their long dress without revealing too much.
	- crew neck: A round, unadorned neckline that sits just above the collarbone, offering a clean, classic look that exudes simplicity and timelessness, making it suitable for a wide range of occasions, from casual to formal events.
	- off-the-shoulder: A style where the dress drapes over one or both shoulders, often featuring short sleeves or no sleeves at all, creating a romantic, feminine appearance that whispers of vintage charm and adds a playful, flirtatious touch to the overall look.
	- halter: A strapless or low-cut design with ties or a band that wraps around the neck, typically leaving the back and shoulders exposed, adding a touch of sensuality and confidence to the wearer, perfect for making a statement at special events or as a bold fashion choice.

--maid
Type:
	- short: A short maid dress typically reaches just above the knee, often featuring a flared skirt and a more revealing design compared to longer options, creating a playful, youthful look that emphasizes the legs and adds a touch of flirtation to the overall style.
	- middle: A middle-length maid dress usually falls between the mid-thigh and upper calf, offering a balance between modesty and style. The skirt may be straight or slightly flared, providing a versatile option that can be dressed up or down depending on the occasion and accessories chosen.
	- long: Long maid dresses extend below the knee, often to the mid-calf or even the ankles, providing a more conservative and traditional look that exudes a sense of elegance and professionalism, making them suitable for formal events or as part of a uniform for domestic service roles.

--shoes
Heels:
	- stilettos: Long, thin, and sleek, these heels have a narrow, tapered shape and often feature a strap or band at the ankle for support, ideal for making a fashion statement and adding height to an outfit, perfect for formal events or as a bold accessory for a night out.
	- pumps heels: A classic style of high heels, pumps are characterized by a closed, rounded or pointed toe and a slender, often tapered heel, providing a polished, elegant look that can be dressed up or down, suitable for work, special occasions, or as a versatile addition to any wardrobe.
	- kitten heels: A lower, more modest version of high heels, kitten heels typically have a heel height of 2-3 inches (5-7.5 cm) and a round or square toe, offering a comfortable and stylish alternative to higher heels, perfect for everyday wear or as a more approachable option for those new to heels.
	- block heels: These heels feature a thicker, more substantial block-like shape, often with a wider base for stability and a lower, more comfortable height compared to stilettos or pumps, providing a fashionable and practical choice for those who want the look of heels without the discomfort, suitable for work, social events, or as a versatile addition to any wardrobe.
	
Flats:
	- shoes: A general term for flat shoes without heels, encompassing various styles such as loafers, ballet flats, mules, and sandals, providing comfort and practicality while still offering a wide range of fashionable options to suit different occasions and personal tastes.
	- loafers: Slip-on shoes with no laces or fastenings, often featuring a decorative brogue or tassel, adding a touch of sophistication and elegance to an outfit while providing comfort and ease of wear, perfect for work, casual events, or as a stylish choice for everyday activities.
	- ballet flats: Soft, lightweight shoes with a low heel, designed for ballet dancing but now popular as casual wear, offering a comfortable and understated option for everyday activities, social events, or as a versatile addition to any wardrobe.
	- mules: Shoes with no back or heel strap, typically worn with the foot slipping in and out easily, providing a stylish and comfortable choice for warm weather, outdoor activities, or as a chic accessory for a night out.
	- sandals: Open-toed shoes that expose the foot, often featuring straps or thongs to secure the foot in place, perfect for warm weather, outdoor activities, or as a stylish choice for a beach vacation or poolside relaxation.

--boots
Boots:
	- ankle boots: Boots that reach just above the ankle, often worn with dresses or skirts, providing a stylish and practical choice for adding a touch of edge or sophistication to an outfit, suitable for both casual and dressy occasions.
	- knee-high boots: Boots that extend up to the knee, suitable for both casual and formal attire, offering a versatile option that can be dressed up or down depending on the style, material, and accessories chosen, perfect for adding a polished, put-together look to any ensemble.
	- over-the-knee boots: Boots that cover the knee and sometimes part of the thigh, adding a stylish touch to outfits while providing warmth and protection, ideal for colder weather, as a fashion statement, or as a bold accessory for a night out or special event.
	- chelsea boots: Ankle boots with an elastic side panel, allowing for easy on and off, and often featuring a sleek, minimalist design, providing a comfortable and stylish option for everyday wear, suitable for both casual and dressier occasions, and versatile enough to be paired with a variety of outfits and accessories.

--panties
Cut:
	- thong: A thong has a thin, narrow strip of fabric that passes between the buttocks, providing minimal coverage and a sleek appearance under clothing, often chosen for its provocative, revealing style and comfort for warm weather or as a fashion statement.
	- G-string: Similar to a thong, a G-string also has a narrow strip of fabric between the cheeks, but it extends further back, often reaching the lower part of the buttocks for added coverage and support, providing a balance between style and practicality, suitable for everyday wear or as a more modest alternative to thongs.
	- cheeky: Cheeky panties provide moderate coverage, sitting higher on the hips and covering more of the buttocks than a thong or G-string. They often have a wider waistband and a more traditional panty shape, offering a flattering, comfortable fit that works well for both casual and dressy occasions.
	- boyshorts: Boyshorts feature a shorter, wider leg and a higher waistline compared to traditional panties. They provide more coverage and support, often designed for athletic or lounging purposes, making them a practical choice for active wear or for those who prefer a snugger fit.
	- hipsters: Hipster panties have a low rise and a shorter leg, sitting just below the hip bone. They offer a more revealing look, often with a wider waistband and a cut that accentuates the hip and rear areas, providing a sleek, fashion-forward style that can add a touch of allure to an outfit.

Fabric:
	- silk: A luxurious, smooth, and delicate fabric that provides a sensual, high-end feel. Silk panties are often reserved for special occasions or for those who appreciate the finer things, adding a touch of elegance and sophistication to any ensemble.
	- mesh: A lightweight, open-weave fabric that allows for airflow and helps keep the wearer cool. They often have a more revealing design compared to other fabrics, making them a practical choice for warm weather or for those who prefer a breezy, comfortable feel against the skin.
	- cotton: A breathable, natural fiber often used for everyday, casual panties. Provides comfort and a soft feel against the skin, making it an ideal choice for relaxed, at-home wear or for those with sensitive skin.
	- lycra: A synthetic spandex-like material that adds stretch and flexibility to panties, making them comfortable to move around in. Commonly used for sportswear and shapewear, providing support and a snug fit during physical activities or for body sculpting purposes.
	
Features:
	- lace: Decorative trim adorns the edges, waistband, or other parts of the panties for a stylish, feminine touch, adding a romantic, vintage flair to the overall design and providing a beautiful contrast against the main fabric.
	- armored: A unique, protective style of panties made from durable materials, likely designed for combat or high-impact activities that require full coverage and flexibility, providing a functional and stylish option for those in such roles or with specific needs.

Coverage:
	- low coverage: The most revealing style, offering minimal coverage and a low, often thong-like design that leaves the buttocks and crotch exposed, providing a bold, provocative look that can add a touch of excitement and allure to an outfit, often chosen for its fashion-forward style and comfort for warm weather or as a daring fashion statement.
	- mid coverage: Panties with a lower rise and less fabric coverage, typically featuring a more relaxed fit and a shorter leg length, providing a balance between style, comfort, and practicality, suitable for everyday wear or as a more casual alternative to full coverage options.
	- full coverage: Panties that provide complete coverage from the waist to the crotch, often with a high waistband and a snug fit, offering the most privacy and support, suitable for conservative or modest individuals, or for those who prefer a secure, unobtrusive fit.
	
--bra
Style:
	- underwire: A bra with a metal or plastic underwire that provides support and shape to the breasts, often used for everyday wear, offering a balance between comfort, stability, and a flattering fit, suitable for most women and occasions.
	- wire-free: A bra without an underwire, relying on soft cups or a band for support, suitable for those who prefer a more comfortable, wire-free option, providing a relaxed, breathable fit that can be ideal for lounging, sleeping, or for women with sensitive skin.
	- minimizer: A bra designed to make the breasts appear smaller, often featuring a wider band and cups that distribute the breast tissue more evenly, providing a slimming effect and a more modest appearance, suitable for those who want to reduce the visual impact of their bust or for certain clothing styles.
	- push-up: A bra that uses padding or a special design to lift and enhance the breasts, creating a more prominent cleavage, ideal for special occasions, formal events, or for those who want to accentuate their bustline, often featuring additional support and shaping to provide a confident, alluring look.
	- sports: A specialized bra designed for athletic activities, typically featuring moisture-wicking materials, a snug fit, and additional support for high-impact exercises, providing comfort, stability, and breathability during physical activities, essential for women who engage in sports or fitness routines.
	- bikini: A very small, revealing bra style that provides minimal coverage, often worn as a fashion statement or for special occasions, adding a daring, provocative touch to an outfit, suitable for those who embrace a bold, daring aesthetic.
	
Features:
	- lace: A decorative, intricate fabric used to add a touch of elegance and style to the bra design, often found in the cups, straps, or trim, providing a romantic, feminine look that can elevate the overall appearance of the bra and the wearer.
	- mesh: A lightweight, open-weave fabric used for breathability and comfort in the bra, often found in the cups or back panels, allowing for airflow and helping to regulate body temperature, making it a practical choice for warm weather or for women who tend to sweat more.
	- straps: The parts of the bra that go around the wearer's shoulders or back, providing support and stability, usually adjustable to ensure a comfortable, secure fit, and available in various materials, such as satin, lace, or sports mesh, to match the bra's style and purpose.
	- armored: A unique, protective style of bra made from durable materials, likely designed for combat or high-impact activities that require full coverage and flexibility, providing a functional and stylish option for those in such roles or with specific needs, often featuring additional support and reinforcement for the breasts during intense physical activities.

--gloves
Length:
	- short: End at the wrist, providing minimal coverage, suitable for occasions where dexterity is crucial, such as playing musical instruments, typing, or performing delicate tasks, offering a lightweight, unobtrusive feel while still providing some protection for the hands.
	- mid-cuff: Cover the wrist and part of the forearm, offering a balance between protection and dexterity, ideal for a wide range of activities, from outdoor work or sports to driving or operating machinery, providing adequate coverage without restricting movement.
	- over-the-elbow: Cover the entire arm, from the wrist to the elbow, for maximum protection and insulation in extreme cold conditions, essential for winter sports, construction work, or other activities that expose the hands to harsh, frigid environments, often featuring additional padding and insulation for warmth and comfort.
	- gauntlet: Feature a long, tubular cuff that extends from the wrist to the mid-forearm or higher, often used for riding motorcycles, engaging in outdoor activities, or providing extra protection for the hands and forearms in various work or recreational settings, offering a stylish, functional design that combines style with practicality.

--stockings
Sheerness:
	- sheer: Extremely thin and transparent, allowing the skin to be visible through the fabric, providing a sensual, almost nude appearance that can add a touch of allure and sophistication to an outfit, often worn for fashion or as a part of a provocative ensemble.
	- semi-sheer: Thicker than sheer, but still translucent, providing a hint of coverage while still revealing the skin tone, offering a balance between modesty and flair, suitable for a wide range of occasions, from everyday wear to special events.
	- opaque: Completely solid and non-transparent, offering full coverage and concealing the legs entirely, providing a classic, timeless look that can be dressed up or down, often preferred for work, formal events, or for those who prefer a more conservative approach to hosiery.
	
Pattern:
	- solid: A single, uniform color without any additional designs or patterns, offering a sleek, understated appearance that can complement a variety of outfits and personal styles, providing a clean, minimalist look that allows the wearer's legs to be the focal point.
	- striped: Long, parallel lines of alternating colors, creating a striped effect that can add visual interest and a playful touch to an outfit, often worn for casual or fashion-forward occasions, suitable for those who appreciate bold, eye-catching designs.
	- polka dots: Small, evenly spaced circular dots of a contrasting color on a solid background, providing a whimsical, charming look that can add a touch of femininity and playfulness to an ensemble, often preferred for more relaxed, creative settings or as a fashion statement.
	- geometric prints: Repeating patterns of geometric shapes, such as chevrons, triangles, or hexagons, offering a modern, graphic look that can add a bold, edgy touch to an outfit, suitable for fashion-conscious individuals or for making a statement in a crowd.
	- fishnet: A mesh-like design with horizontal and vertical lines, creating a net-like appearance that provides a daring, provocative look, often worn for fetish or fashion purposes, adding a touch of excitement and allure to an ensemble.
	
Length:
	- thigh-high: Stockings that extend from the foot up to the upper or mid-thigh area, providing coverage and warmth, often worn for fashion, as a part of a costume, or for those who prefer a more extensive coverage of their legs, suitable for a variety of occasions, from everyday wear to special events.
	- mid-calf: Stockings that reach just above the calf, offering a balance between coverage and exposure, providing a flattering, elongating effect on the legs while still allowing for a glimpse of skin, suitable for a wide range of activities, from work to social events.
	- ankle: The shortest type of stocking, ending at the ankle, often worn for fashion or as a part of a costume, providing a sheer, delicate look that can add a touch of elegance and sophistication to an outfit, suitable for more formal or creative occasions.

Features:
	- with suspenders: Stockings held up by suspenders, providing additional support and a more secure fit, often adding a touch of vintage or fetish flair to an outfit, suitable for those who appreciate a more traditional or provocative approach to hosiery, offering a unique, eye-catching look that can make a statement in any setting.
	- reinforced heel and toe: Stockings with extra reinforcement in the heel and toe areas, providing added durability and protection against wear and tear, especially for those who engage in activities that put excessive stress on these parts of the stocking, such as dancing or working on their feet, ensuring a longer lifespan and better overall performance of the hosiery.

--choker
Material:
	- velvet: A luxurious, soft fabric with a smooth, plush pile, often featuring intricate patterns or solid colors.
	- satin: A woven fabric with a smooth, glossy surface and a soft, silky texture, commonly used for formal wear and accessories.
	- lace: An intricate, openwork fabric made from threads, often used for delicate, feminine designs and embellishments.
	- leather: A durable, versatile material derived from animal hides, known for its strength, flexibility, and classic appeal in accessories.
	- velvet ribbon: A narrow, woven strip of velvet, often used for tying or embellishing clothing, hair, or accessories.
	- chain: A series of interconnected metal links, used for jewelry, belts, or other fastenings, available in various materials, finishes, and styles.

--jewelry
Type:
	- earrings: Adornments worn on or through the ears, often in pairs, providing a versatile way to express personal style or add a touch of elegance to an outfit, available in a wide range of designs, from simple studs to elaborate drops or hoops, suitable for various occasions, from everyday wear to special events.
	- rings: Circular pieces of jewelry worn on the fingers, often symbolizing commitment, status, or personal style, offering a timeless and versatile way to accessorize, available in various materials, such as gold, silver, or platinum, and adorned with gemstones, engravings, or other decorative elements, suitable for both formal and casual settings, and often serving as a meaningful way to express individuality or sentiment.

--bare
Type:
	- bare belly: The midsection of the body, typically smooth and hairless, often considered a sensitive area, providing a sleek, toned appearance that can be accentuated by various clothing styles, from low-rise tops to midriff-baring outfits, offering a versatile canvas for showcasing personal style and confidence.
	- bare thighs: The region of the legs just above the knees, which can be smooth or hairy depending on individual characteristics and grooming habits, providing a wide range of options for self-expression and fashion choices, from smooth, hairless skin to a natural, unshaven look, suitable for various activities, from everyday wear to athletic pursuits or as a part of a provocative ensemble.

--personality
Type:
	- ISTJ: Disciplined, practical, and organized individuals who value structure and tradition. They are responsible, loyal, and detail-oriented, but can be rigid and unadaptable.
	- ISFJ: Caring, hardworking, and practical people who prioritize harmony and stability. They are diligent, empathetic, and organized, but may struggle with assertiveness and self-care.
	- INFJ: Creative, idealistic, and empathetic individuals who value deep connections and personal growth. They are imaginative, perceptive, and compassionate, but can be overly sensitive and indecisive.
	- INTJ: Strategic, innovative, and independent thinkers who excel at analyzing complex systems. They are confident, self-motivated, and decisive, but may come across as aloof or manipulative to others.
	- ISTP: Logical, resourceful, and adaptable problem-solvers who enjoy hands-on activities. They are curious, independent, and non-conformist, but may lack emotional depth and struggle with commitment.
	- ISFP: Artistic, empathetic, and spontaneous individuals who value authenticity and personal freedom. They are creative, gentle, and open-minded, but may struggle with assertiveness and decision-making.
	- INFP: Idealistic, imaginative, and empathetic dreamers who seek truth and beauty. They are creative, compassionate, and authentic, but can be overly sensitive, indecisive, and prone to self-doubt.
	- INTP: Logically curious, independent, and unconventional thinkers who enjoy exploring abstract ideas. They are innovative, analytical, and self-motivated, but may come across as aloof, argumentative, or detached.
	- ESTP: Action-oriented, adaptable, and charismatic individuals who thrive in fast-paced environments. They are confident, resourceful, and spontaneous, but may lack emotional depth and struggle with long-term planning.
	- ESFP: Outgoing, spontaneous, and enthusiastic performers who live in the moment. They are warm, creative, and people-oriented, but may struggle with follow-through and decision-making.
	- ENFP: Imaginative, charismatic, and empathetic individuals who inspire others with their ideas and passion. They are creative, spontaneous, and optimistic, but may struggle with focus, organization, and follow-through.
	- ENTP: Innovative, adaptable, and charismatic idea generators who thrive in dynamic environments. They are imaginative, strategic, and confident, but may come across as manipulative, disorganized, or argumentative.
	- ESTJ: Decisive, practical, and organized leaders who value tradition and order. They are responsible, loyal, and action-oriented, but can be rigid, critical, and dismissive of others' ideas.
	- ESFJ: Caring, organized, and people-oriented individuals who prioritize harmony and efficiency. They are warm, practical, and supportive, but may struggle with assertiveness and personal boundaries.
	- ENFJ: Charismatic, empathetic, and strategic leaders who inspire and motivate others. They are imaginative, warm, and decisive, but may come across as manipulative or overly controlling if not balanced with self-awareness.
	- ENTJ: Confident, strategic, and ambitious individuals who excel at leading and influencing others. They are imaginative, decisive, and charismatic, but may come across as domineering, manipulative, or insensitive to others' feelings.

Wings:
	- 1w9: Confident, assertive, and ambitious, with a strong desire for independence and a preference for solo activities. They can come across as aloof or standoffish to others.
	- 1w2: Charismatic, persuasive, and highly social, with a strong need for validation and a tendency to manipulate situations to their advantage. They may struggle with trust issues and emotional depth.
	- 2w1: Analytical, logical, and reserved, with a preference for structure and order. They often have high standards for themselves and others, which can lead to perfectionism and criticism.
	- 2w3: Creative, adaptable, and empathetic, with a strong sense of justice and a desire to help others. However, they may struggle with boundaries and self-care, prioritizing the needs of others over their own.
	- 3w2: Confident, charming, and competitive, with a strong drive for success and a tendency to be overly critical of themselves and others. They may have a hard time accepting compliments and showing vulnerability.
	- 3w4: Perfectionistic, detail-oriented, and introverted, with a strong sense of responsibility and a tendency to overthink and second-guess themselves. They often have high expectations for their own performance and may struggle with self-doubt.
	- 4w3: Imaginative, empathetic, and adaptable, with a strong desire for personal growth and a tendency to be overly sensitive to the emotions of others. They may struggle with setting healthy boundaries and asserting their own needs.
	- 4w5: Introspective, creative, and unconventional, with a strong sense of individuality and a tendency to question authority and societal norms. They may struggle with self-motivation and following through on commitments.
	- 5w4: Emotionally intense, passionate, and private, with a strong need for alone time and a tendency to internalize their feelings. They may struggle with trust and intimacy, preferring to keep their guard up.
	- 5w6: Confident, charismatic, and adaptable, with a strong desire for social connection and a tendency to be overly people-pleasing. They may struggle with setting boundaries and asserting their own needs in relationships.
	- 6w5: Enthusiastic, imaginative, and unconventional, with a strong sense of creativity and a tendency to be overly idealistic. They may struggle with practicality and follow-through on their ideas.
	- 6w7: Confident, assertive, and intense, with a strong desire for control and a tendency to be overly critical of themselves and others. They may struggle with impulsive behavior and emotional regulation.
	- 7w6: Analytical, adaptable, and charming, with a strong sense of humor and a tendency to be overly diplomatic. They may struggle with setting clear expectations and asserting their own needs in relationships.
	- 7w8: Confident, assertive, and intense, with a strong desire for power and control. They may struggle with emotional regulation, impulsivity, and a tendency to be overly critical of themselves and others.
	- 8w7: Imaginative, empathetic, and adaptable, with a strong sense of justice and a tendency to be overly sensitive to the emotions of others. They may struggle with setting healthy boundaries and asserting their own needs while still being supportive of others.
	- 8w9: Confident, charismatic, and unconventional, with a strong desire for personal growth and a tendency to question authority and societal norms. They may struggle with self-motivation and following through on commitments.
	- 9w8: Introspective, creative, and unconventional, with a strong sense of individuality and a tendency to be overly self-critical. They may struggle with self-motivation and following through on their own desires and needs.
	- 9w1: Analytical, logical, and reserved, with a strong preference for independence and a tendency to be overly critical of themselves and others. They may struggle with emotional expression and forming deep connections with others.
`;
