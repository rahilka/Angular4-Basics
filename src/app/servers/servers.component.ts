import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-server',
  selector: 'app-servers',
  // template: `
  // 			<app-server></app-server>
  // 			<app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Test Server', 'Testserver'];

  constructor() {
  	setTimeout(() => {
  		this.allowNewServer = true;
  	}, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
  	this.serverCreated = true;
    this.servers.push(this.serverName);
  	this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
  	this.serverName = event.target.value;
  	// this.serverName = (<HTMLInputElement>event.target).value; ---> Explicitly say that is an input element
  }

}
