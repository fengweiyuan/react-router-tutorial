# Index Links

> 主页的链接颜色

Have you noticed in our app that we don't have any navigation to get
back to rendering the `Home` component?

Lets add a link to `/` and see what happens:

> fwy:导航栏增加回到主页的按钮

```js
// in App.js
// ...
<li><NavLink to="/">Home</NavLink></li>
// ...
```

Now navigate around. Notice anything weird? The link to `Home` is always
active! As we learned earlier, parent routes are active when child routes
are active. Unfortunately, `/` is the parent of everything.

For this link, we want it to only be active when the index route is
active. There are two ways to let the router know you're linking to the
"index route" so it only adds the active class (or styles) when the
index route is rendered.

> fwy:子路由激活时，父路由的链接也会变色，
而/是任何路由的父路由，所以一直是被点击状态，
这不太合理，我们做些改变。

## IndexLink

First let's use the `IndexLink` instead of `NavLink`

> fwy:关键点用回原生的IndexLink组件

```js
// App.js
import { IndexLink } from 'react-router'

// ...
<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
```

> fwy:已经修复，现在只有点击HOME时才会渲染颜色

Fixed! Now this link is only "active" when we're at the index route. Go
ahead and click around to see.

## `onlyActiveOnIndex` Property

We can use `Link` as well by passing it the `onlyActiveOnIndex` prop
(`IndexLink` just wraps `Link` with this property for convenience).

```js
<li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link></li>
```

That's fine, but we already abstracted away having to know what the
`activeClassName` is with `Nav`.

Remember, in `NavLink` we're passing along all of our props to `Link` with
the `{...spread}` syntax, so we can actually add the prop when we render
a `NavLink` and it will make its way down to the `Link`:

```js
<li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
```

---

[Next: Clean URLs](../10-clean-urls/)
