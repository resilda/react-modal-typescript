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

export interface PostsPropsMainPage {
	id: any;
	title: string;
	body: string;
	onChangeId: (id: any) => void;
	onChangeTitle: (title: string) => void;
	onChangeBody: (body: string) => void;
}
