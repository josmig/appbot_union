const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');

//const writeStream = fs.createWriteStream('empresariales.csv');

//Informacion sobre todas las facultades
async function init(){
	//$ -> Simboliza un objeto
	const $ = await request({
		//uri:'https://postulantes.upeu.edu.pe',
		//uri:'https://www.upeu.edu.pe',
		uri:'https://www.upeu.edu.pe/',
		//cheerio me da metodos para poder analizarlo
		transform: body => cheerio.load(body)
	});
	//console.log($)

	//Extrayendo el titulo

	console.log('******Facultades Y Descripcion Campus******\n');
	const campus_description= $('.aio-icon-description');
	const facultades_central = $('h3.aio-icon-title').each((i,e)=>{

		//const facu = facultades_central.text();
		const facu = $(e).text();
		const fac = facu.replace(""," ");
		console.log(fac.trim())
	});

	//	con .find('a') --> buscamos los enlaces
	//	const campus= $('.ult-new-ib-title').find('a');
	//	Para ver las etiquetas padres --> parent()  Para recorrer --> next() 
	//Para ver las etiquetas hijas --> children

	//console.log(campus.html());
	console.log(campus_description.text());
	//console.log(carreras.text());

}
init();
