import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shoppingkart',
  templateUrl: './shoppingkart.component.html',
  styleUrls: ['./shoppingkart.component.css']
})
export class ShoppingkartComponent {
  images: any[] = [];
  apiUrl = 'https://db.ezobooks.in/kappa/image/task';
  @Input() image: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    
    this.http.get<any[]>(this.apiUrl).subscribe((data:any) => {
      this.images = data['items'];
    });
  }
}
