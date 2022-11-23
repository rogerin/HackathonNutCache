const vscode = require('vscode');
let axios = require('axios');

async function openMsg (element) {
	vscode.window.showInformationMessage(element.title, 'Iniciar Tasks').then(async () => {
		// Unfortunately, you can't get over here  
		console.log("Okay");
		await axios.get('http://localhost:3000/users');

	}, (err) => {
		// And you can't get over here, too
		console.log("Not okay");
		console.log(err);
	});
}

function activate(context) {

	console.log('Congratulations, your extension "basicnutcache" is now active!');

	let disposable = vscode.commands.registerCommand('basiccommandsnutcache.helloWorld', function () {
		vscode.window.showInformationMessage('Hello World from basicnutcache!');
	});

	let getTasks = vscode.commands.registerCommand('basiccommandsnucache.getTasks', async function(){
		

		// @ts-ignore
		let res = await axios.get('http://localhost:3000/users');

		let data = res.data;

	
		data.forEach(element => {
			openMsg(element)
		});
	
	})

	context.subscriptions.push(disposable, getTasks);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
