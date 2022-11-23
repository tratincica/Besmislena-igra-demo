import { useContext, useState } from "react";
import CharacterContext from "../../../../store/charactere-context";
import classes from "./Level1.module.css";
import logo from "../../../../assets/images/logo.PNG";
import Button from "react-bootstrap/Button";

const Level1 = (props) => {
  const character = useContext(CharacterContext);

  const [showUvod, setShowUvod] = useState(true);
  const [showFirst, setShowFirst] = useState(false);
  const [prviOdabir, setPrviOdabir] = useState("");

  function onPrviOdabir(event) {
    setPrviOdabir(event.target.value);
  }

  function onPrviOdabirHander(event) {
    event.preventDefault();
    console.log(prviOdabir);
  }

  const uvodHandler = (e) => {
    e.preventDefault();
    setShowUvod(false);
    setShowFirst(true);
  };

  return (
    <div className={classes.container}>
      {showUvod && (
        <div className={classes.uvod}>
          <h1>I</h1>
          <h2>Noć, u Istri</h2>
          <p>
            <i>
              U ovome ćete poglavlju upoznati članove Šumskih Bića i njihovu
              glazbu te saznati kako jedan mali nesretan slučaj stvori gomilu
              problema koji će pokrenuti cijelu ovu veliku priču. Zaronite u
              jedan neobični dvorac koji se nalazi negdje u šumi.
            </i>
          </p>
          <img src={logo} alt="Kali logo" className={classes.logo} />
          <div>
            <Button variant="primary" onClick={uvodHandler}>
              Dalje!
            </Button>
          </div>
        </div>
      )}
      {showFirst && (
        <div className={classes.first}>
          <p>
            Bila je ljetna noć u šumi. Čulo se povremeno udaranje grana. Vjetar
            je bio poprilično razigran, ali svejedno je bilo toplo. Kada bi se
            pozornije poslušalo, mogao se čuti nekakav zvuk. Da je taj zvuk
            tekućina, zasigurno bi bio jako gust. Izvor zvuka vodio je do
            malenoga staroga dvorca. Bio je skriven između visokih stabala. Bila
            je to doista čudesna građevina. S jedne mu je strane bio veliki vrt
            prepun cvijeća. Ispred je bio parkiran ružičasti kabriolet i crni
            džip. Dvorac nije imao nikakvih prozora. Nije bilo ni lampe ni
            svjetiljke, i pod zvijezdama je dvorac bio mračan. Sve bliže dvorcu
            taj gusti zvuk postajao je glasniji. Tik do velikih vrata jasno se
            čulo da je taj zvuk glazba. Grizla je uši. Prodirala je u sve pore.
            U utrobi zamka, niz stepenište u podrumu, čudnovati je bend svirao.
          </p>
          <p>
            Na gitari bio je blijedi mladić duge kose. Izduženim prstima
            probirao je po žicama kao čarobnjak. Nosio je frak i djelovao jako
            profinjeno. Bio je spojen na more procesora i konstantno je bosom
            nogom upirao različite komande. Svakim novim udarcem nogom zvuk je
            evoluirao. Bas-gitarom upravljao je gromni čovjekoliki vuk.
            Prosječnomu slučajnom prolazniku zasigurno bi se žile zaledile kada
            bi ugledao tu zvijer. Bolji poznavatelj mitologije bi ga nazvao
            vukodlakom. Neobičan je ritam davao. Brujala je glazba iz bas
            pojačala i potencijalnom bi slušatelju pluća vibrirala. Taj vukodlak
            imao je ruke pune prstenja. Oko vrata imao je lančić koji biste
            mogli vidjeti na nekom šamanu. Nije nosio ništa osim trošnih
            raskidanih kratkih hlača, a na nogama je imao japanke. Bubnjem je
            komandirao gorostasni medvjed gustoga krzna. Lupao je palicama u
            nevjerojatno točnom ritmu. Nije štedio bubanj, ali povremeno bi
            nježno pomilovao tomove. Često se igrao s palicama i bacao ih u zrak
            te bi usput plazio jezikom. Čelo mu se rosilo dok je svirao. Iza
            mikrofona stajala je prelijepa djevojka. Bila je u prekrasnoj
            haljini i u čipkastim čarapama, a stopala su se skrivala u vunenim
            kućnim papučama. Nesigurno je stiskala jabuku u ruci i njihala se
            dok je pjevala tako milozvučno da bi se oni najnježniji utopili u
            suzama. Ovo nije bila samo gozba za uši, nego i oči. Soba je bila
            dosta skučena, ali dovoljna da njih četiri stane. Bila je krcata
            raznom opremom, pojačalima, rezervnim gitarama i koje čim. Svirali
            su pod svjetlima koja su dopirala s mikseta i raznih bijelih i
            zelenih LED-ica s pojačala i zvučnika. Po zidovima su bile božićne
            lampice pa se u njihovim očima mogao vidjeti odraz svjetla koje je
            treperilo. Najviše pažnje uzimalo je zeleno svjetlo žica basa i ono
            crveno sa gitare.
          </p>
          <p>
            Neobična je bila ta glazba. Melodija je bila opjevana mističnim
            drevnim jezikom. Pjevanje je bilo više prodorno zavijanje. Djevojkin
            glas vibrirao je i stvarao jeku. Ritam pjesme bio je neodređen i
            često se mijenjao. Pjesma je trajala nekih sat vremena. Nakon toga
            uslijedila je stanka i medvjed je pritisnuo prekidač koji se nalazio
            iza njega. Uključilo se jarko svjetlo i sada se jasno moglo vidjeti
            da je djevojka nosila plavu haljinu, vukodlak bijele hlače, mladić
            crni frak, a medvjed smeđe krzno. Novonastalu tišinu prekinuo je
            medvjed s glasnim dubokim glasom.
          </p>
          <p>
            <b>Medvjed:</b> Dosta!
          </p>
          <div className={classes.FormContainer}>
            <form
              onChange={onPrviOdabir}
              onSubmit={onPrviOdabirHander}
              className={classes.Form}
            >
              <p>Tvoj odgovor:</p>
              <label>
                <input type="radio" id="FIZ1" name="prvi odabri" value="FIZ1" />
                <span> Razbij gitaru medvjedu o glavu! </span>
              </label>
              <label>
                <input type="radio" id="MOT1" name="prvi odabri" value="MOT1" />
                <span> Nastavi svirati </span>
              </label>
              <label>
                <input type="radio" id="INT1" name="prvi odabri" value="INT1" />
                <span> Odloži gitaru! </span>
              </label>
              <label>
                <input type="radio" id="PSI1" name="prvi odabri" value="PSI1" />
                <span> Upitaj Medjveda "Zašto si nervozan?"</span>
              </label>
              <div>
                <Button variant="primary" type="submit">
                  Dalje!
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Level1;
