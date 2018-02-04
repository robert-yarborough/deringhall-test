import React from 'react';
import {Link} from 'react-router-dom';
import DesignerLogo from '../DesignerLogo/DesignerLogo';
//import images for this parent component to pass as reference to child components
import sire from '../../images/logo/sire-design-logo.jpg';
import brooke from '../../images/logo/brooke-wagner-design-logo.jpg';
import fredman from '../../images/logo/fredman-design-group-logo.jpg';
import tim from '../../images/logo/tim-clarke-interior-design-logo.jpg';
import hyde from '../../images/logo/hyde-evans-design-logo.jpg';
//import style sheet
import './designers.scss';



const Designers = ({designers}) => {
	const images = [sire,  hyde,  fredman, tim,  brooke];
	//check values of images
	return (
		<div className="section group">
			{designers.map((designer, index) =>
				(<Link to={`/designer-card/:${designer.key}`} className="col span_6_of_12 designer-card">
					<DesignerLogo key={designer.key} designer={images[index]}/>
				</Link>)
			)}
		</div>
	)
};



export default Designers;