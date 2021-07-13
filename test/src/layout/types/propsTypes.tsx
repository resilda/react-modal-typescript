interface Component {
	id: any;
}

export interface MainPageProps {
	components: Component[];
	valueChecked: any;
	checked: (componentChecked: any) => void;
	valueSelected: any;
	selected: (componentSelected: any) => void;
}

export interface DetailsPageProps {
	color: String;
}
