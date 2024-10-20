export const typesToColor =  {
  "normal":   "Grey" ,
  "fighting": "IndianRed" ,
  "flying":   "SkyBlue" ,
  "poison":   "MediumSlateBlue" ,
  "ground":   "SaddleBrown" ,
  "rock":     "RosyBrown" ,
  "bug":      "ForestGreen" ,
  "ghost":    "LightGrey" ,
  "steel":    "SlateGray" ,
  "fire":     "LightCoral" ,
  "water":    "Aqua" ,
  "grass":    "Olive" ,
  "electric": "GoldenRod" ,
  "psychic":  "Orchid" ,
  "ice":      "LightBlue" ,
  "dragon":   "DarkOrange" ,
  "dark":     "MidnightBlue" ,
  "fairy":    "Pink" ,
  "stellar":  "LightSlateGray" ,
  "shadow":   "Lavender" ,
  "unknown":  "CadetBlue",
}

export const typesToBackgroundStyle = (types) => {
  let backgroundStyle = { background: `black` };
  if (!types || types.length === 0) return backgroundStyle;
  if (types.length === 1) {
    backgroundStyle =  {
      background: `radial-gradient(ellipse at bottom, transparent -85%, ${typesToColor[types[0]]})`
    };
  } else {
    backgroundStyle = { 
      background: `linear-gradient(135deg,${types.map((t)=>typesToColor[t]).join(',')})`
    };
  };
  return backgroundStyle;
}

