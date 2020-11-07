const Connection = require('tedious').Connection;
const Request = require('tedious').Request;
const config = {
    server: '172.16.2.2',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'sa', //update me
            password: 'RadOffice01'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: false,
        database: 'Future'  //update me
    }
};


const LeerPaciente = (fechanacimiento,CI)=>{
    return new Promise((Pres,Prej)=>{
        var connection = new Connection(config);
        connection.on('connect', function (err) {
            // If no error, then good to proceed.
            if (err) {
                console.log("error")
            } else {
                executeStatement(fechanacimiento,CI);
            }
        });
        function executeStatement(fechanacimiento,CI) {
            let arr = []
            request = new Request(`SELECT EMP_EmpresaId,EMP_NombreLargo,EMP_Telefono,EMP_Email,EMP_Documento,EMP_Expedido,EMP_FechaNac FROM GENEmpresa where EMP_Documento='${CI}' and EMP_FechaNac='${fechanacimiento}';`, function (err,rowCount) {
                if (err) {
                    console.log(err);
                  } else {
                    Pres({err:null,cant:rowCount,data:arr[0]})
                    connection.close()
                  }
            });
            request.on('row', function (columns) {
                let obj = {}
                columns.forEach(function (column) {
                    obj[column.metadata.colName] = column.value;
                });
                arr.push(obj)
            });
            connection.execSql(request);
        }  
    })
}
//LeerPaciente('1974-07-29','3383726')
//.then((res)=>{
//    console.log(res)
//})

module.exports.LeerPaciente = LeerPaciente