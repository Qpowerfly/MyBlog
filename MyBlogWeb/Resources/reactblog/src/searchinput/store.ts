import { createStore } from 'redux'
import rds from './reducer'
import * as baseInfo from './base';
import { EngineEntity } from './base';

const initStore: baseInfo.ISearchStore = {
    engineList: [],
    currentEngine: null
};


let engine = new baseInfo.EngineEntity();
engine.id=1;
engine.name = "百度谷歌";
engine.url = "";
engine.title = "";
initStore.engineList.push(engine);
engine = new baseInfo.EngineEntity();
engine.id=2;
engine.name = "百度";
engine.url = "https://www.baidu.com/s?word=";
engine.title = "百度搜索";
initStore.engineList.push(engine);
engine = new baseInfo.EngineEntity();
engine.id=3;
engine.name = "谷歌";
engine.url = "https://www.google.com.hk/search?q=";
engine.title = '谷歌搜索（请自行<a href="//www.wodeabc.com/article/show/8002015" target="_blank">翻墙</a>，若翻墙后无法显示，<a href="https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe?utm_source=chrome-app-launcher-info-dialog" target="_blank">请安装该扩展</a>）';
initStore.engineList.push(engine);
initStore.currentEngine = initStore.engineList[0];

const store = createStore<baseInfo.ISearchStore>(rds, initStore);

export default store;