import React from 'react'
import AsyncComponent from 'components/async-component'
import { Route } from 'react-router-dom'

let point = 0
interface IRouterOption {
  path: string;
  component: string | object;
  title?: string;
  isExact?: boolean;
}
/**
 * union router constructor
 * @example
 * new Router({
 * path: 'test',
 * component: '_demo'
 * })
 * =>
 * <Route
 * key={`router0`}
 * exact
 * path={`/v3/platform/test`}
 * component={AsyncComponent(() => import('pages/platform/test'))}
 * />
 */
export default class Router {
  static render(routes: Router[]) {
    return routes.map(route => route.render())
  }

  public isExact: boolean = true;

  public path: string;

  public component: string | object;

  public title: string | undefined;

  public prefix: string = '/';

  constructor(opts: IRouterOption) {
    const { path, component, title, isExact } = opts
    this.path = `${this.prefix}${path}`
    this.component = component
    this.title = title
    this.isExact = isExact
  }

  renderComponent = () => {
    const { component, title, path } = this
    const isDynamic = typeof component === 'string'
    let Com: any = () => {}
    if (!isDynamic) {
      const ComponentTmp: any = component
      Com = function DisplayName() {
        return <ComponentTmp title={title} />
      }
      Com.displayName = path
    } else {
      Com = AsyncComponent({
        loader: () => {
          console.log('component', component)
          import(`../../pages/${component}`)
        },
        render(loaded, props) {
          const Component = loaded.default
          return <Component title={title} {...props} />
        },
      })
    }

    return Com
  };

  render() {
    const { path, isExact = true } = this
    return (
      <Route
        key={`router${point++}`}
        exact={isExact}
        path={path}
        component={this.renderComponent()}
      />
    )
  }
}
