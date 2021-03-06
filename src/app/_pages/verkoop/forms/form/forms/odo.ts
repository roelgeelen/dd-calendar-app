import {QuestionBase} from "../../dynamic-form/model/question-base";
import {RadioQuestion} from "../../dynamic-form/controls/question-radio";
import {TabBase} from "../../dynamic-form/model/tab-base";
import {TextQuestion} from "../../dynamic-form/controls/question-textbox";
import {CheckboxQuestion} from "../../dynamic-form/controls/question-checkbox";
import {TextareaQuestion} from "../../dynamic-form/controls/question-textarea";
import {UploadQuestion} from "../../dynamic-form/controls/question-upload";
import {Validators} from "@angular/forms";

export const algemeen: QuestionBase<string>[] = [
  new RadioQuestion({
    key: 'definitieve_bestelmaat',
    label: 'Definitieve bestelmaat',
    options: [
      {value: 'Ja'},
      {value: 'Nee'}
    ],
    validators: [Validators.required]
  }),
  new TextQuestion({
    label: 'Analoog afmetingen (in mm)',
    fields: [
      {
        key: 'analoog_breedte',
        label: 'Breedte',
        type: 'number',
        validators: [Validators.required, Validators.max(3000)]
      },
      {
        key: 'analoog_hoogte',
        label: 'Hoogte',
        type: 'number',
        validators: [Validators.required, Validators.max(2500)]
      }
    ]
  }),
  new TextQuestion({
    label: 'Digitaal afmetingen (in mm)',
    fields: [
      {
        key: 'digitaal_breedte',
        label: 'Breedte',
        type: 'number',
        validators: [Validators.required, Validators.max(3000)]
      },
      {
        key: 'digitaal_hoogte',
        label: 'Hoogte',
        type: 'number',
        validators: [Validators.required, Validators.max(2500)]
      }
    ]
  }),
  new TextQuestion({
    label: 'Bestel afmetingen (in mm)',
    fields: [
      {
        key: 'breedte',
        label: 'Breedte',
        type: 'number',
        validators: [Validators.required, Validators.max(3000)]
      },
      {
        key: 'hoogte',
        label: 'Hoogte',
        type: 'number',
        validators: [Validators.required, Validators.max(2500)]
      }
    ]
  }),
  new RadioQuestion({
    key: 'verdeling_symmetrisch',
    label: 'Verdeling symmetrisch',
    options: [
      {value: 'Ja'},
      {value: 'Nee'}
    ],
    value: 'Ja'
  }),
  new TextQuestion({
    label: 'Verdeling (van buiten gezien inclusief kozijn)',
    dependent: [{
      field: 'verdeling_symmetrisch',
      values: ['Nee']
    }],
    fields: [
      {
        key: 'links',
        label: 'Links',
        type: 'number'
      },
      {
        key: 'rechts',
        label: 'Rechts',
        type: 'number'
      }
    ]
  })
];

