define({ "api": [
  {
    "version": "0.0.1",
    "type": "get",
    "url": "/progracao/cinema/:cinema/cidade/:cidade",
    "title": "getSchedule",
    "group": "Schedule",
    "description": "<p>Retorna programação disponível do cinema e cidade especificada</p>",
    "name": "getSchedule",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cinema",
            "description": "<p>Nome do cinema</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cidade",
            "description": "<p>Nome da cidade</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "curl -i http://api.nocinema.info/programacao/cinemark/cidade/florianopolis",
        "type": "curl"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "schedules",
            "description": "<p>Array de programação de cinemas</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "schedules.cinema",
            "description": "<p>Nome do cinema</p>"
          }
        ]
      }
    },
    "filename": "modules/main.api.class.js",
    "groupTitle": "Schedule"
  },
  {
    "version": "0.0.1",
    "type": "get",
    "url": "/progracao/cinema/:cinema",
    "title": "getScheduleFromCinema",
    "group": "Schedule",
    "description": "<p>Retorna programação disponível do cinema</p>",
    "name": "getScheduleFromCinema",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nome",
            "description": "<p>Nome normalizado ou não do cinema</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "modules/main.api.class.js",
    "groupTitle": "Schedule"
  }
] });
