const unityNamespace = {
  canvas: GameGlobal.canvas,
  navigator: GameGlobal.navigator,
  XMLHttpRequest: GameGlobal.XMLHttpRequest,
  hideTimeLogModal: false, // 是否显示耗时的弹框，默认开发版时显示弹出耗时弹框
  enableDebugLog: false, // 是否打印详细日志
}

GameGlobal.WebAssembly = GameGlobal.WXWebAssembly
GameGlobal.unityNamespace = GameGlobal.unityNamespace || unityNamespace
GameGlobal.onCrash = function(error){
  let button = wx.createFeedbackButton({
    type: 'text',
    text: '程序遇到错误，请您提交反馈信息',
    style: {
      left: 10,
      top: 300,
      width: 300,
      height: 40,
      lineHeight: 40,
      backgroundColor: '#ff0000',
      color: '#ffffff',
      textAlign: 'center',
      fontSize: 16,
      borderRadius: 4
    }
  })  
}
export default GameGlobal.unityNamespace