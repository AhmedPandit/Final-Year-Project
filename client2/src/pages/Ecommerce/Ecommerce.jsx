import React from 'react';
import "./ecommerce.scss";
import {BsCurrencyDollar} from "react-icons/bs";
import {GoPrimitiveDot} from "react-icons/go";

import { Stacked,Pie,Button,SparkedLine } from '../../components';
import { earningData,SparkLineAreaData,eComPieChartDat } from '../../data/dummy';
import { useStateContext } from '../../context/ContextProvider';
import Widget from '../../components/widget/Widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/Chart/Chart';

const Ecommerce = () => {
  return (
    <div className='home'>
        
        <div className='widgets'>
            <Widget type="Order"/>
            <Widget type="Earning"/>
            <Widget type="Balance"/>
            <Widget type="AccountHealth"/>
            

        </div>
        
        <div className="charts">

          <Featured/>
          <Chart/>

        </div>
    </div>
  )
}

export default Ecommerce