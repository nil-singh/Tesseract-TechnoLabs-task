import React from 'react';
import Plot from 'react-plotly.js';

class ApiData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stockChartXValues: [],
      stockChartYValues: []
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;

    const API_URL = "https://financialmodelingprep.com/api/v3/historical-chart/1hour/AAPL?apikey=b1360803f80dd08bdd0211c5c004ad03";

    let stockChartXValuesFunction =[];
    let stockChartYValuesFunction =[];


    fetch(API_URL)
      .then(
        function (response) {
          return response.json();
        }
      )
      .then(
        function (data) {
          console.log(data);

          data.forEach(item => {
            stockChartXValuesFunction.push(item.date);
            stockChartYValuesFunction.push( item.open);

           // stockChartYValuesFunction.push( [item.open, item.high, item.low, item.close]);


          })




          // console.log(stockChartXValuesFunction);
          // console.log(stockChartYValuesFunction);

          pointerToThis.setState({
            stockChartXValues: stockChartXValuesFunction,
            stockChartYValues: stockChartYValuesFunction
          });
        }
      )
  }

  render() {
    return (
      <>
        <h2>Tesseract TechnoLabs</h2>
        <h4>candlesticks some time is not working in plotly(react-plotly.js) libaray</h4>
        <h5>For more please see the <a href=''>Code</a></h5>

        <Plot
          data={[
            {
              x: this.state.stockChartXValues,
              y: this.state.stockChartYValues,
             type: 'scatter',
              mode: 'lines+markers',
            marker: { color: 'red' },
            },

            {type: 'candlesticks', x: [this.state.stockChartXValues], y: [this.state.stockChartYValues]},
          ]}


          layout={{ width: 720, height: 440, title: 'A Fancy Plot' }}
        />


      </>
    )
  }
}

export default ApiData;