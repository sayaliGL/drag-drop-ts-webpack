import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { List }  from './components/List';
import { DropPanel } from './components/DropPanel';
import { any } from 'prop-types';

 declare let module: any
 declare namespace JSX {
    interface IntrinsicElements {
        listProps: any
    }
}
declare namespace JSX {
    interface IntrinsicElements {
        listProps: any
    }
}


const data = [{ "id": 1, "first_name": "Kit", "last_name": "Curston", "email": "kcurston0@usgs.gov", "gender": "Male", "ip_address": "47.80.222.54" },
        { "id": 2, "first_name": "Mallorie", "last_name": "Fallis", "email": "mfallis1@economist.com", "gender": "Female", "ip_address": "138.66.81.165" },
        { "id": 3, "first_name": "Patrizius", "last_name": "Bianco", "email": "pbianco2@cbsnews.com", "gender": "Male", "ip_address": "216.156.243.69" },
        { "id": 4, "first_name": "Alayne", "last_name": "Coil", "email": "acoil3@fda.gov", "gender": "Female", "ip_address": "191.227.152.60" },
        { "id": 5, "first_name": "Harlan", "last_name": "Gasgarth", "email": "hgasgarth5@mail.ru", "gender": "Male", "ip_address": "242.87.202.234" },
        {"id":68,"first_name":"Alphonso","last_name":"Dachey","email":"adachey1v@tinyurl.com","gender":"Male","ip_address":"122.56.136.86"},
{"id":69,"first_name":"Garek","last_name":"Richley","email":"grichley1w@cdbaby.com","gender":"Male","ip_address":"132.106.95.77"},
{"id":70,"first_name":"Cristal","last_name":"Vise","email":"cvise1x@1und1.de","gender":"Female","ip_address":"84.87.183.31"},
{"id":71,"first_name":"Mariejeanne","last_name":"Shrive","email":"mshrive1y@topsy.com","gender":"Female","ip_address":"23.176.65.83"},
{"id":72,"first_name":"Waldemar","last_name":"Hagwood","email":"whagwood1z@google.ru","gender":"Male","ip_address":"198.56.100.98"},
{"id":73,"first_name":"Gary","last_name":"Brolly","email":"gbrolly20@addtoany.com","gender":"Male","ip_address":"162.126.38.225"},
{"id":74,"first_name":"Amos","last_name":"Piggrem","email":"apiggrem21@xing.com","gender":"Male","ip_address":"135.43.171.138"},
{"id":75,"first_name":"Alvie","last_name":"Crassweller","email":"acrassweller22@nytimes.com","gender":"Male","ip_address":"61.180.215.126"},
{"id":76,"first_name":"Norrie","last_name":"Coulthard","email":"ncoulthard23@posterous.com","gender":"Male","ip_address":"87.218.140.134"},
{"id":77,"first_name":"Jermaine","last_name":"Shickle","email":"jshickle24@discuz.net","gender":"Female","ip_address":"148.166.224.202"},
{"id":78,"first_name":"Fidelio","last_name":"Genny","email":"fgenny25@sciencedaily.com","gender":"Male","ip_address":"186.28.234.114"},
        { "id": 21, "first_name": "Brittne", "last_name": "Harefoot", "email": "bharefootk@uiuc.edu", "gender": "Female", "ip_address": "130.181.77.225" },
        { "id": 6, "first_name": "Mariette", "last_name": "Skeleton", "email": "mskeleton6@imageshack.us", "gender": "Female", "ip_address": "23.188.76.0" }
        ]; 
ReactDOM.render(<div className="flex-container"><List listProps={data}  /><DropPanel listProps={data} /></div>,
  
  document.getElementById('root')
);

