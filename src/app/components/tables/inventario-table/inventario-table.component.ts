import {Component, OnInit, ViewChild} from '@angular/core';

// MatTable components
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

// importacion de los componentes para abrir los modales
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-inventario-table',
  templateUrl: './inventario-table.component.html',
  styleUrls: ['./inventario-table.component.scss']
})
export class InventarioTableComponent implements OnInit {

  constructor() {
  }

  // se define la variable que contendra los datos estaticos para la tabla
  datosTabla = [
    {
      Codigo: '182331762254',
      Nombre: 'Ford',
      Unidad: 'F350',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.',
      Existencia: '39',
      PrecioCompra: '785'
    },
    {
      Codigo: '516460755773',
      Nombre: 'Ford',
      Unidad: 'E-Series',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
      Existencia: '44',
      PrecioCompra: '303'
    },
    {
      Codigo: '392591444612',
      Nombre: 'Ford',
      Unidad: 'Escape',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.',
      Existencia: '74',
      PrecioCompra: '790'
    },
    {
      Codigo: '895491904739',
      Nombre: 'Lexus',
      Unidad: 'GX',
      Descripcion: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      Existencia: '50',
      PrecioCompra: '751'
    },
    {
      Codigo: '497277678796',
      Nombre: 'Pontiac',
      Unidad: 'Safari',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.',
      Existencia: '81',
      PrecioCompra: '582'
    },
    {
      Codigo: '182671793785',
      Nombre: 'Nissan',
      Unidad: 'Quest',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.',
      Existencia: '46',
      PrecioCompra: '958'
    },
    {
      Codigo: '491104427872',
      Nombre: 'Audi',
      Unidad: 'Q5',
      Descripcion: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      Existencia: '87',
      PrecioCompra: '421'
    },
    {
      Codigo: '741708774645',
      Nombre: 'Buick',
      Unidad: 'Coachbuilder',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.\n\nMaecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
      Existencia: '39',
      PrecioCompra: '569'
    },
    {
      Codigo: '161526834137',
      Nombre: 'Nissan',
      Unidad: 'Pathfinder',
      Descripcion: 'Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
      Existencia: '64',
      PrecioCompra: '289'
    },
    {
      Codigo: '323079816646',
      Nombre: 'Mitsubishi',
      Unidad: 'Tredia',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
      Existencia: '28',
      PrecioCompra: '148'
    },
    {
      Codigo: '778936254391',
      Nombre: 'Ford',
      Unidad: 'Mustang',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.',
      Existencia: '03',
      PrecioCompra: '540'
    },
    {
      Codigo: '163235755624',
      Nombre: 'Volkswagen',
      Unidad: 'Passat',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.',
      Existencia: '11',
      PrecioCompra: '557'
    },
    {
      Codigo: '924606479864',
      Nombre: 'Maserati',
      Unidad: '228',
      Descripcion: 'Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.',
      Existencia: '56',
      PrecioCompra: '339'
    },
    {
      Codigo: '353527739856',
      Nombre: 'Chevrolet',
      Unidad: 'Camaro',
      // tslint:disable-next-line:max-line-length
      Descripcion: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
      Existencia: '46',
      PrecioCompra: '569'
    },
    {
      Codigo: '274777794085',
      Nombre: 'Scion',
      Unidad: 'xB',
      Descripcion: 'Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
      Existencia: '37',
      PrecioCompra: '041'
    }
  ];

  // se define una variable con los elementos de cabcera de la tabla
  cabeceras: string[] = [
    'Codigo',
    'Nombre',
    'Unidad',
    'Descripcion',
    'Existencia',
    'PrecioCompra',
    'Acciones'
  ];

  // se crea una variable para el buscador
  valorBusqueda: string;

  // se definen variables de tipo document observable para el paginator y para el sorter
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  // tslint:disable-next-line:max-line-length
  // se inicializa un variable de tipo MatTableDataSource con los elementos del arreglo anteriormente inicializado la cual contendra todos los datos de los elementos
  dataSource = new MatTableDataSource(this.datosTabla);

  ngOnInit() {
    // se inicializa la observacion para el sort y para el paginator de la tabla
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  // funcion para generar las busquedas dentro de la tabla
  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // funcion para abrir los modales deacuerdo a las acciones que se encontraran en la tabla
  abrirModal(modal: string): void {
    /*switch (modal) {
      case 'agregar-producto':
        const agregarProductoDialogRef = this.dialog.open(AgregarProductoComponent, {
          width: '50rem'
        });
        agregarProductoDialogRef.afterClosed().subscribe(response => {
          // console.log('Dialogo de editar proyecto cerrado');
        });
        break;
      case 'eliminar-producto':
        const eliminarProductoDialogRef = this.dialog.open(EliminarProductoComponent, {
          width: '50rem'
        });
        eliminarProductoDialogRef.afterClosed().subscribe(response => {
          // console.log('Dialogo de editar proyecto cerrado');
        });
        break;
      case 'editar-producto':
        const editarProductoDialogRef = this.dialog.open(EditarProductoComponent, {
          width: '50rem'
        });
        editarProductoDialogRef.afterClosed().subscribe(response => {
          // console.log('Dialogo de editar proyecto cerrado');
        });
        break;
      case 'agregar-existencias':
        const agregarExistenciasDialogRef = this.dialog.open(AgregarExistenciasProductoComponent, {
          width: '50rem'
        });
        agregarExistenciasDialogRef.afterClosed().subscribe(response => {
          // console.log('Dialogo de editar proyecto cerrado');
        });
        break;
    }*/
  }

}
