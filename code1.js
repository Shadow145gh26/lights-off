gdjs.StartCode = {};
gdjs.StartCode.GDPlayObjects1= [];
gdjs.StartCode.GDPlayObjects2= [];
gdjs.StartCode.GDPlay2Objects1= [];
gdjs.StartCode.GDPlay2Objects2= [];
gdjs.StartCode.GDNewTextObjects1= [];
gdjs.StartCode.GDNewTextObjects2= [];
gdjs.StartCode.GDControlsObjects1= [];
gdjs.StartCode.GDControlsObjects2= [];
gdjs.StartCode.GDBackgroundObjects1= [];
gdjs.StartCode.GDBackgroundObjects2= [];
gdjs.StartCode.GDTheControlsObjects1= [];
gdjs.StartCode.GDTheControlsObjects2= [];
gdjs.StartCode.GDControllersObjects1= [];
gdjs.StartCode.GDControllersObjects2= [];


gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlay2Objects1Objects = Hashtable.newFrom({"Play2": gdjs.StartCode.GDPlay2Objects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDTheControlsObjects1Objects = Hashtable.newFrom({"TheControls": gdjs.StartCode.GDTheControlsObjects1});
gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayObjects1Objects = Hashtable.newFrom({"Play": gdjs.StartCode.GDPlayObjects1});
gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Play2"), gdjs.StartCode.GDPlay2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlay2Objects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13503036);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TheControls"), gdjs.StartCode.GDTheControlsObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDTheControlsObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.StartCode.GDTheControlsObjects1.length;i<l;++i) {
    if ( gdjs.StartCode.GDTheControlsObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.StartCode.GDTheControlsObjects1[k] = gdjs.StartCode.GDTheControlsObjects1[i];
        ++k;
    }
}
gdjs.StartCode.GDTheControlsObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13118996);
}
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), true);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Controllers"), gdjs.StartCode.GDControllersObjects1);
gdjs.copyArray(runtimeScene.getObjects("TheControls"), gdjs.StartCode.GDTheControlsObjects1);
{for(var i = 0, len = gdjs.StartCode.GDTheControlsObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDTheControlsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.StartCode.GDControllersObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDControllersObjects1[i].hide(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(7), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Controllers"), gdjs.StartCode.GDControllersObjects1);
gdjs.copyArray(runtimeScene.getObjects("TheControls"), gdjs.StartCode.GDTheControlsObjects1);
{for(var i = 0, len = gdjs.StartCode.GDTheControlsObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDTheControlsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.StartCode.GDControllersObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDControllersObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.StartCode.GDPlayObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_9546StartCode_9546GDPlayObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11444756);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDPlayObjects1.length = 0;
gdjs.StartCode.GDPlayObjects2.length = 0;
gdjs.StartCode.GDPlay2Objects1.length = 0;
gdjs.StartCode.GDPlay2Objects2.length = 0;
gdjs.StartCode.GDNewTextObjects1.length = 0;
gdjs.StartCode.GDNewTextObjects2.length = 0;
gdjs.StartCode.GDControlsObjects1.length = 0;
gdjs.StartCode.GDControlsObjects2.length = 0;
gdjs.StartCode.GDBackgroundObjects1.length = 0;
gdjs.StartCode.GDBackgroundObjects2.length = 0;
gdjs.StartCode.GDTheControlsObjects1.length = 0;
gdjs.StartCode.GDTheControlsObjects2.length = 0;
gdjs.StartCode.GDControllersObjects1.length = 0;
gdjs.StartCode.GDControllersObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);

return;

}

gdjs['StartCode'] = gdjs.StartCode;
