import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
  userName: string = "Pedro";
  menuBackgroundColor: string = "#FFF7E0";
  menuWidth: string = "27%";
  isMenuVisible: boolean = true;

  toggleMenuVisibility(): void {
    this.isMenuVisible = !this.isMenuVisible;
  }
  allmenu(): void 
  {
    this.isMenuVisible = true;
    this.menuBackgroundColor = "#FFF7E0";
    this.menuWidth = "27%";
  }

  changeMenuColor(newColor: string): void {
    if(this.menuBackgroundColor == "#FFF7E0")
    {
      this.menuBackgroundColor = "#FFE7D4";
    }
    else
    {
      this.menuBackgroundColor = "#FFF7E0";
    }
  }

  setSize(): void {
    let width = parseInt(this.menuWidth.replace('%', ''), 10);
    width += 10;
    if (width > 100) {
      width = 27;
    }
    this.menuWidth = width + '%';
  }

  changeMenuWidth(newWidth: string): void {
    this.menuWidth = newWidth;
  }
}
