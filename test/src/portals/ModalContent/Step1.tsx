//child component
import React from "react";

function Step1({ children }: { children: any}) {
	return (
		<div style={{ display: 'flex', flex: 1, background: 'red', width: '100%'}}>
            {children}
        </div>
	);
}

export default Step1;
