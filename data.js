var APP_DATA = {
  "scenes": [
    {
      "id": "0-r7-cafeteria-salle",
      "name": "R+7 cafeteria salle",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3748059079451114,
          "pitch": 0.02961826077129004,
          "rotation": 0,
          "target": "12-r7-cafeteria-escalier"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-r7-terrasse",
      "name": "R+7 terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0007905328224016,
          "pitch": 0.1469512754458897,
          "rotation": 0,
          "target": "12-r7-cafeteria-escalier"
        },
        {
          "yaw": 1.0358193919724936,
          "pitch": -0.2051642444769648,
          "rotation": 0.7853981633974483,
          "target": "2-comble-accs-piscine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-comble-accs-piscine",
      "name": "Comble accés piscine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5791625641770572,
          "pitch": 0.6738629283346498,
          "rotation": 0,
          "target": "1-r7-terrasse"
        },
        {
          "yaw": -0.0000405044274973676,
          "pitch": -0.25420905201138844,
          "rotation": 0,
          "target": "3-piscine-sur-le-toit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-piscine-sur-le-toit",
      "name": "Piscine sur le toit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06408233549318254,
          "pitch": 0.49735613352041597,
          "rotation": 0,
          "target": "2-comble-accs-piscine"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-r5-accueil",
      "name": "R+5 accueil",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "yaw": 0.2709660146498596,
        "pitch": 0.07239401258446776,
        "fov": 1.41569238083293
      },
      "linkHotspots": [
        {
          "yaw": -0.5301226543843818,
          "pitch": 0.03332619785457602,
          "rotation": 0,
          "target": "6-r5-bureaux-sud"
        },
        {
          "yaw": 1.5322674120484328,
          "pitch": -0.37966708025141394,
          "rotation": 0,
          "target": "10-r6-circulation"
        },
        {
          "yaw": 1.7543805749832888,
          "pitch": 0.02353400460226851,
          "rotation": 0,
          "target": "7-r5-reprographie"
        },
        {
          "yaw": 0.8046721214326098,
          "pitch": 0.005691883125319208,
          "rotation": 0,
          "target": "5-r5-bureaux-nord"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-r5-bureaux-nord",
      "name": "R+5 bureaux nord",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2300816196937667,
          "pitch": -0.017464196984828817,
          "rotation": 0,
          "target": "6-r5-bureaux-sud"
        },
        {
          "yaw": -0.19546674223844107,
          "pitch": -0.0004804479548603524,
          "rotation": 0,
          "target": "7-r5-reprographie"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-r5-bureaux-sud",
      "name": "R+5 bureaux sud",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4102832293454277,
          "pitch": 0.008966836864297889,
          "rotation": 0,
          "target": "4-r5-accueil"
        },
        {
          "yaw": -0.11905577167501313,
          "pitch": 0.0154102178588289,
          "rotation": 0,
          "target": "5-r5-bureaux-nord"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-r5-reprographie",
      "name": "R+5 reprographie",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.617548183390003,
          "pitch": 0.007421155039189387,
          "rotation": 0,
          "target": "5-r5-bureaux-nord"
        },
        {
          "yaw": -0.8227912557947299,
          "pitch": 0.01979913334000649,
          "rotation": 0,
          "target": "4-r5-accueil"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-r6-bureau-serge",
      "name": "R+6 bureau Serge",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.599426794508,
          "pitch": 0.0024226992460860686,
          "rotation": 0,
          "target": "11-r6-runion"
        },
        {
          "yaw": 2.615969940648009,
          "pitch": 0.1370179838812824,
          "rotation": 0,
          "target": "10-r6-circulation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-r6-bureaux",
      "name": "R+6 bureaux",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.2935191058063413,
          "pitch": 0.05035903659574892,
          "rotation": 0,
          "target": "10-r6-circulation"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-r6-circulation",
      "name": "R+6 circulation",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.6017243050005483,
          "pitch": 0.055920564130625294,
          "rotation": 0,
          "target": "9-r6-bureaux"
        },
        {
          "yaw": 2.1021267384281774,
          "pitch": 0.08880807137964908,
          "rotation": 0,
          "target": "11-r6-runion"
        },
        {
          "yaw": 0.4586119104150974,
          "pitch": -0.38694493844757716,
          "rotation": 5.497787143782138,
          "target": "12-r7-cafeteria-escalier"
        },
        {
          "yaw": 0.40178175892421386,
          "pitch": 0.4046926525937824,
          "rotation": 2.356194490192345,
          "target": "4-r5-accueil"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-r6-runion",
      "name": "R+6 réunion",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3987431904009924,
          "pitch": 0.07574377202922733,
          "rotation": 0,
          "target": "10-r6-circulation"
        },
        {
          "yaw": -0.5225890837136227,
          "pitch": 0.007306462008070724,
          "rotation": 0,
          "target": "8-r6-bureau-serge"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-r7-cafeteria-escalier",
      "name": "R+7 cafeteria escalier",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 4000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.732105924915647,
          "pitch": 0.053863752899360406,
          "rotation": 0,
          "target": "0-r7-cafeteria-salle"
        },
        {
          "yaw": -2.168370771972473,
          "pitch": 0.06942612234611012,
          "rotation": 0,
          "target": "1-r7-terrasse"
        },
        {
          "yaw": -0.8929077741148177,
          "pitch": 0.736125461248859,
          "rotation": 0,
          "target": "10-r6-circulation"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "M115 Visite 3",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
