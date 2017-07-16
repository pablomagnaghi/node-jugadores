//var messi = new Object();  
//messi.id = '1';
//messi.apellido = 'Messi';
//messi.goles = '42';  

//var neymar = new Object();  
//neymar.id = '2';
//neymar.apellido = 'Neymar';  
//neymar.goles = '15';  

//var iniesta = new Object();  
//iniesta.id = '3';
//iniesta.apellido = 'Iniesta';  
//iniesta.goles = '7';  

//futbolistas = [messi, neymar, iniesta];

futbolistas = [{'id':'1','apellido':'Messi', 'goles': '42'},{'id':'2','apellido':'Neymar', 'goles': '15'}, {'id':'3','apellido':'Iniesta', 'goles': '7'}]

module.exports = {

  getAll: function() {
    return futbolistas;
  },

  getById: function(id) {
    for (var i=0; i < futbolistas.length; i++) {
      if (futbolistas[i].id === id) {
        return futbolistas[i];
      }
    }    
  }
};
