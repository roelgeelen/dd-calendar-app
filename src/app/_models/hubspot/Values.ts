export class Values {
  deal_id: number;
  dealname?: string;
  adviseur?: string;
  title?: string;
  definitieve_bestelmaat: string;
  actieve_deur: string;
  draairichting: string;
  kleuropties: string;
  krukset_deurbeslag: string;
  model: string;
  paneel: string;
  breedte: number;
  hoogte: number;
  verdeling_symmetrisch: string;
  cilinder: string;
  glassectie: string;
  montage: string;
  bestaande_deur: string;
  type_deur: string;
  vloeraanpassing: string;
  aftimmering_binnenzijde: string;
  bouwkundig_aanpassingen: string;
  indicatie_van_montage_uren: string;
  overige_opmerkingen_klant: string;
  overige_opmerkingen_intern: string;
  materiaal_te_bestellen_door_werkvoorbereiding: string;
  profilering: string;
  uitstraling: string;
  deur_ral: string;
  kozijn_ral: string;
  scharnier_ral: string;
  netto_glasmaat: string;
  glassectie_in_vleugel: string;
  links: number;
  rechts: number;
  schets: any;
  buiten: { url: string; type: string; };
  binnen: { url: string; type: string; };
  //odhd
  deur_reeds_ingemeten: string;
  maat_tussen_metselwerk: string;
  maat_tussen_latei: string;
  type_profilering: string;
  afstand_belijning: string;
  aflakken_op_locatie: string;
  uitstraling_binnenzijde: string;
  deur_ral_binnen: string;
  kozijn_ral_binnen: string;
  isolatie: string;
  omklapvoetjes: string;
  aantal_roedes: string;
  glasverdeling: string;
  //sdh
  uitvoerder_naam: string;
  uitvoerder_telefoon: string;
  uitvoerder_email: string;
  projectleider_naam: string;
  projectleider_telefoon: string;
  projectleider_email: string;
  type_sectionaaldeur: string;
  draairichting_zijwaartse: string;
  garagedeur: string;
  houtsoort: string;
  model_bekleding: string;
  behandeling: string;
  dekkend_ral: string;
  afgelakt: string;
  deurblad: string;
  deurblad_ral: string;
  rails: string;
  rails_ral: string;
  motor: string;
  stroom: string;
  positie: string;
  isolatie_in_de_deur: string;
  isoleren_van_gevel: string;
  buiten_bediening: string;
  aantal_handzenders: string;
  binnen_bediening: string;
  draadloze_drukknop: string;
  nooduitgang_aanwezig: string;
  nooduitgang_oplossing: string;
  aanbrengen_gevelbekleding: string;
  gevel_breedte: string;
  gevel_hoogte: string;
  loopdeur_voordeur: string;
  loopdeur_voordeur_breedte: string;
  loopdeur_voordeur_hoogte: string;
  kleur_kozijn: string;
  kleur_kozijn_ral: string;
  binnen_afwerking: string;
  vlakke_plaat_ral: string;
  deur_beslag_voordeur: string;
  deurgreep_voordeur: string;
  deur_beslag_loopdeur: string;
  deurgreep_loopdeur: string;
  indicatie_montage_uren: string;

  public constructor(init?: Partial<Values>) {
    Object.assign(this, init);
  }
}
