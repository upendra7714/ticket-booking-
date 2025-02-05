import { Component } from "@angular/core";

@Component({
    selector:"app-navbar",
    templateUrl:"./navbar.component.html",
    styleUrls:["./navbar.component.css"],
})
export class NavbarComponent{
    name="upendra";
    img={
        src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRVIKYDVWam8gUZhSoQyfUBB8pb1lqCCxpXA&s",
        alt:"image"
    }

}