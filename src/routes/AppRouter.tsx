import React from 'react'
import {Switch, Route} from 'react-router-dom'
import {animationRoutes, componentsRoutes} from './routes'

const AppRouter = () => {
    return (
        <Switch>
            {componentsRoutes.map(({path, Component, id}) =>
                <Route key={id} path={path} render={() => <Component/>}/>
            )}
            {animationRoutes.map(({path, Component, id}) =>
                <Route key={id} path={path} render={() => <Component/>}/>
            )}
        </Switch>
    )
}

export default AppRouter