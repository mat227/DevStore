import { BrowserRouter, Switch, Route } from 'react-router-dom'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Login} />
            </Switch>
        </BrowserRouter>
    )
}
