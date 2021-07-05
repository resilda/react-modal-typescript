//child component
import React from "react";

function Step3({ children }: { children: any}) {
	return (
		<div style={{ display: 'flex', flex: 1, background: 'green', width: '100%'}}>
            {children}
        </div>
	);
}

export default Step3;
