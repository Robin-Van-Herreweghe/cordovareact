import React, {useState} from 'react';
import Info from './Info.js';

function App() {

  const[clubs, setClubs] = useState([
    {naam: "MEZO", leden:"Aaron De Winter, Bart Van Gyseghem, Brent Leirens, Dieter Van Bockstaele, Jens Van de Velde, Lander van den Bossche, Martijn De Vos, Milan Decleire, Pieter De Leeuw, Rendl Vergauwen , Robin Van Herreweghe, Seppe Vanhalle, Theun Iemants, Tom Baeyens, Wout Vanhalle" },
    {naam: "Temse", leden:"BUYLE-HUYBRECHT JORAN, JANSSENS TOM, DE VOS STEVEN, ROELS MATTHIAS, THIBAUT EMIEL, VAN DER LINDEN JOS, VAN RAEMDONCK PIETER, SMET XAVIER, VAN HECKE NIELS, PRUSOV FRANCISAK, VAN DAMME JOACHIM, VERLEYEN JOREN, RENDERS JOREN, VAN LIEROP EWOUD, VANDENBERGEN KEVIN, VANDERBRUGGEN BRAM" },
    {naam: "eevoc", leden:"BEELAERT JASPER (3), BEIRNAERT THOMAS (?), BUZEYN LEANDER (11), DE MOL MATHIAS (8), DE SCHEPPER SIMON (18), DECLERCK JASPER (5), EETESONNE WOUTER (?), PIETERS MICHIEL (6), SENAVE ROBBE (13), VAN ACKER CEDRIC (16), VAN ACKER GREGORY (1), VAN BEVEREN FREDERIK (10), VAN BEVEREN SIMON (9), VAN HEULE NILS (7), COENE BART (Trainer-coach), Luc Van Beveren (PlgV)" }
  ]);

  return (
    <div>
      <h1 className="Title">volleyball promo 2</h1>
      <h3 className="Title">klik op de club om spelers te tonen</h3>

      {clubs.map(club => (
        <Info Naam={club.naam}  Leden={club.leden}/>
      ))}
    </div>
  );
}

export default App;
