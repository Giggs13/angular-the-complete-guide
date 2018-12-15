import { Component } from '@angular/core';
import { ServerService } from './server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  appName = this.serverService.getAppName();
  servers = [
    {
      name: 'TestServer',
      capacity: 10,
      id: AppComponent.generateId()
    },
    {
      name: 'LiveServer',
      capacity: 100,
      id: AppComponent.generateId()
    }
  ];

  constructor(private serverService: ServerService) {
  }

  private static generateId() {
    return Math.round(Math.random() * 10000);
  }

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: AppComponent.generateId()
    });
  }

  onSaveServers() {
    this.serverService.storeServers(this.servers)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      );
  }

  onGetServers() {
    this.serverService.getServers()
      .subscribe(
        response => this.servers = response,
        error => console.log(error)
      );

    /*this.serverService.getServersAsResponse()
      .subscribe(
        response => {
          console.log(response);

          const keys = response.headers.keys();
          const headers = keys.map(key =>
            `${key}: ${response.headers.get(key)}`);
          console.log(headers);

          const servers = response.body;
          console.log(servers);
        },
        error => console.log(error)
      );*/
  }
}
