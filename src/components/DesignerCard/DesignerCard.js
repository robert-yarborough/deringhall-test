import React from 'react';
import './designer_card.scss';

//import images for this parent component to pass as reference to child components
import sire from '../../images/sire-design-cover-image.jpg';
import brooke from '../../images/brooke-wagner-design-cover-image.jpg';
import fredman from '../../images/fredman-design-group-cover-image.jpg';
import tim from '../../images/tim-clarke-interior-design-cover-image.jpeg';
import hyde from '../../images/hyde-evans-design-cover-image.jpg';


const DesignerCard = ({ match, designers}) => {
	const imageCover = [sire,  brooke,  fredman, tim,  hyde];
	// convert match.params.designerKey from string type, to number type
	const oldKeyType = `${match.params.designerKey}`;
	const colon = ':';
	const newKeyType = oldKeyType.replace(colon,  '');
	const newKeyNumber = parseInt(newKeyType);

	return (
		<div className="section group">
			<div className="col span_12_of_12">
				{designers.map((designer, index) =>
					index === newKeyNumber ?
						<img src={imageCover[index]} alt="cover"/>

						: ''
				)}
			</div>
		</div>
	)
};


export default DesignerCard;