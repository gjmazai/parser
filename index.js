import * as fs from 'node:fs';

import { lang } from './src/lang.js';

const resultWithTokenFile = 'resultWithToken.js';

function parser() {
	const resultWithToken = {};
	const resultWithoutToken = {};

	fs.open(resultWithTokenFile, 'w', error => {
		if( error ) throw error;
		console.info('Success create file');
	});

	fs.appendFile(resultWithTokenFile, 'const lang = {\n', error => {
    	if(error) throw err;
    	console.log('Data has been added!');
	});

	for( const [ key, value ] of Object.entries(lang) ) {
		resultWithToken[key] = mathing(value);
		// resultWithoutToken[key] = 
		const textforAppend = `${key}: ${resultWithToken[key]},\n`;

		fs.appendFile(resultWithTokenFile, textforAppend, error => {
        	if(error) throw error;
        	console.log('Data has been added!');
    	});

	}

	fs.appendFile(resultWithTokenFile, '}', error => {
    	if(error) throw err;
    	console.log('Data has been added!');
	});

}

function mathing(values) {
	const resultArr = [];
	const regexItterator = String(values).matchAll( /{([\s\S]+?)}/g );
	for( const value of regexItterator ) {
		if( !value  ) {
			return values;
		}
		for( const findedValue of value[1].matchAll( /[values[\d]+]/g ) ) {
			
			console.info( 'regexIttrerator:', findedValue );
			const firstIndex = findedValue[0].indexOf( 'values[' );
			const lastIndex = findedValue[0].indexOf( ']' );
			resultArr.push(`{ ${findedValue.slice( firstIndex, lastIndex )} }`);
		}
	}
	return resultArr.join(' ');
}

parser();