export type MenuTab = "speisekarte" | "getranke" | "tagesmenu";

export type SpiceLevel = "pikant" | "leicht scharf" | "mittelscharf" | "scharf" | "mild";

export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
  allergens: string;
  isVeg: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
  spiceLevel?: SpiceLevel;
}

export interface DrinkItem {
  id: string;
  category: string;
  name: string;
  description?: string;
  variants: { size: string; price: string }[];
}

export interface LunchItem {
  id: string;
  number: string;
  name: string;
  description: string;
  price: string;
  allergens: string;
  category: "Vegetarisch" | "Chicken" | "Lamm" | "Suppe";
  isSpicy?: boolean;
  spiceLevel?: SpiceLevel;
}

export interface LunchOfferGroup {
  id: string;
  title: string;
  items: LunchItem[];
}

// =====================================================
// SPEISEKARTE - Mapped directly from latest PDF OCR & Image
// =====================================================
export const foodMenu: MenuItem[] = [
  // INDIAN STREET FOOD (NEU!)
  { id: "400", category: "Indian Street Food", name: "Pani Puri (8 Stück)", description: "frittierte, leichte und knusprige Brotvariationen, gefüllt mit einer Mischung aus Kartoffeln, Zwiebeln und Kichererbsen, mit aromatisiertem Wasser", price: "6,90", allergens: "", isVeg: true, isVegan: true, isSpicy: true, spiceLevel: "pikant" },
  { id: "401", category: "Indian Street Food", name: "Dahi Puri (8 Stück)", description: "frittierte, leichte und knusprige Brotvariationen, gefüllt mit einer Mischung aus Kartoffeln, Zwiebeln und Kichererbsen, mit Joghurt", price: "6,90", allergens: "G", isVeg: true, isSpicy: true, spiceLevel: "pikant" },
  { id: "402", category: "Indian Street Food", name: "Aloo Chat", description: "frittierte Kartoffeln mit rotem Chili, Chat Masala, Zwiebeln und Tomaten, dazu Saucen", price: "6,90", allergens: "", isVeg: true, isVegan: true, isSpicy: true, spiceLevel: "leicht scharf" },
  { id: "403", category: "Indian Street Food", name: "Bhel Puri", description: "Puffreis mit gekochten Kartoffeln, Zwiebeln, Erdnüssen, mit versch. Saucen", price: "7,90", allergens: "G,E", isVeg: true, isSpicy: true, spiceLevel: "leicht scharf" },
  { id: "404", category: "Indian Street Food", name: "Papri Chat", description: "knusprige flache Puris mit Tamarinden-Sauce, Joghurt, Zwiebeln und Tomaten", price: "7,90", allergens: "G", isVeg: true },
  { id: "405", category: "Indian Street Food", name: "Samosa Chat", description: "1 gefüllte Teigtasche in Stücken, mit Tomaten, Gurke, Zwiebeln, Pfefferminze, Koriander und Tamarinden Sauce", price: "7,90", allergens: "G", isVeg: true },
  { id: "406", category: "Indian Street Food", name: "Aloo Tikki (2 Stück)", description: "frittierte Kartoffelbouletten, mit Zwiebeln, versch. Saucen, garniert mit gemischten Gewürzen", price: "8,90", allergens: "G", isVeg: true },
  { id: "407", category: "Indian Street Food", name: "Samosa Cholle", description: "eine gefüllte Teigtasche mit Kichererbsen, Zwiebeln, Tomaten, mit geriebenen Gewürzen", price: "7,90", allergens: "", isVeg: true, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "408", category: "Indian Street Food", name: "Cholle Bhatura", description: "Kichererbsen mit frischen Tomaten und Spezialgewürzen mit Bhatura-Brot, dazu frische Zwiebeln und Sauce", price: "9,50", allergens: "G", isVeg: true },
  { id: "409", category: "Indian Street Food", name: "Dahi Bhalla", description: "frittierte Linsenfrikadellen in Joghurt mit verschiedenen süßen und würzigen Chutneys belegt und mit Gewürzpulver garniert", price: "8,90", allergens: "G", isVeg: true },

  // SUPPEN
  { id: "1", category: "Suppen", name: "Daal Soup", description: "rote Linsensuppe nach köstlicher südindischer Art (auch vegan)", price: "5,10", allergens: "A,G", isVeg: true, isVegan: true },
  { id: "2", category: "Suppen", name: "Sabzi Soup", description: "gemischte Gemüsesuppe, leicht gewürzt (auch vegan)", price: "5,10", allergens: "A,G", isVeg: true, isVegan: true },
  { id: "3", category: "Suppen", name: "Tomatensuppe", description: "Tomatensuppe aus frischen Tomaten, garniert mit Sahne", price: "5,30", allergens: "A,G", isVeg: true },
  { id: "4", category: "Suppen", name: "Mulligatawney-Suppe", description: "typisch indische Curry-Suppe mit Hühnerfleisch", price: "5,60", allergens: "A,G", isVeg: false },
  { id: "5", category: "Suppen", name: "Garam Shorba", description: "Sauer-Scharf-Suppe mit gegrilltem Lammfleisch", price: "5,70", allergens: "A,G", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "6", category: "Suppen", name: "Champignon-Crémesuppe", description: "eine leckere Suppe aus frischen Champignons, mit Sahne und indischen Kräutern, garniert mit Mandeln", price: "5,10", allergens: "A,G,H", isVeg: true },
  { id: "7", category: "Suppen", name: "Mangosuppe", description: "vegetarische Mangosuppe mit gehacktem Gemüse und exotischen Gewürzen", price: "5,50", allergens: "A,G", isVeg: true },
  { id: "8", category: "Suppen", name: "Scampi Coco Soup", description: "Kokoscremesuppe mit gehackten Garnelen und Gewürzen", price: "7,20", allergens: "A,G", isVeg: false },
  { id: "9", category: "Suppen", name: "Garlic-Ginger Soup", description: "würzige Suppe mit Knoblauch & Ingwer (auch vegan)", price: "5,90", allergens: "A,G", isVeg: true, isSpicy: true, spiceLevel: "scharf" },

  // SALATE & RAITA
  { id: "11", category: "Salate & Raita", name: "Mix Salat", description: "gemischter Salat mit Hausdressing", price: "5,10", allergens: "", isVeg: true, isVegan: true },
  { id: "12", category: "Salate & Raita", name: "Mix Salat (groß)", description: "großer gemischter Salat mit Hausdressing", price: "6,80", allergens: "", isVeg: true, isVegan: true },
  { id: "13", category: "Salate & Raita", name: "Punjabi Raita", description: "Joghurt mit gekochten Kartoffeln und speziellen indischen Gewürzen", price: "4,10", allergens: "G", isVeg: true },
  { id: "14", category: "Salate & Raita", name: "Raita", description: "würziger Joghurt mit gehackten Gurken und Tomaten", price: "4,10", allergens: "G", isVeg: true },
  { id: "15", category: "Salate & Raita", name: "Jinga Salat", description: "Gemischter Salat mit gebratenen Garnelen", price: "9,80", allergens: "A,B", isVeg: false },
  { id: "16", category: "Salate & Raita", name: "Chicken Salat", description: "Gemischter Salat mit gebratenem Hühnerfleisch", price: "8,60", allergens: "A", isVeg: false },
  { id: "17", category: "Salate & Raita", name: "Salat Aastha", description: "Würziger gemischter Salat mit exotischen Früchten, Obst & hausgemachtem indischen Rahmkäse", price: "9,20", allergens: "G", isVeg: true },

  // PAKORAS - VORSPEISEN
  { id: "21", category: "Pakoras – Vorspeisen", name: "Samosas (2 Stück)", description: "gefüllte Teigtaschen aus Weizenmehl mit Kartoffeln, grünen Erbsen, Cashewnüssen, Rosinen und Mandeln", price: "5,90", allergens: "H", isVeg: true, spiceLevel: "pikant" },
  { id: "22", category: "Pakoras – Vorspeisen", name: "Gobhi Pakora", description: "Blumenkohl in Kichererbsenmehlteig gewendet und frittiert", price: "5,10", allergens: "", isVeg: true },
  { id: "23", category: "Pakoras – Vorspeisen", name: "Onion Bhaji", description: "Zwiebelstreifen in Kichererbsenmehlteig gewendet und frittiert", price: "5,10", allergens: "", isVeg: true },
  { id: "24", category: "Pakoras – Vorspeisen", name: "Baingan Pakora", description: "Auberginen in Kichererbsenmehlteig gewendet und frittiert", price: "5,10", allergens: "", isVeg: true },
  { id: "25", category: "Pakoras – Vorspeisen", name: "Khumbi Pakora", description: "Champignons in Kichererbsenmehlteig gewendet und frittiert", price: "5,10", allergens: "", isVeg: true },
  { id: "26", category: "Pakoras – Vorspeisen", name: "Chicken Pakora", description: "paniertes Hühnerfilet in Kichererbsenmehlteig", price: "6,30", allergens: "", isVeg: false },
  { id: "27", category: "Pakoras – Vorspeisen", name: "Scampi Pakora", description: "gewürzte Großgarnelen in Kichererbsenmehlteig", price: "9,90", allergens: "B", isVeg: false },
  { id: "28", category: "Pakoras – Vorspeisen", name: "Paneer Pakora", description: "hausgemachter frischer Rahmkäse in Kichererbsenmehlteig", price: "6,30", allergens: "G", isVeg: true },
  { id: "29", category: "Pakoras – Vorspeisen", name: "Gemischte Vorspeisenplatte (für 2 Personen)", description: "Zusammenstellung der vegetarischen Pakoras-Vorspeisen", price: "13,50", allergens: "B,G", isVeg: true },
  { id: "20", category: "Pakoras – Vorspeisen", name: "Chicken & Chips", description: "mariniertes Hühnerfleisch mit Pommes, dazu Dip", price: "8,30", allergens: "G", isVeg: false },

  // BROT & BEILAGEN
  { id: "140", category: "Brot & Beilagen", name: "Bhatura", description: "frittiertes Brot aus feinstem Weißmehl", price: "2,80", allergens: "A", isVeg: true },
  { id: "141", category: "Brot & Beilagen", name: "Naan", description: "Fladenbrot aus Weizenmehl im Ofen gebacken", price: "3,50", allergens: "A", isVeg: true },
  { id: "142", category: "Brot & Beilagen", name: "Cheese-Naan", description: "Fladenbrot aus Weizenmehl mit hausgemachtem frischem geriebenem Rahmkäse, im Ofen gebacken", price: "3,80", allergens: "A,G", isVeg: true },
  { id: "143", category: "Brot & Beilagen", name: "Knoblauch-Naan", description: "Fladenbrot aus Weizenmehl mit Knoblauchpaste im Ofen gebacken", price: "3,80", allergens: "A,G", isVeg: true },
  { id: "144", category: "Brot & Beilagen", name: "Butter Naan", description: "Brot aus Weizenmehl mit Butter im Ofen gebacken", price: "3,70", allergens: "A,G", isVeg: true },
  { id: "145", category: "Brot & Beilagen", name: "Basmati Reis", description: "indischer Spezialreis", price: "3,50", allergens: "", isVeg: true, isVegan: true },
  { id: "146", category: "Brot & Beilagen", name: "Mix Pickles", description: "eingelegtes indisches Gemüse", price: "2,50", allergens: "", isVeg: true, isSpicy: true, spiceLevel: "scharf" },
  { id: "147", category: "Brot & Beilagen", name: "Mango Chutney", description: "eingelegte Mangofrüchte in einer süß-sauren Sauce", price: "2,40", allergens: "", isVeg: true },
  { id: "148", category: "Brot & Beilagen", name: "Papadam", description: "knuspriges Fladenbrot aus Bohnenmehl mit Kreuzkümmel", price: "1,00", allergens: "", isVeg: true, isVegan: true },
  { id: "149", category: "Brot & Beilagen", name: "Roti", description: "indisches Vollkornbrot", price: "3,80", allergens: "A", isVeg: true, isVegan: true },
  { id: "198", category: "Brot & Beilagen", name: "Aloo Porantha", description: "Vollkornmehlbrot gefüllt mit würzigen geriebenen Kartoffeln, dazu würzige Joghurtsauce", price: "6,90", allergens: "A,G", isVeg: true },
  { id: "199", category: "Brot & Beilagen", name: "Cheese Kulcha Naan", description: "Fladenbrot aus Weizenmehl gefüllt mit hausgemachtem Rahmkäse und Gewürzen", price: "6,50", allergens: "A,G", isVeg: true },
  { id: "167", category: "Brot & Beilagen", name: "Gebratene Kartoffeln", description: "knusprige gebratene Kartoffeln", price: "3,50", allergens: "", isVeg: true },
  { id: "168", category: "Brot & Beilagen", name: "Pommes frites", description: "frittierte Kartoffelstäbchen", price: "3,50", allergens: "", isVeg: true },
  { id: "169", category: "Brot & Beilagen", name: "versch. Saucen", description: "Tamarinden, Minze oder Scharf", price: "0,90", allergens: "", isVeg: true },
  { id: "192", category: "Brot & Beilagen", name: "Sesam Naan", description: "Fladenbrot aus Weizenmehl mit Sesamkernen im Ofen gebacken", price: "3,70", allergens: "A,G,K", isVeg: true },

  // VEGAN
  { id: "30", category: "Vegan", name: "Daal Tarhka", description: "Gelbe und rote Linsen mit Zwiebeln und Knoblauch in Ghee gebraten", price: "10,90", allergens: "", isVeg: true, isVegan: true },
  { id: "32", category: "Vegan", name: "Sabzi", description: "verschiedene frische Gemüsesorten in Currysauce", price: "11,80", allergens: "", isVeg: true, isVegan: true },
  { id: "34", category: "Vegan", name: "Aloo Gobhi", description: "frischer Blumenkohl und Kartoffeln mit Ingwer, Knoblauch, Zwiebeln und Tomaten nach nordindischer Art", price: "11,90", allergens: "", isVeg: true, isVegan: true },
  { id: "36", category: "Vegan", name: "Palak Aloo", description: "Kartoffeln und Spinat mit Ingwer und Zwiebeln nach nordindischer Art gebraten", price: "11,40", allergens: "", isVeg: true, isVegan: true },
  { id: "37", category: "Vegan", name: "Chana Masala", description: "Kichererbsen mit frischen Tomaten in speziellen Gewürzen", price: "11,30", allergens: "", isVeg: true, isVegan: true },
  { id: "43", category: "Vegan", name: "Chana Saag", description: "Kichererbsen mit Ingwer, Knoblauch in würzigem Spinat gebraten", price: "11,30", allergens: "", isVeg: true, isVegan: true },
  { id: "46", category: "Vegan", name: "Alloo Matter", description: "Grüne Erbsen und Kartoffeln mit versch. Kräutern in milder Currysauce", price: "11,70", allergens: "", isVeg: true, isVegan: true },
  { id: "47", category: "Vegan", name: "Tofu Masala", description: "Gebratene Tofustücke mit Paprika, Zwiebeln, Knoblauch, Ingwer in würziger Currysauce", price: "12,50", allergens: "F", isVeg: true, isVegan: true, isSpicy: true, spiceLevel: "scharf" },
  { id: "49", category: "Vegan", name: "Punjabi Bengan", description: "Aubergine mit Zwiebeln, Tomaten, Kartoffeln und frischem Knoblauch in Currysauce", price: "11,40", allergens: "", isVeg: true, isVegan: true, isSpicy: true, spiceLevel: "scharf" },
  { id: "57", category: "Vegan", name: "Chilli Kofta", description: "Gemüsebällchen mit Paprika, Zwiebeln, Ingwer, Knoblauch in Soja-Chillisauce", price: "12,50", allergens: "F", isVeg: true, isVegan: true, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "58", category: "Vegan", name: "Chilli Tofu", description: "gebratene Tofustückchen mit Paprika, Zwiebeln, Ingwer, Knoblauch in Soja-Chillisauce", price: "12,90", allergens: "F", isVeg: true, isVegan: true },

  // VEGETARISCH
  { id: "31", category: "Vegetarisch", name: "Dal Makhni", description: "verschiedene Linsen gebraten in Butter mit Zwiebeln, Ingwer & Tomaten", price: "11,90", allergens: "G", isVeg: true },
  { id: "33", category: "Vegetarisch", name: "Sabzi Korma", description: "frisches Gemüse mit Rahmkäse, gehackten Cashew-Nüssen und Rosinen in Käse-Sahnesauce", price: "12,50", allergens: "G,H", isVeg: true },
  { id: "35", category: "Vegetarisch", name: "Palak Paneer", description: "hausgemachter frischer Rahmkäse mit Spinat in verschiedenen Gewürzen gebraten", price: "11,90", allergens: "G", isVeg: true },
  { id: "38", category: "Vegetarisch", name: "Matter Paneer", description: "hausgemachter frischer Rahmkäse mit grünen Erbsen in spezieller milder Sauce", price: "12,40", allergens: "G", isVeg: true },
  { id: "39", category: "Vegetarisch", name: "Khumbi Paneer", description: "frische Champignons mit hausgemachtem Rahmkäse, Erbsen, Rosinen, Mandeln und Cashewnüssen in Sahnesauce", price: "12,90", allergens: "G,H", isVeg: true },
  { id: "40", category: "Vegetarisch", name: "Shahi Paneer", description: "hausgemachter Rahmkäse mit Cashewnüssen und Rosinen in Butter-Curry-Tomaten-Sahnesauce", price: "12,90", allergens: "G,H", isVeg: true },
  { id: "41", category: "Vegetarisch", name: "Malai Kofta", description: "Röllchen aus Kartoffeln, Rahmkäse und Gemüse mit Mandeln, Rosinen und Cashewnüssen in Käse-Sahnesauce", price: "12,80", allergens: "G,H", isVeg: true },
  { id: "42", category: "Vegetarisch", name: "Paneer Jhalfrezi", description: "Rahmkäse in gewürzter Currysauce mit Blumenkohl, Paprika, Ingwer, Knoblauch und Tomaten", price: "12,90", allergens: "G", isVeg: true, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "44", category: "Vegetarisch", name: "Shahi Baingan", description: "Gefüllte Aubergine mit geriebenem Käse, Karotten, Blumenkohl und Cashew in Tomaten-Sahnesauce", price: "13,90", allergens: "G,H", isVeg: true },
  { id: "45", category: "Vegetarisch", name: "Shahi Mirch", description: "Paprika gefüllt mit geriebenem Käse, Karotten, Blumenkohl und Cashewnüssen in Curry-Sahnesauce", price: "13,90", allergens: "G,H", isVeg: true },
  { id: "50", category: "Vegetarisch", name: "Paneer Broccoli", description: "Broccoli mit Mandeln, ind. Rahmkäse in würziger Knoblauch-Joghurtsauce", price: "13,50", allergens: "G,H", isVeg: true },
  { id: "56", category: "Vegetarisch", name: "Cheese Potato", description: "Indischer Rahmkäsestücke und Kartoffeln mit Zwiebeln in Tomaten-Currysauce", price: "12,40", allergens: "G", isVeg: true, spiceLevel: "mild" },
  { id: "48", category: "Vegetarisch", name: "Karahi Paneer Menu (1 Person)", description: "Aperitif Sherry, Sabzi Soup, Hauptgang Karahi Paneer, Reis, Bhatura, Papadam, 3 Saucen & Mango-Créme", price: "20,50", allergens: "A,G", isVeg: true },

  // BIRYANIS
  { id: "51", category: "Biryani", name: "Sofiani Biryani", description: "gedämpfter Basmatireis gebraten mit frischem Gemüse, Rahmkäse, Cashewnüssen, Rosinen und Mandeln", price: "13,20", allergens: "G,H", isVeg: true },
  { id: "52", category: "Biryani", name: "Chicken Biryani", description: "zarte Hühnerfiletstücke mit Basmatireis, Zwiebeln, Paprika, Rosinen, Cashewnüssen und Mandeln", price: "14,10", allergens: "G,H", isVeg: false },
  { id: "53", category: "Biryani", name: "Mutton Biryani", description: "zarte Lammfleischstücke gedünstet mit Basmatireis, Zwiebeln, Paprika, Cashewnüssen, Mandeln & Rosinen", price: "14,50", allergens: "G,H", isVeg: false },
  { id: "54", category: "Biryani", name: "Aastha Biryani", description: "zarte Lamm- und Hühnerfleischstücke mit Basmatireis, Gemüse, Zwiebeln, Paprika, Cashewnüssen und Mandeln", price: "15,80", allergens: "G,H", isVeg: false },
  { id: "55", category: "Biryani", name: "Scampi Biryani", description: "gebratene Großgarnelen gedünstet mit Basmatireis, orientalischen Gewürzen, Cashewnüssen und Mandeln", price: "17,40", allergens: "B,H", isVeg: false },

  // HÄHNCHENGERICHTE
  { id: "71", category: "Hähnchengerichte", name: "Chicken Curry", description: "Hühnerfilet in Currysauce nach köstlicher indischer Art", price: "11,90", allergens: "A,G", isVeg: false },
  { id: "72", category: "Hähnchengerichte", name: "Chicken Sabzi", description: "Hühnerfilet mit verschiedenem Gemüse in einer speziellen milden Sauce", price: "12,40", allergens: "A,G", isVeg: false },
  { id: "73", category: "Hähnchengerichte", name: "Chicken Dahiwala", description: "Hühnerfilet mit Mandeln in Joghurt-Knoblauchsauce mit indischen Gewürzen", price: "13,50", allergens: "A,G,H", isVeg: false },
  { id: "74", category: "Hähnchengerichte", name: "Chicken »Aastha«", description: "Hühnerfilet gebraten mit Paprika und frischem Rahmkäse in einer speziellen Rahmsauce", price: "13,10", allergens: "A,G", isVeg: false },
  { id: "75", category: "Hähnchengerichte", name: "Butter Chicken", description: "saftige Tandoori Hühnerstücke gegrillt mit Gewürzen, Cashewnüssen, Rosinen und Mandeln in Butter-Tomaten-Sahnesauce", price: "13,40", allergens: "A,G,H", isVeg: false },
  { id: "76", category: "Hähnchengerichte", name: "Chicken “Saagwala”", description: "Hühnerfilet in Spinat mit frischem Ingwer und Knoblauch", price: "12,40", allergens: "A,G", isVeg: false },
  { id: "77", category: "Hähnchengerichte", name: "Chicken Korma", description: "Hühnerfiletstücke in einer milden Sahnesauce aus Gewürzen, Rahmkäse, Mandeln, Rosinen und Cashewnüssen", price: "13,50", allergens: "A,G,H", isVeg: false, spiceLevel: "mild" },
  { id: "78", category: "Hähnchengerichte", name: "Chicken Banglori", description: "Hühnerfilet mit Ananas, Paprika, frischem Ingwer und Knoblauch mit exotischen Gewürzen", price: "12,90", allergens: "A,G", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "79", category: "Hähnchengerichte", name: "Chicken Madras", description: "Hühnerfilet mit Kokosraspeln in einer speziellen südindischen Gewürzmischung", price: "12,90", allergens: "A,G", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "80", category: "Hähnchengerichte", name: "Chicken Vindaloo", description: "Hühnerfilet mit Kartoffeln und Ingwer nach südindischer Art", price: "12,90", allergens: "A,G", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "81", category: "Hähnchengerichte", name: "Chicken Jhalfrezi", description: "Hühnerfilet mit frischen Tomaten, Zwiebeln, Paprika, Ingwer und Blumenkohl", price: "12,90", allergens: "A,G", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "82", category: "Hähnchengerichte", name: "Chicken Mango", description: "Hühnerfiletstücke mit Mandeln in einer milden Mango-Sahnesauce", price: "12,80", allergens: "A,G", isVeg: false, spiceLevel: "mild" },
  { id: "85", category: "Hähnchengerichte", name: "Chicken Khumb Wala", description: "zartes Hähnchenbrustfilet mit fr. Champignons, Knoblauch, Ingwer und Mandeln in Sahnesauce", price: "12,90", allergens: "", isVeg: false },
  { id: "86", category: "Hähnchengerichte", name: "Chicken Spezial", description: "zartes Hähnchenbrustfilet mit Mandeln, Rosinen, Käse, Gemüse und Cashew in Curry-Sahnesauce", price: "13,90", allergens: "A,G,H", isVeg: false },
  { id: "87", category: "Hähnchengerichte", name: "Chicken Nilgiri", description: "Hähnchenbrustfilet mit Koriander, Minze und Kräutern in orientalischer Sauce mit Kokosmilch", price: "13,50", allergens: "A,G", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "90", category: "Hähnchengerichte", name: "Chicken Broccoli", description: "zartes Hähnchenbrustfilet mit Broccoli, Mandeln, in würziger Knoblauch-Joghurtsauce", price: "13,50", allergens: "G,H", isVeg: false },
  { id: "88", category: "Hähnchengerichte", name: "Karahi Chicken (1 Person)", description: "Aperitif Sherry, Sabzi Soup, Karahi Chicken Hauptgang, Reis, Bhatura, Papadam, Saucen & Mango-Créme", price: "21,50", allergens: "A,G", isVeg: false },
  { id: "89", category: "Hähnchengerichte", name: "Karahi Chicken (2 Personen)", description: "Karahi Chicken Komplettmenü für 2 Personen", price: "40,90", allergens: "A,G", isVeg: false },

  // LAMMGERICHTE
  { id: "91", category: "Lammgerichte", name: "Lamm Curry", description: "Lammfleisch in einer Currysauce nach köstlicher indischer Art", price: "12,90", allergens: "G", isVeg: false },
  { id: "92", category: "Lammgerichte", name: "Lamm Sabzi", description: "zarte Lammfleischstücke mit verschiedenem Gemüse in Spezialsauce", price: "13,40", allergens: "G", isVeg: false },
  { id: "93", category: "Lammgerichte", name: "Lamm Jakhni", description: "zarte Lammfleischstücke in Knoblauch-Joghurtsauce mit Mandeln und Gewürzen", price: "13,90", allergens: "G,H", isVeg: false },
  { id: "94", category: "Lammgerichte", name: "Mutton Josh", description: "Lammfleischstücke in würziger Mischung aus Zwiebeln, Knoblauch, Ingwer und Paprika in roter Currysauce", price: "13,90", allergens: "G", isVeg: false },
  { id: "96", category: "Lammgerichte", name: "Lamm “Saagwala”", description: "Lammfleisch in Spinat mit Zwiebeln, frischem Ingwer und Knoblauch gebraten", price: "13,40", allergens: "G", isVeg: false },
  { id: "97", category: "Lammgerichte", name: "Lamm Korma", description: "zarte Lammfleischstücke in mildere Sahnesauce mit Rahmkäse, Cashewnüssen & Rosinen", price: "14,50", allergens: "G,H", isVeg: false },
  { id: "98", category: "Lammgerichte", name: "Sukha Banglor", description: "Lammfleisch mit Ananas, Paprika, frischem Ingwer & Knoblauch mit exotischen Gewürzen", price: "13,90", allergens: "G", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "99", category: "Lammgerichte", name: "Lamm Madras", description: "Lammfleischstücke mit Kokosraspeln in spezieller südindischer Gewürzmischung", price: "14,30", allergens: "G", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "100", category: "Lammgerichte", name: "Lamm Vindaloo", description: "Lammfleischstücke mit Kartoffeln in pikanter Currysauce", price: "14,50", allergens: "G", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "170", category: "Lammgerichte", name: "Lamm Spezial", description: "Lammfleisch mit Mandeln, Rosinen, Käse, Gemüse und Cashewnüsse in Curry-Sahnesauce", price: "14,50", allergens: "G,H", isVeg: false },
  { id: "171", category: "Lammgerichte", name: "Lamm Punjabi", description: "Lammfleisch mit Ingwer, Chili, Zwiebeln und Knoblauch in gewürzter Currysauce nach Punjabi-Art", price: "14,40", allergens: "G", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "172", category: "Lammgerichte", name: "Lamm Mango", description: "Lammfleisch mit Mandeln in feinwürziger Mango-Sahnesauce", price: "13,90", allergens: "G,H", isVeg: false },
  { id: "173", category: "Lammgerichte", name: "Lamm Nilgiri", description: "Lammfleisch mit Koriander, Minze und Kräutern in orientalischer Sauce mit Kokosnußmilch", price: "15,10", allergens: "G", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "174", category: "Lammgerichte", name: "Lamm Chilli", description: "Lammfleisch mit Paprika, Zwiebeln, Knoblauch in Soja-Chilli Spezialsauce", price: "15,20", allergens: "F", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "175", category: "Lammgerichte", name: "Karahi Meat (1 Person)", description: "Aperitif Sherry, Dal Soup, Karahi Meat Hauptgang, Reis, Bhatura, Papadam, Saucen & Mango-Créme", price: "22,90", allergens: "A,G", isVeg: false },
  { id: "176", category: "Lammgerichte", name: "Karahi Meat (2 Personen)", description: "Karahi Meat Komplettmenü für 2 Personen", price: "43,50", allergens: "A,G", isVeg: false },

  // TANDOORI / GRILLSPEZIALITÄTEN
  { id: "59", category: "Tandoor Gerichte", name: "Paneer Pudina Tikka", description: "Hausgemachter Rahmkäse mit frischer Pfefferminze in Joghurt-Knoblauchpaste, zart gegrillt", price: "15,50", allergens: "G", isVeg: true },
  { id: "60", category: "Tandoor Gerichte", name: "Vegetable Masala Sizzler", description: "Versch. Gemüse gegrillt mit Kartoffeln, Zwiebeln, Paprika in Mix Pickles Gewürzmischung (auch vegan)", price: "13,90", allergens: "", isVeg: true, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "61", category: "Tandoor Gerichte", name: "Tandoori Chicken", description: "Hähnchenkeulen 24 Std. in Joghurt mit indischen Gewürzen mariniert und im Ofen gebacken", price: "14,20", allergens: "A,G", isVeg: false },
  { id: "62", category: "Tandoor Gerichte", name: "Chicken Tikka", description: "gegrillte Hühnerfiletstücke in Joghurt-Masala-Sauce mit Paprika, Zwiebeln, Ingwer und Tomaten", price: "15,80", allergens: "G", isVeg: false },
  { id: "63", category: "Tandoor Gerichte", name: "Mutton Tikka", description: "zarte Lammfleischstücke gegrillt mit Ingwer, Paprika, Zwiebeln und Tomaten", price: "16,90", allergens: "G", isVeg: false },
  { id: "64", category: "Tandoor Gerichte", name: "Paneer Tikka Masala", description: "gegrillter Rahmkäse mariniert in Joghurt-Sahne-Sauce mit Paprika, Zwiebeln, Tomaten und Ingwer", price: "15,20", allergens: "G", isVeg: true },
  { id: "65", category: "Tandoor Gerichte", name: "Ente Tikka", description: "Gegrilltes Entenfleisch mit Ingwer, Paprika, Zwiebeln und frischen Tomaten in Gewürzmischung", price: "16,90", allergens: "A", isVeg: false },
  { id: "66", category: "Tandoor Gerichte", name: "Fisch Tikka", description: "Rotbarschfiletstücke eingelegt in feinen Gewürzen und Kräutern mit Paprika, Zwiebeln und Ingwer", price: "15,90", allergens: "A,G", isVeg: false },
  { id: "67", category: "Tandoor Gerichte", name: "Scampi Tikka", description: "gegrillte Großgarnelen mariniert in Joghurt-Masala-Sauce mit Paprika, Zwiebeln und Ingwer", price: "18,50", allergens: "B,G", isVeg: false },
  { id: "68", category: "Tandoor Gerichte", name: "Aastha Grillplatte", description: "Zusammenstellung von Grillspezialitäten aus Hähnchen, Lamm und Paneer Tikka", price: "19,60", allergens: "A,G", isVeg: false },
  { id: "69", category: "Tandoor Gerichte", name: "Chicken Pudina Tikka", description: "Hühnerbrustfilet mariniert in Pfefferminz-Joghurtsauce, zart gegrillt", price: "16,30", allergens: "G", isVeg: false },
  { id: "70", category: "Tandoor Gerichte", name: "Grill-Mix", description: "Zusammenstellung von Chicken Tikka, Scampi Tikka und Ente Tikka", price: "20,60", allergens: "A,B,G", isVeg: false },

  // FÜR DEN KLEINEN HUNGER & KINDERGERICHTE
  { id: "192", category: "Für den kleinen Hunger", name: "Samosa Chole", description: "gefüllte Gemüse-Teigtasche mit Kichererbsen", price: "8,30", allergens: "", isVeg: true },
  { id: "194", category: "Für den kleinen Hunger", name: "Chicken & Chips", description: "mariniertes Hühnerfleisch mit Pommes, dazu Dip", price: "8,30", allergens: "G", isVeg: false },
  { id: "193", category: "Für den kleinen Hunger", name: "Chole Bhatura", description: "Kichererbsen mit frischen Tomaten und Spezialgewürzen mit Bhatura-Brot, Zwiebeln und Sauce", price: "9,50", allergens: "G", isVeg: true },
  { id: "83", category: "Kindergerichte", name: "Kinderteller", description: "leicht gewürztes Gemüse in milder Rahmsauce mit Pommes oder Reis", price: "6,50", allergens: "G", isVeg: true },
  { id: "84", category: "Kindergerichte", name: "Chicken Malai", description: "leicht gewürztes Hähnchenfleisch in milder Rahmsauce mit Pommes oder Reis", price: "7,50", allergens: "G", isVeg: false },
  { id: "195", category: "Kindergerichte", name: "Mango Panir", description: "indischer Rahmkäse in Mangosauce mit Reis oder Pommes", price: "7,30", allergens: "G", isVeg: true },
  { id: "196", category: "Kindergerichte", name: "Kinder Tikka", description: "gebratene Hähnchenstücke mit Reis oder Pommes, dazu Ketchup", price: "7,50", allergens: "G", isVeg: false },

  // ENTEN-SPEZIALITÄTEN
  { id: "156", category: "Entengerichte", name: "Ente Mumbai", description: "zartes Entenbrustfilet mit Tomaten, Paprika, Zwiebeln, Ingwer und Ananas in milder Currysauce", price: "15,50", allergens: "", isVeg: false },
  { id: "157", category: "Entengerichte", name: "Ente Spezial", description: "zartes Entenbrustfilet mit Mandeln, Rosinen, Rahmkäse, Gemüse und Cashewnüssen in Rahmsauce", price: "16,20", allergens: "G,H", isVeg: false },
  { id: "158", category: "Entengerichte", name: "Ente Khumb Wala", description: "zartes Entenbrustfilet mit frischen Champignons, Knoblauch und Ingwer in Mandel-Sahne-Sauce", price: "16,20", allergens: "G,H", isVeg: false },
  { id: "159", category: "Entengerichte", name: "Ente Mango", description: "zartes Entenbrustfilet mit Mandeln in feinwürziger Mango-Sahne-Sauce", price: "15,90", allergens: "G", isVeg: false },
  { id: "160", category: "Entengerichte", name: "Ente Jalfrezi", description: "Entenbrustfilet mit Ingwer, Knoblauch, Zwiebeln, Tomaten und Paprika in gewürzter Currysauce", price: "15,80", allergens: "", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "161", category: "Entengerichte", name: "Ente Vindaloo", description: "zartes Entenbrustfilet mit Kartoffeln, nach spezieller südindischer Art", price: "15,50", allergens: "", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "162", category: "Entengerichte", name: "Ente Nilgiri", description: "zartes Entenbrustfilet mit Korianderblättern, grünem Chilli, Minze und Kräutern in orientalischer Sauce mit Kokosnußmilch", price: "15,90", allergens: "G", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "163", category: "Entengerichte", name: "Ente Madras", description: "zartes Entenbrustfilet mit Kokosraspeln in einer speziellen Gewürzmischung nach köstlicher südindischer Art", price: "15,50", allergens: "", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "164", category: "Entengerichte", name: "Karahi Ente (1 Person)", description: "Aperitif, Dal Soup, gegrilltes Entenbrustfilet im Karahi-Topf, Reis, Bhatura, Papadam & Dessert", price: "23,50", allergens: "A,G", isVeg: false },
  { id: "165", category: "Entengerichte", name: "Karahi Ente (2 Personen)", description: "Karahi Ente Menü für 2 Personen", price: "44,90", allergens: "A,G", isVeg: false },

  // THALIS
  { id: "101", category: "Thalis", name: "Punjabi Thali (1 Person)", description: "Zusammenstellung von drei köstlichen Huhn-, Lamm und Gemüsegerichten (Sabji Korma, Chicken Madras & Lamm Curry)", price: "17,90", allergens: "G", isVeg: false },
  { id: "102", category: "Thalis", name: "»Aastha« Thali (1 Person)", description: "Zusammenstellung von drei vegetarischen Gerichten (Palak Aloo, Dal Makhni und Malai Kofta)", price: "16,20", allergens: "G", isVeg: true },

  // FISCH & GARNELEN
  { id: "111", category: "Fischgerichte", name: "Fisch Curry", description: "Rotbarschfiletstücke in einer würzigen Currysauce nach nordindischer Art", price: "13,50", allergens: "A", isVeg: false },
  { id: "112", category: "Fischgerichte", name: "Fisch Madras", description: "Rotbarschfiletstücke mit Kokosraspeln in einer speziellen Gewürzmischung nach südindischer Art", price: "13,90", allergens: "A", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "113", category: "Fischgerichte", name: "Fisch Punjabi", description: "Rotbarschfiletstücke gewürzt mit einer Mischung aus wohlausgewogenen exotischen Gewürzen mit Paprika, Zwiebel und Tomaten", price: "14,10", allergens: "A", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "177", category: "Fischgerichte", name: "Fisch Khumb Wala", description: "Rotbarschfiletstücke mit frischen Champignons, Knoblauch und Ingwer in Mandel-Sahne-Sauce", price: "14,90", allergens: "A,G,H", isVeg: false },
  { id: "178", category: "Fischgerichte", name: "Fisch Mango", description: "Rotbarschfiletstücke mit Mandeln in feinwürziger Mango-Sahne-Sauce", price: "13,70", allergens: "A,G", isVeg: false },
  { id: "179", category: "Fischgerichte", name: "Fisch Vindaloo", description: "Rotbarschfiletstücke mit Kartoffeln nach spezieller südindischer Art", price: "14,90", allergens: "A", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "180", category: "Fischgerichte", name: "Fisch Mumbai", description: "Rotbarschfiletstücke mit Tomaten, Paprika, Zwiebeln, Ingwer und Ananas in milder Currysauce", price: "14,90", allergens: "A", isVeg: false },
  { id: "114", category: "Fischgerichte", name: "Scampi Masala", description: "Garnelen mit Ingwer, Knoblauch und verschiedenen Kräutern gebraten", price: "16,80", allergens: "A,B", isVeg: false },
  { id: "115", category: "Fischgerichte", name: "Scampi Dahiwala", description: "Garnelen mit leckeren Gewürzen und Mandeln in Joghurtsauce", price: "16,90", allergens: "A,B,H", isVeg: false },
  { id: "116", category: "Fischgerichte", name: "Scampi Madras", description: "Garnelen mit Kokosraspeln in einer speziellen Gewürzmischung nach südindischer Art", price: "16,50", allergens: "A,B", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "183", category: "Fischgerichte", name: "Scampi Curry", description: "Garnelen in pikanter indischer Currysauce", price: "15,20", allergens: "A,B", isVeg: false },
  { id: "184", category: "Fischgerichte", name: "Scampi Jhalfrezi", description: "Garnelen mit Ingwer, Knoblauch, Zwiebeln, Tomaten und Paprika in gewürzter Currysauce", price: "16,50", allergens: "A,B", isVeg: false, isSpicy: true, spiceLevel: "mittelscharf" },
  { id: "185", category: "Fischgerichte", name: "Scampi Vindaloo", description: "Garnelen mit Kartoffeln nach spezieller südindischer Art", price: "16,90", allergens: "A,B", isVeg: false, isSpicy: true, spiceLevel: "scharf" },
  { id: "186", category: "Fischgerichte", name: "Scampi Mango", description: "Garnelen mit Mandeln in feinwürziger Mango-Sahne-Sauce", price: "16,80", allergens: "A,B,G", isVeg: false },

  // PLATTEN
  { id: "117", category: "Platten", name: "»Aastha« Platte (2 Personen)", description: "vegetarisch: Linsensuppe, 3 Hauptgerichte (Dal Makhni, Shahi Paneer, Palak Paneer), Basmatireis, Brot, Salat, Chutney, Pickles, Saucen & Dessert Gulab Jamun", price: "41,20", allergens: "A,G,H", isVeg: true },
  { id: "118", category: "Platten", name: "»Aastha« Platte (3 Personen)", description: "vegetarisch: Komplettmenü für 3 Personen", price: "57,90", allergens: "A,G,H", isVeg: true },
  { id: "119", category: "Platten", name: "»Aastha« Platte (4 Personen)", description: "vegetarisch: Komplettmenü für 4 Personen", price: "76,90", allergens: "A,G,H", isVeg: true },
  { id: "120", category: "Platten", name: "»Shahi« Platte (2 Personen)", description: "Aperitif Guavensekt, Onion Bhaji, 3 Hauptgerichte (Lamm Korma, Butter Chicken, Sabji Korma), Reis, Brot, Salat, Pickles, Saucen & Vanille-Eis", price: "42,90", allergens: "A,G,H", isVeg: false },
  { id: "121", category: "Platten", name: "»Shahi« Platte (3 Personen)", description: "Komplettmenü für 3 Personen", price: "60,50", allergens: "A,G,H", isVeg: false },
  { id: "122", category: "Platten", name: "»Shahi« Platte (4 Personen)", description: "Komplettmenü für 4 Personen", price: "78,90", allergens: "A,G,H", isVeg: false },
  { id: "123", category: "Platten", name: "Desi Platte (2 Personen)", description: "vegetarisch: Papadam, Onion Bhaji, 3 Hauptgerichte (Dal Tarka, Punjabi Bengan, Khumbi Paneer), Beilagen & Gulab Jamun", price: "40,90", allergens: "A,G,H", isVeg: true },
  { id: "124", category: "Platten", name: "Desi Platte (3 Personen)", description: "vegetarisch: Komplettmenü für 3 Personen", price: "56,90", allergens: "A,G,H", isVeg: true },
  { id: "125", category: "Platten", name: "Desi Platte (4 Personen)", description: "vegetarisch: Komplettmenü für 4 Personen", price: "75,90", allergens: "A,G,H", isVeg: true },
  { id: "126", category: "Platten", name: "Punjabi Platte (2 Personen)", description: "Mango Sekt Aperitif, Sabzi Soup, 3 Hauptgerichte (Chicken Tandoori, Palak Paneer, Lamm Punjabi), Beilagen & Mango Créme", price: "46,50", allergens: "A,G,H", isVeg: false },
  { id: "127", category: "Platten", name: "Punjabi Platte (3 Personen)", description: "Komplettmenü für 3 Personen", price: "67,90", allergens: "A,G,H", isVeg: false },
  { id: "128", category: "Platten", name: "Punjabi Platte (4 Personen)", description: "Komplettmenü für 4 Personen", price: "86,90", allergens: "A,G,H", isVeg: false },
  { id: "189", category: "Platten", name: "Bollywood Platte (2 Personen)", description: "Martini Aperitif, Daal Soup, 3 Hauptgerichte (Chana Masala, Mumbai Ente, Lamm Achari), Beilagen & Mango Créme", price: "48,90", allergens: "A,G", isVeg: false },
  { id: "190", category: "Platten", name: "Bollywood Platte (3 Personen)", description: "Komplettmenü für 3 Personen", price: "69,90", allergens: "A,G", isVeg: false },
  { id: "191", category: "Platten", name: "Bollywood Platte (4 Personen)", description: "Komplettmenü für 4 Personen", price: "89,90", allergens: "A,G", isVeg: false },

  // DESSERTS
  { id: "131", category: "Desserts", name: "Exotischer Frucht-Cocktail", description: "gemischte Früchte mit Sahne, Cashewnüssen, Rosinen und Mandeln in Mango-Joghurtcréme", price: "5,90", allergens: "G,H", isVeg: true },
  { id: "132", category: "Desserts", name: "Gulab Jamun", description: "Griesbällchen mit Sahne, klassische indische Süßspeise garniert mit Mangopüree und Mandelsplittern", price: "5,50", allergens: "G,H", isVeg: true },
  { id: "133", category: "Desserts", name: "Mango-Créme", description: "hausgemachte Mango-Créme mit Vanille-Eiscréme und Cashewnüssen", price: "5,50", allergens: "G,H", isVeg: true },
  { id: "134", category: "Desserts", name: "3 Kugeln Vanilleeis", description: "serviert mit frischer Schlagsahne", price: "4,70", allergens: "G", isVeg: true },
  { id: "135", category: "Desserts", name: "Gebackene Banane", description: "mit Vanille-Eis verfeinert, Honig, Sahne und Mandelsplittern", price: "5,90", allergens: "G,H", isVeg: true },
  { id: "136", category: "Desserts", name: "Gebackene Ananas", description: "mit Vanille-Eis verfeinert, Honig, Sahne und Mandelsplittern", price: "5,90", allergens: "G,H", isVeg: true },
  { id: "137", category: "Desserts", name: "Coffee- & Tea Time Deal", description: "Wählen Sie einen Nachtisch + dazu indischer Tee oder Kaffee", price: "6,50", allergens: "G", isVeg: true },
];

