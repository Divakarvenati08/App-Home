import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const Breadcrum = () => {
	return (
		<div>
			<Breadcrumb style={{
				display: 'block',
				width: 700, padding:'10px 10px 10px 14px', textDecoration: 'none', fontSize: '14px'
			}}>
				<Breadcrumb.Item >
					Devices
				</Breadcrumb.Item>
				<Breadcrumb.Item>
					All
				</Breadcrumb.Item>

			</Breadcrumb>
		</div>
	);
}

export default Breadcrum;
