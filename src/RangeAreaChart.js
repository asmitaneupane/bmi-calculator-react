import CanvasJSReact from './CanvasJS/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
const RangeAreaChart = ({bmi}) => {
	const options = {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: `Your BMI is - ${bmi}`
		},
		axisY: {
		},
		axisX: {
			valueFormatString: "MMM YYYY"
		},
		data: [
			{
				type: "rangeArea",
				xValueFormatString: "MMM YYYY",
				// yValueFormatString: "#0.## °F",
				toolTipContent: " <span style=\"color:#6D78AD\">{x}</span><br><b>Min:</b> {y[0]}<br><b>Max:</b> {y[1]}",
				dataPoints: [
					{ x: new Date("2017-01"), y: [37, 55] },
					{ x: new Date("2017-02"), y: [37, 57] },
					{ x: new Date("2017-03"), y: [43, 63] },
					{ x: new Date("2017-04"), y: [46, 68] },
					{ x: new Date("2017-05"), y: [55, 75] },
					{ x: new Date("2017-06"), y: [63, 84] },
					{ x: new Date("2017-07"), y: [66, 90] },
					{ x: new Date("2017-08"), y: [64, 86] },
					{ x: new Date("2017-09"), y: [61, 81] },
					{ x: new Date("2017-10"), y: [54, 73] },
					{ x: new Date("2017-11"), y: [46, 64] },
					{ x: new Date("2017-12"), y: [39, 59] }
				]
			}]
	}
	return (
		<div>
			<CanvasJSChart options={options}
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	);
}

export default RangeAreaChart