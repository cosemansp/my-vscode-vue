let vscode = require('vscode');
// import * as fs from 'fs';
// import * as path from 'path';

class FileHelper {
    createViewComponent(path) {
        const projectRoot = vscode.workspace.workspaceFolders[0].uri.fsPath;
        // vscode.window.showInformationMessage(`root ${projectRoot}`);
        vscode.window.showInformationMessage(`path ${path}`);

        vscode.window.showInformationMessage('Component Created');
    }
}

module.exports = FileHelper;
