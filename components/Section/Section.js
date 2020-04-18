import React from 'react';

export default function Section({ children, title }) {
	return  (
		<section className="section">
            {title && <div className="container">
                <h1 className="title">{ title}</h1>
            </div>}
            { children && <div className="content">
          		{ children }
            </div>}
        </section>
    );	
}
