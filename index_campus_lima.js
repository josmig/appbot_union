const cheerio = require('cheerio');
const request = require('request-promise');
const fs = require('fs-extra');

const writeStream = fs.createWriteStream('empresariales.csv');

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
	//	Para ver las etiquetas padres --> parent()  Para recorrer --> next() Para ver las etiquetas hijas --> children

	//console.log(campus.html());
	console.log(campus_description.text());
	//console.log(carreras.text());

}
//init();


//informacion de toda FCE
async function fce(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/fce/',
		transform: body => cheerio.load(body)
	});

	//Info de la facultad
	$('.uvc-heading').each((i,el)=>{
		const titulo_1 = $(el).find('.uvc-main-heading').text();
		const parrafo = $(el).find('p').text();
		if( i === 0){
			console.log('**** MOtivación ****');
			console.log(titulo_1);
			console.log(parrafo);
		}else if(i === 1){
			console.log('******Palabras decana****');
			console.log(titulo_1);
			$('.vc_column-inner').each((i,el)=>{
				const parrafo = $(el).find('p').text()
				if(i=== 1){
					console.log(parrafo);
				}
			})
		}
	})


	//carreras FCE
	console.log('*****carreras FCE******\n');
		writeStream.write('Carreras')
		$('nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-845').text();
			const items2 = $(el).find('li .menu-item-1012').text();
			const items3 = $(el).find('li .menu-item-1013').text();
			const items4 = $(el).find('li .menu-item-846').text();

			//carreras.push(items1,items2,items3)
			carreras.push(items1,items2,items3,items4);

			//console.log(carreras);
			writeStream.write(`${carreras}\n`);
			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})
}
//fce();

async function facihed(){
	const $ = await request.get({
		uri:'https://www.upeu.edu.pe/facihed/',
		uri:'https://www.upeu.edu.pe/facihed/vision/',
		transform: body => cheerio.load(body)
	});

	//Mision y vision
	console.log('***MISION Y VISION');
	$('.content').each((i,el)=>{
			const titulos = $(el).find('h3').text();
			const parrafo = $(el).find('span').text();
			console.log(i,titulos);
			console.log(parrafo);

	})


	//carreras FCE
	console.log('*****carreras FACIHED******\n');
		writeStream.write('Carreras')
		$('.main-nav').each((i,el)=>{
			let carreras = [];
			const items1 = $(el).find('li .menu-item-962').text();
			const items2 = $(el).find('li .menu-item-1058').text();

			//carreras.push(items1,items2,items3)
			carreras.push(items1,items2);

			//console.log(carreras);
			writeStream.write(`${carreras}\n`);
			carreras.forEach((e,i)=>{
				//+'\n'
				console.log(e + '\n');

			});
		})
}
facihed();
