import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {ToastService} from './toast/service/toast.service'
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(AppComponent, [ToastService, ROUTER_PROVIDERS]);
