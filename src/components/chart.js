import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

function max(data) {
	return _.round(_.max(data));
}

function min(data) {
	return _.round(_.min(data));
}

export default (props) => {
	return(
		<div>
			<Sparklines height={120} width={180} data={props.data}>
				<SparklinesLine color={props.color} />
				<SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>Avg {average(props.data)}{props.units} | Max {max(props.data)}{props.units} | Min {min(props.data)}{props.units}</div>
		</div>
	);
}
