import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'httpcall';
  userlist:any[]=[];
  myCurrentData:any [] = [];
  datalist:any;
resp: any;
data: any;
status:any;
filterResp:any;
  //http = inject(HttpClient) //http call injection
  constructor(private http: HttpClient){
    this.fetchDetails();        //http call through dependency injection
    this.postProfile();  
  }
     ngOnInit(): void{
    this.fetchDetails();
    this.postProfile(); 
    }
    
    public fetchDetails(): void{
     
      
      this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(
        (resp:any)=>{
          this.userlist=resp;
            console.log("Hi "+this.userlist[1].id);
            if(this.userlist[1].id=="2")
            this.filterResp=this.userlist[1];
           // console.log("Hello "+this.filterResp[0].id);
           }
        )
        // return this.userlist;
      
  }
  postProfile(){
    //let url = `localhost:12201/gelf`;
    //let obj = {name:'mark',age:'32'}
    //let obje1 = JSON.stringify(obj);
    //this.httpClient.post(`http://127.0.0.1:12201/gelf`,{name:'mark',age:'32'}).subscribe(
      this.http.post('https://jsonplaceholder.typicode.com/todos', {
        "userId": 12334,
        "id": 176567576,
        "title": "this is post url",
        "completed": "false"
      },).subscribe(
      (data:any) => {
       //this.datalist=data;
          console.log(data);
      }
    )
  }
  deletedata(){
    this.http.delete('https://jsonplaceholder.typicode.com/todos/1')
        .subscribe(() => this.status = 'Delete successful');
         console.log(this.status);

  }
  }