export const buitenzijde: QuestionBase<string>[] = [
  new RadioQuestion({
    key: 'model',
    label: 'Model',
    image: 'assets/forms/odo/69c3bd73-a00d-48cf-a637-51b1efd1aa9a.png',
    options: [
      {value: 'Verticaal'},
      {value: 'Horizontaal'},
      {value: 'Volledig vlakke plaat', article: 'ODO300'}
    ]
  }),
  new RadioQuestion({
    key: 'profilering',
    label: 'Profilering',
    image: 'assets/forms/odo/0740c7ed-e7d1-404d-8d12-984b5e8cc979.png',
    dependent: [{
      field: 'model',
      values: ['Horizontaal']
    }],
    options: [
      {value: 'Smal (plancha)'},
      {value: 'Midden (ligna)'},
      {value: 'Vlak (plano)'}
    ]
  }),
  new RadioQuestion({
    key: 'profilering',
    label: 'Profilering',
    image: 'assets/forms/odo/0740c7ed-e7d1-404d-8d12-984b5e8cc979-vert.png',
    dependent: [{
      field: 'model',
      values: ['Verticaal']
    }],
    options: [
      {value: 'Smal (plancha)'},
      {value: 'Midden (ligna)'},
      {value: 'Vlak (plano)'}
    ]
  }),
  new RadioQuestion({
    key: 'uitstraling',
    label: 'Uitstraling',
    image: 'assets/forms/odo/92adc622-e173-4baf-8dba-38acdd8816fd.png',
    dependent: [{
      field: 'model',
      values: ['Verticaal', 'Horizontaal']
    }],
    options: [
      {value: 'Houtnerf (woodgrain)'},
      {value: 'Glad (satin)'}
    ]
  }),
  new RadioQuestion({
    key: 'deur_in_een_kleur',
    label: 'Gehele buitenzijde deur in ????n kleur',
    options: [
      {value: 'Ja'},
      {value: 'Nee'}
    ]
  }),
  new TextQuestion({
    label: 'Kleur',
    fields: [
      {
        key: 'deur_ral',
        label: 'Deur RAL in structuurlak',
        type: 'text'
      },
    ],
    dependent: [
      {
        field: 'deur_in_een_kleur',
        values: ['Ja']
      }
    ]
  }),
  new TextQuestion({
    label: 'Kleuren',
    image: 'assets/forms/odo/2022-05-17%2016_23_28-.png',
    fields: [
      {
        key: 'deur_ral',
        label: 'Deur RAL in structuurlak',
        type: 'text'
      },
      {
        key: 'kozijn_ral',
        label: 'Kozijn RAL',
        type: 'text'
      },
      {
        key: 'scharnier_ral',
        label: 'Scharnieren RAL',
        type: 'text'
      }
    ],
    dependent: [
      {
        field: 'deur_in_een_kleur',
        values: ['Nee']
      }
    ]
  })
];

export const binnenzijde: QuestionBase<string>[] = [
  new RadioQuestion({
    key: 'paneel',
    label: 'Paneel',
    image: 'assets/forms/odo/56020ab6-c695-4125-b0ba-bd97f79e4204.png',
    options: [
      {value: 'Standaard stucco'},
      {value: 'Volledig vlakke plaat', article: 'ODO301'},
    ],
    value: 'Standaard stucco',
    dependent: [
      {
        field: 'model',
        values: ['Verticaal', 'Horizontaal']
      }
    ]
  }),
  new RadioQuestion({
    key: 'paneel',
    label: 'Paneel',
    options: [
      {value: 'Standaard volledig vlak (enkel indien model volledig vlak)'}
    ],
    value: 'Standaard volledig vlak (enkel indien model volledig vlak)',
    dependent: [
      {
        field: 'model',
        values: ['Volledig vlakke plaat']
      }
    ]
  }),
  new RadioQuestion({
    key: 'kleuropties',
    label: 'Kleuropties (RAL)',
    options: [
      {value: '9016 (standaard)'}
    ],
    other: true,
    custom: '',
    value: '9016 (standaard)'
  })
]

