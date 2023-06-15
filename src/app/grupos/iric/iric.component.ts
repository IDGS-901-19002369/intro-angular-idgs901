import { Component } from '@angular/core';

@Component({
  selector: 'app-iric',
  templateUrl: './iric.component.html',
  styleUrls: ['./iric.component.css']
})
export class IricComponent {

  alumnosIric:any[]=[
    {
    matricula:1234,
    nombre:'Bernardo',
    edad:22,
    correo: 'berni@gmail.com',
    foto:'https://th.bing.com/th/id/OIP.ipe4TTMqKM1f16cRzp2bugHaHa?pid=ImgDet&rs=1'
    },
    {
    matricula:1278,
    nombre:'Itzel',
    edad:22,
    correo: 'itzel@gmail.com',
    foto:'https://th.bing.com/th/id/R.909b0de9a4f5e9db45a827de0b408f9e?rik=vsUfbdfqWa9Zbg&riu=http%3a%2f%2fagencia-fotografia.com%2fwp-content%2fuploads%2f2014%2f06%2ffoto3.jpg&ehk=zDPYSCCnqy4GFXCkGvqXzH2cnaQ2CCXOU6GW8v1vL1o%3d&risl=&pid=ImgRaw&r=0'
    },
    {
    matricula:1256,
    nombre:'Marco',
    edad:22,
    correo: 'Marco@gmail.com',
    foto:'https://th.bing.com/th/id/R.5ce936c4a65660653ac3b674fc9f9a36?rik=L%2bIZ%2bOVxOexXXA&riu=http%3a%2f%2ftusimagenesde.com%2fwp-content%2fuploads%2f2014%2f09%2fimagenes-de-personas-1.jpg&ehk=hw2S4IJ5ETZkDn3Apryd8D%2bIZD%2bTl1GSq2pHiDWuquw%3d&risl=&pid=ImgRaw&r=0'
    },
  ]

}
