gdjs.DeathCode = {};
gdjs.DeathCode.GDBackgroundObjects1= [];
gdjs.DeathCode.GDBackgroundObjects2= [];
gdjs.DeathCode.GDMonsterObjects1= [];
gdjs.DeathCode.GDMonsterObjects2= [];


gdjs.DeathCode.asyncCallback11828804 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}
gdjs.DeathCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(4), (runtimeScene) => (gdjs.DeathCode.asyncCallback11828804(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.DeathCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "demonic-woman-scream-6333.mp3", true, 100, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Creepy Glitch Horror Sound Effects (HD) (FREE).mp3", false, 100, 1);
}
{ //Subevents
gdjs.DeathCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.DeathCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.DeathCode.GDBackgroundObjects1.length = 0;
gdjs.DeathCode.GDBackgroundObjects2.length = 0;
gdjs.DeathCode.GDMonsterObjects1.length = 0;
gdjs.DeathCode.GDMonsterObjects2.length = 0;

gdjs.DeathCode.eventsList1(runtimeScene);

return;

}

gdjs['DeathCode'] = gdjs.DeathCode;
