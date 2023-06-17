const Router = require('koa-router');

const router = new Router();

const {response} = require('../models');

router.get('/', async (ctx) => {
  try {
    const {type, lat, lon} = ctx.query;
    console.log(type);
    console.log(lat);
    console.log(lon);

    let bestDistance = 7777777777777777;
    let bestInfo ={"name" : " ", "lat" : " ", "lon" : " ", "address" : " ", "website" : " ", "phone":" "};

    centers.forEach(center => {
        if(type=="public"){//faltaria implementarlo aca en centros, y en dentistas
            return;
        }
        let latdif = lat - parseFloat(center.coordinates.lat);
        let londif = lon - parseFloat(center.coordinates.lon);
        let distance = Math.sqrt(latdif**2  + londif**2);
        if(distance < bestDistance){
            bestDistance=distance;

            bestInfo.name=center.title;
            bestInfo.lat=center.coordinates.lat;
            bestInfo.lon=center.coordinates.lon;
            bestInfo.address=center.address;
            bestInfo.website=center.website;
            bestInfo.phone=center.phone;
        }
    });
    console.log(bestInfo);
    // Retorna el centro mas cercano y todos tambien.
    ctx.body = {"Nearest Center": bestInfo, "All Centers": centers}

  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Failed to delete retrieve' };
  }
});





