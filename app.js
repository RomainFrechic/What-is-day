(function (){ 
	"use strict";
	window.app = {
		day:null,
		month:null,
		year:null,

		DayArray:['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'],


		init:function(){
			console.log('init');
			app.listeners();
			console.log('fin init');

		},

		listeners:function(){
			$('#valider').on('click',function(){
				app.day = $('#inp').val();
				app.month = $('#inp2').val();
				app.year = $('#inp3').val();
				app.getDayArray(app.day,app.month,app.year);
				console.log(app.day);
				console.log(app.month);
				console.log(app.year);
			});	
		},

		getDayArray: function(day,month,year){
			var dateMoment = moment(year + "-" + month + "-" + day);
			var nombreJour = dateMoment.weekday();
			var semaineJour = app.DayArray[nombreJour];
			app.puff(semaineJour);
			console.log(nombreJour);
			console.log(semaineJour);
			console.log(dateMoment);
		},

		puff:function(semaineJour){
			$('#html').append('<div><div id="affichage"><h1>'+ semaineJour + '</h1></div></div>');
			console.log(affichage);
		},
	};


	app.init();

})();

