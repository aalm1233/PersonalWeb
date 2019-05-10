const {app,BrowserWindow,ipcMain,dialog} = require('electron');
const path = require('path');
const url = require('url');
let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({width:1200,height:800,frame:false});

    // mainWindow.loadURL(url.format({
    //     pathname:path.join(__dirname,'./build/index.html'),
    //     protocol:'file',
    //     slashes:true
    // }));
    //加载应用---开发时配置
    mainWindow.loadURL('http://localhost:3000/');

    mainWindow.on('closed',function(){
        mainWindow = null;
    })
};

app.on('ready',()=>{
    createWindow();
});

app.on('window-all-closed',function(){
    if(process.platform !== 'darwin'){
        app.quit();
    }
});
app.on('activate',function(){
    if(mainWindow == null){
        createWindow();
    }
});
ipcMain.on('close', (event, arg) => {
    console.log(arg);
    app.quit();
});
ipcMain.on('open-file-dialog',(event)=>{
    dialog.showOpenDialog({
        properties:['openFile','openDirectory']
    },(files)=>{
        if(files){
           // event.sender.send('selected-directory',files);
           console.log(files[0]);
        }
    });
});