const centers =
[
    {
        "title": "Nueva Salud Providencia",
        "type": "Centro médico",
        "address": "Guardia Vieja 255, Oficina 1004, 7510186 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–21:00"
            ],
            "martes": [
                "9:00–21:00"
            ],
            "miércoles": [
                "9:00–21:00"
            ],
            "jueves": [
                "9:00–21:00"
            ],
            "viernes": [
                "9:00–21:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://nuevasaludprovidencia.cl/agenda-tu-hora/",
        "phone": "(2) 2234 5697",
        "coordinates": {
            "lat": -33.4245419,
            "lon": -70.6103147
        }
    },
    {
        "title": "Médico General - Centro médico Providencia",
        "type": "Oficina médica",
        "address": "Av. Los Leones 220, oficina 505, 7510600 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "11:00–20:00"
            ],
            "martes": [
                "11:00–20:00"
            ],
            "miércoles": [
                "11:00–20:00"
            ],
            "jueves": [
                "11:00–20:00"
            ],
            "viernes": [
                "11:00–20:00"
            ],
            "sábado": [
                "11:00–20:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.nftmedicina.cl/",
        "phone": "9 9065 5015",
        "coordinates": {
            "lat": -33.4215761,
            "lon": -70.6049463
        }
    },
    {
        "title": "Medicenter",
        "type": "Centro médico",
        "address": "Av. Nueva Providencia 2155, 7510161 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "7:30–20:00"
            ],
            "martes": [
                "7:30–20:00"
            ],
            "miércoles": [
                "7:30–20:00"
            ],
            "jueves": [
                "7:30–20:00"
            ],
            "viernes": [
                "7:30–20:00"
            ],
            "sábado": [
                "8:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.medicenter.cl/",
        "phone": "(2) 2482 4500",
        "coordinates": {
            "lat": -33.4232477,
            "lon": -70.6099215
        }
    },
    {
        "title": "Centro Médico Manuel Montt",
        "type": "Clínica ambulatoria",
        "address": "Av. Manuel Montt 427, 7500994 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:00"
            ],
            "martes": [
                "8:00–20:00"
            ],
            "miércoles": [
                "8:00–20:00"
            ],
            "jueves": [
                "8:00–20:00"
            ],
            "viernes": [
                "8:00–20:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://cmmm.cl/reservas/",
        "phone": "(2) 2721 4000",
        "coordinates": {
            "lat": -33.4323264,
            "lon": -70.6182007
        }
    },
    {
        "title": "Centro Médico Antonio Varas.",
        "type": "Médico",
        "address": "Av. Providencia 1722, 7500498 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–20:00"
            ],
            "martes": [
                "9:00–20:00"
            ],
            "miércoles": [
                "9:00–20:00"
            ],
            "jueves": [
                "9:00–20:00"
            ],
            "viernes": [
                "9:00–20:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "tel:+56222351440",
        "phone": "(2) 2235 1440",
        "coordinates": {
            "lat": -33.4261875,
            "lon": -70.6155914
        }
    },
    {
        "title": "Instituto Radiologico Providencia (Resonancia)",
        "type": "Centro de diagnóstico por imagen",
        "address": "Dr. Manuel Barros Borgoño 430, 7500587 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–17:00"
            ],
            "martes": [
                "8:00–17:00"
            ],
            "miércoles": [
                "8:00–17:00"
            ],
            "jueves": [
                "8:00–17:00"
            ],
            "viernes": [
                "8:00–17:00"
            ],
            "sábado": [
                "8:00–12:30"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.irp.cl/",
        "phone": "(2) 2496 5500",
        "coordinates": {
            "lat": -33.4323592,
            "lon": -70.61734249999999
        }
    },
    {
        "title": "Centro Médico Sanasalud Pedro de Valdivia",
        "type": "Hospital",
        "address": "Av. Pedro de Valdivia 195, 7500911 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "7:30–18:00"
            ],
            "martes": [
                "7:30–18:00"
            ],
            "miércoles": [
                "7:30–18:00"
            ],
            "jueves": [
                "7:30–18:00"
            ],
            "viernes": [
                "7:30–18:00"
            ],
            "sábado": [
                "8:30–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.sanasalud.cl/centro/sanasalud-pedro-de-valdivia/",
        "phone": "600 006 1000",
        "coordinates": {
            "lat": -33.4254105,
            "lon": -70.6117979
        }
    },
    {
        "title": "Gesmed",
        "type": "Centro médico",
        "address": "Av. Andrés Bello 1249, 7500560 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "7:45–18:30"
            ],
            "martes": [
                "7:45–18:30"
            ],
            "miércoles": [
                "7:45–18:30"
            ],
            "jueves": [
                "7:45–18:30"
            ],
            "viernes": [
                "7:45–18:30"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.gesmed.cl/",
        "phone": "9 4238 6248",
        "coordinates": {
            "lat": -33.427951,
            "lon": -70.62240729999999
        }
    },
    {
        "title": "Centro De Diagnostico Plaza Italia Limitada",
        "type": "Centro médico",
        "address": "Ramón Carnicer 17, 7500858 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:30"
            ],
            "martes": [
                "9:00–18:30"
            ],
            "miércoles": [
                "9:00–18:30"
            ],
            "jueves": [
                "9:00–18:30"
            ],
            "viernes": [
                "9:00–18:30"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.centroplazaitalia.cl/",
        "phone": "(2) 2222 0375",
        "coordinates": {
            "lat": -33.4384023,
            "lon": -70.63341369999999
        }
    },
    {
        "title": "Instituto Radiológico Providencia",
        "type": "Radiólogo",
        "address": "Av. Providencia 199, 7500775 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "7:30–16:50"
            ],
            "martes": [
                "7:30–16:50"
            ],
            "miércoles": [
                "7:30–16:50"
            ],
            "jueves": [
                "7:30–16:50"
            ],
            "viernes": [
                "7:30–16:50"
            ],
            "sábado": [
                "7:00–12:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.irp.cl/cotizar-adjuntando-examen.php",
        "phone": "(2) 2496 5555",
        "coordinates": {
            "lat": -33.4364406,
            "lon": -70.631183
        }
    },
    {
        "title": "Centro Médico del Trabajador - CMT Providencia",
        "type": "Centro médico",
        "address": "Barcelona 2050, Piso 2, 7510184 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–17:00"
            ],
            "martes": [
                "8:00–17:00"
            ],
            "miércoles": [
                "8:00–17:00"
            ],
            "jueves": [
                "8:00–17:00"
            ],
            "viernes": [
                "8:00–17:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.cmtsalud.cl/",
        "phone": "(2) 2583 5531",
        "coordinates": {
            "lat": -33.4314474,
            "lon": -70.6093325
        }
    },
    {
        "title": "CENTRO MÉDICO AMIM",
        "type": "Centro médico",
        "address": "Av. Los Leones 1727, 7510838 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–19:00"
            ],
            "martes": [
                "9:00–19:00"
            ],
            "miércoles": [
                "9:00–19:00"
            ],
            "jueves": [
                "9:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "9:00–12:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.amim.cl/reserva-tu-hora/",
        "phone": "(2) 2723 7472",
        "coordinates": {
            "lat": -33.4354463,
            "lon": -70.6015369
        }
    },
    {
        "title": "Centro de Salud Familiar Dr. Alfonso Leng",
        "type": "Centro de salud",
        "address": "Av. Manuel Montt 303, 7500994 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:00"
            ],
            "martes": [
                "8:00–20:00"
            ],
            "miércoles": [
                "8:00–20:00"
            ],
            "jueves": [
                "8:00–20:00"
            ],
            "viernes": [
                "8:00–20:00"
            ],
            "sábado": [
                "9:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.cdsprovidencia.cl/centro-dental-dr-alfonso-leng.html",
        "phone": "(2) 2235 8160",
        "coordinates": {
            "lat": -33.4313659,
            "lon": -70.6188213
        }
    },
    {
        "title": "Cesmedica",
        "type": "Centro médico",
        "address": "Av. Providencia 2019, 7510148 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:30–19:30"
            ],
            "martes": [
                "8:30–19:30"
            ],
            "miércoles": [
                "8:30–19:30"
            ],
            "jueves": [
                "8:30–19:30"
            ],
            "viernes": [
                "8:30–19:30"
            ],
            "sábado": [
                "9:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://beta-sacmed.novacaribe.com/Rol/10065",
        "phone": "9 3519 3801",
        "coordinates": {
            "lat": -33.423342,
            "lon": -70.612083
        }
    },
    {
        "title": "PositronMed",
        "type": "Clínica ambulatoria",
        "address": "Julio Prado 714, 7501068 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–19:00"
            ],
            "martes": [
                "8:00–19:00"
            ],
            "miércoles": [
                "8:00–19:00"
            ],
            "jueves": [
                "8:00–19:00"
            ],
            "viernes": [
                "8:00–19:00"
            ],
            "sábado": [
                "8:00–17:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.positronmed.cl/",
        "phone": "(2) 2706 6550",
        "coordinates": {
            "lat": -33.4396205,
            "lon": -70.6224462
        }
    },
    {
        "title": "Centro Médico Bulnes",
        "type": "Centro médico",
        "address": "Av. Vicuña Mackenna 4, piso 5, oficina 4, 7500824 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–19:00"
            ],
            "martes": [
                "8:00–19:00"
            ],
            "miércoles": [
                "8:00–19:00"
            ],
            "jueves": [
                "8:00–19:00"
            ],
            "viernes": [
                "8:00–18:00"
            ],
            "sábado": [
                "8:30–16:30"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://centromedicobulnes.cl/contacto/",
        "phone": "(2) 2698 5221",
        "coordinates": {
            "lat": -33.43797929999999,
            "lon": -70.6347117
        }
    },
    {
        "title": "Clínica INDISA, Centro Médico Los Españoles",
        "type": "Hospital privado",
        "address": "Los Españoles 1855, 7520279 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "Abierto las 24 horas"
            ],
            "martes": [
                "Abierto las 24 horas"
            ],
            "miércoles": [
                "Abierto las 24 horas"
            ],
            "jueves": [
                "Abierto las 24 horas"
            ],
            "viernes": [
                "Abierto las 24 horas"
            ],
            "sábado": [
                "Abierto las 24 horas"
            ],
            "domingo": [
                "Abierto las 24 horas"
            ]
        },
        "website": "http://www.indisa.cl/",
        "phone": "(2) 2362 5555",
        "coordinates": {
            "lat": -33.4210285,
            "lon": -70.6165208
        }
    },
    {
        "title": "Divergencia Salud",
        "type": "Centro médico",
        "address": "Av. Salvador 149, oficina 911, 7500710 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:00–20:00"
            ],
            "martes": [
                "10:00–20:00"
            ],
            "miércoles": [
                "10:00–20:00"
            ],
            "jueves": [
                "10:00–20:00"
            ],
            "viernes": [
                "10:00–20:00"
            ],
            "sábado": [
                "10:00–18:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://98f67806cb74bab9c3efc715ef1d38bf1a53f550.agenda.softwaremedilink.com/agendas/agendamiento",
        "phone": "9 2043 8747",
        "coordinates": {
            "lat": -33.4355449,
            "lon": -70.626164
        }
    },
    {
        "title": "Centro Medico Provital",
        "type": "Centro médico",
        "address": "7500000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–19:00"
            ],
            "martes": [
                "9:00–19:00"
            ],
            "miércoles": [
                "9:00–19:00"
            ],
            "jueves": [
                "9:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.provital.cl/",
        "phone": "9 3194 6326",
        "coordinates": {
            "lat": -33.4232734,
            "lon": -70.6077372
        }
    },
    {
        "title": "Centro Médico Formed",
        "type": "Centro médico",
        "address": "Av. Nueva Providencia 1881, Of.1313, 7500520 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–21:30"
            ],
            "martes": [
                "9:00–21:30"
            ],
            "miércoles": [
                "9:00–21:30"
            ],
            "jueves": [
                "9:00–21:30"
            ],
            "viernes": [
                "9:00–21:30"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://formed.cl/agenda-tu-hora/",
        "phone": "(2) 6465 8542",
        "coordinates": {
            "lat": -33.4256605,
            "lon": -70.6140432
        }
    },
    {
        "title": "Clínica PlusVida",
        "type": "Centro médico",
        "address": "Eliodoro Yañez 2725, 7510394 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–18:00"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://plusvida.cl/reserva/",
        "phone": "9 6745 1110",
        "coordinates": {
            "lat": -33.4290129,
            "lon": -70.5971029
        }
    },
    {
        "title": "Vida Integra Nueva Providencia",
        "type": "Médico",
        "address": "Av. Nueva Providencia 2350, 7510063 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:30"
            ],
            "martes": [
                "8:00–20:30"
            ],
            "miércoles": [
                "8:00–20:30"
            ],
            "jueves": [
                "8:00–20:30"
            ],
            "viernes": [
                "8:00–20:30"
            ],
            "sábado": [
                "8:30–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.vidaintegra.cl/",
        "phone": "600 600 8432",
        "coordinates": {
            "lat": -33.4207578,
            "lon": -70.6070356
        }
    },
    {
        "title": "Centro San Vicente De Paul",
        "type": "Médico",
        "address": "Almte. Pastene 249, 7500509 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:00"
            ],
            "martes": [
                "8:00–20:00"
            ],
            "miércoles": [
                "8:00–20:00"
            ],
            "jueves": [
                "8:00–20:00"
            ],
            "viernes": [
                "8:00–20:00"
            ],
            "sábado": [
                "8:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.sanvicentedepaul.cl/",
        "phone": "(2) 2943 3900",
        "coordinates": {
            "lat": -33.4265492,
            "lon": -70.62071809999999
        }
    },
    {
        "title": "Provisam - Centro de Salud Mental y Comunitario Dr.Greve",
        "type": "Servicio de salud mental",
        "address": "Av. Manuel Montt 2051, 7501415 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–19:00"
            ],
            "martes": [
                "8:00–19:00"
            ],
            "miércoles": [
                "8:00–19:00"
            ],
            "jueves": [
                "8:00–19:00"
            ],
            "viernes": [
                "8:00–19:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.cdsprovidencia.cl/centro-de-salud-provisam.html",
        "phone": "(2) 2341 4150",
        "coordinates": {
            "lat": -33.4465445,
            "lon": -70.6141617
        }
    },
    {
        "title": "Centro Médico E.F.Medica",
        "type": "Centro médico",
        "address": "Coyancura 2270, piso 10, of.1012, 7510124 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:30–19:00"
            ],
            "martes": [
                "8:30–19:00"
            ],
            "miércoles": [
                "8:30–19:00"
            ],
            "jueves": [
                "8:30–19:00"
            ],
            "viernes": [
                "8:30–19:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://27eabba2a2ceffdf59964a50a8e5f69975078200.agenda.softwaremedilink.com/agendas/agendamiento",
        "phone": "(2) 2946 3159",
        "coordinates": {
            "lat": -33.4230553,
            "lon": -70.6083835
        }
    },
    {
        "title": "Centro Médico El Buen Doctor, SpA",
        "type": "Kinesiólogo",
        "address": "La Concepción 81, Oficina 405, 7500000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:00–18:00"
            ],
            "martes": [
                "10:00–18:00"
            ],
            "miércoles": [
                "10:00–18:00"
            ],
            "jueves": [
                "10:00–18:00"
            ],
            "viernes": [
                "10:00–18:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://elbuendr.site.agendapro.com/cl/sucursal/64929",
        "phone": "9 4491 2901",
        "coordinates": {
            "lat": -33.4246797,
            "lon": -70.6151266
        }
    },
    {
        "title": "Clínica INDISA, Centro Médico Los Conquistadores",
        "type": "Hospital privado",
        "address": "Los Conquistadores 1926, 7520252 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "Abierto las 24 horas"
            ],
            "martes": [
                "Abierto las 24 horas"
            ],
            "miércoles": [
                "Abierto las 24 horas"
            ],
            "jueves": [
                "Abierto las 24 horas"
            ],
            "viernes": [
                "Abierto las 24 horas"
            ],
            "sábado": [
                "Abierto las 24 horas"
            ],
            "domingo": [
                "Abierto las 24 horas"
            ]
        },
        "website": "http://www.indisa.cl/",
        "phone": "(2) 2795 5555",
        "coordinates": {
            "lat": -33.4202496,
            "lon": -70.61702319999999
        }
    },
    {
        "title": "Centro Medico de Esp. Infantiles",
        "type": "Centro médico",
        "address": "José Manuel Infante 100, Of. 202, 7750000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–19:30"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "9:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://agendamiento.softwaremedilink.com/agendas/online/c0b29397053724ef975e156e0bc1e3aac13e7544",
        "phone": "9 3752 7104",
        "coordinates": {
            "lat": -33.4325173,
            "lon": -70.6235371
        }
    },
    {
        "title": "Centro Médico Integral Cemesi",
        "type": "Centro médico",
        "address": "Guardia Vieja 339, 7510249 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–18:00"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://cemesi.cl/",
        "phone": "(2) 2233 6515",
        "coordinates": {
            "lat": -33.4254688,
            "lon": -70.6097058
        }
    },
    {
        "title": "Centro Médico SEMMI",
        "type": "Centro médico",
        "address": "Joaquín Díaz Garcés 05, 7501367 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:00–17:00"
            ],
            "martes": [
                "10:00–17:00"
            ],
            "miércoles": [
                "10:00–17:00"
            ],
            "jueves": [
                "10:00–17:00"
            ],
            "viernes": [
                "10:00–17:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://semmi.cl/",
        "phone": "(2) 2222 8138",
        "coordinates": {
            "lat": -33.4449986,
            "lon": -70.63266
        }
    },
    {
        "title": "Consultas Médicas Bienestar Integral",
        "type": "Centro médico",
        "address": "Av. Salvador 95, of 601, 7500710 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:00–19:00"
            ],
            "martes": [
                "10:00–19:00"
            ],
            "miércoles": [
                "10:00–19:00"
            ],
            "jueves": [
                "10:00–19:00"
            ],
            "viernes": [
                "10:00–19:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://consulta.doctor/",
        "phone": "(2) 3245 0975",
        "coordinates": {
            "lat": -33.434835,
            "lon": -70.62639519999999
        }
    },
    {
        "title": "Centro Médico Humana Salud Spa",
        "type": "Médico de medicina general",
        "address": "Dr M Barros Borgoño 110 1109, 7500585 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:30–17:00"
            ],
            "martes": [
                "9:30–17:00"
            ],
            "miércoles": [
                "9:30–17:00"
            ],
            "jueves": [
                "9:30–17:00"
            ],
            "viernes": [
                "9:30–17:00"
            ],
            "sábado": [
                "9:30–17:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.centromedicohumanasalud.cl/",
        "phone": "9 8480 6684",
        "coordinates": {
            "lat": -33.42976480000001,
            "lon": -70.6185409
        }
    },
    {
        "title": "Clínica Estétika Médica Providencia",
        "type": "Centro médico",
        "address": "Vieja, Guardia Vieja 202, Of.301, Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:00–20:00"
            ],
            "martes": [
                "10:00–20:00"
            ],
            "miércoles": [
                "10:00–20:00"
            ],
            "jueves": [
                "10:00–20:00"
            ],
            "viernes": [
                "10:00–20:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.estetikamedica.cl/",
        "phone": "44 222 9928",
        "coordinates": {
            "lat": -33.4242574,
            "lon": -70.609942
        }
    },
    {
        "title": "Centro de Psiquiatría Providencia",
        "type": "Centro médico",
        "address": "Av. Providencia 1650, oficina 1110, 7500027 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:30–18:00"
            ],
            "martes": [
                "9:30–18:00"
            ],
            "miércoles": [
                "9:30–18:00"
            ],
            "jueves": [
                "9:30–18:00"
            ],
            "viernes": [
                "9:30–18:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://psiquiatriaprovidencia.cl/servicios/psiquiatria-adulto/",
        "phone": "9 4903 9096",
        "coordinates": {
            "lat": -33.4266276,
            "lon": -70.6163582
        }
    },
    {
        "title": "Instituto Médico La Concepción",
        "type": "Centro médico",
        "address": "La Concepción 191, Oficina 202, 7500010 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:30–19:30"
            ],
            "martes": [
                "8:30–19:30"
            ],
            "miércoles": [
                "8:30–19:30"
            ],
            "jueves": [
                "8:30–19:30"
            ],
            "viernes": [
                "8:30–19:30"
            ],
            "sábado": [
                "9:00–13:30"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.iccc.cl/",
        "phone": "(2) 2714 8760",
        "coordinates": {
            "lat": -33.4238722,
            "lon": -70.6163147
        }
    },
    {
        "title": "MEDILEAN",
        "type": "Centro médico",
        "address": "Luis Thayer Ojeda Norte 0130, oficina 316, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "11:00–18:00"
            ],
            "martes": [
                "11:00–18:00"
            ],
            "miércoles": [
                "11:00–18:00"
            ],
            "jueves": [
                "11:00–18:00"
            ],
            "viernes": [
                "11:00–16:30"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.medilean.cl/hora",
        "phone": "(2) 2261 6906",
        "coordinates": {
            "lat": -33.4180978,
            "lon": -70.6039897
        }
    },
    {
        "title": "Centro Médico MEDKIN",
        "type": "Centro médico",
        "address": "Av. Los Leones 220, Oficina 802-803, 7510600 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–21:00"
            ],
            "martes": [
                "9:00–21:00"
            ],
            "miércoles": [
                "9:00–21:00"
            ],
            "jueves": [
                "9:00–21:00"
            ],
            "viernes": [
                "9:00–21:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.medkin.cl/",
        "phone": "(2) 2752 3829",
        "coordinates": {
            "lat": -33.4217356,
            "lon": -70.6048531
        }
    },
    {
        "title": "Fonoaudiología | Fonoaudiólogo | Centro | Terapia | Consulta | Fonasa | Isapre | Centro Integral de Terapias",
        "type": "Centro médico",
        "address": "Av. Nueva Providencia 1881, Oficina 212, 7500520 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:00–21:00"
            ],
            "martes": [
                "10:00–21:00"
            ],
            "miércoles": [
                "10:00–21:00"
            ],
            "jueves": [
                "10:00–21:00"
            ],
            "viernes": [
                "10:00–21:00"
            ],
            "sábado": [
                "10:00–15:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://centrointegraldeterapias.cl/#RESERVAS",
        "phone": "9 9617 1789",
        "coordinates": {
            "lat": -33.4256605,
            "lon": -70.6140432
        }
    },
    {
        "title": "Consulta Médica",
        "type": "Médico",
        "address": "Almte. Pastene 185, 7500535 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "17:00–20:00"
            ],
            "martes": [
                "17:00–20:00"
            ],
            "miércoles": [
                "17:00–20:00"
            ],
            "jueves": [
                "17:00–20:00"
            ],
            "viernes": [
                "17:00–20:00"
            ],
            "sábado": [
                "10:00–18:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://henryrubenc.wixsite.com/drcabrera",
        "phone": "(2) 2973 6061",
        "coordinates": {
            "lat": -33.4269283,
            "lon": -70.6204096
        }
    },
    {
        "title": "CENTRO MÉDICO TRATAMIENTOS DEL PIE Providencia",
        "type": "Podólogo",
        "address": "Av. Salvador 149, oficina 609, 7500000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:30–18:30"
            ],
            "martes": [
                "9:30–18:30"
            ],
            "miércoles": [
                "9:30–18:30"
            ],
            "jueves": [
                "9:30–18:30"
            ],
            "viernes": [
                "9:30–18:30"
            ],
            "sábado": [
                "8:30–13:00"
            ],
            "domingo": [
                "15:00–18:30"
            ]
        },
        "website": "https://www.facebook.com/tratamientospodologiaclinica",
        "phone": "9 3050 6467",
        "coordinates": {
            "lat": -33.4354929,
            "lon": -70.62614769999999
        }
    },
    {
        "title": "Sociedad Doctor Gonzalez Folch SPA",
        "type": "Centro de salud",
        "address": "Alfredo Barros Errázuriz 1954, of 307, 7500523 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–19:00"
            ],
            "martes": [
                "9:00–19:00"
            ],
            "miércoles": [
                "9:00–19:00"
            ],
            "jueves": [
                "9:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.varix.cl/",
        "phone": "(2) 2698 1013",
        "coordinates": {
            "lat": -33.4267827,
            "lon": -70.61261449999999
        }
    },
    {
        "title": "Centro Médico Novalife",
        "type": "Centro médico",
        "address": "Dr. Manuel Barros Borgoño 71, 7500593 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–18:00"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://wa.link/4jjz7e",
        "phone": "9 4251 2669",
        "coordinates": {
            "lat": -33.42959140000001,
            "lon": -70.6190829
        }
    },
    {
        "title": "Labocenter",
        "type": "Centro médico",
        "address": "Enrique Mac Iver 22 Santiago Centro, 8320261 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–17:00"
            ],
            "martes": [
                "8:00–17:00"
            ],
            "miércoles": [
                "8:00–17:00"
            ],
            "jueves": [
                "8:00–17:00"
            ],
            "viernes": [
                "8:00–17:00"
            ],
            "sábado": [
                "8:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.labocenter.cl/",
        "phone": "(2) 2611 2700",
        "coordinates": {
            "lat": -33.44243610000001,
            "lon": -70.646434
        }
    },
    {
        "title": "Centro Medico y Toma de Muestras CDIEM",
        "type": "Centro médico",
        "address": "María Luisa Santander 485, 7500859 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:00"
            ],
            "martes": [
                "8:00–20:00"
            ],
            "miércoles": [
                "8:00–20:00"
            ],
            "jueves": [
                "8:00–20:00"
            ],
            "viernes": [
                "8:00–20:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.cdiem.org/",
        "phone": "9 4405 2528",
        "coordinates": {
            "lat": -33.4386733,
            "lon": -70.6264893
        }
    },
    {
        "title": "Centro Medico MIDAS SpA",
        "type": "Grupo médico",
        "address": "Rafael Cañas 16, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:00"
            ],
            "martes": [
                "8:00–20:00"
            ],
            "miércoles": [
                "8:00–20:00"
            ],
            "jueves": [
                "8:00–20:00"
            ],
            "viernes": [
                "8:00–20:00"
            ],
            "sábado": [
                "8:00–12:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.centromidas.cl/",
        "phone": "9 2021 0175",
        "coordinates": {
            "lat": -33.4314936,
            "lon": -70.6235821
        }
    },
    {
        "title": "Natural Clinic",
        "type": "Centro médico",
        "address": "Av. Providencia 2093, piso 3, 7510148 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:00–19:30"
            ],
            "martes": [
                "10:00–19:30"
            ],
            "miércoles": [
                "10:00–19:30"
            ],
            "jueves": [
                "10:00–19:30"
            ],
            "viernes": [
                "10:00–19:30"
            ],
            "sábado": [
                "10:00–12:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.naturalclinic.cl/primera-consulta-gratis",
        "phone": "9 6422 3121",
        "coordinates": {
            "lat": -33.4228382,
            "lon": -70.6111301
        }
    },
    {
        "title": "Auris Centro Médico",
        "type": "Centro de diagnóstico",
        "address": "Av. Manuel Montt 427, Piso 10, 7500994 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:30"
            ],
            "martes": [
                "9:00–18:30"
            ],
            "miércoles": [
                "9:00–18:30"
            ],
            "jueves": [
                "9:00–18:30"
            ],
            "viernes": [
                "9:00–18:30"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.auriscentromedico.cl/lp",
        "phone": "9 4523 2527",
        "coordinates": {
            "lat": -33.43232080000001,
            "lon": -70.6182417
        }
    },
    {
        "title": "Centro Radiologico Fleming",
        "type": "Radiólogo",
        "address": "Pérez Valenzuela 1554, 7500035 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–19:00"
            ],
            "martes": [
                "8:00–19:00"
            ],
            "miércoles": [
                "8:00–19:00"
            ],
            "jueves": [
                "8:00–19:00"
            ],
            "viernes": [
                "8:00–19:00"
            ],
            "sábado": [
                "9:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.crfleming.cl/",
        "phone": "(2) 2728 9400",
        "coordinates": {
            "lat": -33.4251243,
            "lon": -70.6199599
        }
    },
    {
        "title": "Centro Médico del Hospital del Trabajador ACHS",
        "type": "Hospital",
        "address": "Av. Vicuña Mackenna 210, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:00"
            ],
            "martes": [
                "8:00–20:00"
            ],
            "miércoles": [
                "8:00–20:00"
            ],
            "jueves": [
                "8:00–20:00"
            ],
            "viernes": [
                "8:00–20:00"
            ],
            "sábado": [
                "8:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.hospitaldeltrabajador.cl/",
        "phone": "(2) 2515 7777",
        "coordinates": {
            "lat": -33.4440925,
            "lon": -70.6329296
        }
    },
    {
        "title": "Centro Otorrinolaringologico Galeno Ltda",
        "type": "Médico",
        "address": "Av. Salvador 149, oficina 703, 7500710 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:30–12:00"
            ],
            "martes": [
                "9:30–12:00"
            ],
            "miércoles": [
                "9:30–12:00"
            ],
            "jueves": [
                "9:30–12:00"
            ],
            "viernes": [
                "9:30–12:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.centrootorrinogaleno.cl/",
        "phone": "(2) 2204 4125",
        "coordinates": {
            "lat": -33.4355449,
            "lon": -70.626164
        }
    },
    {
        "title": "Clínica Nueva Costanera",
        "type": "Centro médico",
        "address": "Av. Manuel Montt 427, piso 7, 7500000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:00"
            ],
            "martes": [
                "8:00–20:00"
            ],
            "miércoles": [
                "8:00–20:00"
            ],
            "jueves": [
                "8:00–20:00"
            ],
            "viernes": [
                "8:00–20:00"
            ],
            "sábado": [
                "8:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://reservas.cmmm.cl/AgendaMedicaCMMM#no-back-button",
        "phone": "(2) 2602 3750",
        "coordinates": {
            "lat": -33.4323264,
            "lon": -70.6182007
        }
    },
    {
        "title": "Clinica El Bosque",
        "type": "Clínica ambulatoria",
        "address": "Eliodoro Yañez 2820, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–20:00"
            ],
            "martes": [
                "9:00–20:00"
            ],
            "miércoles": [
                "9:00–20:00"
            ],
            "jueves": [
                "9:00–20:00"
            ],
            "viernes": [
                "9:00–20:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.clinicaelbosque.cl/",
        "phone": "(2) 3244 9760",
        "coordinates": {
            "lat": -33.4281858,
            "lon": -70.59546139999999
        }
    },
    {
        "title": "CENTRO MEDICO LO SANO",
        "type": "Centro médico",
        "address": "Padre Mariano 391, oficina 607, 7500015 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "11:00–13:00",
                "15:00–20:00"
            ],
            "martes": [
                "11:00–13:00",
                "15:00–20:00"
            ],
            "miércoles": [
                "11:00–13:00",
                "15:00–20:00"
            ],
            "jueves": [
                "11:00–13:00",
                "15:00–20:00"
            ],
            "viernes": [
                "11:00–13:00",
                "15:00–20:00"
            ],
            "sábado": [
                "11:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.centromedicolosano.cl/",
        "phone": "9 9458 1783",
        "coordinates": {
            "lat": -33.4236373,
            "lon": -70.6184245
        }
    },
    {
        "title": "Centro Médico Ser Alma",
        "type": "Clínica ambulatoria",
        "address": "local 103 Providencia, Padre Mariano 236, 7500026 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "15:00–18:00"
            ],
            "martes": [
                "Cerrado"
            ],
            "miércoles": [
                "10:00–19:00"
            ],
            "jueves": [
                "11:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "tel:+56977771342",
        "phone": "9 7777 1342",
        "coordinates": {
            "lat": -33.4248509,
            "lon": -70.61751420000002
        }
    },
    {
        "title": "Clinica CMMC - Instituto de prevención y tratamiento del sobrepeso y obesidad",
        "type": "Centro médico",
        "address": "Avenida Providencia #1650 - Oficina 706 - 1407, Santiago, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:30–13:30",
                "14:30–19:30"
            ],
            "martes": [
                "12:00–13:30",
                "14:30–21:00"
            ],
            "miércoles": [
                "10:30–13:30",
                "14:30–19:30"
            ],
            "jueves": [
                "12:00–13:30",
                "14:30–21:00"
            ],
            "viernes": [
                "10:30–13:30",
                "14:30–18:30"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.facebook.com/institutodelaobesidad/",
        "phone": "9 5995 5703",
        "coordinates": {
            "lat": -33.4266276,
            "lon": -70.6163582
        }
    },
    {
        "title": "SALUMA centro médico",
        "type": "Salud y bienestar",
        "address": "Av. Nueva Providencia 1881, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:30–19:30"
            ],
            "martes": [
                "9:30–19:30"
            ],
            "miércoles": [
                "9:30–19:30"
            ],
            "jueves": [
                "9:30–19:30"
            ],
            "viernes": [
                "9:30–19:30"
            ],
            "sábado": [
                "9:30–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.saluma.cl/",
        "phone": "(2) 2333 7976",
        "coordinates": {
            "lat": -33.4256605,
            "lon": -70.6140432
        }
    },
    {
        "title": "Provital Ciclo Neuronal - centro medico",
        "type": "Centro médico",
        "address": "De Las Claras 0195, piso 3, 7500000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–19:00"
            ],
            "martes": [
                "9:00–19:00"
            ],
            "miércoles": [
                "9:00–19:00"
            ],
            "jueves": [
                "9:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.provital.cl/",
        "phone": "(2) 2435 4602",
        "coordinates": {
            "lat": -33.4390321,
            "lon": -70.6305233
        }
    },
    {
        "title": "Clínica INDISA, Centro Médico de Diálisis",
        "type": "Hospital privado",
        "address": "Los Conquistadores 1972, 7500000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "7:30–22:00"
            ],
            "martes": [
                "7:30–22:00"
            ],
            "miércoles": [
                "7:30–22:00"
            ],
            "jueves": [
                "7:30–22:00"
            ],
            "viernes": [
                "7:30–22:00"
            ],
            "sábado": [
                "7:30–17:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.indisa.cl/",
        "phone": "(2) 2362 5258",
        "coordinates": {
            "lat": -33.4194566,
            "lon": -70.6163117
        }
    },
    {
        "title": "Instituto Médico Cardiovascular - IMEC",
        "type": "Centro médico",
        "address": "Pedro de Valdivia Nte. 091, 7520265 Santiago, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–18:00"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://cardiologiaimec.cl/",
        "phone": "(2) 2232 7830",
        "coordinates": {
            "lat": -33.4198407,
            "lon": -70.61492059999999
        }
    },
    {
        "title": "Médicos 360",
        "type": "Centro médico",
        "address": "Dr. Manuel Barros Borgoño 110, Oficina 1010, 7500587 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–18:00"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://api.whatsapp.com/send?phone=56978016775&text=Hola,%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20de%20M%C3%A9dicos%20360",
        "phone": "(2) 2929 7062",
        "coordinates": {
            "lat": -33.4297537,
            "lon": -70.6184265
        }
    },
    {
        "title": "Medical Sex Center",
        "type": "Centro médico",
        "address": "Coyancura 2270, Of 809, 7510124 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–19:00"
            ],
            "martes": [
                "9:00–19:00"
            ],
            "miércoles": [
                "9:00–19:00"
            ],
            "jueves": [
                "9:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.medicalsexcenter.cl/",
        "phone": "(2) 2215 2400",
        "coordinates": {
            "lat": -33.4230077,
            "lon": -70.6083337
        }
    },
    {
        "title": "Centro Psicológico, Médico y de Salud Integral SuTerapia",
        "type": "Centro médico",
        "address": "Av. Luis Thayer Ojeda 0130, oficina 214, 7510008 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:30–13:00",
                "15:00–20:00"
            ],
            "martes": [
                "10:30–13:00",
                "15:00–20:00"
            ],
            "miércoles": [
                "10:30–13:00",
                "15:00–20:00"
            ],
            "jueves": [
                "10:30–13:00",
                "15:00–20:00"
            ],
            "viernes": [
                "10:30–13:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.suterapia.cl/",
        "phone": "(2) 2701 4627",
        "coordinates": {
            "lat": -33.4178228,
            "lon": -70.6037771
        }
    },
    {
        "title": "Pro vital Ciclo Neuronal Centro medico de Salud Mental",
        "type": "Centro médico",
        "address": "7500634 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–19:00"
            ],
            "martes": [
                "9:00–19:00"
            ],
            "miércoles": [
                "9:00–19:00"
            ],
            "jueves": [
                "9:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.provital.cl/",
        "phone": "9 5016 6697",
        "coordinates": {
            "lat": -33.4319104,
            "lon": -70.62321530000001
        }
    },
    {
        "title": "Instituto de Medicina Integrativa Rudolph Virchow",
        "type": "Centro médico",
        "address": "Dr. Manuel Barros Borgoño 71, oficina 303, 7500593 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–16:30"
            ],
            "martes": [
                "9:00–16:30"
            ],
            "miércoles": [
                "9:00–16:30"
            ],
            "jueves": [
                "9:00–16:30"
            ],
            "viernes": [
                "9:00–16:30"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.inmuno.cl/",
        "phone": "9 6909 8293",
        "coordinates": {
            "lat": -33.4295733,
            "lon": -70.618974
        }
    },
    {
        "title": "Centro OrigamiS",
        "type": "Clínica psiquiátrica",
        "address": "Av. Sta. María 2310, Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:30–21:00"
            ],
            "martes": [
                "9:30–21:00"
            ],
            "miércoles": [
                "9:30–21:00"
            ],
            "jueves": [
                "9:30–21:00"
            ],
            "viernes": [
                "9:30–21:00"
            ],
            "sábado": [
                "9:00–15:15"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "tel:+56226654888",
        "phone": "(2) 2665 4888",
        "coordinates": {
            "lat": -33.4189877,
            "lon": -70.6120818
        }
    },
    {
        "title": "Centro Médico Gastrolap",
        "type": "Centro médico",
        "address": "La Concepción 81, 7855500 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–18:00"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "tel:+56222362547",
        "phone": "(2) 2236 2547",
        "coordinates": {
            "lat": -33.4246797,
            "lon": -70.6151266
        }
    },
    {
        "title": "Nueva Perspectiva",
        "type": "Centro médico",
        "address": "Las Urbinas 87, Of 17, 7510093 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–21:00"
            ],
            "martes": [
                "9:00–21:00"
            ],
            "miércoles": [
                "9:00–21:00"
            ],
            "jueves": [
                "9:00–21:00"
            ],
            "viernes": [
                "9:00–21:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://nuevaperspectiva.cl/",
        "phone": "(2) 2231 9962",
        "coordinates": {
            "lat": -33.4218239,
            "lon": -70.61205919999999
        }
    },
    {
        "title": "Centro Diagnóstico Por Imagenes Blanco Ltda.",
        "type": "Médico",
        "address": "Av. Salvador 65, 7500710 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "7:30–22:00"
            ],
            "martes": [
                "7:30–22:00"
            ],
            "miércoles": [
                "7:30–22:00"
            ],
            "jueves": [
                "7:30–22:00"
            ],
            "viernes": [
                "7:30–22:00"
            ],
            "sábado": [
                "7:30–22:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.laboratorioblanco.cl/",
        "phone": "(2) 2490 5500",
        "coordinates": {
            "lat": -33.43441019999999,
            "lon": -70.62644279999999
        }
    },
    {
        "title": "Vida Íntegra Dermatología",
        "type": "Centro médico",
        "address": "Av. Nueva Providencia 2350, 7510063 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:00–20:30"
            ],
            "martes": [
                "8:00–20:30"
            ],
            "miércoles": [
                "8:00–20:30"
            ],
            "jueves": [
                "8:00–20:30"
            ],
            "viernes": [
                "8:00–20:30"
            ],
            "sábado": [
                "8:30–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.integramedica.cl/",
        "phone": "600 600 8432",
        "coordinates": {
            "lat": -33.4207578,
            "lon": -70.6070356
        }
    },
    {
        "title": "Centro Orgánico de Salud",
        "type": "Psiquiatra",
        "address": "Suecia 15, 7510089 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–18:00"
            ],
            "martes": [
                "9:00–18:00"
            ],
            "miércoles": [
                "9:00–18:00"
            ],
            "jueves": [
                "9:00–18:00"
            ],
            "viernes": [
                "9:00–18:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.centrorganicodesalud.cl/",
        "phone": "(2) 2261 1397",
        "coordinates": {
            "lat": -33.4210578,
            "lon": -70.6079472
        }
    },
    {
        "title": "Médico Broncopulmonar",
        "type": "Centro médico",
        "address": "Antonio Bellet 193, 7500025 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "17:00–20:00"
            ],
            "martes": [
                "17:00–20:00"
            ],
            "miércoles": [
                "17:00–20:00"
            ],
            "jueves": [
                "17:00–20:00"
            ],
            "viernes": [
                "17:00–19:00"
            ],
            "sábado": [
                "12:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://www.medicobroncopulmonar.cl/",
        "phone": "9 6845 4132",
        "coordinates": {
            "lat": -33.4256475,
            "lon": -70.61777579999999
        }
    },
    {
        "title": "Senocare Centro de Imagenes",
        "type": "Centro médico",
        "address": "Eliodoro Yañez 2063, Ofic. 201, 7510524 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–13:00",
                "14:00–18:00"
            ],
            "martes": [
                "9:00–13:00",
                "14:00–18:00"
            ],
            "miércoles": [
                "9:00–13:00",
                "14:00–18:00"
            ],
            "jueves": [
                "9:00–13:00",
                "14:00–18:00"
            ],
            "viernes": [
                "9:00–13:00",
                "14:00–18:00"
            ],
            "sábado": [
                "9:00–14:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://api.senocare.ziz.cl/widget/agenda/reserva",
        "phone": "(2) 2712 1665",
        "coordinates": {
            "lat": -33.4314231,
            "lon": -70.6083111
        }
    },
    {
        "title": "Centro Medico de Diabéticos de Chile",
        "type": "Centro médico",
        "address": "Quebec 496, 7500347 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "8:30–19:00"
            ],
            "martes": [
                "8:30–19:00"
            ],
            "miércoles": [
                "8:30–19:00"
            ],
            "jueves": [
                "8:30–19:00"
            ],
            "viernes": [
                "8:30–19:00"
            ],
            "sábado": [
                "9:00–13:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.adich.cl/new/toma-de-horas/",
        "phone": "(2) 2678 0528",
        "coordinates": {
            "lat": -33.4362259,
            "lon": -70.62700389999999
        }
    },
    {
        "title": "Centro Psicosalud",
        "type": "Clínica psiquiátrica",
        "address": "Av. Nueva Providencia 2250, P 4, 7510090 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "12:00–21:00"
            ],
            "martes": [
                "12:00–21:00"
            ],
            "miércoles": [
                "12:00–21:00"
            ],
            "jueves": [
                "12:00–21:00"
            ],
            "viernes": [
                "12:00–21:00"
            ],
            "sábado": [
                "12:00–21:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "tel:+56232220276",
        "phone": "(2) 3222 0276",
        "coordinates": {
            "lat": -33.421716,
            "lon": -70.60858019999999
        }
    },
    {
        "title": "Centro de Bienestar para la Mujer Spa",
        "type": "Clínica ginecológica",
        "address": "Av. Nueva Providencia 1945, 7500000 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "9:00–19:00"
            ],
            "martes": [
                "9:00–19:00"
            ],
            "miércoles": [
                "9:00–19:00"
            ],
            "jueves": [
                "9:00–19:00"
            ],
            "viernes": [
                "9:00–19:00"
            ],
            "sábado": [
                "10:00–19:00"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "http://www.ginecoaldia.cl/",
        "phone": "9 4513 7305",
        "coordinates": {
            "lat": -33.4256211,
            "lon": -70.61292220000001
        }
    },
    {
        "title": "Psiquiatras en Providencia - Smconsultamedica.cl",
        "type": "Clínica psiquiátrica",
        "address": "Antonio Varas 303, oficina 1010, 7500580 Providencia, Región Metropolitana",
        "schedule": {
            "lunes": [
                "10:30–20:00"
            ],
            "martes": [
                "10:30–20:00"
            ],
            "miércoles": [
                "10:30–20:00"
            ],
            "jueves": [
                "10:30–20:00"
            ],
            "viernes": [
                "10:30–20:00"
            ],
            "sábado": [
                "Cerrado"
            ],
            "domingo": [
                "Cerrado"
            ]
        },
        "website": "https://smconsultamedica.cl/profesionales/",
        "phone": "(2) 2604 8157",
        "coordinates": {
            "lat": -33.430579,
            "lon": -70.616911
        }
    }
]

module.exports = router;