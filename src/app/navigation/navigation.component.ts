import { Component, inject, signal } from "@angular/core";
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from "@angular/router";
import { undoLastChange } from "@core/store";
import { SharedModule } from "@shared/shared.module";
@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    imports: [RouterLink, RouterLinkActive, SharedModule]
})
export class NavigationComponent {

    showUndoButton = signal(false);

    navigations = [
        {
            label: 'Dashboard',
            path: '/',
            routerLinkActiveOptions: { exact: true }
        },
        {
            label: 'Todo List',
            path: '/todo'
        }
    ]


    router = inject(Router);

    constructor() {

        this.router.events.subscribe(event => {
            this.showUndoButton.set(event instanceof NavigationEnd && event.urlAfterRedirects === '/todo')
        });

    }

    get navigationItems() {
        return this.navigations.map(item => {
            return {
                ...item,
                routerLinkActiveOptions: { exact: item.routerLinkActiveOptions?.exact ?? false }
            }
        });
    }

    undoLastChange() {
        undoLastChange();
    }
}