/*
 * @Author: your name
 * @Date: 2021-10-29 10:40:30
 * @LastEditTime: 2021-10-29 15:54:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/store/globalModel.ts
 */

const globalModal = {
  namespace: 'globalModal',
  openSeamlessImmutable: true,
  state: {
    appName: '简历应用平台',
    login: { status: true },
  },
};

export default globalModal;