// =====================================================
// GETRÄNKEKARTE - Mapped directly from PDF OCR
// =====================================================
export const drinksMenu: DrinkItem[] = [
  // Softdrinks
  {
    id: "d1",
    category: "Alkoholfreie Getränke",
    name: "Spreequell (classic / still)",
    variants: [{ size: "Fl. 0,75 l", price: "6,50" }],
  },
  {
    id: "d2",
    category: "Alkoholfreie Getränke",
    name: "Mineralwasser",
    variants: [
      { size: "0,20 l", price: "2,50" },
      { size: "0,40 l", price: "4,10" },
    ],
  },
  {
    id: "d3",
    category: "Alkoholfreie Getränke",
    name: "Stilles Wasser",
    variants: [
      { size: "0,20 l", price: "2,50" },
      { size: "0,40 l", price: "4,10" },
    ],
  },
  {
    id: "d4",
    category: "Alkoholfreie Getränke",
    name: "Coca-Cola",
    variants: [
      { size: "0,20 l", price: "2,70" },
      { size: "0,40 l", price: "4,50" },
    ],
  },
  {
    id: "d5",
    category: "Alkoholfreie Getränke",
    name: "Coca-Cola light",
    variants: [
      { size: "0,20 l", price: "2,70" },
      { size: "0,40 l", price: "4,50" },
    ],
  },
  {
    id: "d6",
    category: "Alkoholfreie Getränke",
    name: "Fanta",
    variants: [
      { size: "0,20 l", price: "2,70" },
      { size: "0,40 l", price: "4,50" },
    ],
  },
  {
    id: "d7",
    category: "Alkoholfreie Getränke",
    name: "Sprite",
    variants: [
      { size: "0,20 l", price: "2,70" },
      { size: "0,40 l", price: "4,50" },
    ],
  },
  {
    id: "d8",
    category: "Alkoholfreie Getränke",
    name: "Spezi",
    variants: [
      { size: "0,20 l", price: "2,70" },
      { size: "0,40 l", price: "4,50" },
    ],
  },
  {
    id: "d9",
    category: "Alkoholfreie Getränke",
    name: "Schweppes Bitter Lemon",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "4,90" },
    ],
  },
  {
    id: "d10",
    category: "Alkoholfreie Getränke",
    name: "Schweppes Ginger Ale",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "4,90" },
    ],
  },
  {
    id: "d11",
    category: "Alkoholfreie Getränke",
    name: "Schweppes Tonic Water",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "4,90" },
    ],
  },
  {
    id: "d12",
    category: "Alkoholfreie Getränke",
    name: "Malztrunk",
    variants: [{ size: "Fl. 0,33 l", price: "3,70" }],
  },
  {
    id: "d13",
    category: "Alkoholfreie Getränke",
    name: "Faßbrause",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "4,90" },
    ],
  },

  // Indische Erfrischungsgetränke
  {
    id: "d14",
    category: "Lassi & Indische Getränke",
    name: "Lassi - salzig",
    description: "mit Naturjoghurt",
    variants: [
      { size: "0,25 l", price: "2,90" },
      { size: "0,40 l", price: "4,90" },
    ],
  },
  {
    id: "d15",
    category: "Lassi & Indische Getränke",
    name: "Lassi - süß",
    description: "mit Naturjoghurt",
    variants: [
      { size: "0,25 l", price: "2,90" },
      { size: "0,40 l", price: "4,90" },
    ],
  },
  {
    id: "d16",
    category: "Lassi & Indische Getränke",
    name: "Mango-Lassi",
    description: "mit Naturjoghurt & Mangopüree",
    variants: [
      { size: "0,25 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d17",
    category: "Lassi & Indische Getränke",
    name: "Mango-Shake",
    description: "mit frischer Milch",
    variants: [
      { size: "0,25 l", price: "3,30" },
      { size: "0,40 l", price: "5,30" },
    ],
  },
  {
    id: "d18",
    category: "Lassi & Indische Getränke",
    name: "Bananen-Lassi",
    description: "mit Naturjoghurt",
    variants: [
      { size: "0,25 l", price: "3,30" },
      { size: "0,40 l", price: "5,30" },
    ],
  },
  {
    id: "d19",
    category: "Lassi & Indische Getränke",
    name: "Bananen-Shake",
    description: "mit frischer Milch",
    variants: [
      { size: "0,25 l", price: "3,30" },
      { size: "0,40 l", price: "5,30" },
    ],
  },

  // Säfte und Nektare
  {
    id: "d20",
    category: "Alkoholfreie Getränke",
    name: "Apfelsaft",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d21",
    category: "Alkoholfreie Getränke",
    name: "Orangensaft",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d22",
    category: "Alkoholfreie Getränke",
    name: "Bananennektar",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d23",
    category: "Alkoholfreie Getränke",
    name: "Kirschnektar",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d24",
    category: "Alkoholfreie Getränke",
    name: "Lycheenektar",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d25",
    category: "Alkoholfreie Getränke",
    name: "Mangonektar",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d26",
    category: "Alkoholfreie Getränke",
    name: "Guavennektar",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d27",
    category: "Alkoholfreie Getränke",
    name: "Kiba (Kirsch-Banana)",
    variants: [
      { size: "0,20 l", price: "3,10" },
      { size: "0,40 l", price: "5,10" },
    ],
  },
  {
    id: "d28",
    category: "Alkoholfreie Getränke",
    name: "Saftschorle",
    variants: [
      { size: "0,20 l", price: "2,90" },
      { size: "0,40 l", price: "4,70" },
    ],
  },

  // Bier
  {
    id: "d29",
    category: "Bier",
    name: "Flensburger vom Fass",
    variants: [
      { size: "0,30 l", price: "3,50" },
      { size: "0,50 l", price: "4,70" },
    ],
  },
  {
    id: "d30",
    category: "Bier",
    name: "Alsterwasser",
    description: "Bier mit Sprite, Cola oder Fanta",
    variants: [
      { size: "0,30 l", price: "3,70" },
      { size: "0,50 l", price: "4,90" },
    ],
  },
  {
    id: "d31",
    category: "Bier",
    name: "Köstritzer Schwarzbier",
    variants: [{ size: "Fl. 0,50 l", price: "4,70" }],
  },
  {
    id: "d32",
    category: "Bier",
    name: "Hefeweizen (hell / dunkel / kristall / alkoholfrei)",
    variants: [{ size: "Fl. 0,50 l", price: "4,80" }],
  },
  {
    id: "d33",
    category: "Bier",
    name: "Indisches Bier",
    variants: [{ size: "Fl. 0,33 l", price: "4,20" }],
  },
  {
    id: "d34",
    category: "Bier",
    name: "Flensburger alkoholfrei",
    variants: [{ size: "Fl. 0,33 l", price: "3,70" }],
  },
  {
    id: "d35",
    category: "Bier",
    name: "Berliner Weiße (rot/grün)",
    variants: [{ size: "Fl. 0,33 l", price: "3,80" }],
  },

  // Wein & Sekt
  {
    id: "d36",
    category: "Wein & Sekt",
    name: "Prosecco",
    variants: [{ size: "0,10 l", price: "3,40" }],
  },
  {
    id: "d37",
    category: "Wein & Sekt",
    name: "Sekt Flasche",
    variants: [{ size: "Fl. 0,75 l", price: "18,50" }],
  },
  {
    id: "d38",
    category: "Wein & Sekt",
    name: "Frucht-Sekt (Mango, Guave, Lychee)",
    variants: [{ size: "0,10 l", price: "3,70" }],
  },
  {
    id: "d39",
    category: "Wein & Sekt",
    name: "Chardonnay (Weißwein trocken)",
    description: "Frankreich, ausgewogenes Frucht-Säureverhältnis",
    variants: [
      { size: "0,20 l", price: "4,80" },
      { size: "0,50 l", price: "11,50" },
    ],
  },
  {
    id: "d40",
    category: "Wein & Sekt",
    name: "Riesling (Weißwein trocken)",
    description: "Deutschland, kräftig und vollmundig",
    variants: [
      { size: "0,20 l", price: "4,90" },
      { size: "0,50 l", price: "12,00" },
    ],
  },
  {
    id: "d41",
    category: "Wein & Sekt",
    name: "Indischer Weißwein (trocken)",
    variants: [
      { size: "0,20 l", price: "5,50" },
      { size: "0,50 l", price: "12,90" },
    ],
  },
  {
    id: "d42",
    category: "Wein & Sekt",
    name: "Tempranillo (Rotwein halbtrocken)",
    description: "Spanien, samtig beerige Aromen",
    variants: [
      { size: "0,20 l", price: "5,30" },
      { size: "0,50 l", price: "12,50" },
    ],
  },
  {
    id: "d43",
    category: "Wein & Sekt",
    name: "Cabernet / Merlot (Rotwein trocken)",
    description: "Frankreich, vollmundig und weich",
    variants: [
      { size: "0,20 l", price: "5,20" },
      { size: "0,50 l", price: "12,20" },
    ],
  },
  {
    id: "d44",
    category: "Wein & Sekt",
    name: "Indischer Rotwein (trocken)",
    variants: [
      { size: "0,20 l", price: "5,50" },
      { size: "0,50 l", price: "12,90" },
    ],
  },

  // Spirituosen
  {
    id: "d45",
    category: "Spirituosen",
    name: "Dry Sack Sherry (dry/medium)",
    variants: [{ size: "5 cl", price: "3,10" }],
  },
  {
    id: "d46",
    category: "Spirituosen",
    name: "Martini (bianco/rosso)",
    variants: [{ size: "5 cl", price: "3,10" }],
  },
  {
    id: "d47",
    category: "Spirituosen",
    name: "Campari",
    variants: [{ size: "5 cl", price: "3,90" }],
  },
  {
    id: "d48",
    category: "Spirituosen",
    name: "Tequila Sierra Silver/Gold",
    variants: [
      { size: "2 cl", price: "2,70" },
      { size: "4 cl", price: "3,90" },
    ],
  },
  {
    id: "d49",
    category: "Spirituosen",
    name: "Osborne Veterano / Remy Martin V.S.O.P",
    variants: [
      { size: "2 cl", price: "2,70" },
      { size: "4 cl", price: "3,90" },
    ],
  },
  {
    id: "d50",
    category: "Spirituosen",
    name: "Amaretto / Sambuca / Baileys Irish Cream",
    variants: [
      { size: "2 cl", price: "2,70" },
      { size: "4 cl", price: "3,90" },
    ],
  },
  {
    id: "d51",
    category: "Spirituosen",
    name: "Gin / Absolut Wodka",
    variants: [
      { size: "2 cl", price: "2,70" },
      { size: "4 cl", price: "3,90" },
    ],
  },
  {
    id: "d52",
    category: "Spirituosen",
    name: "Havana Club 3y / Myer's Rum",
    variants: [
      { size: "2 cl", price: "2,90" },
      { size: "4 cl", price: "4,90" },
    ],
  },
  {
    id: "d53",
    category: "Spirituosen",
    name: "Old Monk (Indischer Rum 7 Jahre alt)",
    variants: [
      { size: "2 cl", price: "3,90" },
      { size: "4 cl", price: "6,50" },
    ],
  },
  {
    id: "d54",
    category: "Spirituosen",
    name: "Johnnie Walker / Jim Beam",
    variants: [
      { size: "2 cl", price: "2,70" },
      { size: "4 cl", price: "5,20" },
    ],
  },
  {
    id: "d55",
    category: "Spirituosen",
    name: "Chivas Regal / Glennfidich",
    variants: [
      { size: "2 cl", price: "3,20" },
      { size: "4 cl", price: "6,30" },
    ],
  },
  {
    id: "d56",
    category: "Spirituosen",
    name: "Ramazotti / Fernet Branca / Averna / Jägermeister",
    variants: [
      { size: "2 cl", price: "2,10" },
      { size: "4 cl", price: "4,10" },
    ],
  },

  // Warme Getränke
  {
    id: "d57",
    category: "Alkoholfreie Getränke",
    name: "Kaffee / Espresso / Espresso Macchiato",
    variants: [{ size: "Tasse", price: "2,30" }],
  },
  {
    id: "d58",
    category: "Alkoholfreie Getränke",
    name: "Doppelter Espresso",
    variants: [{ size: "Tasse", price: "3,20" }],
  },
  {
    id: "d59",
    category: "Alkoholfreie Getränke",
    name: "Cappuccino",
    variants: [{ size: "Tasse", price: "3,10" }],
  },
  {
    id: "d60",
    category: "Alkoholfreie Getränke",
    name: "Milchkaffee / Latte Macchiato / Heisse Schokolade",
    variants: [{ size: "Glas", price: "4,30" }],
  },
  {
    id: "d61",
    category: "Lassi & Indische Getränke",
    name: "Indischer Masala Chai (Yogi Tee)",
    description: "Gewürztee mit Milch und Honig",
    variants: [
      { size: "Glas", price: "2,90" },
      { size: "Kännchen", price: "4,50" },
    ],
  },
  {
    id: "d62",
    category: "Alkoholfreie Getränke",
    name: "Tee Spezialitäten (Assam, Darjeeling, Earl Grey, Ingwer, Pfefferminz)",
    variants: [{ size: "Kännchen / Glas", price: "4,30" }],
  },
];

// =====================================================
// TAGESMENÜ (MITTAGSANGEBOT) - Mapped from PDF OCR 2
// =====================================================
export const lunchOfferGroups: LunchOfferGroup[] = [
  {
    id: "angebot-1",
    title: "Erste Woche (Mo–Fr 11:30–16:00 Uhr)",
    items: [
      { id: "l701", number: "701", category: "Vegetarisch", name: "Palak Panir", description: "hausgem. Rahmkäse mit Ingwer in würzigem Spinat", price: "7,50", allergens: "G" },
      { id: "l702", number: "702", category: "Vegetarisch", name: "Sabzi", description: "versch. frische Gemüsesorten in pikanter Currysauce", price: "7,50", allergens: "G" },
      { id: "l703", number: "703", category: "Vegetarisch", name: "Matar Aloo", description: "Grüne Erbsen mit Kartoffeln in milder Currysauce", price: "7,50", allergens: "G" },
      { id: "l704", number: "704", category: "Chicken", name: "Chicken Saag", description: "Zartes Hähnchenbrustfilet in kräftigem Spinat", price: "8,50", allergens: "G" },
      { id: "l705", number: "705", category: "Chicken", name: "Chicken Mango", description: "Zartes Hähnchenbrustfilet mit Mandeln in milder Mangosauce", price: "8,50", allergens: "G,H", spiceLevel: "mild" },
      { id: "l706", number: "706", category: "Chicken", name: "Chicken Masala", description: "Zartes Hähnchenbrustfilet mit Ingwer & Zwiebeln in roter Masalasauce", price: "8,50", allergens: "G" },
      { id: "l707", number: "707", category: "Lamm", name: "Lamm Spezial", description: "Lammfleisch mit Gemüse, Rahmkäse, Rosinen, Mandeln und Cashewnüssen", price: "9,50", allergens: "G,H" },
      { id: "l708", number: "708", category: "Lamm", name: "Lamm Punjabi", description: "Lammfleisch mit Ingwer, Chili, Zwiebeln in gewürzter Currysauce", price: "9,50", allergens: "", isSpicy: true, spiceLevel: "mittelscharf" },
      { id: "l709", number: "709", category: "Lamm", name: "Lamm Juckni", description: "Lammfleisch mit Mandeln in Joghurt-Knoblauchsauce", price: "9,50", allergens: "G,H" },
      { id: "l750a", number: "750", category: "Suppe", name: "Tagessuppe", description: "täglich wechselnde vegetarische Suppe", price: "3,50", allergens: "G" },
    ],
  },
  {
    id: "angebot-2",
    title: "Zweite Woche (Mo–Fr 11:30–16:00 Uhr)",
    items: [
      { id: "l711", number: "711", category: "Vegetarisch", name: "Chana Saag", description: "Kichererbsen in würzigem Rahmspinat", price: "7,50", allergens: "G" },
      { id: "l712", number: "712", category: "Vegetarisch", name: "Khumbi Mattar", description: "Frische Champignons mit Erbsen in milder Sauce", price: "7,50", allergens: "G" },
      { id: "l713", number: "713", category: "Vegetarisch", name: "Aloo Bengen", description: "Aubergine mit Kartoffeln, Zwiebeln, Tomaten in Currysauce", price: "7,50", allergens: "", isSpicy: true, spiceLevel: "pikant" },
      { id: "l714", number: "714", category: "Chicken", name: "Chicken Madras", description: "Zartes Hähnchenbrustfilet mit Kokos in scharfer roter Currysauce", price: "8,50", allergens: "G", isSpicy: true, spiceLevel: "scharf" },
      { id: "l715", number: "715", category: "Chicken", name: "Chicken Makhni", description: "Gegrillte Hähnchenbrust in Butter-Tomatensauce", price: "8,50", allergens: "G" },
      { id: "l716", number: "716", category: "Chicken", name: "Chicken Champignon", description: "Zartes Hähnchenbrustfilet mit frischen Champignons in milder Currysauce", price: "8,50", allergens: "G" },
      { id: "l717", number: "717", category: "Lamm", name: "Lamm Kashmiri", description: "Lammfleisch mit Früchten & Mandeln in Curry-Sahnesauce", price: "9,50", allergens: "G" },
      { id: "l718", number: "718", category: "Lamm", name: "Lamm Khata Mitha", description: "Lammfleisch mit Koriander, Kreuzkümmel in pikanter Tomatensauce", price: "9,50", allergens: "G", isSpicy: true, spiceLevel: "scharf" },
      { id: "l719", number: "719", category: "Lamm", name: "Lamm Korma", description: "Lammfleisch mit Rahmkäse, Mandeln & Rosinen in sahniger Currysauce", price: "9,50", allergens: "G" },
      { id: "l750b", number: "750", category: "Suppe", name: "Tagessuppe", description: "täglich wechselnde vegetarische Suppe", price: "3,50", allergens: "G" },
    ],
  },
  {
    id: "angebot-3",
    title: "Dritte Woche (Mo–Fr 11:30–16:00 Uhr)",
    items: [
      { id: "l721", number: "721", category: "Vegetarisch", name: "Aloo Palak", description: "Kartoffeln & Spinat mit Ingwer und Zwiebeln nach nordindischer Art gebraten", price: "7,50", allergens: "" },
      { id: "l722", number: "722", category: "Vegetarisch", name: "Chana Masala", description: "Kichererbsen mit frischen Tomaten in würziger Currysauce", price: "7,50", allergens: "" },
      { id: "l723", number: "723", category: "Vegetarisch", name: "Mattar Panir", description: "Hausgemachter Rahmkäse mit grünen Erbsen in milder Sauce", price: "7,50", allergens: "G" },
      { id: "l724", number: "724", category: "Chicken", name: "Chicken Sabzi", description: "Zartes Hähnchenbrustfilet mit frischem Gemüse in spezieller milder Sauce", price: "8,50", allergens: "G" },
      { id: "l725", number: "725", category: "Chicken", name: "Chicken Korma", description: "Hähnchenbrustfilet mit Rahmkäse, Mandeln & Rosinen in sahniger Sauce", price: "8,50", allergens: "G,H", spiceLevel: "mild" },
      { id: "l726", number: "726", category: "Chicken", name: "Chicken Vindaloo", description: "Zartes Hähnchenbrustfilet mit Kartoffeln, Ingwer in würziger roter Currysauce", price: "8,50", allergens: "G", isSpicy: true, spiceLevel: "scharf" },
      { id: "l727", number: "727", category: "Lamm", name: "Lamm Saag", description: "Lammfleisch in würzigem Rahmspinat", price: "9,50", allergens: "G" },
      { id: "l728", number: "728", category: "Lamm", name: "Lamm Champignon", description: "Lammfleisch mit Champignons, Ingwer in feinwürziger Sahnesauce", price: "9,50", allergens: "G" },
      { id: "l729", number: "729", category: "Lamm", name: "Lamm Madras", description: "Lammfleisch in spezieller Gewürzmischung mit Kokosraspeln", price: "9,50", allergens: "G", isSpicy: true, spiceLevel: "scharf" },
      { id: "l750c", number: "750", category: "Suppe", name: "Tagessuppe", description: "täglich wechselnde vegetarische Suppe", price: "3,50", allergens: "G" },
    ],
  },
  {
    id: "angebot-4",
    title: "Vierte Woche (Mo–Fr 11:30–16:00 Uhr)",
    items: [
      { id: "l731", number: "731", category: "Vegetarisch", name: "Sabzi Korma", description: "Frisches Gemüse mit Rahmkäse mit Mandeln, Rosinen, Cashewnüssen in sahniger Sauce", price: "7,50", allergens: "G,H" },
      { id: "l732", number: "732", category: "Vegetarisch", name: "Khumbi Saag", description: "Frische Champignons in würzigem Rahmspinat", price: "7,50", allergens: "G" },
      { id: "l733", number: "733", category: "Vegetarisch", name: "Aloo Gobhi", description: "Kartoffeln und Blumenkohl mit Tomaten, Zwiebeln in kräftiger Sauce", price: "7,50", allergens: "" },
      { id: "l734", number: "734", category: "Chicken", name: "Chicken Khata Mitha", description: "Hähnchenbrustfilet mit Korianderkernen, Kreuzkümmel in pikanter Tomatensauce", price: "8,50", allergens: "G", isSpicy: true, spiceLevel: "scharf" },
      { id: "735", number: "735", category: "Chicken", name: "Chicken Gujrati", description: "Hähnchenbrustfilet mit Kartoffeln, Erbsen in würziger Currysauce", price: "8,50", allergens: "G" },
      { id: "736", number: "736", category: "Chicken", name: "Chicken Jackni", description: "Zartes Hähnchenbrustfilet mit Gewürzen in Joghurt-Knoblauchsauce", price: "8,50", allergens: "G" },
      { id: "l737", number: "737", category: "Lamm", name: "Lamm Chana Masala", description: "Lammfleisch mit Kichererbsen, Tomaten, Zwiebeln in pikanter Currysauce", price: "9,50", allergens: "" },
      { id: "l738", number: "738", category: "Lamm", name: "Lamm Sabzi", description: "Lammfleisch mit versch. Gemüse in Currysauce", price: "9,50", allergens: "G" },
      { id: "l739", number: "739", category: "Lamm", name: "Lamm Mango", description: "Lammfleisch mit Mandeln in fein würziger Mangosauce", price: "9,50", allergens: "G,H" },
      { id: "l750d", number: "750", category: "Suppe", name: "Tagessuppe", description: "täglich wechselnde vegetarische Suppe", price: "3,50", allergens: "G" },
    ],
  },
];

export const allergenLegend: Record<string, string> = {
  A: "enthält glutenhaltiges Getreide (Weizen, Roggen)",
  B: "enthält Krebstiere",
  C: "enthält Eier",
  D: "enthält Fisch",
  E: "enthält Erdnüsse",
  F: "enthält Soja",
  G: "enthält Milch / Laktose",
  H: "enthält Schalenfrüchte (Mandeln, Cashewnüsse)",
  K: "enthält Sesamsamen",
};
