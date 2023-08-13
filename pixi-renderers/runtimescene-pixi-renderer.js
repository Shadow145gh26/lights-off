var gdjs;(function(o){const l=GlobalPIXIModule.PIXI;class _{constructor(t,e){this._profilerText=null;this._showCursorAtNextRender=!1;this._threeRenderer=null;this._layerRenderingMetrics={rendered2DLayersCount:0,rendered3DLayersCount:0};this._runtimeGameRenderer=e,this._runtimeScene=t,this._pixiContainer=new l.Container,this._pixiContainer.sortableChildren=!0,this._threeRenderer=this._runtimeGameRenderer?this._runtimeGameRenderer.getThreeRenderer():null}onGameResolutionResized(){const t=this._runtimeGameRenderer?this._runtimeGameRenderer.getPIXIRenderer():null;if(!t)return;const e=this._runtimeScene.getGame();this._pixiContainer.scale.x=t.width/e.getGameResolutionWidth(),this._pixiContainer.scale.y=t.height/e.getGameResolutionHeight();for(const r of this._runtimeScene._orderedLayers)r.getRenderer().onGameResolutionResized()}onSceneUnloaded(){}render(){const t=this._runtimeGameRenderer;if(!t)return;const e=t.getPIXIRenderer();if(!e)return;const r=this._threeRenderer;if(this._layerRenderingMetrics.rendered2DLayersCount=0,this._layerRenderingMetrics.rendered3DLayersCount=0,r){r.info.autoReset=!1,r.info.reset();let n=!0,s=!0;r.resetState();for(let u=0;u<this._runtimeScene._orderedLayers.length;++u){const d=this._runtimeScene._orderedLayers[u];if(!d.isVisible())continue;const i=d.getRenderer(),c=d.getRenderingType(),m=i.has3DObjects();if(c===o.RuntimeLayerRenderingType.TWO_D||!m){s&&(r.resetState(),e.reset()),n&&(e.backgroundColor=this._runtimeScene.getBackgroundColor(),e.backgroundAlpha=1,e.clear(),n=!1),d.isLightingLayer()&&i.renderOnPixiRenderTexture(e);const a=d.isLightingLayer()&&i.getLightingSprite()||i.getRendererObject();e.render(a,{clear:!1}),this._layerRenderingMetrics.rendered2DLayersCount++,s=!1}else{const a=i.getThreeScene(),h=i.getThreeCamera();if(a&&h){if(c===o.RuntimeLayerRenderingType.TWO_D_PLUS_THREE_D){const g=i.has2DObjects();g&&(s&&(r.resetState(),e.reset()),i.renderOnPixiRenderTexture(e),i.updateThreePlaneTextureFromPixiRenderTexture(r,e),this._layerRenderingMetrics.rendered2DLayersCount++,s=!1),i.show2DRenderingPlane(g)}s||(e.reset(),r.resetState()),n?(r.setClearColor(this._runtimeScene.getBackgroundColor()),r.resetState(),r.clear(),a.background=new THREE.Color(this._runtimeScene.getBackgroundColor()),n=!1):a.background=null,r.clearDepth(),r.render(a,h),this._layerRenderingMetrics.rendered3DLayersCount++,s=!0}}}const R=this._runtimeScene.getDebuggerRenderer().getRendererObject();R&&(r.resetState(),e.reset(),e.render(R),s=!1),s||e.reset()}else{for(const n of this._runtimeScene._orderedLayers)n.isLightingLayer()&&n.getRenderer().renderOnPixiRenderTexture(e);e.backgroundColor=this._runtimeScene.getBackgroundColor(),e.render(this._pixiContainer),this._layerRenderingMetrics.rendered2DLayersCount++}if(this._showCursorAtNextRender){const n=t.getCanvas();n&&(n.style.cursor=""),this._showCursorAtNextRender=!1}}_renderProfileText(){const t=this._runtimeScene.getProfiler();if(!t)return;this._profilerText||(this._profilerText=new l.Text(" ",{align:"left",stroke:"#FFF",strokeThickness:1}),this._pixiContainer.addChild(this._profilerText));const e=t.getFramesAverageMeasures(),r=[];o.Profiler.getProfilerSectionTexts("All",e,r),this._profilerText.text=r.join(`
`)}hideCursor(){this._showCursorAtNextRender=!1;const t=this._runtimeGameRenderer?this._runtimeGameRenderer.getCanvas():null;t&&(t.style.cursor="none")}showCursor(){this._showCursorAtNextRender=!0}getPIXIContainer(){return this._pixiContainer}getRendererObject(){return this._pixiContainer}get3DRendererObject(){return null}getPIXIRenderer(){return this._runtimeGameRenderer?this._runtimeGameRenderer.getPIXIRenderer():null}setLayerIndex(t,e){const r=t.getRenderer();let n=r.getRendererObject();t.isLightingLayer()&&(n=r.getLightingSprite()),!!n&&this._pixiContainer.children.indexOf(n)!==e&&(this._pixiContainer.removeChild(n),this._pixiContainer.addChildAt(n,e))}}o.RuntimeScenePixiRenderer=_,o.RuntimeSceneRenderer=o.RuntimeScenePixiRenderer})(gdjs||(gdjs={}));
//# sourceMappingURL=runtimescene-pixi-renderer.js.map