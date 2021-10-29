/*
 * @Author: your name
 * @Date: 2021-10-29 14:56:40
 * @LastEditTime: 2021-10-29 15:32:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/common/untils/getAppPath.ts
 */

// 监听主进程与渲染进程通信
import { ipcRenderer } from 'electron';

const getAppPath = () => {
  return new Promise((resolve: (value: string) => void, reject: (value: Error) => void) => {
    ipcRenderer.send('get-root-path', '');
    ipcRenderer.on('reply-root-path', (event, arg: string) => {
      // 主进程有值回复，那么就执行resolve, 没有执行reject;
      arg && resolve(arg);
      !arg && reject(new Error('项目路径错误'));
    });
  });
};

export default getAppPath;