export const deur: QuestionBase<string>[] = [
  new RadioQuestion({
    key: 'draairichting',
    label: 'Draairichting (van buiten gezien)',
    options: [
      {value: 'Naar buiten'},
      {value: 'Naar binnen'},
    ],
    validators: [Validators.required]
  }),
  new RadioQuestion({
    key: 'actieve_deur',
    label: 'Actieve deur (van buiten gezien)',
    options: [
      {value: 'Links'},
      {value: 'Rechts'},
    ],
    validators: [Validators.required]
  }),
  new RadioQuestion({
    key: 'krukset_deurbeslag',
    label: 'Krukset deurbeslag',
    options: [
      {value: 'Klink aluminium (standaard)'},
      {value: 'Knop aluminium (standaard)'},
      {value: 'Klink zwart', article: 'ODO304'},
      {value: 'Knop zwart', article: 'ODO306'},
      {value: 'Klink RVS', article: 'ODO303'},
      {value: 'Knop RVS', article: 'ODO305'}
    ],
    value: 'Klink aluminium (standaard)'
  }),
  new CheckboxQuestion({
    key: 'cilinder',
    label: 'Cilinder (cilindermaat 40/45 binnen/buitenzijde)',
    options: [
      {value: 'Cilinder leveren (incl. drie sleutels)'},
      {value: 'Extra sleutel', article: 'ODO308'},
      {value: 'Gelijksluitend (bij meedere deuren)', article: 'ODO307'},
      {value: 'Draaiknopcilinder'},
      {value: 'Aangeleverd door klant'}
    ],
    other: true,
    custom: ' ',
    value: ['Cilinder leveren (incl. drie sleutels)']
  })
]
export const glas: QuestionBase<string>[] = [
  new RadioQuestion({
    key: 'glassectie',
    label: 'Glassectie',
    image: 'assets/forms/odo/b2ba7637-14df-4f41-9a56-f6580bfa9f33.png',
    options: [
      {value: 'N.v.t.'},
      {value: 'Horizontaal - HR++ helder glas', article: 'ODO200'},
      {value: 'Horizontaal - HR++ melk glas', article: 'ODO201'},
      {value: 'Verticaal - HR++ helder glas', article: 'ODO202'},
      {value: 'Verticaal - HR++ melk glas', article: 'ODO203'},
    ],
    value: 'N.v.t.'
  }),
  new TextQuestion({
    label: 'Horizontaal - Netto glasmaat hoogte (in mm)',
    image: 'assets/forms/odo/glas-horizontaal.png',
    fields: [
      {
        key: 'netto_glasmaat',
        label: 'Hoogte',
        type: 'number'
      }
    ],
    dependent: [{
      field: 'glassectie',
      values: ['Horizontaal - HR++ helder glas', 'Horizontaal - HR++ melk glas']
    }]
  }),
  new TextQuestion({
    label: 'Verticaal - Netto glasmaat breedte (in mm)',
    image: 'assets/forms/odo/glas-verticaal.png',
    fields: [
      {
        key: 'netto_glasmaat',
        label: 'Breedte',
        type: 'number'
      }
    ],
    dependent: [{
      field: 'glassectie',
      values: ['Verticaal - HR++ helder glas', 'Verticaal - HR++ melk glas']
    }]
  }),
  new RadioQuestion({
    key: 'glassectie_in_vleugel',
    label: 'Glassectie in vleugel',
    options: [
      {value: 'Beide'},
      {value: 'Actieve deur'},
      {value: 'Passieve deur'}
    ],
    dependent: [{
      field: 'glassectie',
      values: ['Horizontaal - HR++ helder glas', 'Horizontaal - HR++ melk glas', 'Verticaal - HR++ helder glas', 'Verticaal - HR++ melk glas']
    }]
  })
]
export const montage: QuestionBase<string>[] = [
  new RadioQuestion({
    key: 'montage',
    label: 'Montage',
    options: [
      {value: 'Binnenzijde gelijk met binnenmuur'}
    ],
    other: true,
    custom: '',
    value: 'Binnenzijde gelijk met binnenmuur'
  }),
  new CheckboxQuestion({
    key: 'bestaande_deur',
    label: 'Bestaande deur',
    options: [
      {value: 'Demontage DD', article: 'ODO401'},
      {value: 'Afvoer DD', article: 'ODO402'},
      {value: 'Demontage door klant'},
      {value: 'Afvoer door klant'}
    ],
    value: ['Demontage DD', 'Afvoer DD']
  }),
  new RadioQuestion({
    key: 'type_deur',
    label: 'Type deur',
    options: [
      {value: 'N.v.t.'},
      {value: 'Sectionaaldeur'},
      {value: 'Kanteldeur'},
      {value: 'Houten kozijn en deuren'},
      {value: 'Rolluik'}
    ]
  })
]
export const afwerking: QuestionBase<string>[] = [
  new CheckboxQuestion({
    key: 'vloeraanpassing',
    label: 'Vloeraanpassing',
    options: [
      {value: 'N.v.t.'},
      {value: 'Uithakken vloer', article: 'ODO403'},
      {value: 'Aansmeren vloer', article: 'ODO404'}
    ],
    value: ['N.v.t.']
  }),
  new RadioQuestion({
    key: 'aftimmering_binnenzijde',
    label: 'Aftimmering binnenzijde',
    image: 'assets/forms/odo/79cc52f6-13ec-4fc4-bd46-1d63942001c1.png',
    options: [
      {value: 'Klant kiest voor geen binnenaftimmering'},
      {value: 'Enkel tussen kozijn en muur afpurren'},
      {value: 'Multipaint d.m.v. lijstje rondom (exclusief schilderen, lijstje van max 80mm breed)', article: 'ODO405'},
      {value: 'Multipaint volledig (exclusief schilderen)', article: 'ODO406'},
    ],
    value: 'Multipaint d.m.v. lijstje rondom (exclusief schilderen, lijstje van max 80mm breed)'
  }),
  new RadioQuestion({
    key: 'bouwkundig_aanpassingen',
    label: 'Bouwkundig aanpassingen',
    options: [
      {value: 'N.v.t.'},
      {value: 'Door klant volgens details DD'}
    ],
    value: 'N.v.t.'
  })
];
export const overige: QuestionBase<string>[] = [
  new CheckboxQuestion({
    key: 'indicatie_van_montage_uren',
    label: 'Indicatie van montage uren',
    options: [
      {value: 'Plaatsen nieuwe deur - 2 uur'},
      {value: 'Demontage kanteldeur - 0.5 uur'},
      {value: 'Demontage houten openslaande deuren - 1 uur'},
      {value: 'Aansmeren vloer - 0.5 uur'},
      {value: 'Aftimmeren binnenzijde lijstje rondom - 0.5 uur'},
      {value: 'Aftimmeren binnenzijde compleet - 2 uur'},
      {value: 'Aftimmeren buitenzijde - 1 uur'}
    ],
    value: ['Plaatsen nieuwe deur - 2 uur']
  }),
  new TextareaQuestion({
    key: 'overige_opmerkingen_klant',
    label: 'Overige opmerkingen (klant)'
  }),
  new TextareaQuestion({
    key: 'overige_opmerkingen_intern',
    label: 'Overige opmerkingen (monteurs)'
  }),
  new TextareaQuestion({
    key: 'materiaal_te_bestellen_door_werkvoorbereiding',
    label: 'Materiaal te bestellen door werkvoorbereiding'
  })
];
export const media: QuestionBase<string>[] = [
  new UploadQuestion({
    key: 'schets',
    label: 'Foto / schets 1 (voor klant)'
  }),
  new UploadQuestion({
    key: 'schets_2',
    label: 'Foto / schets 2 (voor klant)'
  }),
  new UploadQuestion({
    key: 'buiten',
    label: 'Foto buitenzijde deur (monteurs)'
  }),
  new UploadQuestion({
    key: 'binnen',
    label: 'Foto binnenzijde deur (monteurs)'
  })
];
export const odo: TabBase[] = [
  {
    label: "Algemeen",
    questions: algemeen
  },
  {
    label: "Buitenzijde",
    questions: buitenzijde
  },
  {
    label: "Binnenzijde",
    questions: binnenzijde
  },
  {
    label: "Deur",
    questions: deur
  },
  {
    label: 'Glas',
    questions: glas
  },
  {
    label: 'Montage',
    questions: montage
  },
  {
    label: 'Afwerking',
    questions: afwerking
  },
  {
    label: 'Overige',
    questions: overige
  },
  {
    label: 'Foto\'s',
    questions: media
  }
]
