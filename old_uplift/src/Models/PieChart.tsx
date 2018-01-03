import * as React from 'react';
import * as d3 from 'd3';
import { AssetAllocationEntity } from '../model';

interface Props {
   data: AssetAllocationEntity [];
   id:string;
}


export default class PieChart extends React.Component<Props,{}> {

  constructor(props: Props) {
    super(props);
  }


  render() {
    let data = this.props.data;
    return (
      <div
        id={`${this.props.id}--piechart`}
        className='d3-pie-chart'
      >

      {/* {this.props.title} && <h6>{this.props.title}</h6>*/}
       <svg width="240" height="230">
          <Pie x={140} y={115} radius={95} data={data} />
     </svg>
     <div className="legend">
       <svg width="230" height="230">
              {
                data.map(
                  (value,i)=>{
                      return(
                          <g key={i} className="legend" transform={translate(50, 49-i*5)} >
                            <rect width="15" height="15" y={i*30} fill={value.stroke} rx="15"/>
                            <text x={19} y={11+i*30}>{value.label}</text>
                          </g>
                        )
                  })
              }

         </svg>
       </div>
      </div>
    );
  }
}

class Slice extends React.Component <{key:number,value:any,fill:any,outerRadius:number},{}>{
    render() {
      let {value, fill,outerRadius} = this.props;
      let arc = d3.arc()
        .innerRadius(80)
        .outerRadius(outerRadius);
      let darc:string | null = arc(value)!;
      return (<g className="arc">
        <path d={darc} fill={fill} className="arc-default"/>
        </g>
      );
    }
  }

class Pie extends React.Component <{x:number,y:number,data:any[],radius:number},{}> {
     colorScale :string[]

    constructor(props:any) {
      super(props);
      this.colorScale = d3.schemeCategory10;
      this.renderSlice = this.renderSlice.bind(this);

    }
    render() {
      let {x, y, data} = this.props;
      let pie = d3.pie().padAngle(.02);

      return (
          <g transform={translate(x, y)} className="arc">
            {pie.value((d:any) => d.value)(data).map(this.renderSlice)}
          </g>
      );
    }

    renderSlice(value:any, i:any) {
      console.log(value)
      return (
        <Slice key={i}
               outerRadius={this.props.radius}
                              value={value}
               fill={value.data.stroke} />
      );
    }
  }

 function translate(x:number, y:number) {
    return `translate(${x}, ${y})`;
  }
