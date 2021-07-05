//child component
import React from "react";

function Step2({ children }: { children: any}) {
	return (
		<div style={{ display: 'flex', flex: 1, background: 'blue', width: '100%'}}>
            {children}
        </div>
	);
}

export default Step2;
