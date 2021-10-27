/*
 * @Author: your name
 * @Date: 2021-10-25 19:25:39
 * @LastEditTime: 2021-10-27 11:13:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /resume_platform/app/render/common/route/router.tool.ts
 */
import React, { lazy, Suspense } from 'react';
import uniqueId from 'lodash/uniqueId';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

const buildRoutes = (routes) => {
  const node = [];
  for (const route of routes) {
    let child;
    const { path, exact, component, auth, title, ssr, children, redirect, customRoute, lazy } = route || {};
    if (customRoute) {
      child = customRoute;
    } else {
      let DynamicComponent;
      // todo 这是对组件判断是否需要懒加载
      if (lazy) {
        // todo 这个地方准备做,组件的按需加载模块，这块有点问题，暂时没法去做
        // DynamicComponent = React.lazy(component)
      } else {
        DynamicComponent = component;
      }
      const attr = {
        key: uniqueId('route'),
        path,
        exact: exact || false,
      };
      // todo 这是对当前是否是重定向组件
      if (redirect) {
        child = <Redirect key={uniqueId('redirect_')} from={path} to={redirect} exact />;
      } else {
        // todo 这个render是另一种写法
        attr.render = (props) => {
          // todo 如果有子路由
          if (children && Array.isArray(children) && children.length) {
            if (!DynamicComponent) {
              return <Switch>{buildRoutes(children)}</Switch>;
            }
            // todo 1.有多个子路由，2。有一个layout布局组件
            return (
              <DynamicComponent {...props}>
                <Switch>{buildRoutes(children)}</Switch>
              </DynamicComponent>
            );
          }
          return <DynamicComponent {...props} />;
        };
      }

      child = <Route {...attr} />;
    }
    node.push(child);
  }
  return node;
};

export default buildRoutes;
