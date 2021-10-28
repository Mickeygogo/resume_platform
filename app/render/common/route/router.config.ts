/*
 * @Author: your name
 * @Date: 2021-10-25 15:42:07
 * @LastEditTime: 2021-10-28 14:30:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/common/route/router.config.ts
 */
import Root from '../../page/root';
import Resume from '../../page/resume';
import GeneralLayout from 'Components/general-layout';
/**
 * @description: 路由配置
 * @param {*}  path
 * @param {*}  desc 当前页面的描述
 * @param {*}  title
 * @param {*}  lazy 是否进行路由懒加载
 * @param {*}  customRoute 自定义路由处理
 * @param {*}  auth 是否需要权限
 * @param {*}  exact 是否精准匹配
 * @param {*}  component 路由匹配页面
 * @param {*}  children  子路由
 * @param {*}  redirect  重定向
 * @param {*}  ssr  该页面是否做ssr配置（目前不做）
 * @return {*}
 */

const routes = [
  {
    path: '/',
    title: 'Home',
    desc: '首页',
    exact: true,
    component: GeneralLayout,
    children: [
      {
        path: '/',
        title: 'Home',
        desc: '首页',
        exact: true,
        component: Root,
      },
    ],
  },
  {
    path: '/resume',
    title: 'Resume',
    desc: '简历',
    exact: true,
    component: GeneralLayout,
    children: [
      {
        path: '/resume',
        title: 'Resume',
        desc: '简历',
        exact: true,
        component: Resume,
      },
    ],
  },
];

export default routes;
