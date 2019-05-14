import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'
import './index.less';
import { Provider } from 'react-redux'
import store from '@/store'
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import { LocaleProvider } from 'antd';

moment.locale('zh-cn');

ReactDOM.render(
  <Provider store={ store }>
    <HashRouter>
      <LocaleProvider locale={zh_CN}>
        <App />
      </LocaleProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
