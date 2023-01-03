import React from 'react';
import {GridComponent,ColumnsDirective,ColumnDirective,Sort,Filter,Page,ExcelExport,Toolbar,
PdfExport,Edit,Inject,Search,Selection} from '@syncfusion/ej2-react-grids';
import {inventoryData,inventoryGrid} from "../data/dummy";
import { Header } from '../components';

const ViewProducts = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>

          <Header title="View Your Inventory" category="Inventory Management"/>
          <GridComponent id="gridcomp" dataSource={inventoryData} allowPaging allowSorting toolbar={['Search','Delete']}
          editSettings={{allowDeleting:true}} width="auto">
            <ColumnsDirective>
              {inventoryGrid.map((item,index)=>(
                <ColumnDirective  key={index}  {...item}/>
              ))}
            </ColumnsDirective>
            <Inject services={[Sort,Filter,Page,ExcelExport,Edit,PdfExport,Search,Toolbar,Selection]}/>
          </GridComponent>
    </div>
  )
}

export default ViewProducts;