gdjs.EndCode = {};
gdjs.EndCode.GDEndObjects1= [];
gdjs.EndCode.GDEndObjects2= [];
gdjs.EndCode.GDThankYouObjects1= [];
gdjs.EndCode.GDThankYouObjects2= [];
gdjs.EndCode.GDBlackObjects1= [];
gdjs.EndCode.GDBlackObjects2= [];


gdjs.EndCode.asyncCallback10463196 = function (runtimeScene, asyncObjectsList) {
}
gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.01), (runtimeScene) => (gdjs.EndCode.asyncCallback10463196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.EndCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.EndCode.GDBlackObjects1);
{for(var i = 0, len = gdjs.EndCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDBlackObjects1[i].setOpacity(255);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Black"), gdjs.EndCode.GDBlackObjects1);
{for(var i = 0, len = gdjs.EndCode.GDBlackObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDBlackObjects1[i].setOpacity(gdjs.EndCode.GDBlackObjects1[i].getOpacity() - (2));
}
}
{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDEndObjects1.length = 0;
gdjs.EndCode.GDEndObjects2.length = 0;
gdjs.EndCode.GDThankYouObjects1.length = 0;
gdjs.EndCode.GDThankYouObjects2.length = 0;
gdjs.EndCode.GDBlackObjects1.length = 0;
gdjs.EndCode.GDBlackObjects2.length = 0;

gdjs.EndCode.eventsList1(runtimeScene);

return;

}

gdjs['EndCode'] = gdjs.EndCode;
