use medpacs
db.usuarios.insert(
{
    "DATOS": {
        "NOMBRE": "admin",
        "APELLIDO": "admin",
        "TELEFONO": 70866119,
        "CORREO": "JOSE.CAMACHO@MEDICALTECSRL.COM"
    },
    "LOGIN": {
        "USUARIO": "MTadmin",
        "PASSWORD": "MTadmin"
    },
    "CONFIGURACION": {
        "LISTABLE": false,
        "RESTRINGIDO": false,
        "TIPO": "admin",
        "ESTADO": "activo",
        "FECHACREACION": new Date(),
        "ULTIMOACCESO": new Date()
    },
    "LISTA": []
}
)
exit